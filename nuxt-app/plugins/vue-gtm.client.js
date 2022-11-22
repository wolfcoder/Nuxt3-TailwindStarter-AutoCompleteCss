import {createGtm} from "@gtm-support/vue-gtm";
import {useRouter} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(createGtm({
        id: 'GTM-P6PXVB4',
        enabled: true,
        debug: false,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: true
    }))
});