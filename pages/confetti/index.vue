<template>
  <main>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="love">love</button>
  </main>
</template>

<script>
export default {
  mounted() {
    // _this.start()
    // setTimeout(()=>{
    //     _this.stop()
    // },3000)
  },

  methods: {
    start() {
      this.$confetti.start()
    },

    stop() {
      this.$confetti.stop()
    },

    love() {
      this.$confetti.update({
        particles: [
          {
            type: 'heart',
          },
          {
            type: 'circle',
          },
        ],
        defaultColors: ['red', 'pink', '#ba0000'],
      })
    },
  },
}
</script>

<style></style>
