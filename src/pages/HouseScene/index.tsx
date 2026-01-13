// src/HouseScene.tsx
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { PointerLockControls, Sky, Environment } from '@react-three/drei';

import { PhysicsObject } from './components/3DObject';
import { Player } from './components/Player';
import { InteractableObject } from './components/InteractableModel';
import SecondFloorLights from './components/lights/SecondFloorLights';
import InterActionPopup from './components/popups';

import { fixedModels, furnitureModels, interactiveModels } from './data';

// import { Debug } from '@react-three/cannon'; // Import this

function HouseScene() {
  const [isFurnitureHidden, setFurnitureHidden] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement | null>(null);

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
      {/* 1. This is your HTML Div that shows on top of the screen */}
      {showOverlay && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          }}
        >
          <InterActionPopup
            room='desk'
            setShowOverlay={setShowOverlay}
            canvasEl={canvasEl} // This now matches the interface
          />
        </div>
      )}
      <Canvas
        shadows
        dpr={[1, 2]} // Limits pixel ratio on high-res screens to save GPU
        camera={{ fov: 45, position: [0, 5, 10] }}
        gl={{
          antialias: true,
          toneMappingExposure: 0.6,
          powerPreference: 'high-performance', // Hints the browser to use the GPU
        }}
        onCreated={({ gl }) => setCanvasEl(gl.domElement)}
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

          {fixedModels.map((model) => (
            <PhysicsObject
              url={model.model}
              position={model.position}
              rotation={model.rotation || [0, 0, 0]}
            />
          ))}

          {interactiveModels.map((model) => (
            <InteractableObject
              url={model.model}
              position={model.position}
              rotation={model.rotation}
              onInteract={() => {
                setShowOverlay(true);
              }}
            />
          ))}

          {!isFurnitureHidden ? (
            <>
              {furnitureModels.map((model) => (
                <PhysicsObject
                  url={model.model}
                  position={model.position}
                  rotation={model.rotation || [0, 0, 0]}
                />
              ))}
            </>
          ) : (
            <></>
          )}

          {/* </Debug> */}
        </Physics>
        {/* <FirstFloorLights /> */}
        <SecondFloorLights />
        <PointerLockControls />
      </Canvas>
    </div>
  );
}

export default HouseScene;
