<template>
  <div>
    <h1 v-if="totalResult > 0">
      {{
        $t('$resultsTitle', { amount: $n(totalResult) + $t('$emissionUnit') })
      }}
    </h1>
    <div id="bar-chart-wrapper">
      <!-- Make the chart more legible in mobile by scaling by the page width -->
      <BarChart
        :labels="labels"
        :data-sets="dataSets"
        :height="initialPageWidth > 800 ? 200 : 300"
      />
    </div>
    <p
      v-if="
        comparisonOptions.includes('userHistory') &&
        comparisonTarget !== 'userHistory'
      "
    >
      {{ $t('$userHistoryGuide') }}
    </p>

    <div id="comparison-wrapper">
      <label v-if="comparisonOptions.length > 1">
        {{ $t('$comparisonSelection') }}
        <select id="comp" v-model.number="comparisonTarget">
          <option
            v-for="(option, index) in comparisonOptions"
            :key="index"
            :value="option"
          >
            {{ $t('$' + option) }}
          </option>
        </select>
      </label>
      <div v-if="comparisonTarget == 'testAverage'">
        <button
          v-if="results.postalCode"
          @click="averageCompareWith = 'postalCode'"
          :class="{ active: averageCompareWith === 'postalCode' }"
        >
          {{ $t('$postalCode') }}
        </button>
        <button
          v-if="results.familySize"
          @click="averageCompareWith = 'familySize'"
          :class="{ active: averageCompareWith === 'familySize' }"
        >
          {{ $t('$familySizeShort') }}
        </button>
        <button
          v-if="results.income"
          @click="averageCompareWith = 'income'"
          :class="{ active: averageCompareWith === 'income' }"
        >
          {{ $t('$incomeShort') }}
        </button>
        <button
          v-if="results.diet"
          @click="averageCompareWith = 'diet'"
          :class="{ active: averageCompareWith === 'diet' }"
        >
          {{ $t('$diet') }}
        </button>
      </div>
      <div v-else-if="comparisonTarget == 'userHistory'">
        <button
          v-for="(result, index) in results.userHistory"
          :key="index"
          @click="userHistorySelectedIndex = index"
          :class="{ active: userHistorySelectedIndex === index }"
        >
          {{ result.name }}
        </button>
      </div>
      <p v-if="comparisonTarget != 'userHistory'">
        {{ $t('$' + comparisonTarget + 'ComparisonDetails') }}
      </p>
    </div>
    <div id="chart-wrapper" v-if="totalResult > 0">
      <DoughnutChart
        :labels="doughnutData.map((d) => d.label)"
        :doughnutData="doughnutData.map((d) => d.value)"
        :height="200"
        :width="200"
      />
      <div id="chart-legend" />
    </div>
    <SubSection id="societal-change" title="$resultsSocietalChangeTitle">
      <CarouselBase :slides="carouselSlides" />
    </SubSection>
    <div id="actions">
      <button
        class="social-share-button"
        v-if="totalResult > 0"
        @click="share('facebook')"
      >
        <img
          src="@/assets/images/icons/fb.png"
          alt="facebook share icon"
          aria-label="share on facebook"
        />
      </button>
      <button
        class="social-share-button"
        v-if="totalResult > 0"
        @click="share('twitter')"
      >
        <img
          src="@/assets/images/icons/tw.png"
          alt="twitter share icon"
          aria-label="share on twitter"
        />
      </button>
      <button
        class="button-primary"
        v-if="hasAnySubmitted"
        @click="$router.push('actions')"
      >
        {{ $t('$actionsOverview') }}
      </button>
      <button id="reset" @click="reset">
        {{ $t('$reset') }}
      </button>
    </div>
    <div id="hide-social">
      <div id="social-share-chart-wrapper" v-if="totalResult > 0">
        <h2>{{ $t('$socialShareTitle') }}</h2>
        <DoughnutChart
          :labels="doughnutData.map((d) => d.label)"
          :doughnutData="doughnutData.map((d) => d.value)"
          :height="170"
          :width="170"
          :no-animation="true"
          legend-id="chart-social-legend"
        />
        <div id="chart-social-legend" class="chart-legend" />
        <div id="share-footer">
          <img
            id="share-logo"
            src="@/assets/images/logo_color.png"
            alt="Syke logo"
          />
          <span>{{ $t('$siteTitle') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/style.scss';

button {
  height: 3em;
  margin-top: 10px;
  margin-left: 4px;
  word-wrap: break-word;
}

h1,
p,
label {
  padding: 0.5em;
}

.social-share-button {
  padding: 0;
}

#societal-change {
  & img {
    width: 100%;
  }
}

#chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

#hide-social {
  height: 0;
  overflow: hidden;
}

