export const state = () => ({
  person: {
    name: '홍길동',
    age: '18',
  },
  routeName: '',
})

export const mutations = {
  UPDATE_PERSON(state, payload) {
    state.person = payload
  },
  UPDATE_NAME(state, payload) {
    state.routeName = payload
  },
}
