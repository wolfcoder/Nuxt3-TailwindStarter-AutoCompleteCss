<template>
  <div class="container mx-auto">
    <PageHeaderMain/>

    <ProductWrapper :productInput="productInput" title="Zippo Asesories dan sparepart"/>
  </div>
</template>

<script>
import ProductWrapper from "~/components/ProductWrapper";
import PageHeaderMain from "~/components/PageHeaderMain";
import data from "@/data/zippo-accessories.json";

export default {
  name: 'ZippoAccessories',
  components: {PageHeaderMain, ProductWrapper},
  data() {
    return {
      productInput: null
    }
  },

  created() {
    this.productInput = [...data]
  }
}
</script>

