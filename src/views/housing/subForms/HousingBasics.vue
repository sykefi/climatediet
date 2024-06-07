<template>
  <SubForm
    :id="isPrimary ? 'primaryBasics' : 'secondaryBasics'"
    :title="isPrimary ? $t('$primaryHouse') : $t('$secondaryHouse')"
    :summary="
      isPrimary ? $t('$primaryHouseSummary') : $t('$secondaryHouseSummary')
    "
    :is-enabled="baseDataStore.submitted"
    :is-active="isActive"
    @titleClicked="titleClicked"
    calc-info-hash="housing"
  >
    <!-- Secondary house selection -->
    <SubFormSection v-if="!isPrimary" role="radiogroup">
      <div class="radio-item">
        <!-- : for type safety -->
        <input
          id="hasSecondaryHouse"
          name="hasSecondaryHouse"
          required
          type="radio"
          v-model="hasSecondaryHouse"
          :value="true"
        />
        <label for="hasSecondaryHouse">{{ $t('$hasSecondaryHouse') }}</label>
      </div>
      <div class="radio-item">
        <input
          id="noSecondaryHouse"
          name="hasSecondaryHouse"
          required
          type="radio"
          v-model="hasSecondaryHouse"
          :value="false"
        />
        <label for="noSecondaryHouse">{{ $t('$noSecondaryHouse') }}</label>
      </div>
    </SubFormSection>
    <fieldset
      id="secondary-house-checker"
      v-if="isPrimary || hasSecondaryHouse"
    >
      <!-- Housing type selection -->
      <SubFormSection :title="$t('$houseType')" role="radiogroup">
        <div class="radio-item" v-for="option in houseTypes" :key="option">
          <input
            :id="option + 'house'"
            name="houseType"
            required
            type="radio"
            v-model="housingType"
            :value="option"
          />
          <label :for="option + 'house'">
            {{
              (option == 'Family' && !isPrimary ? $t('$cottage') + '/' : '') +
              $t('$houseType' + option)
            }}
          </label>
        </div>
      </SubFormSection>
      <!-- Area input -->
      <SubFormSection :title="$t('$houseArea')" title-for="houseArea">
        <DecimalInput
          id="houseArea"
          :min="10"
          :max="500"
          :decimals="5"
          v-model.number="area"
          :unit="`m\u00B2`"
        />
      </SubFormSection>
      <!-- Secondary house yearly users input -->
      <SubFormSection
        v-if="!isPrimary"
        :title="$t('$secondaryHouseYearlyUsers')"
        title-for="yearlyUsers"
        :footer="$t('$secondaryHouseYearlyUsersDetails')"
      >
        <IntegerInput
          id="yearlyUsers"
          :min="1"
          :max="20"
          v-model.number="yearlyUsers"
        />
      </SubFormSection>
      <!-- Secondary house yearly users input -->
      <SubFormSection
        v-if="!isPrimary"
        :title="$t('$postalCode')"
        title-for="postalCode"
        :footer="$t('$secondaryHousePostalCodeDetails')"
      >
        <input
          id="postalCode"
          type="string"
          maxlength="5"
          minlength="5"
          v-model="postalCode"
          pattern="\d+"
        />
      </SubFormSection>
      <!-- Build year selection -->
      <SubFormSection :title="$t('$houseBuildYear')" title-for="buildYear">
        <IntegerInput
          id="buildYear"
          :min="1900"
          :max="2023"
          v-model.number="buildYear"
        />
      </SubFormSection>
      <!-- Floor count selection -->
      <SubFormSection
        :title="$t('$houseFloorCount')"
        title-for="houseFloors"
        :footer="$t('$floorCountDetails')"
        :no-border="true"
      >
        <IntegerInput
          id="houseFloors"
          :min="1"
          :max="40"
          v-model.number="floors"
        />
      </SubFormSection>
    </fieldset>
  </SubForm>
</template>

<style scoped lang="scss">
#secondary-house-checker {
  border: none;
  padding: 0;
  margin: 0;
}
</style>

<script lang="ts">
import { useHousingStore } from '@/stores/housing/store'
import {
  HouseTypes,
  IHouse,
  Sections,
  WinterHeatingOptions,
} from '@/stores/housing/types'
import { useBaseDataStore } from '@/stores/startView/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useHousingStore, useBaseDataStore),
    house(): IHouse {
      return this.isPrimary
        ? this.housingStore.primaryHouse
        : this.housingStore.secondaryHouse
    },
    housingType: {
      get(): HouseTypes {
        return this.house.type
      },
      set(type: HouseTypes) {
        this.housingStore.setType([this.isPrimary, type])
        if (
          type !== HouseTypes.Family &&
          this.house.heating.winterHeating !== WinterHeatingOptions.Always
        ) {
          // winter heating other than 'Always' are allowed only for Family houses
          this.housingStore.setWinterHeat([
            this.isPrimary,
            WinterHeatingOptions.Always,
          ])
        }
      },
    },
    area: {
      get(): number {
        return this.house.area
      },
      set(value: number) {
        this.housingStore.setArea([this.isPrimary, value])
      },
    },
    buildYear: {
      get(): number {
        return this.house.buildYear
      },
      set(value: number) {
        this.housingStore.setBuildYear([this.isPrimary, value])
      },
    },
    floors: {
      get(): number {
        return this.house.floors
      },
      set(value: number) {
        this.housingStore.setFloorCount([this.isPrimary, value])
      },
    },
    hasSecondaryHouse: {
      get(): boolean {
        return this.housingStore.hasSecondaryHouse
      },
      set(value: boolean) {
        this.housingStore.setSecondHouse(value)
      },
    },
    postalCode: {
      get(): string {
        return this.house.postalCode
      },
      set(value: string) {
        this.housingStore.setPostalCode([this.isPrimary, value])
      },
    },
    yearlyUsers: {
      get(): number {
        return this.house.users
      },
      set(value: number) {
        this.housingStore.setSecondHouseUsers(value)
      },
    },
    isActive(): boolean {
      return (
        this.housingStore.activeSection ===
        (this.isPrimary ? Sections.Base : Sections.SecondaryBase)
      )
    },
  },
  data() {
    return {
      houseTypes: [HouseTypes.Family, HouseTypes.Flat, HouseTypes.Row],
    }
  },
  props: {
    isPrimary: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ['titleClicked'],
  methods: {
    titleClicked(id: string) {
      this.$emit('titleClicked', [
        this.isPrimary ? Sections.Base : Sections.SecondaryBase,
        id,
      ])
    },
  },
  mounted() {
    if (!this.baseDataStore.submitted) {
      return
    }

    if (!this.area && this.isPrimary) {
      this.area = this.housingStore.defaultArea
    }
  },
})
</script>
