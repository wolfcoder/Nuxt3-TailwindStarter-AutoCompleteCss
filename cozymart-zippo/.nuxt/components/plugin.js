import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  PageHeaderMain: () => import('../..\\components\\PageHeaderMain.vue' /* webpackChunkName: "components/page-header-main" */).then(c => wrapFunctional(c.default || c)),
  ProductWrapper: () => import('../..\\components\\ProductWrapper.vue' /* webpackChunkName: "components/product-wrapper" */).then(c => wrapFunctional(c.default || c)),
  TheHeader: () => import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c)),
  TheMenu: () => import('../..\\components\\TheMenu.vue' /* webpackChunkName: "components/the-menu" */).then(c => wrapFunctional(c.default || c)),
  ThePageHeader: () => import('../..\\components\\ThePageHeader.vue' /* webpackChunkName: "components/the-page-header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
