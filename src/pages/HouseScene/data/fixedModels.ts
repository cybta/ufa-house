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
  {
    name: 'container',
    model: '/3dmodels/container.glb',
    position: [-21, 0.95, 13],
    rotation: [0, Math.PI / 1, 0],
  },

  {
    name: 'Kitchen Directional Lights',
    model: '/3dmodels/directional-lights.glb',
    position: [-5, 3.38, 1.75],
    rotation: [0, Math.PI / 2, 0],
  },

  {
    name: 'LigvingRoom Directional Lights',
    model: '/3dmodels/directional-lights.glb',
    position: [-10, 3.38, 1.75],
    rotation: [0, -Math.PI / 2, 0],
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
    position: [-5.5, 0.91, 6.08],
    rotation: [0, 0, 0],
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

  // Sockets
  {
    name: 'Salon TV-socket',
    model: '/3dmodels/sockets/socket-socket-cable-ethernet.glb',
    position: [-10.8, 1.6, 2],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Salon Comode-socket',
    model: '/3dmodels/sockets/socket-socket-ethernet.glb',
    position: [-10.8, 0.91, 1.96],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Kichen-sockets',
    model: '/3dmodels/sockets/dual-socket-socket.glb',
    position: [-4.2, 1.6, 2.2],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Fridge-socket',
    model: '/3dmodels/sockets/socket-socket.glb',
    position: [-4.2, 0.91, 0.7],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Oven-socket',
    model: '/3dmodels/sockets/socket-socket.glb',
    position: [-5.7, 0.91, 3.75],
    rotation: [Math.PI / 2, 0, Math.PI / 1],
  },
  {
    name: 'Living socket 1',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-8, 0.91, 3.75],
    rotation: [Math.PI / 2, 0, -Math.PI / 1],
  },
  {
    name: 'Living socket 2',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-10.25, 1.4, 0.15],
    rotation: [-Math.PI / 2, 0, Math.PI / 1],
  },
  {
    name: 'Living socket 3',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-5, 1.4, 0.15],
    rotation: [-Math.PI / 2, 0, Math.PI / 1],
  },

  {
    name: 'Hall-Router-socket',
    model: '/3dmodels/sockets/socket-socket-ethernet.glb',
    position: [-6.3, 1.3, 4.2],
    rotation: [-Math.PI / 2, 0, Math.PI / 1],
  },

  {
    name: 'Guest Comode-socket',
    model: '/3dmodels/sockets/socket-socket-ethernet.glb',
    position: [-7.1, 1.6, 7.4],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },

  {
    name: 'Living socket 3',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-10.8, 1, 6.5],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },

  {
    name: 'Living socket 3',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-10.8, 1, 8.5],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
];
