<template>
  <div class="text-xs text-gray-700 leading-5">
    <the-header/>
    <Nuxt />
  </div>
</template>

<style>

</style>
<script>
import TheHeader from "~/components/TheHeader";

export default {
  components: {TheHeader}
}
</script>

<style>
.green-whatsapp{
  background: #28a745;
}

.sub-title {
  @apply text-lg font-semibold mb-3 mt-4 border-l-4 pl-3
}

p{
  @apply mb-2
}

</style>
