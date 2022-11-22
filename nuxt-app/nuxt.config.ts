// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // server: {
    //     host: 'localhost' // default: localhost
    // },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Cozymart',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Jual zippo original 100% dan custom grafir zippo' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }

})
