import { HouseLights } from './HouseLight';

const OuterLights = () => {
  return (
    <>
      {/* Open Space lights */}
      <HouseLights position={[-7.4, 3, -6]} intensity={20} distance={150} />
      <HouseLights position={[-7.4, 3, 12]} intensity={8} distance={25} />
    </>
  );
};

export default OuterLights;
