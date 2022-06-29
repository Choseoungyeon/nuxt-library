<template>
  <div id="vuex_persisted_wrap">
    <div class="vuex_example_prev">
      <button @click="clearButton">clear</button>
      <h1>적용 된 예</h1>
      <h2>vuex 정보</h2>
      <div>이름 : {{ personChange.name }}</div>
      <div>나이 : {{ personChange.age }}</div>
      <h2>변경</h2>
      <div>
        <input type="text" v-model.lazy="dataPerson.name" placeholder="name" />
        <input type="text" v-model.number="dataPerson.age" placeholder="age" />
        <button @click="updatePersonChange(dataPerson)">저장</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      dataPerson: {},
    }
  },
  computed: {
    ...mapState({ personChange: (state) => state.personData.person }),
  },
  watch: {
    personChange(arr) {
      this.dataPerson = arr
    },
  },
  methods: {
    updatePersonChange(data) {
      this.$store.commit('personData/UPDATE_PERSON', data)
    },
    clearButton() {
      window.localStorage.clear()
    },
  },
}
</script>
<style scoped>
h1 {
  margin-top: 20px;
}
h2 {
  margin-top: 20px;
}
</style>
