import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46d84dae = () => interopDefault(import('..\\pages\\beda-zippo-asli-dan-palsu\\index.vue' /* webpackChunkName: "pages/beda-zippo-asli-dan-palsu/index" */))
const _9127941a = () => interopDefault(import('..\\pages\\cara-beli-zippo\\index.vue' /* webpackChunkName: "pages/cara-beli-zippo/index" */))
const _04e04724 = () => interopDefault(import('..\\pages\\finishing-zippo\\index.vue' /* webpackChunkName: "pages/finishing-zippo/index" */))
const _13210887 = () => interopDefault(import('..\\pages\\sejarah-zippo-dan-cozymart\\index.vue' /* webpackChunkName: "pages/sejarah-zippo-dan-cozymart/index" */))
const _89ec21c8 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _0c1d82f4 = () => interopDefault(import('..\\pages\\zippo\\index.vue' /* webpackChunkName: "pages/zippo/index" */))
const _7b6bb87a = () => interopDefault(import('..\\pages\\zippo-accessories\\index.vue' /* webpackChunkName: "pages/zippo-accessories/index" */))
const _41f47693 = () => interopDefault(import('..\\pages\\zippo-pipe\\index.vue' /* webpackChunkName: "pages/zippo-pipe/index" */))
const _2f93d16e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/beda-zippo-asli-dan-palsu",
    component: _46d84dae,
    name: "beda-zippo-asli-dan-palsu"
  }, {
    path: "/cara-beli-zippo",
    component: _9127941a,
    name: "cara-beli-zippo"
  }, {
    path: "/finishing-zippo",
    component: _04e04724,
    name: "finishing-zippo"
  }, {
    path: "/sejarah-zippo-dan-cozymart",
    component: _13210887,
    name: "sejarah-zippo-dan-cozymart"
  }, {
    path: "/test",
    component: _89ec21c8,
    name: "test"
  }, {
    path: "/zippo",
    component: _0c1d82f4,
    name: "zippo"
  }, {
    path: "/zippo-accessories",
    component: _7b6bb87a,
    name: "zippo-accessories"
  }, {
    path: "/zippo-pipe",
    component: _41f47693,
    name: "zippo-pipe"
  }, {
    path: "/",
    component: _2f93d16e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
