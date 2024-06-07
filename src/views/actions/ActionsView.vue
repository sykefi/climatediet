<template>
  <section>
    <SubForm
      :title="$t('$recommendedActions')"
      :is-active="activeView === 'toplist'"
      :is-enabled="true"
      @titleClicked="showView('toplist')"
    >
      <summary
        v-html="$t('$recommendedActionsSummary', { link: sitra100WaysLink() })"
      />
      <SubFormSection :title="$t('$housing')" v-if="housingSitraAction">
        <a
          :href="$t(housingSitraAction + 'Url')"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t(housingSitraAction) }}
        </a>
      </SubFormSection>
      <SubFormSection :title="$t('$food')" v-if="foodSitraAction">
        <a
          :href="$t(foodSitraAction + 'Url')"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t(foodSitraAction) }}
        </a>
      </SubFormSection>
      <SubFormSection :title="$t('$transport')" v-if="transportSitraAction">
        <a
          :href="$t(transportSitraAction + 'Url')"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t(transportSitraAction) }}
        </a>
      </SubFormSection>
      <SubFormSection :title="$t('$consumption')" v-if="consumptionSitraAction">
        <a
          :href="$t(consumptionSitraAction + 'Url')"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t(consumptionSitraAction) }}
        </a>
      </SubFormSection>
      <SubFormSection :title="$t('$waste')" v-if="wasteSitraAction">
        <a
          :href="$t(wasteSitraAction + 'Url')"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t(wasteSitraAction) }}
        </a>
      </SubFormSection>
    </SubForm>
    <SubForm
      :title="$t('$carbonOffsetTitle')"
      :is-active="activeView === 'offset'"
      :summary="$t('$carbonOffsetSummary')"
      :is-enabled="totalResult > 0"
      @titleClicked="showView('offset')"
    >
      <IntegerInput
        :max="100000"
        :unit="$t('$emissionUnit')"
        v-model="carbonOffset"
      />
      <p v-if="carbonOffset > 0">
        {{ $t('$carbonOffsetResult', { percentage: offsetPercentage }) }}
      </p>
    </SubForm>
    <SubForm
      v-for="dataset in [
        housingStore,
        foodStore,
        transportStore,
        consumptionStore,
        wasteStore,
      ]"
      :key="dataset.$id"
      :title="$t('$' + dataset.$id)"
      :is-enabled="enabledSections.includes(dataset.$id)"
      :is-active="activeView === dataset.$id"
      @titleClicked="showView(dataset.$id)"
    >
      <ResultBase :store="dataset">
        <template #additionalSection>
          <SubSection
            title="$wasteRecyclingTitle"
            v-if="dataset.$id == 'waste'"
          >
            <template #default>
              <CarouselBase :slides="wasteCarouselSlides" />
            </template>
          </SubSection>
        </template>
      </ResultBase>
    </SubForm>
    <section class="padding">
      <p>
        <b>
          {{ $t('$otherCalculatorsSuggestion') }}
          <a
            :href="$t('$otherCalculatorsLinkUrl')"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('$otherCalculatorsLinkText') }}
          </a>
        </b>
      </p>
    </section>
  </section>
</template>

<script lang="ts">
import CarouselBase from '@/components/CarouselBase.vue'
import ResultBase from '@/components/ResultBase.vue'
import SubSection from '@/components/SubSection.vue'
import { useConsumptionStore } from '@/stores/consumption/store'
import { useFoodStore } from '@/stores/food/store'
import { useGlobalStateStore } from '@/stores/global/store'
import { useHousingStore } from '@/stores/housing/store'
import { useResultsComparisonStore } from '@/stores/results/store'
import { ICarouselSlide } from '@/stores/results/types'
import { useTransportStore } from '@/stores/transport/store'
import { useWasteStore } from '@/stores/waste/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ResultBase,
    SubSection,
    CarouselBase,
  },
  computed: {
    ...mapStores(
      useGlobalStateStore,
      useHousingStore,
      useFoodStore,
      useTransportStore,
      useConsumptionStore,
      useWasteStore,
      useResultsComparisonStore
    ),
    totalResult(): number {
      return this.resultsComparisonStore.totalResult
    },
    housingSitraAction(): string {
      return this.housingStore.submitted ? this.housingStore.sitraCases : ''
    },
    consumptionSitraAction(): string {
      return this.consumptionStore.submitted
        ? this.consumptionStore.sitraCases
        : ''
    },
    foodSitraAction(): string {
      return this.foodStore.submitted ? this.foodStore.sitraCases : ''
    },
    transportSitraAction(): string {
      return this.transportStore.submitted ? this.transportStore.sitraCases : ''
    },
    wasteSitraAction(): string {
      return this.wasteStore.submitted ? this.wasteStore.sitraCases : ''
    },
    wasteCarouselSlides(): ICarouselSlide[] {
      return this.wasteStore.carouselSlides
    },
    carbonOffset: {
      get(): number {
        return this.globalStateStore.carbonOffset as number
      },
      set(value: number) {
        this.globalStateStore.setOffset(value)
      },
    },
    enabledSections() {
      const enabled = ['offset', 'toplist']
      if (this.housingStore.submitted) {
        enabled.push('housing')
      }
      if (this.foodStore.submitted) {
        enabled.push('food')
      }
      if (this.transportStore.submitted) {
        enabled.push('transport')
      }
      if (this.consumptionStore.submitted) {
        enabled.push('consumption')
      }
      if (this.wasteStore.submitted) {
        enabled.push('waste')
      }
      return enabled
    },
    offsetPercentage() {
      const result: string = (
        (this.carbonOffset / this.totalResult) *
        100
      ).toFixed(2)
      return result
    },
  },
  data() {
    return {
      activeView: 'toplist',
    }
  },
  methods: {
    showView(section: string) {
      if (this.enabledSections.includes(section)) {
        this.activeView = section
      }
    },
    sitra100WaysLink() {
      const sitraUrl = this.$t('$sitra100WaysUrl')
      const sitraLinkText = this.$t('$sitra100WaysLinkText')
      return `<a href=${sitraUrl} target="_blank" rel="noopener noreferrer">${sitraLinkText}</a>`
    },
  },
})
</script>

<style scoped lang="scss">
.padding {
  padding: 1.5em;
}
</style>
