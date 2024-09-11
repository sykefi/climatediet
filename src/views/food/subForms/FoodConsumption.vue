<template>
  <SubForm
    id="food-consumption"
    :title="$t('$foodIngredients')"
    :is-active="isActive"
    :is-enabled="baseDataStore.submitted"
    @titleClicked="consumptionTitleClicked"
    :summary="$t('$foodIngredientsSummary')"
    :details="$t('$foodIngredientsDetails')"
    calc-info-hash="food"
  >
    <button
      type="button"
      :class="{ invisible: !foodStore.consumptionDefaultsChanged }"
      class="reset-button"
      @click="reset"
    >
      {{ $t('$resetToDefaults') }}
    </button>
    <p class="range-details-text">{{ $t('$foodIngredientsRangeDetails') }}</p>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryGrainsPotatoes') }}
      </label>
      <FoodConsumptionInput
        inputName="grainsAndGrainProducts"
        inputDescription="grainsAndGrainProductsDescription"
        maxValue="20000"
        v-model.number="grainsAndGrainProducts"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="rice"
        maxValue="5000"
        v-model.number="rice"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="potatoes"
        maxValue="10000"
        v-model.number="potatoes"
      ></FoodConsumptionInput>
    </div>
    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryVegetablesFruitsBerries') }}
      </label>
      <FoodConsumptionInput
        inputName="vegetablesAndMushrooms"
        maxValue="20000"
        v-model.number="vegetablesAndMushrooms"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="rootVegetables"
        maxValue="5000"
        v-model.number="rootVegetables"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="frozenVegetables"
        maxValue="5000"
        v-model.number="frozenVegetables"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="fruits"
        maxValue="10000"
        v-model.number="fruits"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="fruitAndBerryPreserves"
        maxValue="1000"
        v-model.number="fruitAndBerryPreserves"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="berries"
        maxValue="5000"
        v-model.number="berries"
      ></FoodConsumptionInput>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryDairyEggs') }}
      </label>

      <FoodConsumptionInput
        inputName="milk"
        maxValue="20"
        unit="l/ "
        step="0.1"
        v-model.number="milk"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="cheeses"
        maxValue="5000"
        v-model.number="cheeses"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="fermentedMilkProducts"
        inputDescription="fermentedMilkProductsDescription"
        maxValue="10000"
        v-model.number="fermentedMilkProducts"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="otherDairyProducts"
        inputDescription="otherDairyProductsDescription"
        maxValue="5000"
        v-model.number="otherDairyProducts"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="eggs"
        maxValue="100"
        unit="$piecesShort"
        step="1"
        v-model.number="eggsCount"
      ></FoodConsumptionInput>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryMeat') }}
      </label>

      <FoodConsumptionInput
        inputName="beef"
        maxValue="5000"
        v-model.number="beef"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="pork"
        maxValue="5000"
        v-model.number="pork"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="chickenAndTurkey"
        maxValue="5000"
        v-model.number="chickenAndTurkey"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="sausages"
        inputDescription="sausagesDescription"
        maxValue="5000"
        v-model.number="sausages"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="meatProducts"
        maxValue="5000"
        v-model.number="meatProducts"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="otherMeatsAndOffal"
        maxValue="1000"
        v-model.number="otherMeatsAndOffal"
      ></FoodConsumptionInput>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryFish') }}
      </label>
      <FoodConsumptionInput
        inputName="fishAndShellfishAndFishProducts"
        maxValue="5000"
        v-model.number="fishAndShellfishAndFishProducts"
      ></FoodConsumptionInput>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryPlantBasedProtein') }}
      </label>
      <FoodConsumptionInput
        inputName="legumesAndNuts"
        maxValue="5000"
        v-model.number="legumesAndNuts"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="plantBasedProteinProducts"
        inputDescription="plantBasedProteinProductsDescription"
        maxValue="10000"
        v-model.number="plantBasedProteinProducts"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="dryPlantBasedProtein"
        inputDescription="dryPlantBasedProteinDescription"
        maxValue="5000"
        v-model.number="dryPlantBasedProtein"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="plantBasedDrinks"
        inputDescription="plantBasedDrinksDescription"
        maxValue="20"
        unit="l/ "
        step="0.1"
        v-model.number="plantBasedDrinks"
      ></FoodConsumptionInput>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryDrinks') }}
      </label>
      <FoodConsumptionInput
        inputName="coffeeAndTea"
        maxValue="20"
        unit="l/ "
        step="0.1"
        v-model.number="coffeeAndTea"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="alcoholicBeverages"
        maxValue="10"
        unit="l/ "
        step="0.1"
        v-model.number="alcoholicBeverages"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="otherDrinks"
        inputDescription="otherDrinksDescription"
        maxValue="20"
        unit="l/ "
        step="0.1"
        v-model.number="otherDrinks"
      ></FoodConsumptionInput>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryFat') }}
      </label>
      <FoodConsumptionInput
        inputName="butterAndAnimalFats"
        maxValue="1000"
        v-model.number="butterAndAnimalFats"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="margarine"
        maxValue="1000"
        v-model.number="margarine"
      ></FoodConsumptionInput>

      <FoodConsumptionInput
        inputName="vegetableOils"
        maxValue="1000"
        v-model.number="vegetableOils"
      ></FoodConsumptionInput>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategorySweets') }}
      </label>
      <FoodConsumptionInput
        inputName="sugarCandiesAndChocolate"
        maxValue="5000"
        v-model.number="sugarCandiesAndChocolate"
      ></FoodConsumptionInput>
    </div>
    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryOther') }}
      </label>
      <FoodConsumptionInput
        inputName="otherFoodProducts"
        maxValue="5000"
        v-model.number="otherFoodProducts"
      ></FoodConsumptionInput>
    </div>
  </SubForm>
