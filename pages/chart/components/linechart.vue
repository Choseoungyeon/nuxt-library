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
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.3)',
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: false,
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 3,
          pointHoverRadius: 10,
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
          color: '#36A2EB',
          anchor: 'end',
          align: 'top',
        },
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
        type: 'line',
        data: this.data,
        options: this.options,
      })
    },
  },
}
</script>
