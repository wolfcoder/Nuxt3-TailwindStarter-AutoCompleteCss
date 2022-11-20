
<template>
  <Hero/>
  <ProductWrapper :productInput="productInput" title="Zippo 100% original"/>
</template>
<script setup >

import {useFetch, useLazyFetch} from "nuxt/app";

definePageMeta({
  layout: 'layout-default'
})

const {data: productInput} = await useLazyFetch(() => 'https://hepengku.com/joined-json-results/data-zippo.json')

</script>