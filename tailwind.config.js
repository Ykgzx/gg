/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}', './public/index.html'], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        'sweet-pink': {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc8c8',
          '300': '#ff9797',
          '400': '#fd6c6c',
          '500': '#f53e3e',
          '600': '#e22020',
          '700': '#be1717',
          '800': '#9d1717',
          '900': '#821a1a',
          '950': '#470808',
        },
        'pippin': {
          '50': '#fdf3f3',
          '100': '#f9dcdc',
          '200': '#f8d0d0',
          '300': '#f1b0b0',
          '400': '#e88181',
          '500': '#da5959',
          '600': '#c63c3c',
          '700': '#a62f2f',
          '800': '#8a2a2a',
          '900': '#732929',
          '950': '#3e1111',
        },
      },
    },
  },
  plugins: [],
};
