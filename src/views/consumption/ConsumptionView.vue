<template>
  <form @submit.prevent="submit()" class="calc-form">
    <SubForm
      :title="$t('$consumption')"
      :summary="$t('$consumptionSummary')"
      :is-active="true"
      :is-enabled="baseDataStore.submitted"
      calc-info-hash="goodsAndServices"
    >
      <button
        type="button"
        :class="{ invisible: !consumptionStore.defaultsChanged }"
        class="reset-button"
        @click="reset"
      >
        {{ $t('$resetToDefaults') }}
      </button>
      <label class="section-title">{{ $t('$goods') }}</label>
      <div class="checkbox-item flipped">
        <input
          id="goods-low-carbon"
          type="checkbox"
          :checked="allGoodsLowCarbon"
          @change="toggleAllGoods"
        />
        <label class="consumption-group" for="goods-low-carbon">
          {{ $t('$lowCarbonGoods') }}
        </label>
        <DetailsButton content-key="$lowCarbonGoodsDetails" />
      </div>
      <RangeInput
        v-for="option in goods"
        :key="option"
        :exponential="true"
        :name="option"
        :max="1000"
        :modelValue="getValue(option)"
        @update:modelValue="updateValue(option, +$event)"
        :unit="'€/' + $t('$monthShort')"
      >
        <div class="checkbox-item low-carbon-choice">
          <input
            :id="option + 'LowCarbon'"
            type="checkbox"
            @change="
              updateLowCarbon(
                option,
                ($event.target as HTMLInputElement).checked
              )
            "
            :checked="getLowCarbon(option)"
          />
          <label
            :for="option + 'LowCarbon'"
            :aria-label="option + ' low carbon preference'"
          />
        </div>
      </RangeInput>
      <label class="section-title" id="low-carbon-services">
        {{ $t('$services') }}
      </label>
      <div class="checkbox-item flipped">
        <input
          id="services-low-carbon"
          type="checkbox"
          :checked="allServicesLowCarbon"
          @change="toggleAllServices"
        />
        <label class="consumption-group" for="services-low-carbon">
          {{ $t('$lowCarbonServices') }}
        </label>
        <DetailsButton content-key="$lowCarbonServicesDetails" />
      </div>
      <RangeInput
        v-for="option in services"
        :key="option"
        :name="option"
        :max="1000"
        :modelValue="getValue(option)"
        @update:modelValue="updateValue(option, +$event)"
        :unit="'€/' + $t('$monthShort')"
      >
        <div class="checkbox-item low-carbon-choice">
          <input
            :id="option + 'LowCarbon'"
            type="checkbox"
            @change="
              updateLowCarbon(
                option,
                ($event.target as HTMLInputElement).checked
              )
            "
            :checked="getLowCarbon(option)"
          />
          <label
            :for="option + 'LowCarbon'"
            :aria-label="option + ' low carbon preference'"
          />
        </div>
      </RangeInput>
      <label id="total">
        {{
          $t('$total') +
          ' ' +
          monthTotal +
          '€/' +
          $t('$monthShort') +
          ', ' +
          yearTotal +
          '€/' +
          $t('$yearLong')
        }}
      </label>
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
        next="waste"
        :store="consumptionStore"
        @close="resultsShown = false"
      />
    </DialogBase>
  </form>
</template>

<style lang="scss" scoped>
#low-carbon-services {
  margin-top: 1em;
}

.low-carbon-choice {
  margin-left: 0.5em;
}

.consumption-group {
  display: inline-flex;
  text-align: right;
  align-items: center;
}

#total {
  font-weight: bold;
  text-align: center;
  display: block;
  margin-top: 1em;
}
</style>

<script lang="ts">
import DialogBase from '@/components/DialogBase.vue'
import ResultBase from '@/components/ResultBase.vue'
import { useConsumptionStore } from '@/stores/consumption/store'
import { ConsumptionFields } from '@/stores/consumption/types'
import { useGlobalStateStore } from '@/stores/global/store'
import { useBaseDataStore } from '@/stores/startView/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ResultBase,
    DialogBase,
  },
  computed: {
    ...mapStores(useConsumptionStore, useGlobalStateStore, useBaseDataStore),
    allGoodsLowCarbon(): boolean {
      return this.consumptionStore.allGoodsLowCarbon
    },
    allServicesLowCarbon(): boolean {
      return this.consumptionStore.allServicesLowCarbon
    },
    monthTotal(): number {
      return this.consumptionStore.monthTotal
    },
    submitEnabled(): boolean {
      return this.baseDataStore.submitted && !this.globalStateStore.busy
    },
    yearTotal(): number {
      return this.monthTotal * 12
    },
  },
  data() {
    return {
      goods: [
        ConsumptionFields.Clothing,
        ConsumptionFields.Shoes,
        ConsumptionFields.Electronics,
        ConsumptionFields.Paper,
      ],
      services: [
        ConsumptionFields.Recreation,
        ConsumptionFields.Communications,
        ConsumptionFields.Restaurants,
        ConsumptionFields.Other,
      ],
      resultsShown: false,
    }
  },
  methods: {
    getValue(field: ConsumptionFields) {
      return this.consumptionStore.consumptionValue(field)
    },
    getLowCarbon(field: ConsumptionFields) {
      return this.consumptionStore.lowCarbon(field)
    },
    async submit() {
      try {
        if (
          !this.consumptionStore.submitted ||
          this.consumptionStore.unSavedChanges
        ) {
          await this.consumptionStore.submit()
        }
        this.resultsShown = true
      } catch (error) {
        console.error(error)
      }
    },
    reset() {
      this.consumptionStore.resetLevels()
    },
    toggleAllGoods() {
      const current = this.allGoodsLowCarbon
      for (const field of this.goods) {
        this.updateLowCarbon(field, !current)
      }
    },
    toggleAllServices() {
      const current = this.allServicesLowCarbon
      for (const field of this.services) {
        this.updateLowCarbon(field, !current)
      }
    },
    updateValue(field: ConsumptionFields, value: number) {
      this.consumptionStore.setValue([field, value])
    },
    updateLowCarbon(field: ConsumptionFields, value: boolean) {
      this.consumptionStore.setLowCarbon([field, value])
    },
  },
})
</script>
