const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // MOVE EVERYTHING INTO EXTEND
    extend: {
      minWidth: {
        '300px': '300px',
      },
      backgroundImage: {
        'main-blue': "url('/bg.png')", // Removed /public/ as Vite serves public root directly
      },
      padding: {
        '20px': '20px',
      },
      spacing: {
        '10px': '10px',
        '40px': '40px',
        '15px': '15px',
      },
      width: {
        '30%': '30%',
      },
      // YOUR CUSTOM COLORS BELONG HERE
      colors: {
        'primary-90': '#21002E',
        'primary-70': '#3B0052',
        'primary-60': '#42005A',
        primary: '#5C027E',
        'primary-40': '#81389D',
        'primary-30': '#A463BC',
        'primary-20': '#C195D1',
        'primary-10': '#F7F2F8',
        // ... (Keep all your other color definitions here)
        'neutral-10': '#FFFFFF',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Source Sans 3', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 0 12px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-w': {
          textShadow: '0 0 4px rgba(255, 255, 255, 1)',
        },
        '.text-shadow-md-w': {
          textShadow: '0 0 8px rgba(255, 255, 255, 1)',
        },
        '.text-shadow-lg-w': {
          textShadow: '0 0 12px rgba(255, 255, 255, 1)',
        },
        '.ar': {
          textAlign: 'right',
          direction: 'rtl',
          fontFamily: 'Rubik, sans-serif',
          unicodeBidi: 'isolate-override',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
