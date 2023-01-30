// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // server: {
    //     host: 'localhost' // default: localhost
    // },
    // https://nuxt.com/docs/getting-started/seo-meta
    app: {
        head: {
            charset: 'utf-16',
            title: 'JonPantau',
            meta: [
                { name: 'description', content: 'Memantau sosial media berdasarkan keyword, hash dan mention' }
            ],
        }
    },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }

})
