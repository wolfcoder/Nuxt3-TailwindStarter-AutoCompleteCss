
<template>
  <Hero/>
   <ProductWrapper :productInput="productInput" title="Zippo 100% original"/>

</template>
<script setup >

import {useFetch} from "nuxt/app";

definePageMeta({
  layout: 'layout-default'
})

const {data:productInput} = await useFetch(() => 'https://hepengku.com/joined-json-results/data-zippo.json',   {
  server: false
})
console.log(productInput);

</script>