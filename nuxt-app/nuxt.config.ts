// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // server: {
    //     host: 'localhost' // default: localhost
    // },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }

})
