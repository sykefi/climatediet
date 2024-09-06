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
  it('shows 33 options for mixed diet', async () => {
    await foodStore.setActiveSection(FoodSections.Consumption)
    await foodStore.setDiet(Diets.Mixed)
    assert.equal(
      vm.findAll('.range-item').length,
      33,
      'Mixed diet did not have 33 sliders'
    )
  })
  it('shows 33 options for vegetarian diet', async () => {
    await foodStore.setActiveSection(FoodSections.Consumption)
    await foodStore.setDiet(Diets.Vegetarian)
    assert.equal(
      vm.findAll('.range-item').length,
      33,
      'Vegetarian diet did not have 33 sliders'
    )
  })
  it('shows 33 options for vegan diet', async () => {
    await foodStore.setActiveSection(FoodSections.Consumption)
    await foodStore.setDiet(Diets.Vegan)
    assert.equal(
      vm.findAll('.range-item').length,
      33,
      'Vegan diet did not have 33 sliders'
    )
  }),
    it('handles the submit correctly', async () => {
      const globalStore = useGlobalStateStore()

      assert.equal(foodStore.id, 0)
      assert.equal(foodStore.grainsPotatoesResult, 0)
      assert.equal(foodStore.dairyEggsResult, 0)
      assert.equal(foodStore.fatResult, 0)
      assert.equal(foodStore.meatResult, 0)
      assert.equal(foodStore.fishResult, 0)
      assert.equal(foodStore.plantBasedProteinResult, 0)
      assert.equal(foodStore.drinksResult, 0)
      assert.equal(foodStore.sweetsResult, 0)
      assert.equal(foodStore.otherResult, 0)
      assert.equal(foodStore.totalResult, 0)

      fakeApi.onPost('/food/' + globalStore.testInstanceId).reply(200, {
        id: 2,
        result: {
          vegetablesFruitsBerries: 214.64049465,
          grainsPotatoes: 107.0348364,
          dairyEggs: 796.905392175,
          fat: 159.6464532,
          meat: 750.81857175,
          fish: 42.20011845,
          plantBasedProtein: 19.4288139,
          drinks: 117.702526275,
          sweets: 94.99122585,
          other: 24.3126279,
          total: 2327.68106055,
        },
      })
      await foodStore.submit()
      assert.equal(foodStore.id, 2, 'Id mismatch')
      assert.equal(
        foodStore.vegetablesFruitsBerriesResult,
        214.64049465,
        'vegetablesFruitsBerries result mismatch'
      )
      assert.equal(
        foodStore.grainsPotatoesResult,
        107.0348364,
        'grainsPotatoes result mismatch'
      )
      assert.equal(
        foodStore.dairyEggsResult,
        796.905392175,
        'dairyEggs result mismatch'
      )
      assert.equal(foodStore.fatResult, 159.6464532, 'fat result mismatch')
      assert.equal(foodStore.meatResult, 750.81857175, 'meat result mismatch')
      assert.equal(foodStore.fishResult, 42.20011845, 'fish result mismatch')
      assert.equal(
        foodStore.plantBasedProteinResult,
        19.4288139,
        'plantBasedProtein result mismatch'
      )
      assert.equal(
        foodStore.drinksResult,
        117.702526275,
        'drinks result mismatch'
      )
      assert.equal(
        foodStore.sweetsResult,
        94.99122585,
        'sweets result mismatch'
      )
      assert.equal(foodStore.otherResult, 24.3126279, 'other result mismatch')
      assert.equal(
        foodStore.totalResult,
        2327.68106055,
        'total result mismatch'
      )
    })
})
