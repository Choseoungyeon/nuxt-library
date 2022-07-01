<!-- Observer.vue -->
<template>
  <div class="observer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['options'],
  data: () => ({
    observer: null,
  }),
  mounted() {
    const options = this.options || {}
    this.observer = new IntersectionObserver(([entry]) => {
      console.log(entry)
      if (entry && entry.isIntersecting) {
        this.$emit('intersect')
      }
    }, options)

    this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
  },
}
</script>
