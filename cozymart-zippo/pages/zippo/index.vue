<template>
  <div class="container mx-auto">

    <div class=" md:w-2/3">
      <PageHeaderMain/>
      <ProductWrapper :productInput="productInput" title="Zippo original 100%"/>
    </div>
    <div class="invisible md:visible md:w-1/3">Side div</div>
  </div>
</template>

<script>
import ProductWrapper from "~/components/ProductWrapper";
import PageHeaderMain from "~/components/PageHeaderMain";
import data1 from '@/data/data-zippo.json'
export default {
  name: 'zippo',
  components: {PageHeaderMain, ProductWrapper},

  data() {
    return {
      productInput: []
    }
  },

  created() {
    this.productInput = [ ...data1]
  }
}
</script>

