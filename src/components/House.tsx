/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/House.tsx
import { useGLTF } from '@react-three/drei';
import { useTrimesh } from '@react-three/cannon';
import { useMemo } from 'react';
import * as THREE from 'three';

export const House = () => {
  const { scene } = useGLTF('/3dmodels/house.glb');

  const { vertices, indices } = useMemo(() => {
    const combinedVertices: number[] = [];
    const combinedIndices: number[] = [];
    let offset = 0;

    scene.updateMatrixWorld(); // Force update to get real positions

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const geometry = mesh.geometry.index
          ? mesh.geometry
          : mesh.geometry.toNonIndexed();

        // Get positions and apply the world matrix of the mesh
        // so collision matches the visual position exactly
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
  }, [scene]);

  const [physicsRef] = useTrimesh(() => ({
    // Cast the arguments to any or the specific expected tuple to satisfy TS
    args: [vertices as unknown as number[], indices as unknown as number[]],
    mass: 0,
    type: 'Static',
  }));

  return (
    <group>
      {/* Visual Model */}
      <primitive object={scene} />

      {/* Physics Collider 
        We cast the physicsRef to 'any' to stop the "Unexpected ref object" error.
    */}
      {/* Collision Mesh (Invisible) */}
      <mesh ref={physicsRef as any} visible={false}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            // args: [array, itemSize]
            args={[vertices, 3]}
            count={vertices.length / 3}
          />
          {indices && (
            <uint32BufferAttribute
              attach='index'
              // args: [array, itemSize (usually 1 for indices)]
              args={[indices, 1]}
              count={indices.length}
            />
          )}
        </bufferGeometry>
      </mesh>
    </group>
  );
};
