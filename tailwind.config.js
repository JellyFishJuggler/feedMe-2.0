/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/hero-section.png')",
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        kodchasan: ['Kodchasan', 'sans-serif'],
      },
      fontSize: {
        standard: '40px',
        deadpool: '48px',
        feedme: '200px',
        spiderman: '80px',

      },
      colors: {
        button: '#E27E48',
        secondary: '#FFFFFF',
        accent: '#2E4052',
        primary: '#E68C55'
      },
      spacing: {
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      }
    },
  },
  plugins: [],
}