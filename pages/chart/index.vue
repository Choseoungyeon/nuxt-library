<template>
  <div>
    <barchart />
    <linechart />
    <piechart />
    <doughnut />
    <combo />
  </div>
</template>

<script>
import barchart from './components/barchart.vue'
import linechart from './components/linechart.vue'
import piechart from './components/piechart.vue'
import doughnut from './components/doughnut.vue'
import combo from './components/combo.vue'
export default {
  components: {
    barchart,
    linechart,
    piechart,
    doughnut,
    combo,
  },
}
</script>

<style></style>
