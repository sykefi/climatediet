<template>
  <SubForm
    id="transport-travel"
    :title="$t('$cruisesAndFlights')"
    :summary="$t('$cruisesAndFlightsSummary')"
    :is-active="isActive"
    :is-enabled="isEnabled"
    @titleClicked="travelTitleClicked"
    calc-info-hash="transportTravel"
  >
    <h4>{{ $t('$excludeWorkTrips') }}</h4>
    <SubFormSection
      :title="$t('$cruises')"
      details-content-key="$cruiseDistances"
    >
      <div>
        <label for="est" class="inner-label">{{ $t('$estoniaCruises') }}</label>
        <IntegerInput
          id="est"
          :max="100"
          v-model.number="estoniaCruises"
          :unit="$t('$tripUnit')"
        />
      </div>
      <div>
        <label for="ger" class="inner-label">{{ $t('$germanyCruises') }}</label>
        <IntegerInput
          id="ger"
          :max="50"
          v-model.number="germanyCruises"
          :unit="$t('$tripUnit')"
        />
      </div>
      <div>
        <label for="swe" class="inner-label">{{ $t('$swedenCruises') }}</label>
        <IntegerInput
          id="swe"
          :max="100"
          v-model.number="swedenCruises"
          :unit="$t('$tripUnit')"
        />
      </div>
    </SubFormSection>

    <SubFormSection
      :title="$t('$flights')"
      details-content-key="$flightDistances"
      :no-border="true"
    >
      <div>
        <label for="fin" class="inner-label">{{ $t('$finlandFlights') }}</label>
        <IntegerInput
          id="fin"
          :max="50"
          v-model.number="finlandFlights"
          :unit="$t('$tripUnit')"
        />
      </div>
      <div>
        <label for="eur" class="inner-label">
          {{ $t('$europeanFlights') }}
        </label>
        <IntegerInput
          id="eur"
          :max="50"
          v-model.number="europeanFlights"
          :unit="$t('$tripUnit')"
        />
      </div>
      <div>
        <label for="can" class="inner-label">{{ $t('$canaryFlights') }}</label>
        <IntegerInput
          id="can"
          :max="50"
          v-model.number="canaryFlights"
          :unit="$t('$tripUnit')"
        />
      </div>
      <div>
        <label for="cont" class="inner-label">
          {{ $t('$transContinentalFlights') }}
        </label>
        <IntegerInput
          id="cont"
          :max="50"
          v-model.number="transContinentalFlights"
          :unit="$t('$tripUnit')"
        />
      </div>
    </SubFormSection>
  </SubForm>
</template>

<style lang="scss" scoped>
h4 {
  margin-bottom: 0;
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
    canaryFlights: {
      get(): number {
        return this.transport.travel.canaryFlights
      },
      set(value: number) {
        this.transportStore.setCaFlights(value)
      },
    },
    finlandFlights: {
      get(): number {
        return this.transport.travel.finlandFlights
      },
      set(value: number) {
        this.transportStore.setFinFlights(value)
      },
    },
    europeanFlights: {
      get(): number {
        return this.transport.travel.europeanFlights
      },
      set(value: number) {
        this.transportStore.setEurFlights(value)
      },
    },
    transContinentalFlights: {
      get(): number {
        return this.transport.travel.transContinentalFlights
      },
      set(value: number) {
        this.transportStore.setContFlights(value)
      },
    },
    estoniaCruises: {
      get(): number {
        return this.transport.travel.estoniaCruises
      },
      set(value: number) {
        this.transportStore.setEstCruises(value)
      },
    },
    germanyCruises: {
      get(): number {
        return this.transport.travel.germanyCruises
      },
      set(value: number) {
        this.transportStore.setGerCruises(value)
      },
    },
    swedenCruises: {
      get(): number {
        return this.transport.travel.swedenCruises
      },
      set(value: number) {
        this.transportStore.setSweCruises(value)
      },
    },
    isActive(): boolean {
      return this.transport.activeSection === TransportSections.Travel
    },
    isEnabled(): boolean {
      return this.baseDataStore.submitted
    },
  },
  methods: {
    travelTitleClicked(id: string) {
      this.$emit('travelTitleClicked', [TransportSections.Travel, id])
    },
  },
})
</script>
