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
    model: '/3dmodels/radiators/400.glb',
    position: [-4.42, 1, 4.2],
    rotation: [0, 0, 0],
  },
  {
    name: 'Salon radiator',
    model: '/3dmodels/radiators/800.glb',
    position: [-10.3, 1, 0.25],
    rotation: [0, 0, 0],
  },
  {
    name: 'Kitchen radiator',
    model: '/3dmodels/radiators/800.glb',
    position: [-7.6, 1, 0.25],
    rotation: [0, 0, 0],
  },
  {
    name: 'UtilityRoom radiator',
    model: '/3dmodels/radiators/700.glb',
    position: [-6.88, 1, 8.4],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: 'Guestroom radiator',
    model: '/3dmodels/radiators/800.glb',
    position: [-7.6, 0.91, 8.75],
    rotation: [0, Math.PI, 0],
  },
  {
    name: 'Big bedroom radiator',
    model: '/3dmodels/radiators/800.glb',
    position: [-10.25, 3.95, 0.25],
    rotation: [0, 0, 0],
  },
  {
    name: 'Small bedroom F2 A radiator',
    model: '/3dmodels/radiators/800.glb',
    position: [-10.25, 3.95, 8.75],
    rotation: [0, Math.PI, 0],
  },
  {
    name: 'Small bedroom F2 B radiator',
    model: '/3dmodels/radiators/800.glb',
    position: [-6.75, 3.95, 0.7],
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: 'Office radiator',
    model: '/3dmodels/radiators/800.glb',
    position: [-4.75, 3.95, 8.75],
    rotation: [0, Math.PI, 0],
  },

  // Sockets
  {
    name: 'Entrance socket ',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-5.83, 0.91, 5.6],
    rotation: [Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Robot socket ',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-6.98, 0.91, 7],
    rotation: [Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Utility socket ',
    model: '/3dmodels/sockets/socket-socket.glb',
    position: [-6.98, 1.6, 6.4],
    rotation: [Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Washing Machine socket ',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-4.15, 0.91, 8.5],
    rotation: [Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Salon TV-socket',
    model: '/3dmodels/sockets/socket-socket-cable-ethernet.glb',
    position: [-9.25, 1.6, 3.75],
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    name: 'Salon Comode-socket',
    model: '/3dmodels/sockets/socket-socket-ethernet.glb',
    position: [-9.3, 0.91, 3.75],
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    name: 'Kichen-sockets',
    model: '/3dmodels/sockets/dual-socket-socket.glb',
    position: [-5.15, 1.6, 3.75],
    rotation: [-Math.PI / 2, 0, 0],
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
    model: '/3dmodels/sockets/socket-socket.glb',
    position: [-10.85, 0.91, 1.8],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
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
    position: [-6.3, 1.3, 4.1],
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

  // Second Floor Sockets
  {
    name: 'Desk Sockets',
    model: '/3dmodels/sockets/socket-socket-socket-ethernet.glb',
    position: [-5.2, 4.1, 6.65],
    rotation: [-Math.PI / 2, 0, Math.PI / 1],
  },
  {
    name: 'Desk wall Socket',
    model: '/3dmodels/sockets/socket-socket.glb',
    position: [-4.15, 3.8, 7.5],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Desk window Sockets',
    model: '/3dmodels/sockets/socket-socket.glb',
    position: [-6.85, 3.8, 8.5],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Hall',
    model: '/3dmodels/sockets/socket-socket-ethernet.glb',
    position: [-6.91, 4.1, 4.1],
    rotation: [-Math.PI / 2, 0, Math.PI / 1],
  },
  {
    name: 'Big Room Bed Sockets 1',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-10.85, 3.8, 0.5],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Big Room Bed Sockets 2',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-10.85, 3.8, 3.4],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Big Room window Sockets',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-9.2, 3.8, 3.81],
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    name: 'Big Room Closet Sockets 1',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-6.97, 3.8, 0.5],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Big Room TV Sockets',
    model: '/3dmodels/sockets/socket-socket-cable-ethernet.glb',
    position: [-6.97, 4.6, 2],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Room A Bed Sockets 1',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-10.85, 3.8, 6.5],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Room A Bed Sockets 2',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-10.85, 3.8, 8.5],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Room A Bed Sockets 1',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-7, 3.8, 6.5],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Room A Bed Sockets 2',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-7, 3.8, 8.5],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Room B Sockets 1',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-4.15, 3.8, 0.5],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    name: 'Room B Sockets 2',
    model: '/3dmodels/sockets/single-socket.glb',
    position: [-6.85, 3.8, 2],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    name: 'Room B Sockets 3',
    model: '/3dmodels/sockets/socket-socket-ethernet.glb',
    position: [-4.6, 3.8, 3.98],
    rotation: [-Math.PI / 2, 0, 0],
  },
];
