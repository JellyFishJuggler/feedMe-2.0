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
        'about-us':"url('about us.png)",
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        kodchasan: ['Kodchasan', 'sans-serif'],
      },
      fontSize: {
        nobita:'28px',
        standard: '40px',
        deadpool: '48px',
        feedme: '200px',
        thor:'60px',
        goku:'65px',
        spiderman: '80px',
        batman: '24px',

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
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '100': '28rem',
        '120': '30rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '240': '60rem',
        '288': '72rem',
        '320': '80rem',
        '384': '96rem',
        '480': '120rem',
        '576': '144rem',
        '640': '160rem',
        '768': '192rem',
        '960': '240rem',
        '1152': '288rem',
        '1280': '320rem',
        '1536': '384rem',
        '1920': '480rem',
        '2560': '640rem',
        '3072': '768rem',
        '3840': '960rem',
        '4096': '1024rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',

      }
    },
  },
  plugins: [],
}