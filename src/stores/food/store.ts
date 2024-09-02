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
    diet: Diets.Mixed,
    alcoholicBeveragesRatio: 100,
    beefRatio: 100,
    berriesRatio: 100,
    butterAndAnimalFatsRatio: 100,
    cheesesRatio: 100,
    chickenAndTurkeyRatio: 100,
    coffeeAndTeaRatio: 100,
    dryPlantBasedProteinRatio: 100,
    eggsCount: 3, // eggs are counted as whole eggs to make estimations easier
    fermentedMilkProductsRatio: 100,
    fishAndShellfishAndFishProductsRatio: 100,
    frozenVegetablesRatio: 100,
    fruitAndBerryPreservesRatio: 100,
    fruitsRatio: 100,
    grainsAndGrainProductsRatio: 100,
    legumesAndNutsRatio: 100,
    margarineRatio: 100,
    meatProductsRatio: 100,
    milkRatio: 100,
    otherDairyProductsRatio: 100,
    otherDrinksRatio: 100,
    otherFoodProductsRatio: 100,
    otherMeatsAndOffalRatio: 100,
    plantBasedDrinksRatio: 100,
    plantBasedProteinProductsRatio: 100,
    porkRatio: 100,
    potatoesRatio: 100,
    riceRatio: 100,
    rootVegetablesRatio: 100,
    sausagesRatio: 100,
    sugarCandiesAndChocolateRatio: 100,
    vegetablesAndMushroomsRatio: 100,
    vegetableOilsRatio: 100,
    vegetablesFruitsBerriesResult: 0,
    grainsPotatoesResult: 0,
    dairyEggsResult: 0,
    fatResult: 0,
    meatResult: 0,
    fishResult: 0,
    plantBasedProteinResult: 0,
    drinksResult: 0,
    sweetsResult: 0,
    otherResult: 0,
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
        const eggs = eggCountToRatio(this.eggsCount)
        const data = {
          diet: this.diet,
          alcoholicBeverages: this.alcoholicBeveragesRatio,
          beef: this.beefRatio,
          berries: this.berriesRatio,
          butterAndAnimalFats: this.butterAndAnimalFatsRatio,
          cheeses: this.cheesesRatio,
          chickenAndTurkey: this.chickenAndTurkeyRatio,
          coffeeAndTea: this.coffeeAndTeaRatio,
          dryPlantBasedProtein: this.dryPlantBasedProteinRatio,
          eggs: eggs,
          fermentedMilkProducts: this.fermentedMilkProductsRatio,
          fishAndShellfishAndFishProducts:
            this.fishAndShellfishAndFishProductsRatio,
          frozenVegetables: this.frozenVegetablesRatio,
          fruitAndBerryPreserves: this.fruitAndBerryPreservesRatio,
          fruits: this.fruitsRatio,
          grainsAndGrainProducts: this.grainsAndGrainProductsRatio,
          legumesAndNuts: this.legumesAndNutsRatio,
          margarine: this.margarineRatio,
          meatProducts: this.meatProductsRatio,
          milk: this.milkRatio,
          otherDairyProducts: this.otherDairyProductsRatio,
          otherDrinks: this.otherDrinksRatio,
          otherFoodProducts: this.otherFoodProductsRatio,
          otherMeatsAndOffal: this.otherMeatsAndOffalRatio,
          plantBasedDrinks: this.plantBasedDrinksRatio,
          plantBasedProteinProducts: this.plantBasedProteinProductsRatio,
          pork: this.porkRatio,
          potatoes: this.potatoesRatio,
          rice: this.riceRatio,
          rootVegetables: this.rootVegetablesRatio,
          sausages: this.sausagesRatio,
          sugarCandiesAndChocolate: this.sugarCandiesAndChocolateRatio,
          vegetablesAndMushrooms: this.vegetablesAndMushroomsRatio,
          vegetableOils: this.vegetableOilsRatio,
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
          vegetablesFruitsBerries: response.result.vegetablesFruitsBerries,
          grainsPotatoes: response.result.grainsPotatoes,
          dairyEggs: response.result.dairyEggs,
          fat: response.result.fat,
          meat: response.result.meat,
          fish: response.result.fish,
          plantBasedProtein: response.result.plantBasedProtein,
          drinks: response.result.drinks,
          sweets: response.result.sweets,
          other: response.result.other,
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
    setAlcoholicBeverages(value: number) {
      this.alcoholicBeveragesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setBeef(value: number) {
      this.beefRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setBerries(value: number) {
      this.berriesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setButterAndAnimalFats(value: number) {
      this.butterAndAnimalFatsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setCheeses(value: number) {
      this.cheesesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setChickenAndTurkey(value: number) {
      this.chickenAndTurkeyRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setCoffeeAndTea(value: number) {
      this.coffeeAndTeaRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setDryPlantBasedProtein(value: number) {
      this.dryPlantBasedProteinRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setEggs(value: number) {
      this.eggsCount = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFermentedMilkProducts(value: number) {
      this.fermentedMilkProductsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFishAndShellfishAndFishProducts(value: number) {
      this.fishAndShellfishAndFishProductsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFrozenVegetables(value: number) {
      this.frozenVegetablesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFruitAndBerryPreserves(value: number) {
      this.fruitAndBerryPreservesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFruits(value: number) {
      this.fruitsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setGrainsAndGrainProducts(value: number) {
      this.grainsAndGrainProductsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setLegumesAndNuts(value: number) {
      this.legumesAndNutsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setMargarine(value: number) {
      this.margarineRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setMeatProducts(value: number) {
      this.meatProductsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setMilk(value: number) {
      this.milkRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherDairyProducts(value: number) {
      this.otherDairyProductsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherDrinks(value: number) {
      this.otherDrinksRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherFoodProducts(value: number) {
      this.otherFoodProductsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherMeatsAndOffal(value: number) {
      this.otherMeatsAndOffalRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPlantBasedDrinks(value: number) {
      this.plantBasedDrinksRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPlantBasedProteinProducts(value: number) {
      this.plantBasedProteinProductsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPork(value: number) {
      this.porkRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPotatoes(value: number) {
      this.potatoesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setRice(value: number) {
      this.riceRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setRootVegetables(value: number) {
      this.rootVegetablesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setSausages(value: number) {
      this.sausagesRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setSugarCandiesAndChocolate(value: number) {
      this.sugarCandiesAndChocolateRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setVegetableOils(value: number) {
      this.vegetableOilsRatio = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setVegetablesAndMushrooms(value: number) {
      this.vegetablesAndMushroomsRatio = value
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
      this.vegetablesFruitsBerriesResult = Math.round(
        results.vegetablesFruitsBerries
      )
      this.grainsPotatoesResult = Math.round(results.grainsPotatoes)
      this.dairyEggsResult = Math.round(results.dairyEggs)
      this.fatResult = Math.round(results.fat)
      this.meatResult = Math.round(results.meat)
      this.fishResult = Math.round(results.fish)
      this.plantBasedProteinResult = Math.round(results.plantBasedProtein)
      this.drinksResult = Math.round(results.drinks)
      this.sweetsResult = Math.round(results.sweets)
      this.otherResult = Math.round(results.other)
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
          label: i18n.global.t('$resultCategoryVegetablesFruitsBerries'),
          value: state.vegetablesFruitsBerriesResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryGrainsPotatoes'),
          value: state.grainsPotatoesResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryDairyEggs'),
          value: state.dairyEggsResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryFat'),
          value: state.fatResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryMeat'),
          value: state.meatResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryFish'),
          value: state.fishResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryPlantBasedProtein'),
          value: state.plantBasedProteinResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryDrinks'),
          value: state.drinksResult,
        })

        data.push({
          label: i18n.global.t('$resultCategorySweets'),
          value: state.sweetsResult,
        })

        data.push({
          label: i18n.global.t('$resultCategoryOther'),
          value: state.otherResult,
        })

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
          addAction('Mixed')
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
      if (
        state.beefRatio >= 100 ||
        state.fishAndShellfishAndFishProductsRatio >= 100 ||
        state.porkRatio >= 100 ||
        state.chickenAndTurkeyRatio >= 100 ||
        state.meatProductsRatio >= 100 ||
        state.otherMeatsAndOffalRatio >= 100 ||
        state.sausagesRatio >= 100
      ) {
        return '$sitraVarietyWithVegetables'
      }
      return '$sitraAvoidFoodWaste'
    },
  },
})
