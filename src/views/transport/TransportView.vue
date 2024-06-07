<template>
  <form ref="form" class="calc-form" @submit.prevent="submit">
    <TransportCar @carTitleClicked="changeSection" />
    <TransportPublic @publicTransportTitleClicked="changeSection" />
    <TransportTravel @travelTitleClicked="changeSection" />
    <TransportBoat @boatTitleClicked="changeSection" />
    <div class="action-wrapper">
      <input
        type="submit"
        :value="$t('$calculateResults')"
        class="button-primary"
        :disabled="!submitEnabled"
      />
    </div>
    <DialogBase v-if="resultsShown">
      <ResultBase
        next="consumption"
        :store="transportStore"
        @close="resultsShown = false"
      >
        <template #additionalSection>
          <SubSection title="$walkingCyclingCalculatorTitle">
            <template #default>
              <WalkingCyclingCalculator />
            </template>
          </SubSection>
        </template>
      </ResultBase>
    </DialogBase>
  </form>
</template>

<script lang="ts">
import DialogBase from '@/components/DialogBase.vue'
import ResultBase from '@/components/ResultBase.vue'
import SubSection from '@/components/SubSection.vue'
import { scrollToElement, validateForm } from '@/utilities/utils'
import { defineComponent } from 'vue'
import WalkingCyclingCalculator from './modules/WalkingCyclingCalculator.vue'
import TransportBoat from './subForms/TransportBoat.vue'
import TransportCar from './subForms/TransportCar.vue'
import TransportPublic from './subForms/TransportPublic.vue'
import TransportTravel from './subForms/TransportTravel.vue'
import { mapStores } from 'pinia'
import { useBaseDataStore } from '@/stores/startView/store'
import { useGlobalStateStore } from '@/stores/global/store'
import { TransportSections } from '@/stores/transport/types'
import { useTransportStore } from '@/stores/transport/store'

export default defineComponent({
  components: {
    DialogBase,
    ResultBase,
    SubSection,
    TransportBoat,
    TransportCar,
    TransportPublic,
    TransportTravel,
    WalkingCyclingCalculator,
  },
  computed: {
    ...mapStores(useBaseDataStore, useGlobalStateStore, useTransportStore),
    submitEnabled(): boolean {
      return this.baseDataStore.submitted && !this.globalStateStore.busy
    },
  },
  data() {
    return {
      resultsShown: false,
    }
  },
  methods: {
    async changeSection(payload: [TransportSections, string]) {
      const form = this.$refs.form as HTMLFormElement
      if (!validateForm(form)) {
        return
      }
      if (this.transportStore.sectionUnsaved) {
        this.transportStore.submit()
        this.transportStore.setChangesSaved()
      }
      this.transportStore.setActiveSection(payload[0])

      this.$nextTick(() => {
        scrollToElement(payload[1])
      })
    },
    async submit() {
      const form = this.$refs.form as HTMLFormElement
      if (!validateForm(form)) {
        return
      }
      try {
        if (
          !this.transportStore.submitted ||
          this.transportStore.unsavedChanges
        ) {
          await this.transportStore.submit()
          this.transportStore.setSubmitted()
          this.transportStore.setChangesSaved()
        }
        this.resultsShown = true
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>
