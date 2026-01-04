import { HouseLights } from './HouseLight';

const SecondFloorLights = () => {
  return (
    <>
      {/* Open Space lights */}
      <HouseLights position={[-6, 5, 2]} intensity={8} distance={25} />
      <HouseLights position={[-9, 5, 2]} intensity={8} distance={25} />
      {/* Entrance */}
      <HouseLights position={[-4.9, 5, 4.9]} intensity={3} distance={50} />
      {/* Office */}
      <HouseLights position={[-5.5, 5.5, 7.5]} intensity={6} distance={25} />
      {/* Bedroom */}
      <HouseLights position={[-9.4, 5.5, 7.5]} intensity={5} distance={25} />
    </>
  );
};

export default SecondFloorLights;
