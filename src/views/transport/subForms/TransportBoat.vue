<template>
  <SubForm
    id="transport-boat"
    :title="$t('$boat')"
    :summary="$t('$boatSummary')"
    :is-active="isActive"
    :is-enabled="isEnabled"
    @titleClicked="boatTitleClicked"
    calc-info-hash="transportBoat"
  >
    <SubFormSection :title="$t('$boatType')" role="radiogroup">
      <div class="radio-item" v-for="option in boatTypes" :key="option">
        <input
          :id="'type' + option"
          type="radio"
          v-model="boatType"
          :value="option"
        />
        <label :for="'type' + option">{{ $t('$boatType' + option) }}</label>
      </div>
    </SubFormSection>
    <div v-if="boatType !== 'None'">
      <SubFormSection :title="$t('$userCount')" title-for="userCount">
        <IntegerInput
          id="userCount"
          :min="1"
          :max="10"
          v-model.number="userCount"
          :unit="$t('$persons')"
        />
      </SubFormSection>
      <div v-if="boatType === 'MotorAluminum' || boatType === 'MotorFiber'">
        <SubFormSection
          :title="$t('$fuelConsumption')"
          title-for="fuelConsumption"
          :footer="$t('$boatFuelConsumptionDetails')"
        >
          <IntegerInput
            id="fuelConsumption"
            :min="1"
            :max="16000"
            v-model.number="fuelConsumption"
            :disabled="usageHours > 0 || power > 0"
            :unit="'l/' + $t('$yearLong')"
          />
        </SubFormSection>
        <SubFormSection
          :title="$t('$powerConsumption')"
          title-for="usageHours"
          :footer="$t('$boatPowerConsumptionDetails')"
          :no-border="true"
        >
          <IntegerInput
            id="usageHours"
            :min="1"
            :max="800"
            v-model.number="usageHours"
            :disabled="fuelConsumption > 0"
            :unit="'h/' + $t('$yearLong')"
          />
          +
          <IntegerInput
            id="power"
            :min="1"
            :max="400"
            required
            v-model.number="power"
            :disabled="fuelConsumption > 0"
            unit="hp"
          />
        </SubFormSection>
      </div>
    </div>
  </SubForm>
</template>

<script lang="ts">
import { useBaseDataStore } from '@/stores/startView/store'
import { useTransportStore } from '@/stores/transport/store'
import {
  BoatTypes,
  ITransportStoreState,
  TransportSections,
} from '@/stores/transport/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useTransportStore, useBaseDataStore),
    transport(): ITransportStoreState {
      return this.transportStore.$state
    },
    boatType: {
      get(): BoatTypes {
        return this.transport.boat.type
      },
      set(value: BoatTypes) {
        this.transportStore.setBoatType(value)
      },
    },
    fuelConsumption: {
      get(): number {
        return this.transport.boat.fuelConsumption
      },
      set(value: number) {
        this.transportStore.setBoatFuelConsumption(value)
      },
    },
    power: {
      get(): number {
        return this.transport.boat.power
      },
      set(value: number) {
        this.transportStore.setBoatPower(value)
      },
    },
    usageHours: {
      get(): number {
        return this.transport.boat.usageHours
      },
      set(value: number) {
        this.transportStore.setBoatUse(value)
      },
    },
    userCount: {
      get(): number {
        return this.transport.boat.userCount
      },
      set(value: number) {
        this.transportStore.setBoatUserCount(value)
      },
    },
    isActive(): boolean {
      return this.transport.activeSection === TransportSections.Boat
    },
    isEnabled(): boolean {
      return this.baseDataStore.submitted
    },
  },
  data() {
    return {
      boatTypes: [
        BoatTypes.None,
        BoatTypes.Sailing,
        BoatTypes.Rowing,
        BoatTypes.MotorAluminum,
        BoatTypes.MotorFiber,
      ],
    }
  },
  methods: {
    boatTitleClicked(id: string) {
      this.$emit('boatTitleClicked', [TransportSections.Boat, id])
    },
  },
})
</script>
