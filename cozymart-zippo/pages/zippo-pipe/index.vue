<template>
  <div class="container mx-auto">
    <PageHeaderMain/>

    <ProductWrapper :productInput="productInput" title="Zippo pipe original 100%"/>
  </div>
</template>

<script>
import ProductWrapper from "~/components/ProductWrapper";
import PageHeaderMain from "~/components/PageHeaderMain";
import data1 from '@/data/zippo-pipe.json'

export default {
  name: 'ZippoPipe',
  components: {PageHeaderMain, ProductWrapper},
  data: () => {
    return {productInput: []}
  },

  created() {
    this.productInput = [...data1]
  }

}
</script>

