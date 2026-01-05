// src/App.tsx
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { PointerLockControls, Sky } from '@react-three/drei';
import { PhysicsObject } from './components/3DObject';
import { Player } from './components/Player';
import { Ground } from './components/Ground';
// import { HouseLights } from './components/HouseLight';
import FirstFloorLights from './components/lights/FirstFloorLights';
import SecondFloorLights from './components/lights/SecondFloorLights';
import OuterLights from './components/lights/OuterLights';
// import { Debug } from '@react-three/cannon'; // Import this

function App() {
  const [isFurnitureHidden, setFurnitureHidden] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'h' || event.key === 'H') {
        setFurnitureHidden((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 45 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={1} />

        <Physics
          gravity={[0, -9.8, 0]}
          tolerance={0.001} // High precision
          iterations={20} // More calculations per frame
          defaultContactMaterial={{
            friction: 0,
            restitution: 0,
            contactEquationStiffness: 1e6, // Makes walls feel "harder"
            contactEquationRelaxation: 2,
          }}
        >
          {/* <Debug> */}
          <Player />

          <PhysicsObject
            url='/3dmodels/house.glb'
            position={[-7.5, 0, 4.5]}
            rotation={[0, Math.PI / 2, 0]}
          />

          {!isFurnitureHidden ? (
            <>
              <PhysicsObject
                url='/3dmodels/entrance.glb'
                position={[-4.99, 0.6, 5]}
                rotation={[0, Math.PI / 2, 0]}
              />

              <PhysicsObject
                url='/3dmodels/kitchen.glb'
                position={[-5.5, 0.6, 1.9]}
                rotation={[0, -Math.PI / 2, 0]}
              />

              <PhysicsObject
                url='/3dmodels/desk.glb'
                position={[-4.99, 3.6, 7]}
                rotation={[0, 0, 0]}
              />
            </>
          ) : (
            <></>
          )}

          <PhysicsObject
            url='/3dmodels/bathroom-f2.glb'
            position={[-5, 3.6, 5.3]}
            rotation={[0, Math.PI / 2, 0]}
          />

          <Ground />
          {/* </Debug> */}
        </Physics>
        <FirstFloorLights />
        <SecondFloorLights />
        <PointerLockControls />
        <OuterLights />
      </Canvas>

      {/* Overlay Instructions */}
      <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        Click to start. WASD to move.
      </div>
    </div>
  );
}

export default App;
