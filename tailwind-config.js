'use strict';

window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#5ee0b5',
          success: '#10b981',
          danger: '#ef4444',
          warning: '#f59e0b',
          info: '#06b6d4',
          darkBg: '#122f2c',
          cardBg: 'rgba(17, 24, 39, 0.45)',
        },
      },
    },
  },
};
