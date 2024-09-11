<template>
  <SubForm
    id="food-diet"
    :title="$t('$diet')"
    :is-active="isActive"
    :is-enabled="baseDataStore.submitted"
    @titleClicked="dietTitleClicked"
    :summary="$t('$dietSummary')"
    calc-info-hash="food"
  >
    <SubFormSection :title="$t('$diet')" :no-border="true" role="radiogroup">
      <div class="radio-item" v-for="option in diets" :key="option">
        <input
          :id="'diet' + option"
          type="radio"
          v-model="diet"
          :value="option"
        />
        <label :for="'diet' + option">{{ $t('$diet' + option) }}</label>
      </div>
    </SubFormSection>
  </SubForm>
</template>

<script lang="ts">
import { useFoodStore } from '@/stores/food/store'
import { Diets, FoodSections, IFoodState } from '@/stores/food/types'
import { useBaseDataStore } from '@/stores/startView/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useFoodStore, useBaseDataStore),
    food(): IFoodState {
      return this.foodStore.$state
    },
    diet: {
      get(): Diets {
        return this.food.diet
      },
      set(value: Diets) {
        this.foodStore.setDiet(value)
      },
    },
    isActive(): boolean {
      return this.food.activeSection === FoodSections.Diet
    },
  },
  data() {
    return {
      diets: [Diets.Vegan, Diets.Vegetarian, Diets.Mixed],
    }
  },
  methods: {
    dietTitleClicked(id: string) {
      if (!this.isActive) {
        this.$emit('dietTitleClicked', [FoodSections.Diet, id])
      }
    },
  },
})
</script>
