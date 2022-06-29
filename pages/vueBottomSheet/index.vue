<template>
  <div>
    <button @click="open">open</button>
    <vue-bottom-sheet
      ref="myBottomSheet"
      class="bottom-sheet"
      effect="fx-fadein-scale"
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
  padding: 20px;
}
</style>
