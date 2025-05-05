<template>
  <SubForm
    id="transport-car"
    :title="$t('$carAndMotorcycle')"
    :summary="$t('$carAndMotorcycleSummary')"
    :is-active="isActive"
    :is-enabled="isEnabled"
    @titleClicked="carTitleClicked"
    calc-info-hash="transportCar"
  >
    <h4>{{ $t('$excludeWorkTrips') }}</h4>
    <div>
      <div>
        <label class="section-title">{{ $t('$cars') }}</label>
        <div class="car-section" v-for="car in cars" :key="car.order">
          <div>
            <label class="section-title car-index">
              {{ $t('$car') + ' ' + car.order }}
            </label>
            <button
              type="button"
              class="remove-car"
              @click.prevent="removeCar(car.order)"
            >
              x
            </button>
          </div>
          <CarSection :order="car.order" />
          <CarDetailsSection :order="car.order" />
        </div>
        <button
          type="button"
          class="button-primary"
          @click.prevent="addCar"
          v-if="cars.length < 4"
        >
          {{ $t('$addCar') }}
        </button>
      </div>

      <SubFormSection :title="$t('$motorcycle')" :no-border="true">
        <button
          type="button"
          class="button-primary"
          @click.prevent="addMotorcycle"
          v-if="!motorcycle"
        >
          {{ $t('$addMotorcycle') }}
        </button>
        <div v-if="motorcycle">
          <label class="inner-label" for="motorcycle-distance">
            {{ $t('$driveDistance') }}
          </label>
          <IntegerInput
            id="motorcycle-distance"
            :max="60000"
            :unit="'km/' + $t('$yearLong')"
            v-model.number="motorcycleDistance"
          />
        </div>
        <div v-if="motorcycle">
          <label class="inner-label" for="motorcycle-fuel">
            {{ $t('$fuelConsumption') }}
          </label>
          <IntegerInput
            id="motorcycle-fuel"
            :max="10"
            unit="l/km"
            v-model.number="motorcycleFuelConsumption"
          />
        </div>
      </SubFormSection>
    </div>
  </SubForm>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/style.scss' as *;

.car-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid $line-light;
}

.car-index {
  display: block;
  margin: 0.5em 0 0 0;
  text-transform: none;
}

.remove-car {
  background: red;
  color: white;
  height: 1.5em;
  width: 1.5em;
  border-radius: 1em;
  text-align: center;
  font-weight: $semi-bold;
  text-transform: none;
  padding: 0;
  margin: 0;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import CarDetailsSection from '../modules/CarDetailsSection.vue'
import CarSection from '../modules/CarSection.vue'
import { mapStores } from 'pinia'
import { useTransportStore } from '@/stores/transport/store'
import {
  ICarData,
  IMotorcycleData,
  ITransportStoreState,
  TransportSections,
} from '@/stores/transport/types'
import { useBaseDataStore } from '@/stores/startView/store'

export default defineComponent({
  components: { CarSection, CarDetailsSection },
  computed: {
    ...mapStores(useTransportStore, useBaseDataStore),
    cars(): ICarData[] {
      return this.transportStore.cars
    },
    motorcycle(): IMotorcycleData | null {
      return this.transportStore.motorcycle
    },
    motorcycleDistance: {
      get(): number {
        return this.motorcycle ? this.motorcycle.driveDistance : 0
      },
      set(value: number) {
        this.transportStore.setMotorcycleDistance(value)
      },
    },
    motorcycleFuelConsumption: {
      get(): number {
        return this.motorcycle ? this.motorcycle.fuelConsumption : 0
      },
      set(value: number) {
        this.transportStore.setMotorcycleFuelConsumption(value)
      },
    },
    transport(): ITransportStoreState {
      return this.transportStore.$state
    },
    isActive(): boolean {
      return this.transport.activeSection === TransportSections.Car
    },
    isEnabled(): boolean {
      return this.baseDataStore.submitted
    },
  },
  methods: {
    addCar() {
      this.transportStore.addCar()
    },
    addMotorcycle() {
      this.transportStore.addMotorcycle()
    },
    removeCar(order: number) {
      this.transportStore.removeCar(order)
    },
    carTitleClicked(id: string) {
      this.$emit('carTitleClicked', [TransportSections.Car, id])
    },
  },
})
</script>
