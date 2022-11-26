import  VueGtag  from "vue-gtag"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: 'G-33RE8Y67R4',
        },
    }, nuxtApp.$router)
})