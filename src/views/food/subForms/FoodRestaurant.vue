<template>
  <SubForm
    id="food-restaurant"
    :title="$t('$cafesAndRestaurants')"
    :is-active="isActive"
    :is-enabled="baseDataStore.submitted"
    :summary="$t('$cafesAndRestaurantsSummary')"
    @titleClicked="restaurantTitleClicked"
    calc-info-hash="food"
  >
    <SubFormSection
      :title="$t('$restaurantSpending')"
      title-for="restaurantSpending"
      :no-border="true"
    >
      <IntegerInput
        id="restaurantSpending"
        :max="800"
        :unit="'€/' + $t('$monthShort')"
        v-model.number="restaurantSpending"
      />
    </SubFormSection>
  </SubForm>
</template>

<script lang="ts">
import { useFoodStore } from '@/stores/food/store'
import { FoodSections, IFoodState } from '@/stores/food/types'
import { useBaseDataStore } from '@/stores/startView/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useFoodStore, useBaseDataStore),
    food(): IFoodState {
      return this.foodStore.$state
    },
    restaurantSpending: {
      get(): number {
        return this.food.restaurantSpending
      },
      set(value: number) {
        this.foodStore.setRestaurantSpending(value)
      },
    },
    isActive(): boolean {
      return this.food.activeSection === FoodSections.Restaurant
    },
  },
  methods: {
    restaurantTitleClicked(id: string) {
      if (!this.isActive) {
        this.$emit('restaurantTitleClicked', [FoodSections.Restaurant, id])
      }
    },
  },
})
</script>
