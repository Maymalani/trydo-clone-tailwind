/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,jsx}",
    "./src/pages/*.{html,js,jsx}",
    "./src/components/*.{html,js,jsx}"
  ],
  theme: {
    fontFamily:{
      'poppins':['Poppins','sans-serif']
    },
    screens: {
      'xs': "100%",
      'sm': "576px",
      'md': "768px",
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      }
    },
    extend: {},
  },
  plugins: [],
}

