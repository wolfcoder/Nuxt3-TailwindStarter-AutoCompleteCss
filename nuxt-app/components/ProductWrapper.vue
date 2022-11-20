<template>
  <div class="container mx-auto max-w-6xl md:py-16 pt-16 lg:pt-24">
    <h2 class="text-3xl font-semibold text-gray-800 mb-6 md:mb-12 text-center">{{ title }}</h2>
    <div class="product-wrapper grid grid-cols-2 md:grid-cols-4">
      <div class="product" v-for="(product, index) in getProductsDisplay" :key="index" @click="showModal(product)" >
        <img class="product-image w-32" :src="product.img" :alt="product.title" :data-stock="product.stock"/>
      </div>
      <div class="modal" v-if="isShowModal">
        <div @click="closeModal" class="flex">
          <svg class="ml-auto" version="1.1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
               height="20" viewBox="0 0 20 20">
            <path
              d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"
              fill="#6B7280"></path>
          </svg>
        </div>

        <div class="w-full text-center mt-2">
          <div class="flex justify-center mb-2">
            <img :src="productItemImg" class="w-40" :alt="productItemTitle"/>
          </div>
          <h3 class="text-xl my-2">{{ productItemTitle }}</h3>
          <h4 class="text-red-600 mb-3"><span class="text-red-500 ">Price  Rp. </span><span class="line-through">  {{ new Intl.NumberFormat('de-DE').format(productItemPrice) }}</span>  </h4>
          <h4 class="text-red-600 mb-3"><span class="text-yellow-600">DISCOUNT Rp. {{ getDiscountedPrice }} </span>  </h4>
          <button @click="handlerWhatsApp" class="product-button green-whatsapp"> Chat WhatsApp</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'ProductWrapper',
  props: {
    title:{
      type: String,
      default: 'Zippo Original Pabrikan'
    },
    productInput: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      isShowModal: false,

      productItemTitle: '',
      productItemPrice: '',
      productItemImg: '',
      waNumber: '+6285655991221',
      perPage: 8,

      scrollPosition: 0,

      scrollHeightTotal: null
    }
  },
  computed: {
    getDiscountedPrice() {
      let price = this.productItemPrice * 95/100
      return new Intl.NumberFormat('de-DE').format(price)
    },
    getProductsReady() {
      return this.productInput.filter(p => p.stock !== "Out of Stock")
    },

    getProductsDisplay() {
      return this.getProductsReady.slice(0, this.perPage)
    }
  },

  methods: {
    showModal(product) {
      this.isShowModal = true
      this.productItemTitle = product.title
      this.productItemPrice = product.price
      this.productItemImg = product.img
    },

    closeModal() {
      this.isShowModal = false
    },

    updateScroll() {
      this.scrollHeightTotal = document.body.scrollHeight
      this.scrollPosition = window.innerHeight + window.scrollY

      // console.log('total: ' + this.scrollHeightTotal, 'y: ' + this.scrollPosition);

      if ((this.scrollHeightTotal - this.scrollPosition) < 400) {
        const totalProductReady = this.getProductsReady.length
        if (this.perPage <= totalProductReady - 1) {
          this.perPage++
        }
      }
    },

    handlerWhatsApp() {
      window.open(`whatsapp://send?phone=${this.waNumber}&text=Halo Cozymart, Saya mau order berikut ini: ${this.productItemImg} %0D%0AProduct : ${this.productItemTitle}%0D%0AHarga : ${this.productItemPrice}`)
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },


  destroyed() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="css">
/* Sample `apply` at-rules with Tailwind CSS */
.product-wrapper {
  @apply  mx-0 grid grid-cols-2 gap-2;
}

.product {
  @apply p-4
  /*@apply w-32 flex justify-center items-center mx-auto py-3 border-t*/
}

.modal {
  @apply bg-gray-200 py-2 px-4 fixed top-0 left-0 w-full h-full z-50 text-xs
}

.product-wrapper {
  @apply w-full
}

.product-button {
  @apply py-2 px-5 text-white rounded-full
}
</style>
