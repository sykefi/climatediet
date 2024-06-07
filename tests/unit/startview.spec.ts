import StartView from '@/views/start/StartView.vue'

import { fakeApi } from '../testutils'
import { assert, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useGlobalStateStore } from '@/stores/global/store'
import { useBaseDataStore } from '@/stores/startView/store'

describe('StartView', () => {
  it('loads properly', () => {
    expect(StartView).toBeTruthy()
  }),
    it('properly sets up ids during save', async () => {
      setActivePinia(createPinia())
      const globalStore = useGlobalStateStore()
      const baseStore = useBaseDataStore()

      assert.isFalse(
        !!globalStore.testInstanceId,
        'Test instance was not initially falsy: ' + globalStore.testInstanceId
      )

      fakeApi.onPost('/basedataentries').reply(200, {
        id: 6,
        testInstanceId: 5,
        adultCount: 1,
        childCount: 1,
        birthDecade: 1989,
        gender: 'Male',
        postalCode: '',
        yearlyIncome: 10000,
      })

      await baseStore.submit()

      assert.isTrue(baseStore.submitted, 'Submit failed')
      assert.equal(
        globalStore.testInstanceId,
        5,
        'Test instance assignment failed:'
      )
      assert.equal(baseStore.id, 6, 'Id assignment failed')
    })
})
