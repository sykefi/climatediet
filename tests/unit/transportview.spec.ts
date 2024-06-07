import TransportView from '@/views/transport/TransportView.vue'

import { describe, assert, expect, it } from 'vitest'
import { fakeApi } from '../testutils'
import { createPinia, setActivePinia } from 'pinia'
import { useTransportStore } from '@/stores/transport/store'
import { useGlobalStateStore } from '@/stores/global/store'

describe('TransportView', () => {
  it('loads properly', () => {
    expect(TransportView).toBeTruthy()
  }),
    it('handles the submit correctly', async () => {
      setActivePinia(createPinia())
      const transportStore = useTransportStore()
      const globalStore = useGlobalStateStore()

      assert.equal(transportStore.id, 0)
      assert.equal(transportStore.boatResult, 0)
      assert.equal(transportStore.cruiseResult, 0)
      assert.equal(transportStore.flightResult, 0)
      assert.equal(transportStore.motorcycleResult, 0)
      assert.equal(transportStore.carResults.length, 0)
      assert.equal(transportStore.publicTransportResult.train, 0)
      assert.equal(transportStore.publicTransportResult.bus, 0)
      assert.equal(transportStore.publicTransportResult.other, 0)
      assert.equal(transportStore.publicTransportResult.total, 0)
      assert.equal(transportStore.totalResult, 0)

      fakeApi.onPost('/transport/' + globalStore.testInstanceId).reply(200, {
        id: 12,
        result: {
          boat: 14,
          cruises: 15,
          flights: 12,
          motorcycle: 2,
          cars: [
            { result: 2000, order: 1 },
            { result: 15, order: 2 },
          ],
          publicTransport: { train: 10, bus: 900, other: 90, total: 1000 },
          total: 3058,
        },
      })
      await transportStore.submit()

      assert.equal(transportStore.id, 12, 'Id mismatch')
      assert.equal(transportStore.boatResult, 14, 'Boat result mismatch')
      assert.equal(transportStore.cruiseResult, 15, 'Cruise result mismatch')
      assert.equal(transportStore.flightResult, 12, 'Flight result mismatch')
      assert.equal(
        transportStore.motorcycleResult,
        2,
        'Motorcycle result mismatch'
      )
      assert.equal(
        transportStore.carResults[0].result,
        2000,
        'Primary car result mismatch'
      )
      assert.equal(
        transportStore.carResults[1].result,
        15,
        'Secondary car result mismatch'
      )
      assert.equal(
        transportStore.publicTransportResult.train,
        10,
        'Public transport result mismatch (train)'
      )
      assert.equal(
        transportStore.publicTransportResult.bus,
        900,
        'Public transport result mismatch (bus)'
      )
      assert.equal(
        transportStore.publicTransportResult.other,
        90,
        'Public transport result mismatch (other)'
      )
      assert.equal(
        transportStore.publicTransportResult.total,
        1000,
        'Public transport result mismatch (total)'
      )
      assert.equal(transportStore.totalResult, 3058, 'Total result mismatch')
    })
})
