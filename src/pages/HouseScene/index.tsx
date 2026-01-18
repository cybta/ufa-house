// src/HouseScene.tsx
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { PointerLockControls, Sky, Environment } from '@react-three/drei';

import { PhysicsObject } from './components/3DObject';
import { Player } from './components/Player';
import { InteractableObject } from './components/InteractableModel';
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
            canvasEl={canvasEl}
          />
        </div>
      )}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 5, 10] }}
        gl={{
          antialias: true,
          // CHANGE 1: Increased from 0.6 to 1.2 (Global Brightness)
          toneMappingExposure: 1,
          powerPreference: 'high-performance',
        }}
        onCreated={({ gl }) => setCanvasEl(gl.domElement)}
      >
        <Sky sunPosition={[100, 20, 100]} />

        {/* CHANGE 2: Increased from 0.4 to 0.8 (Brighter shadows) */}
        <ambientLight intensity={0.8} />

        {/* CHANGE 3: Added environment intensity (Brighter reflections) */}
        <Environment preset='apartment' environmentIntensity={1.1} />

        {/* CHANGE 4: Increased from 1.0 to 2.5 (Brighter Sun) */}
        <directionalLight
          position={[10, 15, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />

        <Physics
          gravity={[0, -9.7, 0]}
          tolerance={0.001}
          iterations={20}
          defaultContactMaterial={{
            friction: 0,
            restitution: 0,
            contactEquationStiffness: 1e6,
            contactEquationRelaxation: 2,
          }}
        >
          <Player />

          {fixedModels.map((model, index) => (
            <PhysicsObject
              key={`fixed-${index}`}
              url={model.model}
              position={model.position}
              rotation={model.rotation || [0, 0, 0]}
            />
          ))}

          {interactiveModels.map((model, index) => (
            <InteractableObject
              key={`inter-${index}`}
              url={model.model}
              position={model.position}
              rotation={model.rotation}
              onInteract={() => {
                setShowOverlay(true);
              }}
            />
          ))}

          {!isFurnitureHidden &&
            furnitureModels.map((model, index) => (
              <PhysicsObject
                key={`furn-${index}`}
                url={model.model}
                position={model.position}
                rotation={model.rotation || [0, 0, 0]}
              />
            ))}
        </Physics>

        <PointerLockControls />
      </Canvas>
    </div>
  );
}

export default HouseScene;
