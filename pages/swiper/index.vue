<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper_wrap">
      <swiper-slide v-for="(item, idx) in slideData" :key="idx">
        Slide{{ item }}
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <button @click="goModify" class="go-modify">modify</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'carrousel',
  data() {
    return {
      slideData: [1, 2, 3, 4, 5, 6, 7, 8],
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    goModify() {
      this.$router.push({
        name: 'swiper-modify',
      })
    },
  },
}
</script>

<style>
.swiper_wrap {
  width: 80%;
}
.swiper-slide {
  border: 1px solid rgb(188, 188, 188);
  text-align: center;
  line-height: 300px;
  height: 300px;
}

.swiper-button-prev,
.swiper-button-next {
  color: black;
}

.swiper-pagination-bullet-active {
  background: black;
}

.go-modify {
  margin-left: 10%;
  margin-top: 40px;
}
</style>
