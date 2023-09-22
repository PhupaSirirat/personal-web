/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      prinmary: '#03001C',
      secondary: '#301E67',
      tertiary: '#5B8FB9',
      quaternary: '#B6EADA',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        jura: 'Jura',
        inter: 'Inter',
      }
    },
  },
  plugins: [],
};
