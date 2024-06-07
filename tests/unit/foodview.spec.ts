import i18n from '@/locale/i18n'
import router from '@/router'
import FoodView from '@/views/food/FoodView.vue'
import SubForm from '@/components/forms/SubForm.vue'
import SubFormSection from '@/components/forms/SubFormSection.vue'
import DetailsButton from '@/components/forms/DetailsButton.vue'
import IntegerInput from '@/components/forms/IntegerInput.vue'

import { assert, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { fakeApi } from '../testutils'
import { createPinia } from 'pinia'
import { useFoodStore } from '@/stores/food/store'
import { Diets, FoodSections } from '@/stores/food/types'
import { useGlobalStateStore } from '@/stores/global/store'

describe('FoodView', () => {
  const vm = mount(FoodView, {
    global: {
      components: { DetailsButton, SubForm, SubFormSection, IntegerInput },
      plugins: [createPinia(), router, i18n],
    },
  })
  const foodStore = useFoodStore()
  it('loads properly', () => {
    expect(FoodView).toBeTruthy()
  })
  it('shows 8 options for omnivore diet', async () => {
    await foodStore.setActiveSection(FoodSections.Consumption)
    await foodStore.setDiet(Diets.Omnivore)
    assert.equal(
      vm.findAll('.range-item').length,
      8,
      'Omnivore diet did not have 8 sliders'
    )
  })
  it('shows 5 options for vegetarian diet', async () => {
    await foodStore.setActiveSection(FoodSections.Consumption)
    await foodStore.setDiet(Diets.Vegetarian)
    assert.equal(
      vm.findAll('.range-item').length,
      5,
      'Vegetarian diet did not have 5 sliders'
    )
  })
  it('shows 2 options for vegan diet', async () => {
    await foodStore.setActiveSection(FoodSections.Consumption)
    await foodStore.setDiet(Diets.Vegan)
    assert.equal(
      vm.findAll('.range-item').length,
      2,
      'Vegan diet did not have 2 sliders'
    )
  }),
    it('handles the submit correctly', async () => {
      const globalStore = useGlobalStateStore()

      assert.equal(foodStore.id, 0)
      assert.equal(foodStore.restaurantResult, 0)
      assert.equal(foodStore.meatResult, 0)
      assert.equal(foodStore.plantResult, 0)
      assert.equal(foodStore.dairyResult, 0)
      assert.equal(foodStore.totalResult, 0)

      fakeApi.onPost('/food/' + globalStore.testInstanceId).reply(200, {
        id: 2,
        result: {
          meat: 1000,
          plant: 200,
          dairy: 600,
          restaurant: 1000,
          total: 2800,
        },
      })
      await foodStore.submit()
      assert.equal(foodStore.id, 2, 'Id mismatch')
      assert.equal(foodStore.meatResult, 1000, 'Meat result mismatch')
      assert.equal(foodStore.dairyResult, 600, 'Dairy result mismatch')
      assert.equal(foodStore.plantResult, 200, 'Plant result mismatch')
      assert.equal(
        foodStore.restaurantResult,
        1000,
        'Restaurant result mismatch'
      )
      assert.equal(foodStore.totalResult, 2800, 'Total result mismatch')
    })
})
