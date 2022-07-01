<template>
  <div>
    <div class="vc-card">
      <vc-date-picker v-model="date1" color="blue" mode="date" is-range />
    </div>
    <div class="vc-card">
      <vc-date-picker v-model="date2" color="gray" mode="time" />
    </div>
    <div class="vc-card">
      <vc-date-picker v-model="time" color="gray" mode="dateTime" is-range />
    </div>

    <div class="vc-card">
      <vc-date-picker
        v-model="date3"
        color="gray"
        title-position="center"
        show-weeknumbers="right"
        :attributes="attributes"
      />
    </div>

    <div class="vc-card">
      <vc-calendar :rows="1" :columns="2" />
    </div>

    <div class="vc-card">
      <vc-date-picker v-model="range" is-range>
        <template v-slot="{ inputValue, inputEvents }">
          <div class="flex justify-center items-center">
            <input
              :value="inputValue.start"
              v-on="inputEvents.start"
              class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
            />
            <ArrowRight class="arrow" />
            <input
              :value="inputValue.end"
              v-on="inputEvents.end"
              class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
            />
          </div>
        </template>
      </vc-date-picker>
    </div>
  </div>
</template>

<script>
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
export default {
  data() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    return {
      date1: null,
      date2: null,
      date3: null,
      time: null,
      attributes: [
        {
          highlight: {
            color: 'purple',
            fillMode: 'solid',
          },
          dates: new Date(year, month, 12),
        },
        {
          highlight: {
            color: 'purple',
            fillMode: 'light',
          },
          dates: new Date(year, month, 13),
        },
        {
          highlight: {
            color: 'purple',
            fillMode: 'outline',
          },
          dates: new Date(year, month, 14),
        },
        {
          highlight: {
            start: { fillMode: 'solid', color: 'purple' },
            base: { fillMode: 'light', color: 'purple' },
            end: { fillMode: 'solid', color: 'purple' },
          },
          dates: {
            start: new Date(year, month, 20),
            end: new Date(year, month, 23),
          },
        },
        {
          bar: {
            style: {
              backgroundColor: 'blue',
            },
          },
          dates: [new Date(year, month, 8)],
        },
        {
          dot: 'red',
          dates: [new Date(year, month, 4)],
          popover: {
            label: 'Take practice.',
          },
        },
      ],
      range: {
        start: new Date(2020, 9, 12),
        end: new Date(2020, 9, 16),
      },
    }
  },
  components: {
    ArrowRight,
  },
}
</script>

<style>
.vc-card {
  margin-bottom: 50px;
}
.arrow svg {
  transform: translateY(8px);
}
</style>
