<template>
  <div class="header_wrap">
    <div class="button_wrap">
      <home-icon @click="goHome" class="home" />
      <menu-icon v-if="!closeEvent" @click="handleClose" class="menu_icon" />
    </div>
    <transition name="menu-slide">
      <div v-show="closeEvent" class="menu_map">
        <close-icon v-if="closeEvent" @click="handleClose" class="close_icon" />
        <div
          v-for="(item, idx) in menu"
          :key="idx"
          @click="() => ToMenuSite(item)"
        >
          {{ item }}
        </div>
      </div>
    </transition>
    <transition name="back-fade">
      <div v-show="closeEvent" @click="handleClose" class="modal"></div>
    </transition>
    <h2 v-if="routeName !== ''" class="title">{{ routeName }}</h2>
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      menu: [
        'calender',
        'chart',
        'confetti',
        'swiper',
        'intersection',
        'vuedraggable',
        'vuedraggableButton',
        'sliders',
        'vueFinalModal',
        'vueBottomSheet',
        'vuexPersistedstate',
        'vueDevice',
        'nuxtDevice',
      ],
      closeEvent: false,
      routeMenu: '',
    }
  },
  methods: {
    ToMenuSite(e) {
      this.handleClose()
      this.$store.commit('personData/UPDATE_NAME', e)
      this.$router.push({ name: e })
    },
    handleClose() {
      this.closeEvent = !this.closeEvent
    },
    goHome() {
      this.$store.commit('personData/UPDATE_NAME', '')
      this.$router.push({ name: 'index' })
    },
  },
  components: {
    MenuIcon,
    CloseIcon,
    HomeIcon,
  },
  watch: {
    routeName(name) {
      this.routeMenu = name
    },
  },
  computed: {
    ...mapState({ routeName: (state) => state.personData.routeName }),
  },
}
</script>

<style scoped>
.header_wrap {
  height: 60px;
}

.title {
  margin-top: 60px;
}

.menu_map {
  position: fixed;
  overflow: hidden;
  width: 300px;
  padding: 30px;
  z-index: 25;
  top: 0px;
  right: 0px;
  height: 100vh;
  padding-top: 60px;
  background-color: white;
}

.modal {
  position: fixed;
  z-index: 24;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 50%;
}

.back-fade-enter-active {
  -webkit-animation: backopen 0.2s linear;
  animation: backopen 0.2s ease;
}

.back-fade-leave-active {
  -webkit-animation: backclose 0.2s linear;
  animation: backclose 0.2s ease;
}

@keyframes backopen {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes backclose {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

.menu-slide-enter-active {
  -webkit-animation: slide-in 0.2s ease-out;
  animation: slide-in 0.2s ease-out;
}

.menu-slide-leave-active {
  -webkit-animation: slide-out 0.2s ease-out;
  animation: slide-out 0.2s ease-out;
}

@keyframes slide-in {
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(300px);
  }
}

.menu_map div {
  height: 50px;
}

.close_icon {
  position: fixed;
  top: 20px;
  right: 30px;
}

.button_wrap {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 20px 30px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 22;
}
</style>
