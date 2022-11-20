export { default as PageHeaderMain } from '../..\\components\\PageHeaderMain.vue'
export { default as ProductWrapper } from '../..\\components\\ProductWrapper.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as TheMenu } from '../..\\components\\TheMenu.vue'
export { default as ThePageHeader } from '../..\\components\\ThePageHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
