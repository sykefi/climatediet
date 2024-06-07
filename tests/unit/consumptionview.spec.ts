import i18n from '@/locale/i18n'
import router from '@/router'
import ConsumptionView from '@/views/consumption/ConsumptionView.vue'
import SubForm from '@/components/forms/SubForm.vue'
import DetailsButton from '@/components/forms/DetailsButton.vue'
import RangeInput from '@/components/forms/RangeInput.vue'
import IntegerInput from '@/components/forms/IntegerInput.vue'

import { assert, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { fakeApi } from '../testutils'
import { useConsumptionStore } from '@/stores/consumption/store'
import { useGlobalStateStore } from '@/stores/global/store'
import { createPinia } from 'pinia'

describe('ConsumptionView', () => {
  const vm = mount(ConsumptionView, {
    global: {
      components: { DetailsButton, RangeInput, SubForm, IntegerInput },
      plugins: [createPinia(), router, i18n],
    },
  })
  it('loads properly', () => {
    expect(ConsumptionView).toBeTruthy()
  })
  it('handles the low carbon service toggle correctly', async () => {
    const serviceToggles = [
      'recreationLowCarbon',
      'communicationsLowCarbon',
      'otherLowCarbon',
    ]
    serviceToggles.forEach((toggle) => {
      const el = vm.find('#' + toggle).element as HTMLInputElement
      expect(el).toBeTruthy()
      assert.isFalse(el.checked)
    })

    const toggleAll = vm.find('#services-low-carbon')
      .element as HTMLInputElement
    if (!toggleAll) {
      throw new Error('Service toggle was not found')
    }
    toggleAll.checked = true
    await toggleAll.dispatchEvent(new Event('change'))

    serviceToggles.forEach((toggle) => {
      const el = vm.find('#' + toggle).element as HTMLInputElement
      if (!el) {
        throw new Error('Element was not found ' + toggle)
      }
      console.log(el.checked)
      assert.isTrue(el.checked, toggle + ' was not enabled')
    })
  })
  it('handles the low carbon goods toggle correctly', async () => {
    const goodsToggles = [
      'clothingLowCarbon',
      'shoesLowCarbon',
      'electronicsLowCarbon',
      'paperLowCarbon',
    ]
    goodsToggles.forEach((toggle) => {
      const el = vm.find('#' + toggle).element as HTMLInputElement
      expect(el).toBeTruthy()
      assert.isFalse(el.checked)
    })

    const toggleAll = vm.find('#goods-low-carbon').element as HTMLInputElement
    expect(toggleAll).toBeTruthy()
    toggleAll.checked = true
    await toggleAll.dispatchEvent(new Event('change'))

    goodsToggles.forEach((toggle) => {
      const el = vm.find('#' + toggle).element as HTMLInputElement
      expect(el).toBeTruthy()
      console.log(el.checked)
      assert.isTrue(el.checked, toggle + ' was not enabled')
    })
  })
  it('handles the submit correctly', async () => {
    const store = useConsumptionStore()
    const globalStateStore = useGlobalStateStore()

    assert.equal(store.id, 0)
    assert.equal(store.clothingResult, 0)
    assert.equal(store.shoesResult, 0)
    assert.equal(store.electronicsResult, 0)
    assert.equal(store.communicationsResult, 0)
    assert.equal(store.paperResult, 0)
    assert.equal(store.recreationResult, 0)
    assert.equal(store.otherResult, 0)
    assert.equal(store.totalResult, 0)
    fakeApi
      .onPost('/consumption/' + globalStateStore.testInstanceId)
      .reply(200, {
        id: 2,
        result: {
          clothing: 1000,
          shoes: 200,
          electronics: 600,
          communications: 1000,
          paper: 10,
          recreation: 1000,
          other: 90,
          total: 3900,
        },
      })
    await store.submit()
    assert.equal(store.id, 2, 'Id mismatch')
    assert.equal(store.clothingResult, 1000, 'Clothing result mismatch')
    assert.equal(store.shoesResult, 200, 'Shoes result mismatch')
    assert.equal(store.electronicsResult, 600, 'Electronics result mismatch')
    assert.equal(
      store.communicationsResult,
      1000,
      'Communications result mismatch'
    )
    assert.equal(store.paperResult, 10, 'Paper result mismatch')
    assert.equal(store.recreationResult, 1000, 'Recreation result mismatch')
    assert.equal(store.otherResult, 90, 'Other result mismatch')
    assert.equal(store.totalResult, 3900, 'Total result mismatch')
  })
})
