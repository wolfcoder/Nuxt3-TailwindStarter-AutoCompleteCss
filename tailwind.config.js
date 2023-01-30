module.exports = {
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md',
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
