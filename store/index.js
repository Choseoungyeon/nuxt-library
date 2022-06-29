export const state = () => ({
  skeltonLoading: false,
  person: {
    name: '홍길동',
    age: '18',
  },
})

export const mutations = {
  CHANGE_SEKELETON_LOADING(state, payload) {
    state.skeltonLoading = payload.skeltonLoading
  },
  UPDATE_PERSON(state, payload) {
    state.person = payload
  },
}
