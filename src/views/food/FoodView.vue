<template>
  <form ref="form" @submit.prevent="submit()" class="calc-form">
    <FoodDiet @dietTitleClicked="changeSection" />
    <FoodConsumption @consumptionTitleClicked="changeSection" />
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
        v-if="resultsShown"
        next="transport"
        :store="foodStore"
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
import FoodConsumption from './subForms/FoodConsumption.vue'
import FoodDiet from './subForms/FoodDiet.vue'
import { mapStores } from 'pinia'
import { useFoodStore } from '@/stores/food/store'
import { useBaseDataStore } from '@/stores/startView/store'
import { useGlobalStateStore } from '@/stores/global/store'
import { FoodSections } from '@/stores/food/types'
import { useResultsComparisonStore } from '@/stores/results/store'
import { useHousingStore } from '@/stores/housing/store'

export default defineComponent({
  components: {
    FoodConsumption,
    FoodDiet,
    ResultBase,
    DialogBase,
  },
  computed: {
    ...mapStores(
      useFoodStore,
      useBaseDataStore,
      useGlobalStateStore,
      useResultsComparisonStore,
      useHousingStore
    ),
    submitEnabled(): boolean {
      return this.baseDataStore.submitted && !this.globalStateStore.busy
    },
  },
  data() {
    return {
      resultsShown: false,
    }
  },
  methods: {
    async changeSection(payload: [FoodSections, string]) {
      const targetSection = payload[0]
      const form = this.$refs.form as HTMLFormElement
      if (validateForm(form)) {
        this.foodStore.setActiveSection(targetSection)
      }
      this.$nextTick(() => {
        scrollToElement(payload[1])
      })
    },
    async submit() {
      try {
        if (!this.foodStore.submitted || this.foodStore.unSavedChanges) {
          await this.foodStore.submit()
          this.resultsComparisonStore.setDietAverage({
            withSecondaryHouse: this.housingStore.hasSecondaryHouse,
            diet: this.foodStore.diet,
          })
        }
        this.resultsShown = true
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>
