<template>
  <Bar
    :options="chartOptions"
    :data="chartData"
    id="bar-chart"
    :height="height"
  />
</template>

<script lang="ts">
import i18n from '@/locale/i18n'
import { defineComponent, PropType } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
} from 'chart.js'
import { IDataSet } from '@/types'

ChartJS.register(BarElement, LinearScale, CategoryScale)

export default defineComponent({
  name: 'BarChart',
  components: { Bar },
  props: {
    labels: {
      type: Object as PropType<string[]>,
      required: true,
    },
    dataSets: {
      type: Object as PropType<Array<IDataSet>>,
      required: true,
    },
    height: {
      type: Number,
      required: false,
    },
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: this.dataSets,
      }
    },
    chartOptions() {
      return {
        responsive: true,
        tooltips: false,
        active: false,
        animation: {
          duration: 500,
          // https://stackoverflow.com/questions/31631354/how-to-display-data-values-on-chart-js
          // onComplete: (canvas: any) => {
          //   const chart = canvas.chart;
          //   const ctx = chart.ctx;
          //   ctx.textAlign = 'center';
          //   ctx.textBaseline = 'bottom';
          //   chart.data.datasets.forEach((dataset: any, i: number) => {
          //     const meta = chart.controller.getDatasetMeta(i);
          //     meta.data.forEach((bar: any, index: number) => {
          //       const d = dataset.data[index];
          //       if (d) {
          //         ctx.fillText(d, bar._model.x, bar._model.y);
          //       }
          //     });
          //   });
          // }
        },
        layout: {
          padding: { top: 50 },
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          y: {
            title: {
              display: true,
              text:
                i18n.global.t('$emissionUnit') +
                ' / ' +
                i18n.global.t('$yearLong'),
            },
          },
          x: {
            ticks: {
              display: true,
            },
          },
        },
      }
    },
  },
})
</script>

<style lang="scss">
#chart-legend {
  display: inline-block;
  & ul {
    list-style: none;
    & li {
      text-align: left;
      & .legend-color-block {
        width: 1em;
        height: 1em;
        border-radius: 100px;
        display: inline-block;
      }
    }
  }
}
</style>
