<template>
  <div>
    <swiper
      ref="mySwiper"
      :auto-update="true"
      :options="swiperOptions"
      class="swiper_wrap"
    >
      <swiper-slide v-for="(item, idx) in slideData" :key="idx">
        Slide{{ item }}
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="navigation_button">
      <div class="swiper-button-prev" @click="prev">
        <ChevronLeft class="icon-2x" />
      </div>
      <div class="swiper-button-next" @click="next">
        <ChevronRight class="icon-2x" />
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import 'swiper/css/swiper.css'

export default {
  name: 'carrousel',
  data() {
    return {
      slideData: [1, 2, 3, 4, 5, 6, 7, 8],
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        slidesPerGroup: 1,
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
    ChevronRight,
    ChevronLeft,
    Swiper,
    SwiperSlide,
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext()
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

.swiper-button-prev {
  left: 5vw;
}

.swiper-button-next {
  right: 5vw;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.navigation_button {
  width: 100%;
  position: absolute;
  top: 300px;
  padding: 0px 30px;
  left: 0px;
}

.swiper-pagination {
  width: 100px;
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

.swiper-pagination-bullet-active {
  background: black;
}

.material-design-icon.icon-2x {
  height: 4em;
  width: 4em;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 4em;
  width: 4em;
}
</style>
