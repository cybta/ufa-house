// src/components/Player.tsx
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';

const SPEED = 5; // Reduced slightly for better control through narrow doors

export const Player = () => {
  const { camera } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [-3, 0.5, 8],
    args: [0.25], // Shrinking radius slightly to 0.25 (0.5 total width) helps clear doors
    fixedRotation: true,
    // Eliminating friction and bounciness globally for this object
    material: { friction: 0, restitution: 0 },
    linearDamping: 0.9, // High damping makes the movement feel "snappy" and stops sticking
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(
    () => api.velocity.subscribe((v) => (velocity.current = v)),
    [api.velocity]
  );

  const pos = useRef([0, 0, 0]);
  useEffect(
    () => api.position.subscribe((p) => (pos.current = p)),
    [api.position]
  );

  const { moveForward, moveBackward, moveLeft, moveRight } =
    usePlayerControls();

  useFrame(() => {
    // 1. Position camera at player's "head"
    camera.position.set(pos.current[0], pos.current[1] + 0.6, pos.current[2]);

    // 2. Calculate movement direction
    const frontVector = new THREE.Vector3(
      0,
      0,
      Number(moveBackward) - Number(moveForward)
    );
    const sideVector = new THREE.Vector3(
      Number(moveLeft) - Number(moveRight),
      0,
      0
    );

    const direction = new THREE.Vector3();
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    // 3. APPLY VELOCITY
    // We only set X and Z. We keep the current Y velocity so gravity still works.
    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <mesh ref={ref as any}>
      <sphereGeometry args={[0.25]} />
      <meshStandardMaterial color='hotpink' visible={false} />
    </mesh>
  );
};

function usePlayerControls() {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
          setMovement((m) => ({ ...m, moveForward: true }));
          break;
        case 'KeyS':
          setMovement((m) => ({ ...m, moveBackward: true }));
          break;
        case 'KeyA':
          setMovement((m) => ({ ...m, moveLeft: true }));
          break;
        case 'KeyD':
          setMovement((m) => ({ ...m, moveRight: true }));
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
          setMovement((m) => ({ ...m, moveForward: false }));
          break;
        case 'KeyS':
          setMovement((m) => ({ ...m, moveBackward: false }));
          break;
        case 'KeyA':
          setMovement((m) => ({ ...m, moveLeft: false }));
          break;
        case 'KeyD':
          setMovement((m) => ({ ...m, moveRight: false }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
}