</template>

<style lang="scss" scoped>
.range-details-text {
  display: block;
  margin-top: 1em;
}
</style>
<script lang="ts">
import { useFoodStore } from '@/stores/food/store'
import { FoodSections, IFoodState } from '@/stores/food/types'
import { useBaseDataStore } from '@/stores/startView/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'
import FoodConsumptionInput from './FoodConsumptionInput.vue'

export default defineComponent({
  components: { FoodConsumptionInput },
  computed: {
    ...mapStores(useFoodStore, useBaseDataStore),
    food(): IFoodState {
      return this.foodStore.$state
    },
    alcoholicBeverages: {
      get(): number {
        return this.food.alcoholicBeveragesValue
      },
      set(value: number) {
        this.foodStore.setAlcoholicBeverages(value)
      },
    },
    beef: {
      get(): number {
        return this.food.beefValue
      },
      set(value: number) {
        this.foodStore.setBeef(value)
      },
    },
    berries: {
      get(): number {
        return this.food.berriesValue
      },
      set(value: number) {
        this.foodStore.setBerries(value)
      },
    },
    butterAndAnimalFats: {
      get(): number {
        return this.food.butterAndAnimalFatsValue
      },
      set(value: number) {
        this.foodStore.setButterAndAnimalFats(value)
      },
    },
    cheeses: {
      get(): number {
        return this.food.cheesesValue
      },
      set(value: number) {
        this.foodStore.setCheeses(value)
      },
    },
    chickenAndTurkey: {
      get(): number {
        return this.food.chickenAndTurkeyValue
      },
      set(value: number) {
        this.foodStore.setChickenAndTurkey(value)
      },
    },
    coffeeAndTea: {
      get(): number {
        return this.food.coffeeAndTeaValue
      },
      set(value: number) {
        this.foodStore.setCoffeeAndTea(value)
      },
    },
    dryPlantBasedProtein: {
      get(): number {
        return this.food.dryPlantBasedProteinValue
      },
      set(value: number) {
        this.foodStore.setDryPlantBasedProtein(value)
      },
    },
    eggsCount: {
      get(): number {
        return this.food.eggsCount
      },
      set(value: number) {
        this.foodStore.setEggs(value)
      },
    },
    fermentedMilkProducts: {
      get(): number {
        return this.food.fermentedMilkProductsValue
      },
      set(value: number) {
        this.foodStore.setFermentedMilkProducts(value)
      },
    },
    fishAndShellfishAndFishProducts: {
      get(): number {
        return this.food.fishAndShellfishAndFishProductsValue
      },
      set(value: number) {
        this.foodStore.setFishAndShellfishAndFishProducts(value)
      },
    },
    frozenVegetables: {
      get(): number {
        return this.food.frozenVegetablesValue
      },
      set(value: number) {
        this.foodStore.setFrozenVegetables(value)
      },
    },
    fruitAndBerryPreserves: {
      get(): number {
        return this.food.fruitAndBerryPreservesValue
      },
      set(value: number) {
        this.foodStore.setFruitAndBerryPreserves(value)
      },
    },
    fruits: {
      get(): number {
        return this.food.fruitsValue
      },
      set(value: number) {
        this.foodStore.setFruits(value)
      },
    },
    grainsAndGrainProducts: {
      get(): number {
        return this.food.grainsAndGrainProductsValue
      },
      set(value: number) {
        this.foodStore.setGrainsAndGrainProducts(value)
      },
    },
    legumesAndNuts: {
      get(): number {
        return this.food.legumesAndNutsValue
      },
      set(value: number) {
        this.foodStore.setLegumesAndNuts(value)
      },
    },
    margarine: {
      get(): number {
        return this.food.margarineValue
      },
      set(value: number) {
        this.foodStore.setMargarine(value)
      },
    },
    meatProducts: {
      get(): number {
        return this.food.meatProductsValue
      },
      set(value: number) {
        this.foodStore.setMeatProducts(value)
      },
    },
    milk: {
      get(): number {
        return this.food.milkValue
      },
      set(value: number) {
        this.foodStore.setMilk(value)
      },
    },
    otherDairyProducts: {
      get(): number {
        return this.food.otherDairyProductsValue
      },
      set(value: number) {
        this.foodStore.setOtherDairyProducts(value)
      },
    },
    otherDrinks: {
      get(): number {
        return this.food.otherDrinksValue
      },
      set(value: number) {
        this.foodStore.setOtherDrinks(value)
      },
    },
    otherFoodProducts: {
      get(): number {
        return this.food.otherFoodProductsValue
      },
      set(value: number) {
        this.foodStore.setOtherFoodProducts(value)
      },
    },
    otherMeatsAndOffal: {
      get(): number {
        return this.food.otherMeatsAndOffalValue
      },
      set(value: number) {
        this.foodStore.setOtherMeatsAndOffal(value)
      },
    },
    plantBasedDrinks: {
      get(): number {
        return this.food.plantBasedDrinksValue
      },
      set(value: number) {
        this.foodStore.setPlantBasedDrinks(value)
      },
    },
    plantBasedProteinProducts: {
      get(): number {
        return this.food.plantBasedProteinProductsValue
      },
      set(value: number) {
        this.foodStore.setPlantBasedProteinProducts(value)
      },
    },
    pork: {
      get(): number {
        return this.food.porkValue
      },
      set(value: number) {
        this.foodStore.setPork(value)
      },
    },
    potatoes: {
      get(): number {
        return this.food.potatoesValue
      },
      set(value: number) {
        this.foodStore.setPotatoes(value)
      },
    },
    rice: {
      get(): number {
        return this.food.riceValue
      },
      set(value: number) {
        this.foodStore.setRice(value)
      },
    },
    rootVegetables: {
      get(): number {
        return this.food.rootVegetablesValue
      },
      set(value: number) {
        this.foodStore.setRootVegetables(value)
      },
    },
    sausages: {
      get(): number {
        return this.food.sausagesValue
      },
      set(value: number) {
        this.foodStore.setSausages(value)
      },
    },
    sugarCandiesAndChocolate: {
      get(): number {
        return this.food.sugarCandiesAndChocolateValue
      },
      set(value: number) {
        this.foodStore.setSugarCandiesAndChocolate(value)
      },
    },
    vegetablesAndMushrooms: {
      get(): number {
        return this.food.vegetablesAndMushroomsValue
      },
      set(value: number) {
        this.foodStore.setVegetablesAndMushrooms(value)
      },
    },
    vegetableOils: {
      get(): number {
        return this.food.vegetableOilsValue
      },
      set(value: number) {
        this.foodStore.setVegetableOils(value)
      },
    },
    isActive(): boolean {
      return this.food.activeSection === FoodSections.Consumption
    },
  },
  methods: {
    reset() {
      this.foodStore.resetConsumption()
    },
    consumptionTitleClicked(id: string) {
      if (!this.isActive) {
        this.$emit('consumptionTitleClicked', [FoodSections.Consumption, id])
      }
    },
  },
  props: {
    isPrimary: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
})
</script>
