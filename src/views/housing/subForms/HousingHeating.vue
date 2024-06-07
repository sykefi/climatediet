<template>
  <SubForm
    :id="isPrimary ? 'primaryHeating' : 'secondaryHeating'"
    :title="$t('$heating')"
    :summary="$t('$heatingSummary')"
    :is-active="isActive"
    :is-enabled="isEnabled"
    :is-nested="!isPrimary"
    :is-visible="isVisible"
    @titleClicked="titleClicked"
    calc-info-hash="housingHeating"
  >
    <SubFormRadioSection
      :title="$t('$mainHeatingMode')"
      :details-content-key="
        isPrimary && housingStore.primaryHouse.type == 'Flat'
          ? '$flatHeatCalculation'
          : null
      "
    >
      <!-- Wrapper for each option -->
      <div
        class="input-selection"
        v-for="option in primaryHeatingModes"
        :key="'mh' + option"
        :class="{ active: mainHeatingMode === option }"
      >
        <!-- Basic radio button selection-->
        <div class="radio-item">
          <input
            required
            type="radio"
            name="mainHeat"
            :id="'mh' + option"
            :value="option"
            v-model="mainHeatingMode"
          />
          <label :for="'mh' + option">
            {{
              $t('$heatSource' + option) +
              (option === 'Electric' || option === 'Pump'
                ? ' ' + $t('$includeInElectricity')
                : '')
            }}
          </label>
        </div>
        <!-- District heat custom inputs -->
        <label
          class="amount"
          v-if="mainHeatingMode === 'District' && option === 'District'"
        >
          <IntegerInput
            :max="130000"
            v-model.number="districtConsumption"
            :unit="'kWh/' + $t('$yearLong')"
          />
          <button
            type="button"
            v-if="option === 'District'"
            class="button-primary"
            :class="{ invisible: !districtResetVisible }"
            @click.prevent="resetDistrictEstimate"
          >
            {{ $t('$returnToEstimate') }}
          </button>
        </label>

        <div
          class="extra"
          v-if="mainHeatingMode === 'District' && option === 'District'"
        >
          <label for="green-percentage" class="extra-label">
            {{ $t('$greenHeatPercentage') }}
          </label>
          <div class="extra-content">
            <select id="green-percentage" v-model.number="greenPercentage">
              <option value="0">0%</option>
              <option value="25">25%</option>
              <option value="50">50%</option>
              <option value="75">75%</option>
              <option value="100">100%</option>
            </select>
            <DetailsButton content-key="$greenDistrictHeatDetails" />
          </div>
        </div>
        <!-- Oil custom inputs-->
        <label
          class="amount"
          v-if="mainHeatingMode === 'Oil' && option === 'Oil'"
        >
          <IntegerInput
            :max="130000"
            v-model.number="oilConsumption"
            :unit="'l/' + $t('$yearLong')"
          />
          <button
            type="button"
            v-if="option === 'Oil'"
            class="button-primary"
            :class="{ invisible: !oilResetVisible }"
            @click.prevent="resetOilEstimate"
          >
            {{ $t('$returnToEstimate') }}
          </button>
        </label>

        <!-- Wood details-->
        <label
          class="amount"
          v-if="mainHeatingMode === 'Wood' && option === 'Wood'"
        >
          {{ $t('$woodHeatingDetails') }}
        </label>
      </div>
    </SubFormRadioSection>
    <SubFormSection
      :title="$t('$additionalHeating')"
      details-content-key="$additionalHeatingDetails"
      :no-border="true"
      role="group"
    >
      <div
        class="checkbox-item"
        v-for="option in secondaryHeatingModes"
        :key="option"
      >
        <input
          :id="'sh' + option"
          type="checkbox"
          :value="option"
          v-model="additionalHeatingModes"
        />
        <label :for="'sh' + option">{{ $t('$heatSource' + option) }}</label>
      </div>
    </SubFormSection>
  </SubForm>
</template>

<script lang="ts">
import DetailsButton from '@/components/forms/DetailsButton.vue'
import { useHousingStore } from '@/stores/housing/store'
import {
  HeatingModes,
  HouseTypes,
  IHeatingData,
  Sections,
  WinterHeatingOptions,
} from '@/stores/housing/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    DetailsButton,
  },
  computed: {
    ...mapStores(useHousingStore),
    heating(): IHeatingData {
      return this.isPrimary
        ? this.housingStore.primaryHouse.heating
        : this.housingStore.secondaryHouse.heating
    },
    greenPercentage: {
      get(): number {
        return this.heating.districtGreenPercentage
      },
      set(value: number) {
        this.housingStore.setDistrictGreen([this.isPrimary, value])
      },
    },
    districtConsumption: {
      get(): number {
        return this.heating.districtConsumption
      },
      set(value: number) {
        this.housingStore.setDistrictConsumption([this.isPrimary, value])
      },
    },
    mainHeatingMode: {
      get(): HeatingModes {
        return this.heating.mainMode
      },
      set(value: HeatingModes) {
        if (value === HeatingModes.District && this.districtConsumption === 0) {
          this.resetDistrictEstimate()
        } else if (value === HeatingModes.Oil && this.oilConsumption === 0) {
          this.resetOilEstimate()
        }
        this.housingStore.setMainHeat([this.isPrimary, value])
      },
    },
    oilConsumption: {
      get(): number {
        return this.heating.oilConsumption
      },
      set(value: number) {
        this.housingStore.setOilConsumption([this.isPrimary, value])
      },
    },
    additionalHeatingModes: {
      get(): HeatingModes[] {
        return this.heating.additionalModes
      },
      set(value: HeatingModes[]) {
        this.housingStore.setSecondaryHeat([this.isPrimary, value])
      },
    },
    isActive(): boolean {
      return this.housingStore.activeSection === this.section
    },
    isEnabled(): boolean {
      return (
        (this.isPrimary &&
          this.housingStore.primaryHouse.type !== HouseTypes.None) ||
        (!this.isPrimary &&
          this.housingStore.hasSecondaryHouse &&
          this.housingStore.secondaryHouse.type !== HouseTypes.None)
      )
    },
    isVisible(): boolean {
      return (
        this.isPrimary || this.isActive || this.housingStore.hasSecondaryHouse
      )
    },
    districtResetVisible(): boolean {
      return (
        this.mainHeatingMode === HeatingModes.District &&
        this.heating.districtConsumption !== this.heating.districtEstimate
      )
    },
    oilResetVisible(): boolean {
      return (
        this.mainHeatingMode === HeatingModes.Oil &&
        this.heating.oilConsumption !== this.heating.oilEstimate
      )
    },
    section(): Sections {
      return this.isPrimary ? Sections.Heating : Sections.SecondaryHeating
    },
  },
  data() {
    return {
      winterHeatingOptions: WinterHeatingOptions,
      primaryHeatingModes: [
        HeatingModes.District,
        HeatingModes.Oil,
        HeatingModes.Pump,
        HeatingModes.Electric,
        HeatingModes.Wood,
      ],
      secondaryHeatingModes: [
        HeatingModes.Wood,
        HeatingModes.AirPump,
        HeatingModes.SelfGenerated,
      ],
    }
  },
  emits: ['titleClicked'],
  methods: {
    titleClicked(id: string) {
      if (!this.isActive) {
        this.$emit('titleClicked', [this.section, id])
      }
    },
    resetDistrictEstimate() {
      this.districtConsumption = this.heating.districtEstimate
    },
    resetOilEstimate() {
      this.oilConsumption = this.heating.oilEstimate
    },
  },
  props: {
    isPrimary: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
})
</script>
