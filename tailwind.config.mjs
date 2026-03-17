/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#1a1a1a',
          accent: '#C8A96E',
          light: '#F5F2ED',
          mid: '#E8E2D9',
          dark: '#111111',
        },
      },
    },
  },
  plugins: [],
};
