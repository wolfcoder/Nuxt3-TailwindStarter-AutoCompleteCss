// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // server: {
    //     host: 'localhost' // default: localhost
    // },
    // https://nuxt.com/docs/getting-started/seo-meta
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Zippo original, Zippo Custom Grafir, dan Zippo Printing',
            meta: [
                { name: 'description', content: 'Cozymart.net menjual produk Zippo original, Zippo Custom Grafir, dan Zippo Printing' }
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
