<template>
  <div
    :class=" scrollTrigger ? 'text-gray-600 bg-white border-b' : 'text-white' "
    id="the-header">
    <div class="container mx-auto flex py-2 px-4 md:px-0 ">
      <!--    <img class="" alt="Flafa Bali" src="../assets/logo.png" @click="$router.push('/')">-->
      <h1 class="font-bold text-lg " @click="$router.push('/')">Cozymart</h1>
      <span class="ml-auto mt-1" @click="toggleMenu">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
           height="20" viewBox="0 0 20 20">
        <path
          d="M17.5 6h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
          :fill="iconColor"></path>
        <path
          d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
          :fill="iconColor"></path>
        <path
          d="M17.5 16h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
          :fill="iconColor"></path>
      </svg>
    </span>
    </div>

    <the-menu v-if="isMenu" @closeMenu="toggleMenu"/>
  </div>

</template>
<script lang="js">

import TheMenu from "~/components/TheMenu";

export default {
  name: 'TheHeader',
  components: {TheMenu},
  data() {
    return {
      iconColor: '#FFFFFF',
      scrollPosition: null,
      isMenu: false
    }
  },
  computed: {
    scrollTrigger() {
      return this.scrollPosition > 60
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      this.scrollTrigger ? this.iconColor = 'rgba(75,85,99,0.7)' : this.iconColor = '#FFF'
    },

    toggleMenu() {
      this.isMenu = !this.isMenu;
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

<style>
#the-header {
  @apply z-40 w-full md:bg-white md:text-gray-700 fixed
}
</style>
