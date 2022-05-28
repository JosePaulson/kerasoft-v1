const { transparent } = require('daisyui/src/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': transparent
      }
    },
  },
  plugins: [require('daisyui')],
}