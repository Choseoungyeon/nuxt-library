<template>
  <div>
    <vue-skeleton-loader
      class="skeleton_default"
      type="rect"
      animation="wave"
      :width="80"
      :height="100"
      :rounded="true"
      color="rgba(0,0,0,0.12)"
      wave-color="rgba(255, 255, 255, 0.5)"
      radius="8"
    />
    <skeletonCom />
  </div>
</template>

<script>
import skeletonCom from './skeletonCom.vue'
export default {
  components: {
    skeletonCom,
  },
}
</script>

<style>
.skeleton_default {
  margin-bottom: 20px;
}
</style>
