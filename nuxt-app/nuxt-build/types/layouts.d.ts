import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "layout-default"
declare module "D:/cozymart/nuxt-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}