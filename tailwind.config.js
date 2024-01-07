/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        bottom: '0 3px 10px rgba(0,0,0,1)',
        top: '0 -3px 10px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
};
