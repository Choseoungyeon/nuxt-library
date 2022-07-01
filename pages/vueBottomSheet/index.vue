<template>
  <div style="height: 20000px">
    <button @click="open">open</button>
    <vue-bottom-sheet
      ref="myBottomSheet"
      :overlay="true"
      :click-to-close="true"
      max-width="400px"
      max-height="50%"
      :rounded="true"
      :is-full-screen="true"
      :swipe-able="false"
      :background-scrollable="false"
      :background-clickable="true"
      class="bottom-sheet"
      effect="fx-slide-from-right"
    >
      <h1>Bottom Sheet Example</h1>
      <h2>What is Bottom Sheet?</h2>
      <p><strong>Bottom Sheet</strong> is simply dummy text</p>
    </vue-bottom-sheet>
  </div>
</template>

<script>
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet'

export default {
  components: {
    VueBottomSheet,
  },
  methods: {
    open() {
      this.$refs.myBottomSheet.open()
    },
    close() {
      this.$refs.myBottomSheet.close()
    },
  },
}
</script>

<style>
.bottom-sheet__card {
  padding: 0px 20px;
}
</style>
