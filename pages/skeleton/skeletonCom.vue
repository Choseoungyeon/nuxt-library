<template>
  <div class="card_wrap">
    <vue-skeleton-loader
      class="skeleton-profile"
      :width="80"
      :height="80"
      type="circle"
      animation="wave"
    />
    <vue-skeleton-loader
      class="skeleton-write"
      :width="250"
      :height="13"
      type="rect"
      :rounded=true
      animation="wave"
    />
    <vue-skeleton-loader
      class="skeleton-write"
      :width="200"
      :height="13"
      type="rect"
      :rounded=true
      animation="wave"
    />
    <vue-skeleton-loader
      class="skeleton-write"
      :width="230"
      :height="13"
      type="rect"
      :rounded=true
      animation="wave"
    />
    <vue-skeleton-loader
      class="skeleton-write"
      :width="250"
      :height="13"
      type="rect"
      :rounded=true
      animation="wave"
    />
  </div>
</template>

<script>
export default {}
</script>

<style>
.card_wrap {
  width: 300px;
  height: 235px;
  border-radius: 20px;
  border: 1.5px solid rgb(232, 232, 232);
  padding: 20px;
}

.skeleton-profile {
  margin-bottom: 20px;
}

.skeleton-write {
  margin-bottom: 10px;
}
</style>
