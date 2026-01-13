import type { ThreeModel } from '../../../types';

export const fixedModels: ThreeModel[] = [
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
];
