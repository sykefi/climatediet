<template>
  <div>
    <button
      id="close-button"
      v-if="next"
      @click.prevent="$emit('close')"
      aria-label="Close"
    >
      X
    </button>
    <h1>{{ $t('$' + store.$id + 'ResultsTitle') }}</h1>
    <div id="chart-wrapper">
      <DoughnutChart
        :labels="labels"
        :doughnutData="results"
        :height="200"
        :width="200"
      />
      <div id="chart-legend" />
    </div>
    <div id="result-selection-buttons" v-if="buttons">
      <button
        v-for="button in buttons"
        :key="button"
        @click.prevent="currentlyShownResults = button"
        :class="{ active: currentlyShownResults === button }"
      >
        {{ $t('$' + button) }}
      </button>
    </div>
    <SubSection :actions="actions" :links="links" />
    <slot name="additionalSection" />
    <hr />
    <summary>{{ $t('$' + store.$id + 'ResultsSummary') }}</summary>
    <button
      id="continue"
      v-if="next"
      class="button-primary large"
      @click.prevent="$router.push(next!)"
    >
      {{ $t('$continue') }}
    </button>
  </div>
</template>

<script lang="ts">
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import { PropType, defineComponent } from 'vue'
import { TranslateResult } from 'vue-i18n'
import SubSection from './SubSection.vue'
import { IStoreProperties } from 'pinia'
import { IChartData } from '@/types'

export default defineComponent({
  components: {
    SubSection,
    DoughnutChart,
  },
  data() {
    return {
      currentlyShownResults: this.store.resultButtons
        ? this.store.resultButtons[0] || ''
        : '',
    }
  },
  computed: {
    chartData(): Array<IChartData> {
      return this.store.resultChartData
        ? this.store.resultChartData(this.currentlyShownResults)
        : []
    },
    labels(): string[] {
      return this.chartData.map((d) => d.label as string)
    },
    results(): number[] {
      return this.chartData.map((d) => d.value)
    },
    buttons(): string[] {
      if (this.store.resultButtons) {
        return this.store.resultButtons // only housing has these buttons
      }
      return []
    },
    actions(): string[] {
      return this.store.resultActions(this.currentlyShownResults)
    },
    links(): IResultActionLink[] {
      return this.store.resultLinks(this.currentlyShownResults)
    },
  },
  props: {
    store: { type: Object as PropType<IStoreProperties>, required: true },
    next: { type: String, required: false },
  },
})

export interface IResultActionLink {
  title: TranslateResult
  url: TranslateResult
  description?: TranslateResult
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

h3 {
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0;
}

h1 {
  text-align: left;
  font-size: 24px;
  margin-top: 5px;
}

summary {
  margin: 1em 0;
}

#close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  padding: 0.5em 0.5em;
}

#continue {
  display: block;
  margin: 0 auto;
}

#chart-wrapper {
  display: flex;
  background: white;
  border: 1px solid $line-light;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

#result-selection-buttons {
  & button {
    height: 3em;
    margin-top: 10px;
    margin-left: 4px;
    word-wrap: break-word;
    &.active {
      background: $highlight;
    }
  }
}
</style>
