<template>
  <form @submit.prevent="submit()" class="calc-form">
    <SubForm
      :title="$t('$waste')"
      :summary="$t('$wasteSummary')"
      :is-active="true"
      :is-enabled="baseDataStore.submitted"
      calc-info-hash="waste"
    >
      <SubFormSection :title="$t('$wasteAmount')" role="radiogroup">
        <div class="radio-item" v-for="option in amountEstimates" :key="option">
          <input
            :id="'wa' + option"
            type="radio"
            v-model="amountEstimate"
            :value="option"
            name="wastemount"
            required
          />
          <label :for="'wa' + option">{{ $t('$wasteAmount' + option) }}</label>
        </div>
      </SubFormSection>
      <div class="section-title" id="sorting-title">
        {{ $t('$wasteSortingTitle') }}
      </div>
      <SubFormSection
        :title="$t('$bioWaste')"
        :lower-case="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'bio' + option"
            type="radio"
            v-model="bioWaste"
            :value="option"
            name="bio"
            required
          />
          <label :for="'bio' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
      <SubFormSection
        :title="$t('$paperWaste')"
        :lower-case="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'paper' + option"
            type="radio"
            v-model="paper"
            :value="option"
            name="paper"
            required
          />
          <label :for="'paper' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
      <SubFormSection
        :title="$t('$cartonWaste')"
        :lower-case="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'carton' + option"
            type="radio"
            v-model="carton"
            :value="option"
            name="carton"
            required
          />
          <label :for="'carton' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
      <SubFormSection
        :title="$t('$glassWaste')"
        :lower-case="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'glass' + option"
            type="radio"
            v-model="glass"
            :value="option"
            name="glass"
            required
          />
          <label :for="'glass' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
      <SubFormSection
        :title="$t('$metalWaste')"
        :lower-case="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'metal' + option"
            type="radio"
            v-model="metal"
            :value="option"
            name="metal"
            required
          />
          <label :for="'metal' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
      <SubFormSection
        :title="$t('$plasticWaste')"
        :lower-case="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'plastic' + option"
            type="radio"
            v-model="plastic"
            :value="option"
            name="plastic"
            required
          />
          <label :for="'plastic' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
      <SubFormSection
        :title="$t('$electronicWaste')"
        :lower-case="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'electronic' + option"
            type="radio"
            v-model="electronic"
            :value="option"
            name="electronic"
            required
          />
          <label :for="'electronic' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
      <SubFormSection
        :title="$t('$hazardousWaste')"
        :lower-case="true"
        :no-border="true"
        role="radiogroup"
      >
        <div class="radio-item" v-for="option in frequencies" :key="option">
          <input
            :id="'hazardous' + option"
            type="radio"
            v-model="hazardous"
            :value="option"
            name="hazardous"
            required
          />
          <label :for="'hazardous' + option">
            {{ $t('$wasteSortingFrequency' + option) }}
          </label>
        </div>
      </SubFormSection>
    </SubForm>
    <div class="action-wrapper">
      <input
        type="submit"
        class="button-primary"
        :value="$t('$calculateResults')"
        :disabled="!submitEnabled"
      />
    </div>
    <DialogBase v-if="resultsShown">
      <ResultBase
        next="results"
        :store="wasteStore"
        @close="resultsShown = false"
      >
        <template #additionalSection>
          <SubSection title="$wasteRecyclingTitle">
            <template #default>
              <CarouselBase :slides="carouselSlides" />
            </template>
          </SubSection>
        </template>
      </ResultBase>
    </DialogBase>
  </form>
</template>

<style lang="scss" scoped>
#sorting-title {
  margin-top: 1em;
}
</style>

<script lang="ts">
import CarouselBase from '@/components/CarouselBase.vue'
import DialogBase from '@/components/DialogBase.vue'
import ResultBase from '@/components/ResultBase.vue'
import SubSection from '@/components/SubSection.vue'
import { useGlobalStateStore } from '@/stores/global/store'
import { ICarouselSlide } from '@/stores/results/types'
import { useBaseDataStore } from '@/stores/startView/store'
import { useWasteStore } from '@/stores/waste/store'
import {
  AmountEstimates,
  Frequencies,
  IWasteDataState,
} from '@/stores/waste/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ResultBase,
    SubSection,
    DialogBase,
    CarouselBase,
  },
  computed: {
    ...mapStores(useWasteStore, useBaseDataStore, useGlobalStateStore),
    waste(): IWasteDataState {
      return this.wasteStore.$state
    },
    amountEstimate: {
      get(): AmountEstimates {
        return this.waste.amountEstimate
      },
      set(value: AmountEstimates) {
        this.wasteStore.setEstimate(value)
      },
    },
    bioWaste: {
      get(): Frequencies {
        return this.waste.bioWaste
      },
      set(value: Frequencies) {
        this.wasteStore.setBio(value)
      },
    },
    carton: {
      get(): Frequencies {
        return this.waste.carton
      },
      set(value: Frequencies) {
        this.wasteStore.setCarton(value)
      },
    },
    electronic: {
      get(): Frequencies {
        return this.waste.electronic
      },
      set(value: Frequencies) {
        this.wasteStore.setElectronic(value)
      },
    },
    glass: {
      get(): Frequencies {
        return this.waste.glass
      },
      set(value: Frequencies) {
        this.wasteStore.setGlass(value)
      },
    },
    hazardous: {
      get(): Frequencies {
        return this.waste.hazardous
      },
      set(value: Frequencies) {
        this.wasteStore.setHazardous(value)
      },
    },
    metal: {
      get(): Frequencies {
        return this.waste.metal
      },
      set(value: Frequencies) {
        this.wasteStore.setMetal(value)
      },
    },
    paper: {
      get(): Frequencies {
        return this.waste.paper
      },
      set(value: Frequencies) {
        this.wasteStore.setPaper(value)
      },
    },
    plastic: {
      get(): Frequencies {
        return this.waste.plastic
      },
      set(value: Frequencies) {
        this.wasteStore.setPlastic(value)
      },
    },
    carouselSlides(): ICarouselSlide[] {
      return this.wasteStore.carouselSlides
    },
    submitEnabled(): boolean {
      return this.baseDataStore.submitted && !this.globalStateStore.busy
    },
  },
  data() {
    return {
      amountEstimates: [
        AmountEstimates.Low,
        AmountEstimates.Normal,
        AmountEstimates.High,
      ],
      frequencies: [
        Frequencies.Never,
        Frequencies.Sometimes,
        Frequencies.Often,
        Frequencies.Always,
      ],
      resultsShown: false,
    }
  },
  methods: {
    async submit() {
      try {
        if (!this.wasteStore.submitted || this.wasteStore.unSavedChanges) {
          await this.wasteStore.submit()
        }
        this.resultsShown = true
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>
