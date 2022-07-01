<template>
  <div class="drag_wrap">
    <draggable>
      <div class="sortable">
        <h3>해야할 일</h3>
        <draggable :group="{ name: 'todo' }">
          <div v-for="item in todoList" :key="item" class="card">
            {{ item }}
          </div>
        </draggable>
      </div>

      <div class="sortable">
        <h3>다 한일</h3>
        <draggable :group="{ name: 'todo' }">
          <div v-for="item in completeList" :key="item" class="card">
            {{ item }}
          </div>
        </draggable>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      todoList: ['저녁식사', '공부하기', '휴식하기'],
      completeList: [],
    }
  },
}
</script>

<style scoped>
.card {
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: white;
  margin-bottom: 20px;
}

.sortable {
  padding: 20px;
  background-color: rgb(225, 225, 225);
  margin-bottom: 30px;
}

h3 {
  margin-bottom: 20px;
}
</style>
