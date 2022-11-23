/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-text': '#5754C5',
        'black-text': '#06060670',
        'pink-text': '#FF73B4'
      },
      fontFamily: {
        'rubik': ['Proxima Nova'],
      },
    },
  },
  plugins: [],
}
