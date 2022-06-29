<template>
  <div id="vuex_persisted_wrap">
    <div class="vuex_example_prev">
      <button @click="nextClick">next</button>
      <h1>적용 안된 예</h1>
      <h2>vuex 정보</h2>
      <div>이름 : {{ person.name }}</div>
      <div>나이 : {{ person.age }}</div>
      <h2>변경</h2>
      <div>
        <input type="text" v-model.lazy="localPerson.name" placeholder="name" />
        <input type="text" v-model.number="localPerson.age" placeholder="age" />
        <button @click="updatePerson(localPerson)">저장</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      localPerson: {},
    }
  },
  computed: {
    ...mapState(['person']),
  },
  watch: {
    person(arr) {
      this.localPerson = arr
      console.log(arr)
    },
  },
  methods: {
    updatePerson(data) {
      this.$store.commit('UPDATE_PERSON', data)
    },
    nextClick() {
      this.$router.push({ name: 'vuexPersistedstate-next' })
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
