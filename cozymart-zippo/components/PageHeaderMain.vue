<template>
  <div class="relative bg-gray-200" style="min-height: 300px">
    <div class="absolute z-10 text-white text-center w-full bottom-5">
      <h2 class="text-2xl font-bold">Jual Zippo Original<br/>
        dan Jasa grafir Zippo
      </h2>
      <h3 class="text-sm mb-5">
        Zippo original 100%, grafir foto, grafir logo, grafir nama
      </h3>
      <button @click="handlerWhatsApp" class="green-whatsapp product-button">Chat WhatsApp</button>
    </div>
    <div class="hero bg-cover"></div>
  </div>
</template>
<script>
export default {
  name: 'PageHeaderMain',
  data() {
    return {
      waNumber: '+6285655991221',
    }
  },

  methods: {
    handlerWhatsApp() {
      window.open(`whatsapp://send?phone=${this.waNumber}&text=Halo Cozymart,`)
    }
  },
}
</script>
<style>
.hero {
  background-image: url("../assets/zippo-background.jpg");
  /*filter: grayscale(100) contrast(50%);*/
  transition: all ease 1s;
  min-height: 300px;
  @apply bg-center bg-no-repeat
}

/*.hero:hover {*/
/*  filter: grayscale(0) contrast(100%);*/
/*}*/
</style>
