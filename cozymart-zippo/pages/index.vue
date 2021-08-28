<template>
  <div class="container mx-auto">
    <div class=" md:w-2/3">
      <PageHeaderMain/>

      <div class="my-4 px-5">
        <p>Selamat Datang di cozymart – <strong>Toko zippo online</strong> di indonesia yang menjual zippo asli 100% original dan aksesorisnya, &nbsp;<a title="Jasa Grafir Zippo" href="http://cozymart.net/product/grafir-zippo/" target="_blank" rel="noopener noreferrer">Jasa grafir zippo</a>&nbsp;&nbsp;gambar, teks maupun foto. &nbsp;<a title="Printing Zippo" href="http://cozymart.net/product/printing-zippo/" target="_blank" rel="noopener noreferrer">Jasa printing zippo</a> berwarna. pengiriman ke seluruh indonesia. Sekilas info, Zippo adalah merk korek api tahan angin asal USA. Korek api zippo di sukai banyak orang karena fungsionalitasnya sebagai pemantik api yang tahan angin dan tahan lama pemakaiannya. Produk ini juga merupakan salah satu barang koleksi yang di gemari oleh para kolektor. &nbsp;Produk &nbsp;yang kami jual disini 100% original. &nbsp;Keaslian produk yang kami jual di sini sudah di buktikan oleh lebih dari 2000 pelanggan yang kami layani sejak tahun 2010. Silahkan berbelanja dan menambah koleksi zippo anda melalui &nbsp;web kami. &nbsp;Jangan sungkan memberikan komentar atau bertanya kepada kami. Kepuasan anda adalah penghargaan terbesar buat kami.</p>
      </div>
      <ProductWrapper :productInput="productInput" title="Zippo 100% original"/>


    </div>
    <div class="invisible md:visible md:w-1/3"></div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductWrapper from "~/components/ProductWrapper";
import PageHeaderMain from "~/components/PageHeaderMain";

export default {
  name: 'index',
  components: {PageHeaderMain, ProductWrapper},

  data() {
    return {
      productInput: []
    }
  },

  methods: {
    async fetchData() {
      const dataJson = await axios.get('/data-zippo.json')
      // const dataJson = await axios.get('http://167.172.70.208:8088/api')
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

