<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper_wrap">
      <swiper-slide v-for="(item, idx) in slideData" :key="idx">
        Slide{{ item }}
      </swiper-slide>
    </swiper>
    <div class="navigation_button">
      <div class="swiper-button-prev">
        <ChevronLeft class="icon-2x" />
      </div>
      <div class="swiper-button-next">
        <ChevronRight class="icon-2x" />
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'

export default {
  name: 'carrousel',
  data() {
    return {
      slideData: [1, 2, 3, 4, 5, 6, 7, 8],
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 20,
        loopAdditionalSlides: 1,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 버튼 클릭 여부
          type: 'bullets', // 버튼 모양 결정 "bullets", "fraction", "progressbar"
        },
        autoplay: {
          delay: 3000, // 시간 설정
          disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
  width: calc(80% - 60px);
  position: absolute;
  top: 180px;
  left: 50%;
  height: 3px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
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
