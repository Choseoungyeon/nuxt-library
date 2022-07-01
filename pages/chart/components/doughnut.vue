<template>
  <div>
    <canvas ref="Chart" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
Chart.register(...registerables)
Chart.register(ChartDataLabels)

export default {
  data: () => ({
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'kids',
          data: [12, 19, 7, 15, 10, 9],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    },

    options: {
      layout: {
        padding: 10,
      },
      plugins: {
        datalabels: {
          color: '#36A2EB',
          anchor: ['end', 'top', 'bottom', 'bottom', 'center', 'top'],
          align: ['end', 'top', 'right', 'bottom', 'left', 'top'],
        },
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          position: 'bottom',
          text: 'My Favorite Color',
        },
      },
    },
  }),
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      return new Chart(this.$refs.Chart, {
        type: 'radar',
        data: this.data,
        options: this.options,
      })
    },
  },
}
</script>
