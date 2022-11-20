<template>
  <div class="container mx-auto">
    <div class="relative bg-gray-200">
        <h2 class="absolute bottom-3 text-center w-full text-white text-3xl font-bold">{{ title }}</h2>
      <div class="page-header bg-cover"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePageHeader",
  props: {
    title: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped>
.page-header {
  background-image: url("../assets/zippo-background.jpg") ;
  min-height: 200px;
  @apply bg-center bg-no-repeat
}
</style>
