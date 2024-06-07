<template>
  <form
    ref="form"
    class="calc-form"
    @submit.prevent="submit"
    :disabled="formIsDisabled"
  >
    <HousingBasics @titleClicked="changeSection" />
    <HousingHeating @titleClicked="changeSection" />
    <HousingElectricity @titleClicked="changeSection" />
    <HousingPurchases @titleClicked="changeSection" />
    <HousingBasics :is-primary="false" @titleClicked="changeSection" />
    <HousingWinterHeating :is-primary="false" @titleClicked="changeSection" />
    <HousingHeating :is-primary="false" @titleClicked="changeSection" />
    <HousingElectricity :is-primary="false" @titleClicked="changeSection" />
    <HousingPurchases :is-primary="false" @titleClicked="changeSection" />
    <div class="action-wrapper">
      <input
        type="submit"
        :value="$t('$calculateResults')"
        class="button-primary"
        :disabled="!submitEnabled ? true : undefined"
      />
    </div>
    <DialogBase v-if="resultsShown">
      <ResultBase
        next="food"
        :store="housingStore"
        :buttons="
          housingStore.hasSecondaryHouse
            ? ['total', 'primaryHouse', 'secondaryHouse']
            : []
        "
        @close="resultsShown = false"
      />
    </DialogBase>
  </form>
</template>

<script lang="ts">
import DialogBase from '@/components/DialogBase.vue'
import ResultBase from '@/components/ResultBase.vue'
import { scrollToElement, validateForm } from '@/utilities/utils'
import { defineComponent } from 'vue'
import HousingBasics from './subForms/HousingBasics.vue'
import HousingElectricity from './subForms/HousingElectricity.vue'
import HousingHeating from './subForms/HousingHeating.vue'
import HousingPurchases from './subForms/HousingPurchases.vue'
import HousingWinterHeating from './subForms/HousingWinterHeating.vue'
import { mapStores } from 'pinia'
import { useHousingStore } from '@/stores/housing/store'
import { HeatingModes, IHousingState, Sections } from '@/stores/housing/types'
import { useBaseDataStore } from '@/stores/startView/store'
import { useGlobalStateStore } from '@/stores/global/store'
import { useResultsComparisonStore } from '@/stores/results/store'
import { useFoodStore } from '@/stores/food/store'

