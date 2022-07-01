<template>
  <div>
    <canvas ref="barChart" />
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
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',

          borderWidth: 1,
          borderRadius: 10,
          borderSkipped: false,
        },
        {
          label: 'adults',
          data: [2, 9, 13, 15, 12, 13],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          borderRadius: 10,
          borderSkipped: false,
        },
      ],
    },

    options: {
      indexAxis: 'y',
      layout: {
        padding: 10,
      },
      plugins: {
        datalabels: {
          color: '#36A2EB',
          anchor: 'end',
          align: 'top',
        },
        legend: {
          position: 'top',
        },
        title: {
          display: true,
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
      return new Chart(this.$refs.barChart, {
        type: 'bar',
        data: this.data,
        options: this.options,
      })
    },
  },
}
</script>
