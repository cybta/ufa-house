import type { ThreeModel } from '../../../types';

export const furnitureModels: ThreeModel[] = [
  {
    name: 'entrance',
    model: '/3dmodels/entrance.glb',
    position: [-4.99, 0.6, 5],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: 'kitchen',
    model: '/3dmodels/kitchen.glb',
    position: [-5.4, 0.6, 1.95],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'utilityRoom',
    model: '/3dmodels/utility-room.glb',
    position: [-5.57, 0.6, 7.45],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: 'bathroom-f2',
    model: '/3dmodels/bathroom-f2.glb',
    position: [-4.945, 3.6, 5.32],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: 'Desk',
    model: '/3dmodels/desk.glb',
    position: [-4.95, 3.6, 7],
    rotation: [0, 0, 0],
  },
];
