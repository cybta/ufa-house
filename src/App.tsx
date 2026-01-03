// src/App.tsx
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { PointerLockControls, Sky } from '@react-three/drei';
import { House } from './components/House';
import { Player } from './components/Player';
import { Ground } from './components/Ground';
import { HouseLights } from './components/HouseLight';
// import { Debug } from '@react-three/cannon'; // Import this

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Environment */}
        <Sky sunPosition={[100, 20, 100]} />
        // src/App.tsx
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
          <House />
          <Ground />
          {/* </Debug> */}
        </Physics>
        {/* Open Space lights */}
        <HouseLights position={[2.5, 2.5, -1.5]} intensity={1} distance={25} />
        <HouseLights position={[2.5, 2.5, 2]} intensity={1} distance={25} />
        {/* Entrance */}
        <HouseLights position={[-0.4, 2.5, 2]} intensity={0.1} distance={25} />
        {/* Utility room */}
        <HouseLights position={[-2.4, 2.5, 1.5]} intensity={1} distance={25} />
        {/* Bedroom */}
        <HouseLights position={[-2.4, 2.5, -1]} intensity={2} distance={25} />
        {/* ______________________________________________________________ */}
        {/* SECOND FLOOR */}
        {/* Open Space lights */}
        <HouseLights position={[2.5, 5, -1.5]} intensity={1} distance={25} />
        <HouseLights position={[2.5, 5, 1.4]} intensity={1} distance={25} />
        {/* Bathroom */}
        <HouseLights position={[-0.4, 5, 2.4]} intensity={0.5} distance={25} />
        {/* Utility room */}
        <HouseLights position={[-2.4, 5, 1.5]} intensity={1} distance={25} />
        {/* Bedroom */}
        <HouseLights position={[-2.4, 5, -1]} intensity={2} distance={25} />
        <PointerLockControls />
      </Canvas>

      {/* Overlay Instructions */}
      <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        Click to start. WASD to move.
      </div>
    </div>
  );
}

export default App;
