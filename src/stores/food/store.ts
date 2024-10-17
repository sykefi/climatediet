import { defineStore } from 'pinia'
import {
  Diets,
  FoodSections,
  IFoodResults,
  IFoodState,
  consumptionAverageKgPerCapPerWeek,
} from './types'
import { useGlobalStateStore } from '../global/store'
import { eggsCountToKilograms } from './helpers'
import api from '@/utilities/api'
import { TranslateResult } from 'vue-i18n'
import i18n from '@/locale/i18n'
import { IChartData } from '@/types'
import { useRouter } from 'vue-router'

export const useFoodStore = defineStore('food', {
  state: (): IFoodState => ({
    id: 0,
    submitted: false,
    activeSection: FoodSections.Diet,
    diet: Diets.Mixed,
    alcoholicBeveragesValue:
      consumptionAverageKgPerCapPerWeek.alcoholicBeverages.Mixed,
    beefValue: consumptionAverageKgPerCapPerWeek.beef.Mixed,
    berriesValue: consumptionAverageKgPerCapPerWeek.berries.Mixed,
    butterAndAnimalFatsValue:
      consumptionAverageKgPerCapPerWeek.butterAndAnimalFats.Mixed,
    cheesesValue: consumptionAverageKgPerCapPerWeek.cheeses.Mixed,
    chickenAndTurkeyValue:
      consumptionAverageKgPerCapPerWeek.chickenAndTurkey.Mixed,
    coffeeAndTeaValue: consumptionAverageKgPerCapPerWeek.coffeeAndTea.Mixed,
    dryPlantBasedProteinValue:
      consumptionAverageKgPerCapPerWeek.dryPlantBasedProtein.Mixed,
    eggsCount: consumptionAverageKgPerCapPerWeek.eggs.Mixed,
    fermentedMilkProductsValue:
      consumptionAverageKgPerCapPerWeek.fermentedMilkProducts.Mixed,
    fishAndShellfishAndFishProductsValue:
      consumptionAverageKgPerCapPerWeek.fishAndShellfishAndFishProducts.Mixed,
    frozenVegetablesValue:
      consumptionAverageKgPerCapPerWeek.frozenVegetables.Mixed,
    fruitAndBerryPreservesValue:
      consumptionAverageKgPerCapPerWeek.fruitAndBerryPreserves.Mixed,
    fruitsValue: consumptionAverageKgPerCapPerWeek.fruits.Mixed,
    grainsAndGrainProductsValue:
      consumptionAverageKgPerCapPerWeek.grainsAndGrainProducts.Mixed,
    legumesAndNutsValue: consumptionAverageKgPerCapPerWeek.legumesAndNuts.Mixed,
    margarineValue: consumptionAverageKgPerCapPerWeek.margarine.Mixed,
    meatProductsValue: consumptionAverageKgPerCapPerWeek.meatProducts.Mixed,
    milkValue: consumptionAverageKgPerCapPerWeek.milk.Mixed,
    otherDairyProductsValue:
      consumptionAverageKgPerCapPerWeek.otherDairyProducts.Mixed,
    otherDrinksValue: consumptionAverageKgPerCapPerWeek.otherDrinks.Mixed,
    otherFoodProductsValue:
      consumptionAverageKgPerCapPerWeek.otherFoodProducts.Mixed,
    otherMeatsAndOffalValue:
      consumptionAverageKgPerCapPerWeek.otherMeatsAndOffal.Mixed,
    plantBasedDrinksValue:
      consumptionAverageKgPerCapPerWeek.plantBasedDrinks.Mixed,
    plantBasedProteinProductsValue:
      consumptionAverageKgPerCapPerWeek.plantBasedProteinProducts.Mixed,
    porkValue: consumptionAverageKgPerCapPerWeek.pork.Mixed,
    potatoesValue: consumptionAverageKgPerCapPerWeek.potatoes.Mixed,
    riceValue: consumptionAverageKgPerCapPerWeek.rice.Mixed,
    rootVegetablesValue: consumptionAverageKgPerCapPerWeek.rootVegetables.Mixed,
    sausagesValue: consumptionAverageKgPerCapPerWeek.sausages.Mixed,
    sugarCandiesAndChocolateValue:
      consumptionAverageKgPerCapPerWeek.sugarCandiesAndChocolate.Mixed,
    vegetableOilsValue: consumptionAverageKgPerCapPerWeek.vegetableOils.Mixed,
    vegetablesAndMushroomsValue:
      consumptionAverageKgPerCapPerWeek.vegetablesAndMushrooms.Mixed,
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
        const eggs = eggsCountToKilograms(this.eggsCount)
        const gramsToKilos = 0.001
        const data = {
          diet: this.diet,
          alcoholicBeverages: this.alcoholicBeveragesValue, // input in liters ≈ kg
          beef: this.beefValue * gramsToKilos,
          berries: this.berriesValue * gramsToKilos,
          butterAndAnimalFats: this.butterAndAnimalFatsValue * gramsToKilos,
          cheeses: this.cheesesValue * gramsToKilos,
          chickenAndTurkey: this.chickenAndTurkeyValue * gramsToKilos,
          coffeeAndTea: this.coffeeAndTeaValue, // input in liters ≈ kg
          dryPlantBasedProtein: this.dryPlantBasedProteinValue * gramsToKilos,
          eggs: eggs,
          fermentedMilkProducts: this.fermentedMilkProductsValue * gramsToKilos,
          fishAndShellfishAndFishProducts:
            this.fishAndShellfishAndFishProductsValue * gramsToKilos,
          frozenVegetables: this.frozenVegetablesValue * gramsToKilos,
          fruitAndBerryPreserves:
            this.fruitAndBerryPreservesValue * gramsToKilos,
          fruits: this.fruitsValue * gramsToKilos,
          grainsAndGrainProducts:
            this.grainsAndGrainProductsValue * gramsToKilos,
          legumesAndNuts: this.legumesAndNutsValue * gramsToKilos,
          margarine: this.margarineValue * gramsToKilos,
          meatProducts: this.meatProductsValue * gramsToKilos,
          milk: this.milkValue, // input in liters ≈ kg
          otherDairyProducts: this.otherDairyProductsValue * gramsToKilos,
          otherDrinks: this.otherDrinksValue, // input in liters ≈ kg
          otherFoodProducts: this.otherFoodProductsValue * gramsToKilos,
          otherMeatsAndOffal: this.otherMeatsAndOffalValue * gramsToKilos,
          plantBasedDrinks: this.plantBasedDrinksValue, // input in liters ≈ kg
          plantBasedProteinProducts:
            this.plantBasedProteinProductsValue * gramsToKilos,
          pork: this.porkValue * gramsToKilos,
          potatoes: this.potatoesValue * gramsToKilos,
          rice: this.riceValue * gramsToKilos,
          rootVegetables: this.rootVegetablesValue * gramsToKilos,
          sausages: this.sausagesValue * gramsToKilos,
          sugarCandiesAndChocolate:
            this.sugarCandiesAndChocolateValue * gramsToKilos,
          vegetablesAndMushrooms:
            this.vegetablesAndMushroomsValue * gramsToKilos,
          vegetableOils: this.vegetableOilsValue * gramsToKilos,
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

      // set consumption defaults based on diet
      this.resetConsumption()
    },
    setAlcoholicBeverages(value: number) {
      this.alcoholicBeveragesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setBeef(value: number) {
      this.beefValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setBerries(value: number) {
      this.berriesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setButterAndAnimalFats(value: number) {
      this.butterAndAnimalFatsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setCheeses(value: number) {
      this.cheesesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setChickenAndTurkey(value: number) {
      this.chickenAndTurkeyValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setCoffeeAndTea(value: number) {
      this.coffeeAndTeaValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setDryPlantBasedProtein(value: number) {
      this.dryPlantBasedProteinValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setEggs(value: number) {
      this.eggsCount = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFermentedMilkProducts(value: number) {
      this.fermentedMilkProductsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFishAndShellfishAndFishProducts(value: number) {
      this.fishAndShellfishAndFishProductsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFrozenVegetables(value: number) {
      this.frozenVegetablesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFruitAndBerryPreserves(value: number) {
      this.fruitAndBerryPreservesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setFruits(value: number) {
      this.fruitsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setGrainsAndGrainProducts(value: number) {
      this.grainsAndGrainProductsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setLegumesAndNuts(value: number) {
      this.legumesAndNutsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setMargarine(value: number) {
      this.margarineValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setMeatProducts(value: number) {
      this.meatProductsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setMilk(value: number) {
      this.milkValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherDairyProducts(value: number) {
      this.otherDairyProductsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherDrinks(value: number) {
      this.otherDrinksValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherFoodProducts(value: number) {
      this.otherFoodProductsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setOtherMeatsAndOffal(value: number) {
      this.otherMeatsAndOffalValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPlantBasedDrinks(value: number) {
      this.plantBasedDrinksValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPlantBasedProteinProducts(value: number) {
      this.plantBasedProteinProductsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPork(value: number) {
      this.porkValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setPotatoes(value: number) {
      this.potatoesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setRice(value: number) {
      this.riceValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setRootVegetables(value: number) {
      this.rootVegetablesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setSausages(value: number) {
      this.sausagesValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setSugarCandiesAndChocolate(value: number) {
      this.sugarCandiesAndChocolateValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setVegetableOils(value: number) {
      this.vegetableOilsValue = value
      this.unSavedChanges = true
      this.consumptionDefaultsChanged = true
    },
    setVegetablesAndMushrooms(value: number) {
      this.vegetablesAndMushroomsValue = value
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
      const diet = this.diet
      // Set consumption defaults based on diet
      this.setAlcoholicBeverages(
        consumptionAverageKgPerCapPerWeek.alcoholicBeverages[diet]
      )
      this.setBeef(consumptionAverageKgPerCapPerWeek.beef[diet])
      this.setBerries(consumptionAverageKgPerCapPerWeek.berries[diet])
      this.setButterAndAnimalFats(
        consumptionAverageKgPerCapPerWeek.butterAndAnimalFats[diet]
      )
      this.setCheeses(consumptionAverageKgPerCapPerWeek.cheeses[diet])
      this.setChickenAndTurkey(
        consumptionAverageKgPerCapPerWeek.chickenAndTurkey[diet]
      )
      this.setCoffeeAndTea(consumptionAverageKgPerCapPerWeek.coffeeAndTea[diet])
      this.setDryPlantBasedProtein(
        consumptionAverageKgPerCapPerWeek.dryPlantBasedProtein[diet]
      )
      this.setEggs(consumptionAverageKgPerCapPerWeek.eggs[diet])
      this.setFermentedMilkProducts(
        consumptionAverageKgPerCapPerWeek.fermentedMilkProducts[diet]
      )
      this.setFishAndShellfishAndFishProducts(
        consumptionAverageKgPerCapPerWeek.fishAndShellfishAndFishProducts[diet]
      )
      this.setFrozenVegetables(
        consumptionAverageKgPerCapPerWeek.frozenVegetables[diet]
      )
      this.setFruitAndBerryPreserves(
        consumptionAverageKgPerCapPerWeek.fruitAndBerryPreserves[diet]
      )
      this.setFruits(consumptionAverageKgPerCapPerWeek.fruits[diet])
      this.setGrainsAndGrainProducts(
        consumptionAverageKgPerCapPerWeek.grainsAndGrainProducts[diet]
      )
      this.setLegumesAndNuts(
        consumptionAverageKgPerCapPerWeek.legumesAndNuts[diet]
      )
      this.setMargarine(consumptionAverageKgPerCapPerWeek.margarine[diet])
      this.setMeatProducts(consumptionAverageKgPerCapPerWeek.meatProducts[diet])
      this.setMilk(consumptionAverageKgPerCapPerWeek.milk[diet])
      this.setOtherDairyProducts(
        consumptionAverageKgPerCapPerWeek.otherDairyProducts[diet]
      )
      this.setOtherDrinks(consumptionAverageKgPerCapPerWeek.otherDrinks[diet])
      this.setOtherFoodProducts(
        consumptionAverageKgPerCapPerWeek.otherFoodProducts[diet]
      )
      this.setOtherMeatsAndOffal(
        consumptionAverageKgPerCapPerWeek.otherMeatsAndOffal[diet]
      )
      this.setPlantBasedDrinks(
        consumptionAverageKgPerCapPerWeek.plantBasedDrinks[diet]
      )
      this.setPlantBasedProteinProducts(
        consumptionAverageKgPerCapPerWeek.plantBasedProteinProducts[diet]
      )
      this.setPork(consumptionAverageKgPerCapPerWeek.pork[diet])
      this.setPotatoes(consumptionAverageKgPerCapPerWeek.potatoes[diet])
      this.setRice(consumptionAverageKgPerCapPerWeek.rice[diet])
      this.setRootVegetables(
        consumptionAverageKgPerCapPerWeek.rootVegetables[diet]
      )
      this.setSausages(consumptionAverageKgPerCapPerWeek.sausages[diet])
      this.setSugarCandiesAndChocolate(
        consumptionAverageKgPerCapPerWeek.sugarCandiesAndChocolate[diet]
      )
      this.setVegetableOils(
        consumptionAverageKgPerCapPerWeek.vegetableOils[diet]
      )
      this.setVegetablesAndMushrooms(
        consumptionAverageKgPerCapPerWeek.vegetablesAndMushrooms[diet]
      )

      this.consumptionDefaultsChanged = false
    },
    foodReset() {
      this.$reset()
    },
  },
  getters: {
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

        const router = useRouter()
        const baseRoute = router.resolve({
          name: 'calculationInfo',
          hash: '#food',
        }).href
        addAction(
          'Generic',
          baseRoute,
          i18n.global.t('$foodActionGenericCalcInfo')
        )

        return actions
      }
    },
    resultLinks: () => {
      return () => {
        return [
          {
            title: i18n.global.t('$climateGuide'),
            description: i18n.global.t('$climateGuideDetails'),
            url: i18n.global.t('$climateGuideUrl'),
          },
          {
            title: i18n.global.t('$wwfFood'),
            description: i18n.global.t('$wwfFoodDetails'),
            url: i18n.global.t('$wwfFoodUrl'),
          },
          {
            title: i18n.global.t('$saaSyoda'),
            description: i18n.global.t('$saaSyodaDetails'),
            url: i18n.global.t('$saaSyodaUrl'),
          },
        ]
      }
    },
    sitraCases: (state) => {
      // TODO: remove or  fix
      if (
        state.beefValue >= 100 ||
        state.fishAndShellfishAndFishProductsValue >= 100 ||
        state.porkValue >= 100 ||
        state.chickenAndTurkeyValue >= 100 ||
        state.meatProductsValue >= 100 ||
        state.otherMeatsAndOffalValue >= 100 ||
        state.sausagesValue >= 100
      ) {
        return '$sitraVarietyWithVegetables'
      }
      return '$sitraAvoidFoodWaste'
    },
  },
})
