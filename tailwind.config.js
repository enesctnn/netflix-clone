/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        bottom: '0 3px 10px rgba(0,0,0,1)',
      },
      colors: {
        'red-netflix-light': 'rgb(229 ,9 ,20)',
        'red-netflix-dark': 'rgb(178, 7, 16)',
      },
      fontFamily: {
        opensans: "'Open Sans',sans-serif",
      },
      spacing: {
        24: '100px',
      },
    },
  },
  plugins: [],
};
