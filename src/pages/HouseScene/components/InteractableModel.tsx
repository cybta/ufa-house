import { useGLTF, Html } from '@react-three/drei';
import { useTrimesh } from '@react-three/cannon';
import { useMemo, useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface InteractableProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  onInteract: () => void;
  interactionDistance?: number;
}

export const InteractableObject = ({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  onInteract,
  interactionDistance = 3.5,
}: InteractableProps) => {
  const { scene } = useGLTF(url);
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);

  // --- PHYSICS LOGIC WITHOUT 'ANY' ---
  const { vertices, indices } = useMemo(() => {
    const combinedVertices: number[] = [];
    const combinedIndices: number[] = [];
    let offset = 0;

    copiedScene.updateMatrixWorld();
    copiedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mesh = child;
        const geometry = mesh.geometry.index
          ? mesh.geometry
          : mesh.geometry.toNonIndexed();

        const positions = geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const v = new THREE.Vector3(
            positions[i],
            positions[i + 1],
            positions[i + 2]
          );
          v.applyMatrix4(mesh.matrixWorld);
          combinedVertices.push(v.x, v.y, v.z);
        }

        const meshIndices = geometry.index?.array || [];
        for (let i = 0; i < meshIndices.length; i++) {
          combinedIndices.push(Number(meshIndices[i]) + offset);
        }
        offset += positions.length / 3;
      }
    });

    return {
      vertices: new Float32Array(combinedVertices),
      indices: new Uint32Array(combinedIndices),
    };
  }, [copiedScene]);

  // Cannon-es (the engine behind cannon) expects number arrays.
  // We cast through unknown to satisfy the hook's rigid type definitions.
  const [physicsRef] = useTrimesh(
    () => ({
      args: [vertices as unknown as number[], indices as unknown as number[]],
      mass: 0,
      type: 'Static',
      position,
      rotation,
    }),
    useRef<THREE.Mesh>(null)
  ); // Explicitly provide the ref type

  // --- INTERACTION LOGIC ---
  useFrame(({ camera, raycaster }) => {
    if (!meshRef.current) return;

    const targetPos = new THREE.Vector3(...position);
    const dist = camera.position.distanceTo(targetPos);

    // Deep check for intersections in the group
    const intersects = raycaster.intersectObjects([meshRef.current], true);

    if (dist < interactionDistance && intersects.length > 0) {
      if (!isHovered) setIsHovered(true);
    } else {
      if (isHovered) setIsHovered(false);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'KeyE' && isHovered) {
        onInteract();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHovered, onInteract]);

  return (
    <group ref={meshRef}>
      <primitive
        object={copiedScene}
        position={position}
        rotation={rotation}
        scale={scale}
      />
      {/* Physics Debug Mesh - cast ref to any only at the point of attachment 
          if the library type is strictly incompatible with THREE.Object3D */}
      <mesh ref={physicsRef as React.RefObject<THREE.Mesh>} visible={false} />

      {isHovered && (
        <Html position={[0, 1.5, 0]} center>
          <div style={popupStyle}>Press [E] to Interact</div>
        </Html>
      )}
    </group>
  );
};

const popupStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.8)',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '4px',
  fontFamily: 'sans-serif',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
};
