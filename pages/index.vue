<template>
  <client-only>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </client-only>
  {{ foo }}
</template>
<script>

definePageMeta({
  layout: 'layout-default'
})

export default {
  data() {
    return {
      foo: "hello foo bar froom",
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100 ]
      }]
    }
  }
}
</script>