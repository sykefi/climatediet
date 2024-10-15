<template>
  <div>
    <h1>{{ $t('$siteSlogan') }}</h1>
    <div v-if="$t('$infoForUsers') != ''" class="infoBox">
      {{ $t('$infoForUsers') }}
      <a
        href="https://github.com/sykefi/climatediet/releases"
        target="_blank"
        rel="noopener"
      >
        {{ $t('$changelog') }}
      </a>
    </div>
    <form @submit.prevent="submit(false)" class="calc-form">
      <SubForm
        :title="$t('$baseData')"
        :summary="$t('$baseDataSummary')"
        :is-active="true"
        :is-enabled="true"
        calc-info-hash="baseData"
      >
        <!-- Family size input -->
        <SubFormSection
          :title="$t('$familySize')"
          :footer="$t('$familySizeDetails')"
        >
          <div>
            <label>
              <IntegerInput :min="1" :max="10" v-model.number="adultCount" />
              {{ $t('$adultCount') }}
            </label>
          </div>
          <div>
            <label>
              <IntegerInput :max="20" v-model.number="childCount" />
              {{ $t('$childCount') }}
            </label>
          </div>
        </SubFormSection>
        <!-- Postal code input -->
        <SubFormSection
          :title="$t('$postalCode')"
          title-for="postalCode"
          :footer="$t('$postalCodeDetails')"
        >
          <input
            id="postalCode"
            type="text"
            maxlength="5"
            minlength="5"
            v-model="postalCode"
            pattern="\d+"
          />
        </SubFormSection>
        <!-- Birth decade selection -->
        <SubFormSection :title="$t('$birthDecade')" title-for="birthDecade">
          <select id="birthDecade" v-model.number="birthDecade">
            <option value="0">
              {{ $t('$ratherNotSay') }}
            </option>
            <option v-for="option in decadeOptions" :key="option">
              {{ option }}
            </option>
          </select>
        </SubFormSection>
        <!-- Income input -->
        <SubFormSection :title="$t('$yearlyIncome')" title-for="yearlyIncome">
          <select id="yearlyIncome" v-model.number="yearlyIncome">
            <option value="0">
              {{ $t('$ratherNotSay') }}
            </option>
            <option value="5000">
              {{ $t('$lessThan') + ' ' + $n(10000) }}
            </option>
            <option v-for="(n, i) in 10" :key="n" :value="incomeOptions[i]">
              {{
                $n(incomeOptions[i]) +
                (incomeOptions[i + 1]
                  ? '-' + $n(incomeOptions[i + 1] - 1)
                  : ' ' + $t('$orMore'))
              }}
            </option>
          </select>
          <span class="field-unit">€/{{ $t('$yearLong') }}</span>
        </SubFormSection>
        <!-- Gender selection -->
        <SubFormSection
          :title="$t('$gender')"
          role="radiogroup"
          :no-border="true"
        >
          <div
            class="radio-item"
            v-for="option in genders"
            :key="option"
            :aria-label="$t('$gender')"
          >
            <!-- Value is the first letter (Male -> M...) -->
            <input
              :id="'gender' + option"
              type="radio"
              v-model="gender"
              name="gender"
              :value="option === '' ? '' : option[0]"
            />
            <label :for="'gender' + option">
              {{ $t(option === '' ? '$ratherNotSay' : '$gender' + option) }}
            </label>
          </div>
        </SubFormSection>
        <SubFormSection
          :title="$t('$groupCode')"
          title-for="groupCode"
          :footer="$t('$groupCodeDetails')"
          :no-border="true"
        >
          <input
            id="groupCode"
            type="text"
            maxlength="50"
            v-model="groupCode"
          />
          <!-- open creation of a new group code-->
          <input
            type="button"
            @click="openGroupCodeCreation()"
            :value="$t('$newGroupCode')"
          />
        </SubFormSection>
      </SubForm>
      <div class="action-wrapper">
        <input
          type="submit"
          :value="$t('$continueToCalculator')"
          :disabled="globalStateStore.busy"
        />
        <input
          type="submit"
          @click.prevent="submit(true)"
          class="button-primary"
          :value="$t('$continueToCalculatorWithRegistration')"
          v-if="!globalStateStore.userId"
          :disabled="globalStateStore.busy"
        />
        <p>
          <span>
            {{ $t('$termsOfUseInfo') }}
            <router-link to="termsOfUse">{{ $t('$termsOfUse') }}</router-link>
            .
          </span>
        </p>
        <p>{{ $t('$registrationInfo') }}</p>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

