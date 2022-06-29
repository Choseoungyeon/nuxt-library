<template>
  <div>
    <h2>@nuxtjs/device</h2>
    <p class="nuxt-device-list">
      $device.isDesktop<br />
      $device.isMobile<br />
      $device.isTablet<br />
      $device.isMobileOrTablet<br />
      $device.isDesktopOrTablet<br />
      $device.isIos<br />
      $device.isWindows<br />
      $device.isMacOS<br />
      $device.isAndroid<br />
      $device.isFirefox<br />
      $device.isEdge<br />
      $device.isChrome<br />
      $device.isSamsung<br />
      $device.isCrawler<br />
    </p>
    <div class="button_list">
      <button @click="() => checkHandler('isMacOS')">MacOs</button>
      <button @click="() => checkHandler('isMobile')">Mobile</button>
    </div>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
    }
  },
  methods: {
    checkHandler(type) {
      this.result = this.$device[type]
      console.log(this.$device[type])
    },
  },
}
</script>

<style scoped>
.nuxt-device-list {
  margin-top: 20px;
}
.button_list {
  margin: 20px 0px;
}
</style>
