/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors:{
        bgMain : '#E5E5E5'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
