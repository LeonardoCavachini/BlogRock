/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: "'Rubik', sans-serif"
      },
      backgroundImage: {
        'body-gradient': 'linear-gradient(90deg, #F1A10A 0%, #342303 100%)'
      }
    },
    screens: {
      sm: '375px',
      md: '768px',
    }
  },
  plugins: [],
}
