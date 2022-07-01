<template>
  <div>
    <div class="slider-box">
      <vue-slider
        v-model="value"
        :process="false"
        :tooltip="'always'"
      ></vue-slider>
    </div>

    <div class="slider-box">
      <vue-slider
        v-model="value1"
        :adsorb="true"
        :interval="100"
        :min="100"
        :max="1000"
        :min-range="200"
        :max-range="500"
        :marks="true"
        :tooltip="'active'"
      ></vue-slider>
    </div>

    <div class="slider-box">
      <vue-slider
        v-model="value2"
        :data="data"
        :marks="true"
        :tooltip="'none'"
      ></vue-slider>
    </div>

    <div class="slider-box">
      <input type="number" v-model="inputValue" />
      <vue-slider
        v-model="inputValue"
        :process="true"
        :tooltip="'none'"
      ></vue-slider>
    </div>
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
      value: 100,
      value1: [100, 200],
      value2: 'c',
      inputValue: 0,
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    }
  },
}
</script>

<style>
.slider-box {
  margin-top: 30px;
}
</style>