#social-share-chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: $highlight-dark;
  background: $background-light;

  & h2 {
    display: block;
    flex-basis: 100%;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  & #share-footer {
    background: white;
    text-align: center;
    padding-bottom: 10px;
    flex-basis: 100%;
    height: 40px;
    text-transform: uppercase;
    font-size: $font-size-m;
    font-weight: bold;
    #share-logo {
      height: 100%;
      margin: 0px 10px;
      vertical-align: middle;
    }
  }
}
</style>

<script lang="ts">
import CarouselBase from '@/components/CarouselBase.vue'
import BarChart from '@/components/charts/BarChart.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import SubSection from '@/components/SubSection.vue'
import i18n from '@/locale/i18n'
import { useConsumptionStore } from '@/stores/consumption/store'
import { useFoodStore } from '@/stores/food/store'
import { useGlobalStateStore } from '@/stores/global/store'
import { useHousingStore } from '@/stores/housing/store'
import { useResultsComparisonStore } from '@/stores/results/store'
import {
  ICarouselSlide,
  IResultData,
  IResultsComparisonState,
} from '@/stores/results/types'
import { useTransportStore } from '@/stores/transport/store'
import { useWasteStore } from '@/stores/waste/store'
import { IDataSet } from '@/types'
import { roundResults } from '@/utilities/utils'
import html2canvas from 'html2canvas'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'
import { TranslateResult } from 'vue-i18n'

