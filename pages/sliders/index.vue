<template>
  <div>
    <vue-slider class="slider" v-model="value" width="50%"></vue-slider>
    <p>{{ value }}</p>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: null,
    }
  },
}
</script>

<style></style>
