// src/components/HouseLights.tsx

interface LightProps {
  position: [number, number, number];
  intensity: number;
  distance: number;
}

// Notice the { } around the arguments
export const HouseLights = ({ position, intensity, distance }: LightProps) => {
  return (
    <group>
      <pointLight
        position={position}
        intensity={intensity}
        distance={distance}
        color='white'
        castShadow
        // Optimization: prevents light from reaching through the whole world
        shadow-mapSize={[512, 512]}
      />

      {/* Optional: Add a small visible sphere so you can see where the bulb is */}
      <mesh position={position}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial emissive='white' />
      </mesh>
    </group>
  );
};
