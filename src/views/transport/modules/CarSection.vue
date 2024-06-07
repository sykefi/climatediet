<template>
  <div class="car-wrapper">
    <div>
      <label :for="'drive-distance-' + order" class="car-label">
        {{ $t('$driveDistance') }}
      </label>
      <IntegerInput
        :id="'drive-distance-' + order"
        :max="120000"
        :unit="'km/' + $t('$yearLong')"
        v-model.number.lazy="driveDistance"
      />
    </div>
    <div>
      <label :for="'passenger-count-' + order" class="car-label">
        {{ $t('$passengerCount') }}
      </label>
      <DecimalInput
        :id="'passenger-count-' + order"
        :min="1"
        :max="10"
        v-model="passengerCount"
      />
    </div>
    <div class="checkbox-item car-label">
      <input :id="'shared-car' + order" type="checkbox" v-model="shared" />
      <label :for="'shared-car' + order">{{ $t('$sharedCar') }}</label>
      <DetailsButton content-key="$sharedCarDetails" />
    </div>
    <button
      type="button"
      class="car-details-button"
      @click.prevent="addDetails"
      v-if="!car.detailsAdded"
    >
      {{ $t('$addCarDetails') }}
    </button>
    <button
      type="button"
      class="car-details-button"
      @click.prevent="removeDetails"
      v-else
    >
      {{ $t('$removeCarDetails') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
footer {
  font-size: $font-size-s;
  color: $text-semidark;
}

.car-details-button {
  margin-left: 0;
}

.car-wrapper {
  display: inline-block;
}

.car-label {
  font-size: $font-size-m;
  width: 11em;
  display: inline-block;
}
</style>

<script lang="ts">
import { useTransportStore } from '@/stores/transport/store'
import { ICarData } from '@/stores/transport/types'
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
    driveDistance: {
      get(): number {
        return this.car.driveDistance
      },
      set(value: number) {
        this.transportStore.setCarDistance([this.order, value])
      },
    },
    passengerCount: {
      get(): number {
        return this.car.passengerCount
      },
      set(value: number) {
        // value is actually a string because we can't use v_model.number for localized decimals, but type must be number here for TS
        let str = value.toString()
        if (str) {
          str = str.replace(',', '.')
          this.transportStore.setCarPassengerCount([
            this.order,
            parseFloat(str),
          ])
        }
      },
    },
    shared: {
      get(): boolean {
        return this.car.shared
      },
      set(value: boolean) {
        this.transportStore.setCarShare([this.order, value])
      },
    },
  },

  methods: {
    addDetails() {
      this.transportStore.setCarDetails([this.order, true])
    },
    removeDetails() {
      this.transportStore.setCarDetails([this.order, false])
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
