module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      // fontFamily:{
      //   proximanova: ["proximanova", "cursive"],
      // },
      colors: {
        brandPrimary: '#dd1229',
       brandSecondary: '#CCB683',
       brandTertiary: '#65C4D8',
       brandWhatsApp: 'rgb(37 211 102)'
      }
    },
  },
  plugins: [],
}
