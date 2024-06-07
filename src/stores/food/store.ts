import { defineStore } from 'pinia'
import {
  Diets,
  FoodSections,
  IFoodResults,
  IFoodState,
  foodConsumptionAverages,
} from './types'
import { useGlobalStateStore } from '../global/store'
import { eggCountToRatio } from './helpers'
import api from '@/utilities/api'
import { TranslateResult } from 'vue-i18n'
import i18n from '@/locale/i18n'
import { IChartData } from '@/types'

export const useFoodStore = defineStore('food', {
  state: (): IFoodState => ({
    id: 0,
    submitted: false,
    activeSection: FoodSections.Diet,
    diet: Diets.Omnivore,
    lowCarbonPreference: false,
    beefRatio: 100,
    cheeseRatio: 100,
    dairyRatio: 100,
    eggCount: 3, // eggs are counted as whole eggs to make estimations easier
    fishRatio: 100,
    porkPoultryRatio: 100,
    riceRatio: 100,
    winterSaladRatio: 100,
    restaurantSpending: 71,
    dairyResult: 0,
    meatResult: 0,
    plantResult: 0,
    restaurantResult: 0,
    totalResult: 0,

    unSavedChanges: false,
    consumptionDefaultsChanged: false,
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async submit() {
      const global = useGlobalStateStore()
      try {
        global.setBusy(true)
        const eggs = eggCountToRatio(this.eggCount)
        const data = {
          diet: this.diet,
          lowCarbonPreference: this.lowCarbonPreference,
          beefLevel: this.beefRatio,
          cheeseLevel: this.cheeseRatio,
          dairyLevel: this.dairyRatio,
          eggLevel: eggs,
          fishLevel: this.fishRatio,
          porkPoultryLevel: this.porkPoultryRatio,
          riceLevel: this.riceRatio,
          winterSaladLevel: this.winterSaladRatio,
          restaurantSpending: this.restaurantSpending,
        }
        const createNew = this.id === 0
        const response = createNew
          ? await api.post(
              'food/' + global.testInstanceId,
              data,
              global.sessionId
            )
          : await api.put('food/' + this.id, data, global.sessionId)
        if (createNew) {
          this.id = response.id
          this.submitted = true
        }

        const results: IFoodResults = {
          dairy: response.result.dairy,
          meat: response.result.meat,
          plant: response.result.plant,
          restaurant: response.result.restaurant,
          total: response.result.total,
        }

        this.setResults(results)
        global.setError(null)
      } catch (error: any) {
        global.setError(error)
        return Promise.reject(error)
      } finally {
        global.setBusy(false)
      }
    },
    setDiet(value: Diets) {
      this.diet = value
      this.unSavedChanges = true
      if (!this.consumptionDefaultsChanged) {
        this.consumptionDefaultsChanged = false
      }
    },
    setLowCarbonPreference(value: boolean) {
      this.lowCarbonPreference = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setBeef(value: number) {
      this.beefRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setCheese(value: number) {
      this.cheeseRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setDairy(value: number) {
      this.dairyRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setEggs(value: number) {
      this.eggCount = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFish(value: number) {
      this.fishRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPorkPoultry(value: number) {
      this.porkPoultryRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setRice(value: number) {
      this.riceRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setWinterSalad(value: number) {
      this.winterSaladRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setRestaurantSpending(value: number) {
      this.restaurantSpending = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setActiveSection(value: FoodSections) {
      this.activeSection = value
    },
    setId(value: number) {
      this.id = value
    },
    setResults(results: IFoodResults) {
      this.dairyResult = Math.round(results.dairy)
      this.meatResult = Math.round(results.meat)
      this.plantResult = Math.round(results.plant)
      this.restaurantResult = Math.round(results.restaurant)
      this.totalResult = Math.round(results.total)
      this.unSavedChanges = false
    },
    setSubmitted(value: boolean) {
      this.submitted = value
    },
    resetConsumption() {
      // TODO: update defaults got from FoodData
      this.$reset()
      this.activeSection = FoodSections.Consumption

      this.unSavedChanges = true
    },
    foodReset() {
      this.$reset()
    },
  },
  getters: {
    consumptionAmount: () => {
      return (key: string, ratio: number) => {
        if (ratio === 0) {
          return 0
        }
        const average = foodConsumptionAverages[key]

        return (average * (ratio / 100)).toFixed(2)
      }
    },
    resultChartData: (state) => {
      return () => {
        const data: Array<IChartData> = []
        data.push({
          label: i18n.global.t('$resultCategoryPlants'),
          value: state.plantResult,
        })
        if (state.diet === Diets.Vegetarian || state.diet === Diets.Omnivore) {
          data.push({
            label: i18n.global.t('$resultCategoryDairy'),
            value: state.dairyResult,
          })
        }
        if (state.diet === Diets.Omnivore) {
          data.push({
            label: i18n.global.t('$resultCategoryMeat'),
            value: state.meatResult,
          })
        }
        if (state.restaurantSpending > 0) {
          data.push({
            label: i18n.global.t('$cafesAndRestaurants'),
            value: state.restaurantResult,
          })
        }
        data.sort((a, b) => {
          return b.value - a.value
        })

        return data
      }
    },
    resultActions: (state) => {
      return () => {
        const actions: TranslateResult[] = []
        const addAction = (
          key: string,
          url: TranslateResult = '',
          linkDisplayText: TranslateResult = ''
        ) => {
          let params = {}
          if (url) {
            params = {
              link: `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkDisplayText}</a>`,
            }
          }
          actions.push(i18n.global.t('$foodAction' + key, params))
        }

        if (state.diet === Diets.Vegan) {
          addAction('Vegan')
        } else if (state.diet === Diets.Vegetarian) {
          addAction('Vegetarian')
        } else {
          addAction('Omnivore')
        }

        return actions
      }
    },
    resultLinks: () => {
      return () => {
        return [
          {
            title: i18n.global.t('$saaSyoda'),
            description: i18n.global.t('$saaSyodaDetails'),
            url: i18n.global.t('$saaSyodaUrl'),
          },
        ]
      }
    },
    sitraCases: (state) => {
      // TODO: Make work with the new model that uses direct amounts instead of ratios
      if (state.beefRatio >= 100 || state.fishRatio >= 100) {
        return '$sitraVarietyWithVegetables'
      }
      return '$sitraAvoidFoodWaste'
    },
  },
})
