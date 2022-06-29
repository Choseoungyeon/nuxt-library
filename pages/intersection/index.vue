<!-- InfiniteScroll.vue -->
<template>
  <div>
    <div class="list-item">
      <div v-if="skelton">
        <vue-skeleton-loader
          class="skeleton"
          type="rect"
          :width="250"
          :height="400"
          animation="fade"
        />
      </div>
      <div
        class="movie-list"
        v-for="(item, idx) in items"
        v-else
        :key="idx + item.id"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
          alt=""
        />
        <p>{{ item.title }}</p>
      </div>
      <infinite-loading direction="top" v-show="more"></infinite-loading>
    </div>
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import Observer from '@/components/Observer'

export default {
  data: () => ({ page: 1, items: [], more: false }),
  methods: {
    async intersected() {
      this.more = true
      const res = await this.$axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=ed67570ff7b36801bc6aa57f241868ca&language=en-US&page=${this.page}`
      )
      this.page++
      const items = await res.data.results
      const _this = this

      setTimeout(() => {
        _this.items = [...this.items, ...items]
        if (_this.skelton) {
          _this.$store.commit('CHANGE_SEKELETON_LOADING', {
            skeltonLoading: false,
          })
        }
        this.more = false
      }, 1000)
    },
  },
  beforeDestroy() {
    this.more = true
  },
  components: {
    Observer,
    InfiniteLoading,
  },
  computed: {
    ...mapState({ skelton: (state) => state.skeltonLoading }),
  },
  watch: {
    skelton() {
      console.log(this.skelton)
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
