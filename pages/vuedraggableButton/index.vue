<template>
  <draggable-button
    class="button_wrap"
    style="left: 30px; top: 17%; z-index: 10"
    :isClick.sync="btnIsClick"
  >
    <img alt="Vue logo" @click="clickHandler" src="@/static/icon.png" />
    <div @click.stop="clickHandler">drag it ↑</div>
  </draggable-button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      btnIsClick: false,
    }
  },
  methods: {
    clickHandler() {
      if (this.btnIsClick) {
        this.$store.commit('personData/UPDATE_NAME', '')
        this.$router.push({ name: 'index', query: { productId: 'P0001' } })
      }
    },
  },
}
</script>

<style></style>
