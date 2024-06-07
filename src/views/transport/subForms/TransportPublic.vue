<template>
  <SubForm
    id="public-transport"
    :title="$t('$publicTransport')"
    :summary="$t('$publicTransportSummary')"
    :is-active="isActive"
    :is-enabled="isEnabled"
    @titleClicked="publicTransportTitleClicked"
    calc-info-hash="transportPublicTransport"
  >
    <h4>{{ $t('$excludeWorkTrips') }}</h4>
    <label class="section-title">{{ $t('$cityTraffic') }}</label>
    <RangeInput
      :max="1000"
      name="cityBus"
      v-model.number="cityBusDistance"
      :unit="'km/' + $t('$weekLong')"
    />
    <RangeInput
      :max="1000"
      name="cityTrain"
      v-model.number="cityTrainDistance"
      :unit="'km/' + $t('$weekLong')"
    />
    <RangeInput
      :max="500"
      name="tram"
      v-model.number="tramDistance"
      :unit="'km/' + $t('$weekLong')"
    />
    <RangeInput
      :max="500"
      name="metro"
      v-model.number="metroDistance"
      :unit="'km/' + $t('$weekLong')"
    />

    <label id="long-distance-label" class="section-title">
      {{ $t('$longDistanceTraffic') }}
    </label>
    <RangeInput
      :exponential="true"
      :max="100000"
      name="bus"
      v-model.number="busDistance"
      :unit="'km/' + $t('$yearLong')"
    />
    <RangeInput
      :exponential="true"
      :max="100000"
      name="train"
      v-model.number="trainDistance"
      :unit="'km/' + $t('$yearLong')"
    />
  </SubForm>
</template>

<style lang="scss" scoped>
#long-distance-label {
  margin-top: 1em;
}
</style>

<script lang="ts">
import { useBaseDataStore } from '@/stores/startView/store'
import { useTransportStore } from '@/stores/transport/store'
import {
  ITransportStoreState,
  TransportSections,
} from '@/stores/transport/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(useTransportStore, useBaseDataStore),
    transport(): ITransportStoreState {
      return this.transportStore.$state
    },
    busDistance: {
      get(): number {
        return this.transport.publicTransport.busDistance
      },
      set(value: number) {
        this.transportStore.setBusDistance(value)
      },
    },
    cityBusDistance: {
      get(): number {
        return this.transport.publicTransport.cityBusDistance
      },
      set(value: number) {
        this.transportStore.setCityBusDistance(value)
      },
    },
    cityTrainDistance: {
      get(): number {
        return this.transport.publicTransport.cityTrainDistance
      },
      set(value: number) {
        this.transportStore.setCityTrainDistance(value)
      },
    },
    tramDistance: {
      get(): number {
        return this.transport.publicTransport.tramDistance
      },
      set(value: number) {
        this.transportStore.setTramDistance(value)
      },
    },
    metroDistance: {
      get(): number {
        return this.transport.publicTransport.metroDistance
      },
      set(value: number) {
        this.transportStore.setMetroDistance(value)
      },
    },
    trainDistance: {
      get(): number {
        return this.transport.publicTransport.trainDistance
      },
      set(value: number) {
        this.transportStore.setTrainDistance(value)
      },
    },
    isActive(): boolean {
      return this.transport.activeSection === TransportSections.PublicTransport
    },
    isEnabled(): boolean {
      return this.baseDataStore.submitted
    },
  },
  methods: {
    publicTransportTitleClicked(id: string) {
      this.$emit('publicTransportTitleClicked', [
        TransportSections.PublicTransport,
        id,
      ])
    },
  },
})
</script>