h1 {
  font-family: 'Raleway';
  font-weight: $extra-bold;
  font-size: $font-size-l;
  color: $highlight-dark;
  max-width: $window-width-small-low;
  text-align: center;
}

.infoBox {
  margin: 2.5em;
  border: 0.5em solid $highlight-dark;
  border-radius: 1em;
  padding: 1em;
  text-align: center;
  font-weight: $semi-bold;
}

@media (min-width: $window-width-small-low) {
  h1 {
    margin-top: 0;
    font-size: $font-size-xl;
  }
}
</style>

<script lang="ts">
import { useGlobalStateStore } from '@/stores/global/store'
import { useHousingStore } from '@/stores/housing/store'
import { useResultsComparisonStore } from '@/stores/results/store'
import { useBaseDataStore } from '@/stores/startView/store'
import { IBaseDataState } from '@/stores/startView/types'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapStores(
      useBaseDataStore,
      useHousingStore,
      useGlobalStateStore,
      useResultsComparisonStore
    ),
    data(): IBaseDataState {
      return this.baseDataStore.$state
    },
    adultCount: {
      get(): number {
        return this.data.adultCount
      },
      set(value: number) {
        this.baseDataStore.setAdultCount(value)
        this.housingStore.setFamilySizeChanged()
      },
    },
    birthDecade: {
      get(): number {
        return this.data.birthDecade
      },
      set(value: number) {
        this.baseDataStore.setBirthDecade(value)
      },
    },
    childCount: {
      get(): number {
        return this.data.childCount
      },
      set(value: number) {
        this.baseDataStore.setChildCount(value)
        this.housingStore.setFamilySizeChanged()
      },
    },
    error(): string {
      return this.data.error
    },
    gender: {
      get(): string {
        return this.data.gender
      },
      set(value: string) {
        this.baseDataStore.setGender(value)
      },
    },
    groupCode: {
      get(): string {
        return this.globalStateStore.groupCode
      },
      set(value: string) {
        this.globalStateStore.setGroupCode(value)
      },
    },
    postalCode: {
      get(): string {
        return this.data.postalCode
      },
      set(value: string) {
        this.baseDataStore.setPostalCode(value)
      },
    },
    yearlyIncome: {
      get(): number {
        return this.data.yearlyIncome
      },
      set(value: number) {
        this.baseDataStore.setYearlyIncome(value)
      },
    },
  },
  data: () => {
    return {
      decadeOptions: [
        1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010,
      ],
      incomeOptions: [
        10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
      ],
      genders: ['Male', 'Female', 'Other', ''],
    }
  },
  methods: {
    async submit(withRegistration: boolean) {
      try {
        await this.baseDataStore.submit()
        if (this.groupCode) {
          try {
            await this.globalStateStore.associateUserWithGroup()
          } catch (error) {
            this.globalStateStore.setError(this.$t('$groupCodeError'))
            return
          }
        }
        this.$router.push('housing')
        this.resultsComparisonStore.setPostalCodeAverage({
          withSecondaryHouse: this.housingStore.hasSecondaryHouse,
          postalCode: this.postalCode,
        })
        this.resultsComparisonStore.setFamilySizeAverage({
          withSecondaryHouse: this.housingStore.hasSecondaryHouse,
          familySize: this.adultCount + this.childCount,
        })
        this.resultsComparisonStore.setIncomeAverage({
          withSecondaryHouse: this.housingStore.hasSecondaryHouse,
          income: this.yearlyIncome,
        })
        if (withRegistration) {
          this.globalStateStore.setLoginVisible(true)
        } else if (this.globalStateStore.userId) {
          this.globalStateStore.associateUserWithTest()
        }
      } catch (error) {
        console.error(error)
      }
    },
    openGroupCodeCreation() {
      this.globalStateStore.setCreateGroupCodeVisible(true)
    },
  },
})
</script>
