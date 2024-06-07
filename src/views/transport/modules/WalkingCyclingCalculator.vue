<template>
  <div>
    <p>{{ $t('$walkingCyclingCalculatorIntro') }}</p>
    <div id="calc-base">
      <button
        @click.prevent="walking = true"
        class="large"
        :class="{ active: walking }"
      >
        {{ $t('$walking') }}
      </button>
      <button
        @click.prevent="walking = false"
        class="large"
        :class="{ active: !walking }"
      >
        {{ $t('$cycling') }}
      </button>
      <RangeInput
        :max="walking ? 34 : 95"
        name
        v-model.number="distance"
        :unit="'km/' + $t('$weekLong')"
      />
      {{
        $t('$walkingCyclingCalculatorResults', {
          distance,
          to: $t(walking ? '$toWalking' : '$toCycling'),
          cigarettes,
          carbon,
        })
      }}
    </div>
    <p class="wrapped-text">
      {{ $t('$walkingCyclingCalculatorDetails') }}
    </p>
    <p>
      {{ $t('$walkingCyclingCalculatorCalcInfo') }}
      <router-link
        :to="{ name: 'calculationInfo', hash: '#transportWalkingCycling' }"
      >
        {{ $t('$inCalculationInfo') }}
      </router-link>
    </p>
  </div>
</template>

<style lang="scss" scoped>
#calc-base {
  background: white;
  border: 1px solid gray;
  padding: 1em;
}
</style>

<script lang="ts">
import { useTransportStore } from '@/stores/transport/store'
import { ITransportStoreState } from '@/stores/transport/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useTransportStore),
    transport(): ITransportStoreState {
      return this.transportStore.$state
    },
    cigarettes(): number {
      if (!this.distance) {
        return 0
      }
      const constant = this.walking ? 1.23 : 2.33
      return Math.round(
        Math.log(1 + this.distance / constant / 100) / 0.003377846
      )
    },
    carbon(): number {
      let multiplier
      if (this.transport.cars.length === 0) {
        multiplier = 0.13
      } else {
        const carDistance = this.transport.cars[0].driveDistance
        multiplier = this.transport.carResults[0].result / carDistance
      }

      return Math.round(multiplier * this.distance * 52)
    },
    distance: {
      get(): number {
        return this.walking ? this.walkingDistance : this.cyclingDistance
      },
      set(value: number) {
        if (this.walking) {
          this.walkingDistance = value
        } else {
          this.cyclingDistance = value
        }
      },
    },
  },
  data() {
    return {
      walkingDistance: 0,
      cyclingDistance: 0,
      walking: true,
    }
  },
})
</script>
