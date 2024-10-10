import { defineStore } from 'pinia'
import { ICarouselSlide, IResultData, IResultsComparisonState } from './types'
import i18n from '@/locale/i18n'
import api, { IRequestParam } from '@/utilities/api'
import { useGlobalStateStore } from '../global/store'
import { parseResponse } from './helpers'
import { useWasteStore } from '../waste/store'
import { useTransportStore } from '../transport/store'
import { Diets } from '../food/types'
import { useFoodStore } from '../food/store'
import { useConsumptionStore } from '../consumption/store'
import { useHousingStore } from '../housing/store'

export const useResultsComparisonStore = defineStore('resultsComparison', {
  state: (): IResultsComparisonState => ({
    finnishAverage: {
      name: '',
      date: null,
      housing: 3441,
      food: 1707,
      secondaryHouse: 0,
      transport: 2088,
      consumption: 2533,
      waste: 59,
    },
    diet: null,
    familySize: null,
    income: null,
    postalCode: null,
    userHistory: [],
    shareUrl: '',
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async setDietAverage({
      withSecondaryHouse,
      diet,
    }: {
      withSecondaryHouse: boolean
      diet: Diets
    }) {
      try {
        const params: IRequestParam[] = [
          { parameterName: 'diet', value: diet },
          { parameterName: 'withSecondaryHouse', value: withSecondaryHouse },
        ]
        const response = await api.getWithParams('results/averages', params)
        const results = parseResponse(response)
        this.setDiet(results)
      } catch (ex) {
        console.log('Failed to fetch average by diet: ' + ex)
        /* if getting averages fails and the user has in the same session 
        first set diet with enough cases for getting averages, those avarages 
        would be used in result comparison, if not set null here */
        this.setDiet(null)
      }
    },
    async setFamilySizeAverage({
      withSecondaryHouse,
      familySize,
    }: {
      withSecondaryHouse: boolean
      familySize: number | null
    }) {
      if (!familySize) {
        this.setFamilySize(null)
        return
      }
      try {
        const params: IRequestParam[] = [
          { parameterName: 'familySize', value: familySize },
          { parameterName: 'withSecondaryHouse', value: withSecondaryHouse },
        ]

        const response = await api.getWithParams('results/averages', params)
        const results = parseResponse(response)

        this.setFamilySize(results)
      } catch (ex) {
        console.log('Failed to fetch average by family size: ' + ex)
        this.setFamilySize(null)
      }
    },
    async setIncomeAverage({
      withSecondaryHouse,
      income,
    }: {
      withSecondaryHouse: boolean
      income: number | null
    }) {
      if (!income) {
        this.setIncome(null)
        return
      }
      try {
        const params: IRequestParam[] = [
          { parameterName: 'yearlyIncome', value: income },
          { parameterName: 'withSecondaryHouse', value: withSecondaryHouse },
        ]

        const response = await api.getWithParams('results/averages', params)
        const results = parseResponse(response)

        this.setIncome(results)
      } catch (ex) {
        console.log('Failed to fetch average by yearly income: ' + ex)
        this.setIncome(null)
      }
    },
    async setPostalCodeAverage({
      withSecondaryHouse,
      postalCode,
    }: {
      withSecondaryHouse: boolean
      postalCode: string | null
    }) {
      if (!postalCode) {
        this.setPostalCode(null)
        return
      }
      try {
        const params: IRequestParam[] = [
          { parameterName: 'postalCode', value: postalCode },
          { parameterName: 'withSecondaryHouse', value: withSecondaryHouse },
        ]
        const response = await api.getWithParams('results/averages', params)
        const results = parseResponse(response)
        this.setPostalCode(results)
      } catch (ex) {
        console.log('Failed to fetch average by postal code: ' + ex)
        this.setPostalCode(null)
      }
    },
    async setUserHistory() {
      const global = useGlobalStateStore()
      if (!global.userId) {
        return
      }
      try {
        const params: IRequestParam[] = [
          { parameterName: 'userId', value: global.userId },
          {
            parameterName: 'excludeId',
            value: global.testInstanceId,
          },
        ]
        const response = await api.getWithParams(
          'results/getUserResults',
          params
        )
        const results = []

        for (const result of response) {
          results.push(parseResponse(result))
        }

        for (let index = 0; index < results.length - 1; index++) {
          const result = results[index]
          if (!result || result.name.endsWith(')')) {
            continue
          }
          const matches = results.filter((r) => r && r.name === result.name)
          if (matches.length > 1) {
            let duplicateIndex = 2
            matches.forEach((match) => {
              if (match && match.date !== result.date) {
                match.name = match.name + ' (' + duplicateIndex + ')'
                duplicateIndex++
              }
            })
          }
        }

        this.userHistory = results
      } catch (ex) {
        console.log('Failed to fetch user result history: ' + ex)
      }
    },
    async saveResultImage({ image }: { image: any }) {
      const global = useGlobalStateStore()
      try {
        global.setBusy(true)
        const data = {
          Base64Encoding: image,
        }

        const response = await api.postWithFullResponse(
          'socialmedia/SaveResultImage',
          data,
          global.sessionId
        )
        const url = response.headers.location

        this.shareUrl = url
      } catch (ex) {
        console.error('Failed to save result image: ' + ex)
        return Promise.reject(ex)
      } finally {
        global.setBusy(false)
      }
    },
    setDiet(payload: IResultData | null) {
      this.diet = payload
    },
    setFamilySize(payload: IResultData | null) {
      this.familySize = payload
    },
    setIncome(payload: IResultData | null) {
      this.income = payload
    },
    setPostalCode(payload: IResultData | null) {
      this.postalCode = payload
    },
    removeUserHistory() {
      this.userHistory = []
    },
    resultsReset() {
      this.$reset()
    },
  },
  getters: {
    totalResult(): number {
      const housing = useHousingStore()
      const waste = useWasteStore()
      const transport = useTransportStore()
      const food = useFoodStore()
      const consumption = useConsumptionStore()
      return Math.round(
        housing.primaryHouse.totalResult +
          housing.secondaryHouse.totalResult +
          waste.totalResult +
          transport.totalResult +
          food.totalResult +
          consumption.totalResult
      )
    },
    carouselSlides: (): ICarouselSlide[] => {
      const localeString = i18n.global.locale === 'fi' ? 'fi' : 'en'
      const end = '_' + localeString + '.jpg'
      return [
        {
          image: `./assets/images/results/societal${end}`,
        },
        {
          image: `./assets/images/results/cities${end}`,
        },
        {
          image: `./assets/images/results/choices${end}`,
        },
        {
          image: `./assets/images/results/companies${end}`,
        },
        {
          image: `./assets/images/results/cleantech${end}`,
        },
        {
          image: `./assets/images/results/consumption${end}`,
        },
        {
          image: `./assets/images/results/food${end}`,
        },
      ]
    },
  },
})
