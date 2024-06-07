<template>
  <Doughnut
    :options="chartOptions"
    :data="chartData"
    id="doughnut-chart"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
import i18n from '@/locale/i18n'
import { roundResults } from '@/utilities/utils'
import { defineComponent, PropType } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Legend,
  ArcElement,
  ChartData,
  ChartOptions,
} from 'chart.js'

const plugin = {
  id: 'centerText', // https://stackoverflow.com/a/43026361/3341040
  beforeDraw: function (chart: any) {
    if (chart.config.options.plugins.centerText) {
      const width = chart.width
      const height = chart.height
      const ctx = chart.ctx

      ctx.restore()
      const fontStyle = 'Open Sans'
      ctx.font = '0.9rem ' + fontStyle
      ctx.textBaseline = 'middle'

      const text = chart.config.options.plugins.centerText.text
      const textX = Math.round((width - ctx.measureText(text).width) / 2)
      const textY = height / 2

      ctx.fillText(text, textX, textY)
      ctx.save()
    }
  },
}

ChartJS.register(Legend, ArcElement, plugin)

export default defineComponent({
  name: 'DoughnutChart',
  components: { Doughnut },
  props: {
    labels: {
      type: Object as PropType<string[]>,
      required: true,
    },
    doughnutData: {
      type: Object as PropType<number[]>,
      required: true,
    },
    legendId: {
      type: String,
      required: false,
      default: 'chart-legend',
    },
    noAnimation: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: Number,
      required: false,
      default: 200,
    },
    height: {
      type: Number,
      required: false,
      default: 200,
    },
  },
  watch: {
    chartData() {
      this.getLegend()
    },
  },
  methods: {
    getLegend() {
      const legend = document.getElementById(this.legendId)
      if (legend != null) {
        legend.innerHTML = this.getLegendHtmlWithPercentage(this.chartData)
      }
    },
    getLegendHtmlWithPercentage(chartData: any) {
      // https://stackoverflow.com/questions/45940338/chartjs-percents-in-legend
      const lines = []
      if (chartData.datasets.length) {
        let target = 100
        const set = chartData.datasets[0] // only works with one dataset
        if (set.data.length <= 1) {
          return ''
        }
        for (let i = 0; i < set.data.length; ++i) {
          if (!chartData.labels[i]) {
            continue
          }
          const value = set.data[i]
          let percentage =
            value > 0
              ? Math.max(1, Math.round((value / this.getFinalResult()) * 100))
              : 0
          target -= percentage
          if (target < 0) {
            /**
             * we are using Math.round, so the total amount should always be >=100%
             * ensure that the total amount == 100% by reducing the last percentage by the exceeding amount
             * this will always trigger on the amount that takes the total over 100%
             * so we won't go negative if the current amount is 0
             */
            percentage += target
            target = 0
          }
          lines.push({
            percentage,
            html:
              `<li>
                  <span class="legend-color-block" style="background:` +
              set.backgroundColor[i] +
              `"></span>` +
              chartData.labels[i] +
              `<strong> (` +
              percentage +
              `%)</strong>
                  </li>`,
          })
        }
      }

      let html = '<ul id="class-legend">'

      lines.forEach((line) => {
        html += line.html
      })

      html += '</ul>'
      return html
    },
    getFinalResult(): number {
      if (this.doughnutData.length === 0) {
        return 0
      }
      return Math.round(
        (this.doughnutData as number[]).reduce((a, b) => a + b, 0)
      )
    },
  },
  computed: {
    chartData(): ChartData<'doughnut', number[], unknown> {
      return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: [
              '#3f6f9d',
              '#adc32b',
              '#c4e2f5',
              '#70bbd7',
              '#1f4060',
              '#e49f15',
              '#d3ccc4',
            ],
            data: this.doughnutData,
          },
        ],
      }
    },
    chartOptions(): ChartOptions<'doughnut'> {
      return {
        responsive: false,
        tooltips: false,
        active: false,
        animation: {
          duration: this.noAnimation ? 50 : 500,
        },
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          },
          centerText: {
            text:
              i18n.global.n(roundResults(this.getFinalResult())) +
              ' ' +
              this.$t('$emissionUnit'),
          },
        },
      }
    },
  },
  mounted() {
    this.getLegend()
  },
})
</script>

<style lang="scss">
#chart-legend,
.chart-legend {
  display: inline-block;
  color: black;
  & ul {
    list-style: none;
    & li {
      text-align: left;
      margin: 0.5em;
      & .legend-color-block {
        margin-right: 0.5em;
        width: 1em;
        height: 1em;
        border-radius: 100px;
        display: inline-block;
      }
    }
  }
}
#doughnut-chart {
  margin: 2em 0;
}
</style>