export default defineComponent({
  components: {
    HousingBasics,
    HousingElectricity,
    HousingHeating,
    HousingPurchases,
    HousingWinterHeating,
    ResultBase,
    DialogBase,
  },
  computed: {
    ...mapStores(
      useHousingStore,
      useBaseDataStore,
      useGlobalStateStore,
      useResultsComparisonStore,
      useFoodStore
    ),
    housing(): IHousingState {
      return this.housingStore.$state
    },
    submitEnabled(): boolean {
      const secondHouseReady =
        !this.housing.hasSecondaryHouse ||
        this.housing.secondaryHouse.heating.mainMode !== HeatingModes.None
      return (
        this.baseDataStore.submitted &&
        !this.globalStateStore.busy &&
        this.housing.primaryHouse.heating.mainMode !== HeatingModes.None &&
        secondHouseReady
      )
    },
    formIsDisabled(): boolean | undefined {
      return !this.baseDataStore.submitted ? true : undefined
    },
  },
  data() {
    return {
      resultsShown: false,
    }
  },
  methods: {
    async changeSection(payload: [Sections, string]) {
      const targetSection = payload[0]
      const form = this.$refs.form as HTMLFormElement
      const isDisabled = !!form.attributes.getNamedItem('disabled')
      if (isDisabled) {
        this.housingStore.setActiveSection(targetSection)
        return
      }
      const isValid = validateForm(form)
      const housing: IHousingState = this.housingStore.$state
      const currentSection: Sections = housing.activeSection

      const sectionsNeedingSaves = [
        Sections.Base,
        Sections.SecondaryBase,
        Sections.Heating,
        Sections.WinterHeating,
        Sections.SecondaryHeating,
      ]

      if (!isValid) {
        return
      }

      if (sectionsNeedingSaves.indexOf(currentSection) === -1) {
        // if we are on a section that does not require immediate action, proceed directly to the next section

        this.housingStore.setActiveSection(targetSection)
      } else {
        /**
         * these sections (base, heating) need to be saved so that the others can use their results in estimates
         */
        try {
          await this.saveCurrentSection()
          console.log(targetSection)
          const waitHeating =
            targetSection === Sections.Heating ||
            targetSection === Sections.SecondaryHeating
          const waitElectricity =
            targetSection === Sections.Electricity ||
            targetSection === Sections.SecondaryElectricity
          await this.updateEstimates(waitHeating, waitElectricity)

          this.housingStore.setSaved()
          this.housingStore.setActiveSection(targetSection)
        } catch (error) {
          console.error(error)
        }
      }

      this.$nextTick(() => {
        scrollToElement(payload[1])
      })
    },
    async submit() {
      try {
        if (!this.housingStore.submitted || this.housingStore.unSavedChanges) {
          await this.saveCurrentSection()
          await this.updateEstimates(true, true)

          await this.housingStore.submit()
          this.housingStore.setSaved()
          this.housingStore.setSubmitted(true)

          // have to trigger these here in case secondary house status changes
          // needs to be optimized
          this.resultsComparisonStore.setPostalCodeAverage({
            withSecondaryHouse: this.housingStore.hasSecondaryHouse,
            postalCode: this.baseDataStore.postalCode,
          })
          this.resultsComparisonStore.setFamilySizeAverage({
            withSecondaryHouse: this.housingStore.hasSecondaryHouse,
            familySize:
              this.baseDataStore.adultCount + this.baseDataStore.childCount,
          })
          this.resultsComparisonStore.setIncomeAverage({
            withSecondaryHouse: this.housingStore.hasSecondaryHouse,
            income: this.baseDataStore.yearlyIncome,
          })
          if (this.foodStore.submitted) {
            this.resultsComparisonStore.setDietAverage({
              withSecondaryHouse: this.housingStore.hasSecondaryHouse,
              diet: this.foodStore.diet,
            })
          }
        }
        this.resultsShown = true
      } catch (error) {
        console.error(error)
      }
    },
    async updateEstimates(
      waitHeatingResult: boolean,
      waitElectricityResults: boolean
    ) {
      const housing: IHousingState = this.housingStore.$state
      const currentSection: Sections = housing.activeSection

      const isPrimary =
        currentSection === Sections.Base || currentSection === Sections.Heating
      const house = isPrimary ? housing.primaryHouse : housing.secondaryHouse
      const heat = house.heating
      const electricity = house.electricity

      if (house.id === 0) {
        return
      }

      if (
        house.unSavedChanges ||
        (currentSection === Sections.WinterHeating && heat.unSavedChanges)
      ) {
        const updateDistrictConsumption =
          heat.mainMode === HeatingModes.District &&
          heat.districtConsumption > 0 &&
          heat.districtConsumption === heat.districtEstimate

        const updateOilConsumption =
          heat.mainMode === HeatingModes.Oil &&
          heat.oilConsumption > 0 &&
          heat.oilConsumption === heat.oilEstimate

        if (waitHeatingResult) {
          await this.housingStore.districtEstimate([
            isPrimary,
            updateDistrictConsumption,
          ])
          await this.housingStore.oilEstimate([isPrimary, updateOilConsumption])
        } else {
          this.housingStore.districtEstimate([
            isPrimary,
            updateDistrictConsumption,
          ])
          this.housingStore.oilEstimate([isPrimary, updateOilConsumption])
        }
      }

      // get electricity estimate only if the values affecting it have changed
      if (
        heat.mainMode !== HeatingModes.None &&
        (heat.unSavedChanges || house.unSavedChanges)
      ) {
        const updateCons = electricity.consumption === electricity.estimate
        if (waitElectricityResults) {
          await this.housingStore.electricityEstimate([isPrimary, updateCons])
        } else {
          this.housingStore.electricityEstimate([isPrimary, updateCons])
        }
      }
    },
    async saveCurrentSection() {
      if (this.housingStore.sectionUnsavedChanges) {
        await this.housingStore.submit()
      }
    },
  },
  mounted() {
    if (this.housing.primaryHouse.id === 0) {
      this.housingStore.setActiveSection(Sections.Base)
    }
  },
})
</script>
