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
          data: [2, 10, 15, 12, 8, 10],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 20,
          type: 'line',
          datalabels: {
            color: 'rgba(255, 99, 132, 1)',
            anchor: 'end',
            align: 'top',
          },
        },
        {
          label: 'Adult',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          borderRadius: 10,
          borderSkipped: false,
          datalabels: {
            color: 'rgba(255, 159, 64, 1)',
            anchor: 'end',
            align: 'top',
          },
        },
      ],
    },
    options: {
      layout: {
        padding: 10,
      },
      plugins: {
        legend: {
          position: 'bottom',
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
    console.log(registerables)
  },
  methods: {
    createChart() {
      return new Chart(this.$refs.Chart, {
        type: 'bar',
        data: this.data,
        options: this.options,
      })
    },
  },
}
</script>
