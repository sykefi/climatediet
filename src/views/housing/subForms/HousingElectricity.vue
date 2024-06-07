<template>
  <SubForm
    :id="isPrimary ? 'primaryElectricity' : 'secondaryElectricity'"
    :title="$t('$electricity')"
    :summary="$t('$electricitySummary')"
    :is-enabled="isEnabled"
    :is-active="isActive"
    :is-visible="isVisible"
    :is-nested="!isPrimary"
    @titleClicked="titleClicked"
    calc-info-hash="housingElectricity"
  >
    <!-- Consumption selection -->
    <SubFormSection
      :title="$t('$electricityConsumption')"
      title-for="consumption"
    >
      <IntegerInput
        id="consumption"
        :max="150000"
        v-model.number="consumption"
        :unit="'kWh/ ' + $t('$yearLong')"
      />
      <button
        type="button"
        class="button-primary"
        v-if="electricity.consumption !== electricity.estimate"
        @click.prevent="resetEstimate"
      >
        {{ $t('$returnToEstimate') }}
      </button>
    </SubFormSection>
    <!-- Green electricity percentage selection -->
    <SubFormSection
      :title="$t('$greenElectricityPercentage')"
      title-for="greenPercentage"
      :footer="$t('$greenElectricityDetails')"
      :no-border="true"
    >
      <select id="greenPercentage" v-model.number="greenPercentage">
        <option value="0">0%</option>
        <option value="25">25%</option>
        <option value="50">50%</option>
        <option value="75">75%</option>
        <option value="100">100%</option>
      </select>
    </SubFormSection>
  </SubForm>
</template>

<script lang="ts">
import { useHousingStore } from '@/stores/housing/store'
import {
  HeatingModes,
  IElectricityData,
  Sections,
} from '@/stores/housing/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useHousingStore),
    electricity(): IElectricityData {
      return this.isPrimary
        ? this.housingStore.primaryHouse.electricity
        : this.housingStore.secondaryHouse.electricity
    },
    consumption: {
      get(): number {
        return this.electricity.consumption
      },
      set(value: number) {
        this.housingStore.setElectricityConsumption([this.isPrimary, value])
      },
    },
    greenPercentage: {
      get(): number {
        return this.electricity.greenPercentage
      },
      set(value: number) {
        this.housingStore.setElectricityGreen([this.isPrimary, value])
      },
    },
    isActive(): boolean {
      return this.housingStore.activeSection === this.section
    },
    isEnabled(): boolean {
      return (
        (this.isPrimary &&
          this.housingStore.primaryHouse.heating.mainMode !==
            HeatingModes.None) ||
        (!this.isPrimary &&
          this.housingStore.hasSecondaryHouse &&
          this.housingStore.secondaryHouse.heating.mainMode !==
            HeatingModes.None)
      )
    },
    isVisible(): boolean {
      return (
        this.isPrimary || this.isActive || this.housingStore.hasSecondaryHouse
      )
    },
    section(): Sections {
      return this.isPrimary
        ? Sections.Electricity
        : Sections.SecondaryElectricity
    },
  },
  emits: ['titleClicked'],
  methods: {
    resetEstimate() {
      this.consumption = this.electricity.estimate
    },
    titleClicked(id: string) {
      if (!this.isActive) {
        this.$emit('titleClicked', [this.section, id])
      }
    },
  },
  props: {
    /** is the view rendered for the primary or secondary house */
    isPrimary: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
})
</script>
