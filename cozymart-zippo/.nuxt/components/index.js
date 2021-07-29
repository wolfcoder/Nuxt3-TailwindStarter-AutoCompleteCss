import { wrapFunctional } from './utils'

export { default as PageHeaderMain } from '../..\\components\\PageHeaderMain.vue'
export { default as ProductWrapper } from '../..\\components\\ProductWrapper.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as TheMenu } from '../..\\components\\TheMenu.vue'
export { default as ThePageHeader } from '../..\\components\\ThePageHeader.vue'

export const LazyPageHeaderMain = import('../..\\components\\PageHeaderMain.vue' /* webpackChunkName: "components/page-header-main" */).then(c => wrapFunctional(c.default || c))
export const LazyProductWrapper = import('../..\\components\\ProductWrapper.vue' /* webpackChunkName: "components/product-wrapper" */).then(c => wrapFunctional(c.default || c))
export const LazyTheHeader = import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c))
export const LazyTheMenu = import('../..\\components\\TheMenu.vue' /* webpackChunkName: "components/the-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyThePageHeader = import('../..\\components\\ThePageHeader.vue' /* webpackChunkName: "components/the-page-header" */).then(c => wrapFunctional(c.default || c))
