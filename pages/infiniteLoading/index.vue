<template>
  <div>
    <div class="movie-list" v-for="(item, idx) in items" :key="idx + item.id">
      <img :src="`${item.poster_path}`" alt="" />
      <p>{{ item.title }}</p>
    </div>
    <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
      <div slot="no-more">Nwwwwww</div>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  data: () => ({ page: 1, items: [] }),
  components: {
    InfiniteLoading,
  },
  methods: {
    async infiniteHandler($state) {
      if (this.page === 4) {
        $state.complete()
      } else {
        const res = await this.$axios.get(`/movieList.json`)
        this.page++
        const items = await res.data.movieList

        const _this = this
        setTimeout(() => {
          _this.items = [...this.items, ...items]
          $state.loaded()
        }, 1000)
      }
    },
  },
}
</script>

<style>
.movie-list img {
  width: 250px;
  height: 400px;
}
</style>
