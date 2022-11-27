<template>
  <div id="produk" class="container mx-auto max-w-6xl md:py-16 pt-16 lg:pt-24">
    <header class="mt-b mb-6 md:mb-12">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-2 md:mb-3 ">{{ title }}</h2>
      <p class="text-center text-sm md:text-base">Klik di gambar produk untuk melihat detail dan melakukan order melalui
        WhatsApp.</p>
    </header>
    <div class="product-wrapper w-full grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-10 md:gap-y-16 md:gap-x-8">
      <div class="flex justify-center" v-for="(product, index) in getProductsDisplay" :key="index"
           @click="showModal(product)">
        <img class="product-image w-32 h-auto md:w-40" :src="product.img" :alt="product.title" :data-stock="product.stock"/>
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
          <h4 class="text-red-600 mb-3"><span class="text-red-500 ">Price  Rp. </span><span
              class="line-through">  {{ new Intl.NumberFormat('de-DE').format(productItemPrice) }}</span></h4>
          <h4 class="text-red-600 mb-3"><span class="text-yellow-600">DISCOUNT Rp. {{ getDiscountedPrice }} </span></h4>
          <button @click="handlerWhatsApp"
                  class="wa-button wa-single-product bg-brandWhatsApp hover:bg-green-500 rounded-full inline-flex  py-2 px-4 gap-2 text-white items-center">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M17.7587 13.7904C17.7119 13.768 15.9623 12.9064 15.6513 12.7945C15.5244 12.7489 15.3884 12.7044 15.2438 12.7044C15.0076 12.7044 14.8091 12.8222 14.6545 13.0535C14.4797 13.3132 13.9506 13.9317 13.7871 14.1165C13.7658 14.1409 13.7366 14.17 13.7192 14.17C13.7035 14.17 13.4328 14.0585 13.3508 14.0229C11.4739 13.2076 10.0492 11.247 9.85387 10.9164C9.82597 10.8688 9.8248 10.8472 9.82457 10.8472C9.83143 10.8221 9.89455 10.7588 9.92712 10.7262C10.0224 10.6319 10.1257 10.5076 10.2256 10.3874C10.2729 10.3304 10.3202 10.2734 10.3668 10.2196C10.5117 10.051 10.5762 9.92005 10.651 9.76842L10.6902 9.68964C10.8729 9.32675 10.7169 9.02052 10.6664 8.92164C10.6251 8.83888 9.88629 7.05587 9.80774 6.86855C9.61886 6.41652 9.36927 6.20605 9.02244 6.20605C8.99026 6.20605 9.02244 6.20605 8.88748 6.21174C8.72314 6.21868 7.82821 6.3365 7.43252 6.58592C7.01291 6.85047 6.30304 7.69374 6.30304 9.17676C6.30304 10.5115 7.15005 11.7717 7.51371 12.251C7.52275 12.2631 7.53935 12.2876 7.56343 12.3229C8.95613 14.3568 10.6923 15.8641 12.4523 16.5672C14.1468 17.244 14.9491 17.3223 15.4053 17.3223C15.4053 17.3223 15.4053 17.3223 15.4053 17.3223C15.597 17.3223 15.7505 17.3072 15.8858 17.2939L15.9717 17.2857C16.557 17.2338 17.8434 16.5673 18.136 15.7542C18.3665 15.1137 18.4272 14.414 18.2739 14.16C18.1689 13.9874 17.9878 13.9005 17.7587 13.7904Z"
                  fill="white"></path>
              <path
                  d="M12.2133 0C5.71332 0 0.425213 5.24836 0.425213 11.6995C0.425213 13.786 0.983602 15.8284 2.04139 17.6159L0.0167455 23.5883C-0.0209688 23.6996 0.00708318 23.8227 0.0894468 23.9066C0.148901 23.9673 0.229551 24 0.311914 24C0.343473 24 0.375265 23.9952 0.406278 23.9853L6.63381 22.0064C8.33796 22.917 10.264 23.3976 12.2133 23.3976C18.7127 23.3977 24.0002 18.1498 24.0002 11.6995C24.0002 5.24836 18.7127 0 12.2133 0ZM12.2133 20.9606C10.3791 20.9606 8.60251 20.4309 7.07539 19.4289C7.02404 19.3951 6.96443 19.3778 6.90443 19.3778C6.87272 19.3778 6.84093 19.3826 6.80999 19.3925L3.69038 20.3841L4.69745 17.413C4.73002 17.3169 4.71373 17.2108 4.65373 17.1288C3.49082 15.5398 2.8761 13.6625 2.8761 11.6995C2.8761 6.59221 7.06472 2.43709 12.2132 2.43709C17.361 2.43709 21.5492 6.59221 21.5492 11.6995C21.5493 16.8061 17.3612 20.9606 12.2133 20.9606Z"
                  fill="white"></path>
            </svg>
            </span>
            <span>Order Lewat WhatsApp Sekarang</span>
          </button>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'ProductWrapper',
  props: {
    title: {
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
    getPriceFormatted() {
      return new Intl.NumberFormat('de-DE').format(this.productItemPrice)
    },
    getDiscountedPrice() {
      let price = this.productItemPrice * 95 / 100
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
      this.scrollToggle()
    },

    closeModal() {
      this.isShowModal = false
      this.scrollToggle()
    },

    scrollToggle() {
      this.htmlBody = document.getElementsByTagName('body');
      if (this.htmlBody[0].style.overflow === '' || this.htmlBody[0].style.overflow === 'scroll') {
        this.htmlBody[0].style.overflow = 'hidden'
      } else {
        this.htmlBody[0].style.removeProperty('overflow')
      }
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
      window.open(`whatsapp://send?phone=${this.waNumber}&text=Halo Cozymart, Saya mau order berikut ini: ${this.productItemImg} %0D%0AProduct : ${this.productItemTitle}%0D%0AHarga : ${this.getPriceFormatted}%0D%0AHarga Discount : ${this.getDiscountedPrice}`)
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

.modal {
  @apply bg-gray-200 py-2 px-4 fixed top-0 left-0 w-full h-full z-50 text-xs
}

</style>
