// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /*
     ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
     */
    // modules: ['@nuxtjs/axios'],
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }

})
