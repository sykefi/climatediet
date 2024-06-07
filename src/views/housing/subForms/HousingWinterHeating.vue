<template>
  <SubForm
    id="WinterHeating"
    :title="$t('$winterHeating')"
    :summary="$t('$winterHeatingSummary')"
    :is-active="isActive"
    :is-enabled="isEnabled"
    :is-nested="true"
    :is-visible="isVisible"
    @titleClicked="titleClicked"
    calc-info-hash="housingHeating"
  >
    <SubFormRadioSection
      :title="$t('$winterHeating')"
      v-if="housingStore.secondaryHouse.type == 'Family'"
    >
      <div
        class="input-selection"
        v-for="option in winterHeatingOptions"
        :key="'wh' + option"
        :class="{ active: winterHeating === option }"
      >
        <div class="radio-item">
          <input
            required
            type="radio"
            name="winterHeat"
            :id="'wh' + option"
            :value="option"
            v-model="winterHeating"
          />
          <label :for="'wh' + option">{{ $t('$winterHeat' + option) }}</label>
          <DetailsButton
            v-if="option === 'Base' || option === 'Dry'"
            :content-key="'$winterHeat' + option + 'Details'"
          />
        </div>
      </div>
    </SubFormRadioSection>
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
      return this.housingStore.secondaryHouse.heating
    },
    winterHeating: {
      get(): WinterHeatingOptions {
        return this.heating.winterHeating
      },
      set(value: WinterHeatingOptions) {
        this.housingStore.setWinterHeat([false, value])
      },
    },
    isActive(): boolean {
      return this.housingStore.activeSection === Sections.WinterHeating
    },
    isEnabled(): boolean {
      return (
        this.housingStore.hasSecondaryHouse &&
        this.housingStore.secondaryHouse.type === HouseTypes.Family
      )
    },
    isVisible(): boolean {
      return this.isActive || this.isEnabled
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
        this.$emit('titleClicked', [Sections.WinterHeating, id])
      }
    },
  },
})
</script>
