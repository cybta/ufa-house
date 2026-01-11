/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from '@react-three/drei';
import { useTrimesh } from '@react-three/cannon';
import { useMemo } from 'react';
import * as THREE from 'three';

interface PhysicsObjectProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
}

export const PhysicsObject = ({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: PhysicsObjectProps) => {
  const { scene } = useGLTF(url);

  // We clone the scene so that multiple instances of the same
  // model don't interfere with each other's transformations
  const copiedScene = useMemo(() => scene.clone(), [scene]);

  const { vertices, indices } = useMemo(() => {
    const combinedVertices: number[] = [];
    const combinedIndices: number[] = [];
    let offset = 0;

    // Apply basic transformations to the scene before calculating physics
    // This ensures the physics mesh matches the group's visual transform
    copiedScene.updateMatrixWorld();

    copiedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
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

  const [physicsRef] = useTrimesh(() => ({
    args: [vertices as unknown as number[], indices as unknown as number[]],
    mass: 0,
    type: 'Static',
    position,
    rotation,
  }));

  return (
    <group>
      {/* Visual Model */}
      <primitive
        object={copiedScene}
        position={position}
        rotation={rotation}
        scale={scale}
      />

      {/* Invisible Physics Debug Mesh (Optional) */}
      <mesh ref={physicsRef as any} visible={false} />
    </group>
  );
};
