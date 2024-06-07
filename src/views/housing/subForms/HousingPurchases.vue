<template>
  <SubForm
    :id="isPrimary ? 'primaryPurchases' : 'secondaryPurchases'"
    :title="
      isPrimary ? $t('$primaryHousePurchases') : $t('$secondaryHousePurchases')
    "
    :summary="
      $t('$' + (isPrimary ? 'primary' : 'secondary') + 'HousePurchasesSummary')
    "
    :is-active="isActive"
    :is-enabled="isEnabled"
    :is-nested="!isPrimary"
    :is-visible="isVisible"
    @titleClicked="titleClicked"
    calc-info-hash="housingPurchases"
  >
    <button
      type="button"
      :class="{ invisible: !purchases.defaultsChanged }"
      id="reset-button"
      @click="reset"
    >
      {{ $t('$resetToDefaults') }}
    </button>
    <RangeInput
      name="furniture"
      :exponential="true"
      :max="10000"
      v-model.number="furniture"
      :unit="'€/' + $t('$yearLong')"
    />
    <RangeInput
      name="appliances"
      :exponential="true"
      :max="10000"
      v-model.number="appliances"
      :unit="'€/' + $t('$yearLong')"
    />
    <RangeInput
      name="miscPurchases"
      :exponential="true"
      :max="10000"
      v-model.number="misc"
      :unit="'€/' + $t('$yearLong')"
    />
    <RangeInput
      name="renovations"
      :exponential="true"
      :max="50000"
      v-model.number="renovations"
      :unit="'€/' + $t('$yearLong')"
    />
    <RangeInput
      name="cleaning"
      :exponential="true"
      :max="10000"
      v-model.number="cleaning"
      :unit="'€/' + $t('$yearLong')"
    />
    <label id="purchase-sum">
      {{ $t('$total') + ' ' + total + '€/' + $t('$yearLong') }}
    </label>
  </SubForm>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
#purchase-sum {
  font-weight: bold;
  text-align: center;
  display: block;
  margin-top: 1em;
}
.range-item {
  clear: both;
  border-bottom: 1px solid $line-light;
}
</style>

<script lang="ts">
import { useHousingStore } from '@/stores/housing/store'
import { IPurchaseData, Sections } from '@/stores/housing/types'
import { useBaseDataStore } from '@/stores/startView/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useHousingStore, useBaseDataStore),
    purchases(): IPurchaseData {
      return this.isPrimary
        ? this.housingStore.primaryHouse.purchases
        : this.housingStore.secondaryHouse.purchases
    },
    appliances: {
      get(): number {
        return this.purchases.appliances
      },
      set(value: number) {
        this.housingStore.setPurchAppliances([this.isPrimary, value])
      },
    },
    cleaning: {
      get(): number {
        return this.purchases.cleaning
      },
      set(value: number) {
        this.housingStore.setPurhCleaning([this.isPrimary, value])
      },
    },
    furniture: {
      get(): number {
        return this.purchases.furniture
      },
      set(value: number) {
        this.housingStore.setPurhFurniture([this.isPrimary, value])
      },
    },
    misc: {
      get(): number {
        return this.purchases.misc
      },
      set(value: number) {
        this.housingStore.setPurchMisc([this.isPrimary, value])
      },
    },
    renovations: {
      get(): number {
        return this.purchases.renovations
      },
      set(value: number) {
        this.housingStore.setPurchRenovations([this.isPrimary, value])
      },
    },
    isActive(): boolean {
      return this.housingStore.activeSection === this.section
    },
    isEnabled(): boolean {
      return (
        this.baseDataStore.submitted &&
        (this.isPrimary || this.housingStore.hasSecondaryHouse)
      )
    },
    isVisible(): boolean {
      return (
        this.isPrimary || this.isActive || this.housingStore.hasSecondaryHouse
      )
    },
    section(): Sections {
      return this.isPrimary ? Sections.Purchases : Sections.SecondaryPurchases
    },
    total(): number {
      return this.isPrimary
        ? this.housingStore.totalPurchases
        : this.housingStore.totalPurchasesSecondary
    },
  },
  emits: ['titleClicked'],
  methods: {
    titleClicked(id: string) {
      if (!this.isActive) {
        if (!this.purchases.defaultsChanged) {
          this.reset()
        }
        this.$emit('titleClicked', [this.section, id])
      }
    },
    reset() {
      this.housingStore.resetPurchases([
        this.isPrimary,
        this.baseDataStore.adultCount + this.baseDataStore.childCount,
      ])
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
