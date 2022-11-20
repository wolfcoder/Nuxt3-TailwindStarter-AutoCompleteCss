import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7a1e7e0 = () => interopDefault(import('..\\pages\\beda-zippo-asli-dan-palsu\\index.vue' /* webpackChunkName: "pages/beda-zippo-asli-dan-palsu/index" */))
const _9250e4cc = () => interopDefault(import('..\\pages\\cara-beli-zippo\\index.vue' /* webpackChunkName: "pages/cara-beli-zippo/index" */))
const _044b9ecb = () => interopDefault(import('..\\pages\\finishing-zippo\\index.vue' /* webpackChunkName: "pages/finishing-zippo/index" */))
const _36ec3280 = () => interopDefault(import('..\\pages\\sejarah-zippo-dan-cozymart\\index.vue' /* webpackChunkName: "pages/sejarah-zippo-dan-cozymart/index" */))
const _2568d9d5 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _4920aa26 = () => interopDefault(import('..\\pages\\zippo\\index.vue' /* webpackChunkName: "pages/zippo/index" */))
const _d783a4ac = () => interopDefault(import('..\\pages\\zippo-accessories\\index.vue' /* webpackChunkName: "pages/zippo-accessories/index" */))
const _cb469ae8 = () => interopDefault(import('..\\pages\\zippo-pipe\\index.vue' /* webpackChunkName: "pages/zippo-pipe/index" */))
const _5b437ae7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a7a1e7e0,
    name: "beda-zippo-asli-dan-palsu"
  }, {
    path: "/cara-beli-zippo",
    component: _9250e4cc,
    name: "cara-beli-zippo"
  }, {
    path: "/finishing-zippo",
    component: _044b9ecb,
    name: "finishing-zippo"
  }, {
    path: "/sejarah-zippo-dan-cozymart",
    component: _36ec3280,
    name: "sejarah-zippo-dan-cozymart"
  }, {
    path: "/test",
    component: _2568d9d5,
    name: "test"
  }, {
    path: "/zippo",
    component: _4920aa26,
    name: "zippo"
  }, {
    path: "/zippo-accessories",
    component: _d783a4ac,
    name: "zippo-accessories"
  }, {
    path: "/zippo-pipe",
    component: _cb469ae8,
    name: "zippo-pipe"
  }, {
    path: "/",
    component: _5b437ae7,
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
