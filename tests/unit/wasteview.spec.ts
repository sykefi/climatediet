import WasteView from '@/views/waste/WasteView.vue'

import { assert, describe, expect, it } from 'vitest'
import { fakeApi } from '../testutils'
import { createPinia, setActivePinia } from 'pinia'
import { useWasteStore } from '@/stores/waste/store'
import { useGlobalStateStore } from '@/stores/global/store'

describe('WasteView', () => {
  it('loads properly', () => {
    expect(WasteView).toBeTruthy()
  }),
    it('handles the submit correctly', async () => {
      setActivePinia(createPinia())
      const wasteStore = useWasteStore()
      const globalStore = useGlobalStateStore()

      assert.equal(wasteStore.id, 0)
      assert.equal(wasteStore.totalResult, 0)

      fakeApi.onPost('/waste/' + globalStore.testInstanceId).reply(200, {
        id: 2,
        result: {
          total: 43,
        },
      })

      await wasteStore.submit()
      assert.equal(wasteStore.id, 2, 'Id mismatch')
      assert.equal(wasteStore.totalResult, 43, 'Total result mismatch')
    })
})
