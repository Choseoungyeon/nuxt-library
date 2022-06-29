<template>
  <div>
    <div class="button_list">
      <button
        class="default"
        @click="
          () => {
            change = 'default'
          }
        "
      >
        기본
      </button>
      <button
        class="range"
        @click="
          () => {
            change = 'range'
          }
        "
      >
        범위
      </button>
    </div>

    <div v-if="change == 'range'">
      <vc-date-picker
        v-model="date"
        mode="dateTime"
        color="gray"
        :timezone="timezone"
        is-range
      />
      <p>{{ date ? date.start : null }}</p>
      <p>{{ date ? date.end : null }}</p>
    </div>

    <div v-if="change == 'default'">
      <vc-date-picker
        v-model="date"
        color="gray"
        mode="dateTime"
        :timezone="timezone"
      />
      <p>{{ date }}{{ timezone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      timezone: '',
      change: 'default',
    }
  },
  watch: {
    change() {
      this.date = null
      this.timezone = ''
    },
  },
}
</script>

<style>
.button_list {
  margin-bottom: 20px;
}
p {
  margin-top: 20px;
}
</style>
