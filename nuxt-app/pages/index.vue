<template>
  <Hero/>
  <ProductWrapper :productInput="productInput" title="Zippo 100% original dari Pabrikan"/>
</template>
<script>

definePageMeta({
  layout: 'layout-default'
})

export default {
  data() {
    return {
      productInput: []
    }
  },

  mounted(){
    this.fetchData()
  },

  methods: {
    async fetchData() {
      fetch('https://hepengku.com/joined-json-results/data-zippo.json').then((r) => r.json())
          .then((data) => this.productInput = data);
    }
  }
}
</script>