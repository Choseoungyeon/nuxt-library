<template>
  <draggable>
    <div v-for="(item, index) in ListData" :key="index" class="drag-item">
      {{ item }}
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      ListData: ['바나나 🍌', '딸기 🍓', '키위 🥝'],
    }
  },
}
</script>

<style scoped>
.drag-item {
  width: 50%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: rgb(0, 0, 0);
  border-bottom: 1px solid white;
  color: white;
}
</style>
