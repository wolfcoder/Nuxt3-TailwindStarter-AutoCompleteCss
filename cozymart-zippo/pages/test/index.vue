<template>
  <div class="container mx-auto">

    <div class=" md:w-2/3">
      <PageHeaderMain/>
      <ProductWrapper :productInput="productInput" title="Zippo original 100%"/>
    </div>

  </div>
</template>

<script>
import ProductWrapper from "~/components/ProductWrapper";
import PageHeaderMain from "~/components/PageHeaderMain";

import axios from "axios";
export default {
  name: 'zippo',
  components: {PageHeaderMain, ProductWrapper},

  data() {
    return {
      productInput: []
    }
  },

  methods: {
    async fetchData() {
      // const dataJson = await axios.get('/data-zippo.json')
      const dataJson = await axios.get('https://coboy.online/api')
      // const dataJson = await axios.get('https://cozymart.herokuapp.com/api')
      return this.productInput = dataJson.data
    }
  },

  created() {
    this.fetchData()

  }
  // this.productInput = [ ...page2, ...page4, ...page3, ...page1, ...page5, ...page6, ...page7, ...page8, ...page9, ...page10, ...page11, ...page12]

}
</script>

