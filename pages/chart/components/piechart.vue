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
          label: 'My Favorite Color',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        },
      ],
    },

    options: {
      indexAxis: 'x',
      layout: {
        padding: 10,
      },
      plugins: {
        datalabels: {
          color: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          anchor: 'center',
          align: 'center',
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
        type: 'pie',
        data: this.data,
        options: this.options,
      })
    },
  },
}
</script>