export default defineComponent({
  components: { BarChart, CarouselBase, DoughnutChart, SubSection },
  created() {
    this.averageCompareWith = this.initialAverageCompareWith()
  },
  computed: {
    ...mapStores(
      useHousingStore,
      useFoodStore,
      useTransportStore,
      useConsumptionStore,
      useWasteStore,
      useResultsComparisonStore,
      useGlobalStateStore
    ),
    hasAnySubmitted(): boolean {
      return (
        this.housingStore.submitted ||
        this.foodStore.submitted ||
        this.transportStore.submitted ||
        this.consumptionStore.submitted ||
        this.wasteStore.submitted
      )
    },
    results(): IResultsComparisonState {
      return this.resultsComparisonStore.$state
    },
    dataSets() {
      const sets: Array<IDataSet> = []
      const ownResult = [
        this.housingStore.primaryHouse.totalResult,
        this.foodStore.totalResult,
        this.transportStore.totalResult,
        this.consumptionStore.totalResult,
        this.wasteStore.totalResult,
      ]

      if (this.housingStore.hasSecondaryHouse) {
        ownResult.splice(
          1,
          0,
          this.housingStore.secondaryHouse.totalResult as number
        )
      }

      if (this.totalResult > 0) {
        sets.push({
          label: this.$t('$yourResult'),
          backgroundColor: '#3f6f9d',
          data: ownResult,
        })
      }
      if (this.comparisonTarget === 'finnishAverage') {
        sets.push({
          label: this.$t('$finnishAverage'),
          backgroundColor: '#adc32b',
          data: this.getResultArray(this.results.finnishAverage),
        })
      } else if (this.comparisonTarget === 'testAverage') {
        if (this.averageCompareWith === 'postalCode') {
          if (this.results.postalCode) {
            sets.push({
              label: this.$t('$postalCodeAverage'),
              backgroundColor: '#adc32b',
              data: this.getResultArray(this.results.postalCode),
            })
          }
        } else if (this.averageCompareWith === 'familySize') {
          if (this.results.familySize) {
            sets.push({
              label: this.$t('$familySizeAverage'),
              backgroundColor: '#adc32b',
              data: this.getResultArray(this.results.familySize),
            })
          }
        } else if (this.averageCompareWith === 'income') {
          if (this.results.income) {
            sets.push({
              label: this.$t('$incomeAverage'),
              backgroundColor: '#adc32b',
              data: this.getResultArray(this.results.income),
            })
          }
        } else if (this.averageCompareWith === 'diet') {
          if (this.results.diet) {
            sets.push({
              label: this.$t('$dietAverage'),
              backgroundColor: '#adc32b',
              data: this.getResultArray(this.results.diet),
            })
          }
        }
      } else if (this.comparisonTarget === 'userHistory') {
        const result: IResultData =
          this.results.userHistory[this.userHistorySelectedIndex]
        if (result && result.name) {
          sets.push({
            label: result.name,
            backgroundColor: '#adc32b',
            data: this.getResultArray(result),
          })
        }
      }
      return sets
    },
    doughnutData() {
      const data: Array<{ label: TranslateResult; value: number }> = [
        {
          label: this.$t('$primaryHouse'),
          value: this.housingStore.primaryHouse.totalResult,
        },
        { label: this.$t('$food'), value: this.foodStore.totalResult },
        {
          label: this.$t('$transport'),
          value: this.transportStore.totalResult,
        },
        {
          label: this.$t('$consumption'),
          value: this.consumptionStore.totalResult,
        },
        { label: this.$t('$waste'), value: this.wasteStore.totalResult },
      ]

      if (this.housingStore.hasSecondaryHouse) {
        data.splice(1, 0, {
          label: this.$t('$secondaryHouse'),
          value: this.housingStore.secondaryHouse.totalResult,
        })
      }
      data.sort((a, b) => {
        return b.value - a.value
      })
      return data
    },
    labels(): string[] | TranslateResult[] {
      const labels = [
        this.$t('$primaryHouse'),
        this.$t('$food'),
        this.$t('$transport'),
        this.$t('$consumption'),
        this.$t('$waste'),
      ]

      if (this.housingStore.hasSecondaryHouse) {
        labels.splice(1, 0, this.$t('$secondaryHouse'))
      }
      return labels
    },
    totalResult(): number {
      return roundResults(this.resultsComparisonStore.totalResult)
    },
    comparisonOptions(): string[] {
      const comparisonOptions = ['finnishAverage']
      // check if we have averages to compare to
      if (this.resultsComparisonStore.postalCode) {
        comparisonOptions.push('testAverage')
      } else if (this.resultsComparisonStore.familySize) {
        comparisonOptions.push('testAverage')
      } else if (this.resultsComparisonStore.income) {
        comparisonOptions.push('testAverage')
      } else if (this.resultsComparisonStore.diet) {
        comparisonOptions.push('testAverage')
      }

      if (
        this.globalStateStore.userId &&
        this.resultsComparisonStore.userHistory.length > 0
      ) {
        comparisonOptions.push('userHistory')
      }
      return comparisonOptions
    },
    carouselSlides(): ICarouselSlide[] {
      return this.resultsComparisonStore.carouselSlides
    },
  },
  data() {
    return {
      comparisonTarget: 'finnishAverage',
      imageGenerated: false,
      userHistorySelectedIndex: 0,
      initialPageWidth: window.innerWidth,
      averageCompareWith: '',
    }
  },
  methods: {
    async saveChartAsImage() {
      if (this.imageGenerated) {
        return
      }
      const element = document.getElementById('social-share-chart-wrapper')
      const canvas = await html2canvas(element, { logging: false })
      await this.resultsComparisonStore.saveResultImage({
        image: canvas.toDataURL('image/png'),
      })
      this.imageGenerated = true
    },
    async share(target: string) {
      try {
        await this.saveChartAsImage()
        const shareWindow = window.open()
        let url = this.results.shareUrl + '&locale=' + i18n.global.locale
        url = encodeURIComponent(url)

        let text = this.$t('$socialShareText', {
          result: this.totalResult + this.$t('$emissionUnit').toString(),
        })
        text = encodeURI(text.toString())

        const location =
          (target === 'twitter'
            ? 'https://twitter.com/share?text=' + text + '&url='
            : 'https://www.facebook.com/sharer/sharer.php?quote=' +
              text +
              '&u=') + url

        if (shareWindow) {
          shareWindow.opener = null
          shareWindow.location.href = location
        } else {
          window.open(location, '_blank', 'noopener')
        }
      } catch (error) {
        this.globalStateStore.setError('Failed to generate share image')
        console.error(error)
      }
    },

    getResultArray(res: IResultData) {
      const results = [
        res.housing,
        res.food,
        res.transport,
        res.consumption,
        res.waste,
      ]

      if (this.housingStore.hasSecondaryHouse) {
        results.splice(1, 0, res.secondaryHouse)
      }
      return results
    },
    reset() {
      this.globalStateStore.resetAllData()
    },

    initialAverageCompareWith() {
      let averageCompareWith = ''
      // check if we have averages to compare to
      if (this.resultsComparisonStore.postalCode) {
        averageCompareWith = 'postalCode'
      } else if (this.resultsComparisonStore.familySize) {
        averageCompareWith = 'familySize'
      } else if (this.resultsComparisonStore.income) {
        averageCompareWith = 'income'
      } else if (this.resultsComparisonStore.diet) {
        averageCompareWith = 'diet'
      }
      return averageCompareWith
    },
  },
})
</script>
