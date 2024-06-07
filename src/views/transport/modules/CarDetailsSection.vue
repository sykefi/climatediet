<template>
  <div class="car-details" v-if="car.detailsAdded">
    <footer>{{ $t('$carDetailsSummary') }}</footer>
    <SubFormSection
      :title="$t('$carSize')"
      title-for="carSize"
      :details-content-key="$t('$carSizeDetails')"
      :lower-case="true"
    >
      <select id="carSize" v-model="size">
        <option v-for="(option, index) in sizes" :key="index" :value="option">
          {{ $t('$carSize' + option) }}
        </option>
      </select>
    </SubFormSection>
    <SubFormSection
      :title="$t('$buildYear')"
      title-for="buildYear"
      :lower-case="true"
    >
      <select id="buildYear" v-model.number="buildYear">
        <option value="2003">
          {{ '2003' + $t('$orEarlier') }}
        </option>
        <option v-for="(option, index) in years" :key="index">
          {{ option }}
        </option>
        <option value="2013">
          {{ '2013' + $t('$orLater') }}
        </option>
      </select>
    </SubFormSection>
    <SubFormSection
      :title="$t('$carFuel')"
      title-for="carFuel"
      :footer="car.fuelDetailsAdded ? '' : $t('$carFuelDetails')"
      :lower-case="true"
      :no-border="true"
    >
      <select id="carFuel" v-model="fuel">
        <option v-for="(option, index) in fuels" :key="index" :value="option">
          {{ $t('$carFuel' + option) }}
        </option>
        <option value="None">
          {{ $t('$carFuelDetailed') }}
        </option>
      </select>
    </SubFormSection>
    <div class="fuel-details" v-if="car.fuelDetailsAdded">
      <SubFormSection
        :title="$t('$fuelDetailsInputMode')"
        :no-border="true"
        role="radiogroup"
      >
        <div class="radio-item">
          <input
            id="as-percentage"
            type="radio"
            v-model="fuelDetailsAsPercentage"
            :value="true"
          />
          <label for="as-percentage">{{ $t('$asPercentage') }}</label>
        </div>
        <div class="radio-item">
          <input
            id="as-consumption"
            type="radio"
            v-model="fuelDetailsAsPercentage"
            :value="false"
          />
          <label for="as-consumption">{{ $t('$asConsumption') }}</label>
        </div>
      </SubFormSection>
      <div v-for="option in fuelDetails" :key="option.fuelName + order">
        <label :for="option.fuelName + order" class="fuel-detail-label">
          {{ $t('$carFuel' + option.fuelName) }}
        </label>
        <div class="fuel-details-wrapper" v-if="fuelDetailsAsPercentage">
          <input
            :id="option.fuelName + order"
            type="number"
            pattern="\d*"
            min="0"
            max="100"
            :value="option.percentage"
            @change="
              updateFuelPercentage(
                option.fuelName,
                +($event.target as HTMLInputElement).value
              )
            "
          />
          <span class="field-unit">
            % =
            {{ ((option.percentage / 100) * car.driveDistance).toFixed(0) }}
            km
          </span>
        </div>
        <div class="fuel-details-wrapper" v-else>
          <input
            type="number"
            pattern="\d*"
            min="0"
            max="10000"
            :value="option.consumption"
            @input="
              updateFuelConsumption(
                option.fuelName,
                +($event.target as HTMLInputElement).value
              )
            "
          />
          <span class="field-unit">
            {{
              (option.fuelName != 'Electricity' &&
              option.fuelName != 'GreenElectricity'
                ? 'l'
                : 'kWh') +
              '/' +
              $t('$yearLong')
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.car-details {
  background: $form-custom-background;
  padding: 1em;
  width: 100%;
}

.fuel-details {
  .fuel-detail-label {
    width: $label-min-width;
    display: inline-block;
    font-weight: $semi-bold;
  }
}

.fuel-details-wrapper {
  display: inline-block;
}
</style>

<script lang="ts">
import { useTransportStore } from '@/stores/transport/store'
import { Fuels, ICarData, IFuelDetails, Sizes } from '@/stores/transport/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useTransportStore),
    car(): ICarData {
      const car = (this.transportStore.cars as ICarData[]).find(
        (c) => c.order === this.order
      )
      if (car) {
        return car
      } else {
        throw new Error('Car not found')
      }
    },
    buildYear: {
      get(): number {
        return this.car.buildYear
      },
      set(value: number) {
        this.transportStore.setCarBuildYear([this.order, value])
      },
    },
    fuel: {
      get(): Fuels {
        return this.car.fuel
      },
      set(value: Fuels) {
        this.transportStore.setCarFuel([this.order, value])
      },
    },
    fuelDetails(): IFuelDetails[] {
      return this.car.fuelDetails
    },
    fuelDetailsAsPercentage: {
      get(): boolean {
        return this.car.fuelDetailsAsPercentage
      },
      set(value: boolean) {
        this.transportStore.setCarFuelsUsePercentage([this.order, value])
      },
    },
    size: {
      get(): Sizes {
        return this.car.size
      },
      set(value: Sizes) {
        this.transportStore.setCarSize([this.order, value])
      },
    },
  },
  data() {
    return {
      fuels: [
        Fuels.Gasoline,
        Fuels.Diesel,
        Fuels.EthanolMix,
        Fuels.Electricity,
        Fuels.GreenElectricity,
        Fuels.BioGas,
        Fuels.GroundGas,
      ],
      sizes: [
        Sizes.Mini,
        Sizes.Small,
        Sizes.SmallFamily,
        Sizes.MediumFamily,
        Sizes.LargeFamily,
        Sizes.Large,
      ],
      years: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
    }
  },
  methods: {
    updateFuelPercentage(fuel: Fuels, percentage: number) {
      this.transportStore.setCarFuelPercentage([this.order, fuel, percentage])
    },
    updateFuelConsumption(fuel: Fuels, consumption: number) {
      this.transportStore.setCarFuelConsumption([this.order, fuel, consumption])
    },
  },
  props: {
    order: {
      type: Number,
      required: true,
    },
  },
})
</script>
