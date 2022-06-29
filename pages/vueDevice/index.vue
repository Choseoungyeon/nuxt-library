<template>
  <div>
    <h2>vue-device-detector</h2>
    <p class="vue-device-list">
      ios: Boolean<br />
      iphone: Boolean<br />
      iphoneX: Boolean<br />
      iPhoneXR: Boolean<br />
      iPhoneXSMax: Boolean<br />
      ipod: Boolean<br />
      ipad: Boolean<br />
      android: Boolean<br />
      androidPhone: Boolean<br />
      windows: Boolean<br />
      mobile: Boolean<br />
      dingding: Boolean<br />
      wechat: Boolean<br />
      wechatMiniApp: Boolean<br />
    </p>
    <div class="button_list">
      <button @click="() => checkHandler('windows')">window</button>
      <button @click="() => checkHandler('mobile')">mobile</button>
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
.vue-device-list {
  margin-top: 20px;
}
.button_list {
  margin: 20px 0px;
}
</style>
