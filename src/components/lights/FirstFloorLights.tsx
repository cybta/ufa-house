import { HouseLights } from './HouseLight';

const FirstFloorLights = () => {
  return (
    <>
      {/* Open Space lights */}
      <HouseLights position={[-6, 2.5, 2]} intensity={8} distance={25} />
      <HouseLights position={[-9, 2.5, 2]} intensity={8} distance={25} />
      {/* Entrance */}
      <HouseLights position={[-5.3, 2.5, 4.9]} intensity={8} distance={50} />
      {/* Utility room */}
      <HouseLights position={[-5.5, 2.5, 7.5]} intensity={8} distance={25} />
      {/* Bedroom */}
      <HouseLights position={[-9.4, 2.5, 7.5]} intensity={8} distance={25} />
    </>
  );
};

export default FirstFloorLights;
