/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      boxShadow: {
        'cardShadow': '0px 42px 34px rgba(63, 135, 245, 0.25)',
      },
      backgroundImage: {
        'cardWatermark': "url('/src/images/icons/watermark.svg')",
      },
      colors:{
        bgMain : '#E5E5E5',
        bgBlue : '#3F87F5',
        textGray : '#6C6C6C',
        textClip: "#505050",
        BgChack : "#5243c22c",
        CardBtnBg: "#f496d259",
        CardBg: "#3F87F5",
        hotRed: "#FF4E4E",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
