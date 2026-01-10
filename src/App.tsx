// src/App.tsx
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { PointerLockControls, Sky, Environment } from '@react-three/drei';

import { PhysicsObject } from './components/3DObject';
import { Player } from './components/Player';
import SecondFloorLights from './components/lights/SecondFloorLights';
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
      <Canvas
        shadows
        dpr={[1, 2]} // Limits pixel ratio on high-res screens to save GPU
        camera={{ fov: 45, position: [0, 5, 10] }}
        gl={{
          antialias: true,
          toneMappingExposure: 0.6,
          powerPreference: 'high-performance', // Hints the browser to use the GPU
        }}
      >
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.4} />

        {/* Only use environment for lighting, not as a background */}
        <Environment preset='apartment' />

        <directionalLight
          position={[10, 15, 10]}
          intensity={1.0}
          castShadow
          shadow-mapSize={[1024, 1024]} // Reduced from 2048
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />

        <Physics
          gravity={[0, -9.7, 0]}
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
                position={[-5.4, 0.6, 1.95]}
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

          <PhysicsObject
            url='/3dmodels/land.glb'
            position={[-11, 0, 1]}
            rotation={[0, 0, 0]}
          />

          {/* </Debug> */}
        </Physics>
        {/* <FirstFloorLights /> */}
        <SecondFloorLights />
        <PointerLockControls />
      </Canvas>
    </div>
  );
}

export default App;
