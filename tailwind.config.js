/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors:{
        bgMain : '#E5E5E5',
        bgBlue : '#3F87F5',
        textGray : '#6C6C6C',
        textClip: "#505050"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
