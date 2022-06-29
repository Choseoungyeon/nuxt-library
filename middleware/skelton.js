export default function ({ store }) {
  if (!process.server) {
    store.commit('CHANGE_SEKELETON_LOADING', {
      skeltonLoading: true,
    })
  }
}
