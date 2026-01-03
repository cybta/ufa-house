/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePlane } from '@react-three/cannon';

export const Ground = () => {
  // This creates a static physics plane
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // Lay it flat
    position: [0, 0, 0],
    type: 'Static',
  }));

  return (
    <mesh ref={ref as any} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color='#22aa22' />
    </mesh>
  );
};
