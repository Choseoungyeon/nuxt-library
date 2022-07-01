<template>
  <main id="confetti_canvas">
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="love">love</button>
  </main>
</template>

<script>
export default {
  mounted() {
    // this.$confetti.start()
    // setTimeout(() => {
    //   this.$confetti.stop()
    // }, 2000)
  },
  methods: {
    start() {
      this.$confetti.start({
        particles: [
          {
            type: 'circle',
            colors: ['Gold', 'OliveDrab'],
            size: 8,
            dropRate: 10,
          },
        ],
        defaultDropRate: 20,
        defaultSize: 20,
        defaultColors: ['Gold', 'OliveDrab'],
        particlesPerFrame: 5,
        windSpeedMax: 1,
      })
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
