import type { ThreeModel } from '../../../types';

export const fixedModels: ThreeModel[] = [
  // main objects
  {
    name: 'house',
    model: '/3dmodels/house.glb',
    position: [-7.5, 0, 4.5],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: 'land',
    model: '/3dmodels/land.glb',
    position: [-11, 0, 1],
    rotation: [0, 0, 0],
  },

  // Radiators
  {
    name: 'entrance radiator',
    model: '/3dmodels/radiator.glb',
    position: [-4.7, 1, 5.8],
    rotation: [0, 0, 0],
  },
  {
    name: 'Salon radiator',
    model: '/3dmodels/radiator.glb',
    position: [-9.5, 0.91, 3.72],
    rotation: [0, 0, 0],
  },
  {
    name: 'Kitchen radiator',
    model: '/3dmodels/radiator.glb',
    position: [-7.6, 0.91, 0.25],
    rotation: [0, 0, 0],
  },
  {
    name: 'UtilityRoom radiator',
    model: '/3dmodels/radiator.glb',
    position: [-6.9, 0.91, 8.35],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: 'Guestroom radiator',
    model: '/3dmodels/radiator.glb',
    position: [-7.7, 0.91, 8.85],
    rotation: [0, 0, 0],
  },
  {
    name: 'Big bedroom radiator',
    model: '/3dmodels/radiator.glb',
    position: [-7.6, 3.95, 0.25],
    rotation: [0, 0, 0],
  },
  {
    name: 'Small bedroom F2 A radiator',
    model: '/3dmodels/radiator.glb',
    position: [-7.65, 3.95, 8.85],
    rotation: [0, 0, 0],
  },
  {
    name: 'Small bedroom F2 B radiator',
    model: '/3dmodels/radiator.glb',
    position: [-4.75, 3.95, 0.25],
    rotation: [0, 0, 0],
  },
  {
    name: 'Office radiator',
    model: '/3dmodels/radiator.glb',
    position: [-4.75, 3.95, 8.85],
    rotation: [0, 0, 0],
  },
];
