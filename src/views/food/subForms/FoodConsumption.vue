<template>
  <SubForm
    id="food-consumption"
    :title="$t('$foodIngredients')"
    :is-active="isActive"
    :is-enabled="baseDataStore.submitted"
    @titleClicked="consumptionTitleClicked"
    :summary="$t('$foodIngredientsSummary')"
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
    <b class="range-details-text">{{ $t('$foodIngredientsRangeDetails') }}</b>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryVegetablesFruitsBerries') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="vegetablesAndMushrooms">
          {{ $t('$vegetablesAndMushrooms') }}
        </label>
        <input
          id="vegetablesAndMushrooms"
          type="range"
          min="0"
          max="200"
          v-model.number="vegetablesAndMushrooms"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'vegetablesAndMushrooms',
              vegetablesAndMushrooms
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="rootVegetables">
          {{ $t('$rootVegetables') }}
        </label>
        <input
          id="rootVegetables"
          type="range"
          min="0"
          max="200"
          v-model.number="rootVegetables"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('rootVegetables', rootVegetables) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="frozenVegetables">
          {{ $t('$frozenVegetables') }}
        </label>
        <input
          id="frozenVegetables"
          type="range"
          min="0"
          max="200"
          v-model.number="frozenVegetables"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('frozenVegetables', frozenVegetables) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="fruits">
          {{ $t('$fruits') }}
        </label>
        <input
          id="fruits"
          type="range"
          min="0"
          max="200"
          v-model.number="fruits"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('fruits', fruits) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="fruitAndBerryPreserves">
          {{ $t('$fruitAndBerryPreserves') }}
        </label>
        <input
          id="fruitAndBerryPreserves"
          type="range"
          min="0"
          max="200"
          v-model.number="fruitAndBerryPreserves"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'fruitAndBerryPreserves',
              fruitAndBerryPreserves
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="berries">
          {{ $t('$berries') }}
        </label>
        <input
          id="berries"
          type="range"
          min="0"
          max="200"
          v-model.number="berries"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('berries', berries) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryGrainsPotatoes') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="grainsAndGrainProducts">
          {{ $t('$grainsAndGrainProducts') }}
        </label>
        <input
          id="grainsAndGrainProducts"
          type="range"
          min="0"
          max="200"
          v-model.number="grainsAndGrainProducts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'grainsAndGrainProducts',
              grainsAndGrainProducts
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="rice">
          {{ $t('$rice') }}
        </label>
        <input id="rice" type="range" min="0" max="200" v-model.number="rice" />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('rice', rice) + ' kg/' + $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="potatoes">
          {{ $t('$potatoes') }}
        </label>
        <input
          id="potatoes"
          type="range"
          min="0"
          max="200"
          v-model.number="potatoes"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('potatoes', potatoes) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryDairyEggs') }}
      </label>

      <div class="range-item">
        <label class="range-label" for="milk">
          {{ $t('$milk') }}
        </label>
        <input id="milk" type="range" min="0" max="200" v-model.number="milk" />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('milk', milk) + ' kg/' + $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="cheeses">
          {{ $t('$cheeses') }}
        </label>
        <input
          id="cheeses"
          type="range"
          min="0"
          max="200"
          v-model.number="cheeses"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('cheeses', cheeses) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="fermentedMilkProducts">
          {{ $t('$fermentedMilkProducts') }}
          <span class="range-label-description">
            {{ $t('$fermentedMilkProductsDescription') }}
          </span>
        </label>
        <input
          id="fermentedMilkProducts"
          type="range"
          min="0"
          max="200"
          v-model.number="fermentedMilkProducts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'fermentedMilkProducts',
              fermentedMilkProducts
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="otherDairyProducts">
          {{ $t('$otherDairyProducts') }}
          <span class="range-label-description">
            {{ $t('$otherDairyProductsDescription') }}
          </span>
        </label>
        <input
          id="otherDairyProducts"
          type="range"
          min="0"
          max="200"
          v-model.number="otherDairyProducts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'otherDairyProducts',
              otherDairyProducts
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="eggs">{{ $t('$eggs') }}</label>
        <input
          id="eggs"
          type="range"
          min="0"
          max="30"
          v-model.number="eggsCount"
        />
        <span class="field-unit">
          {{ eggsCount + ' ' + $t('$piecesShort') + '/' + $t('$weekLong') }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryMeat') }}
      </label>

      <div class="range-item">
        <label class="range-label" for="beef">
          {{ $t('$beef') }}
        </label>
        <input id="beef" type="range" min="0" max="200" v-model.number="beef" />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('beef', beef) + ' kg/' + $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="pork">
          {{ $t('$pork') }}
        </label>
        <input id="pork" type="range" min="0" max="200" v-model.number="pork" />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('pork', pork) + ' kg/' + $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="chickenAndTurkey">
          {{ $t('$chickenAndTurkey') }}
        </label>
        <input
          id="chickenAndTurkey"
          type="range"
          min="0"
          max="200"
          v-model.number="chickenAndTurkey"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('chickenAndTurkey', chickenAndTurkey) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="sausages">
          {{ $t('$sausages') }}
          <span class="range-label-description">
            {{ $t('$sausagesDescription') }}
          </span>
        </label>
        <input
          id="sausages"
          type="range"
          min="0"
          max="200"
          v-model.number="sausages"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('sausages', sausages) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="meatProducts">
          {{ $t('$meatProducts') }}
        </label>
        <input
          id="meatProducts"
          type="range"
          min="0"
          max="200"
          v-model.number="meatProducts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('meatProducts', meatProducts) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="otherMeatsAndOffal">
          {{ $t('$otherMeatsAndOffal') }}
        </label>
        <input
          id="otherMeatsAndOffal"
          type="range"
          min="0"
          max="200"
          v-model.number="otherMeatsAndOffal"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'otherMeatsAndOffal',
              otherMeatsAndOffal
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryFish') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="fishAndShellfishAndFishProducts">
          {{ $t('$fishAndShellfishAndFishProducts') }}
        </label>
        <input
          id="fishAndShellfishAndFishProducts"
          type="range"
          min="0"
          max="200"
          v-model.number="fishAndShellfishAndFishProducts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'fishAndShellfishAndFishProducts',
              fishAndShellfishAndFishProducts
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryPlantBasedProtein') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="legumesAndNuts">
          {{ $t('$legumesAndNuts') }}
        </label>
        <input
          id="legumesAndNuts"
          type="range"
          min="0"
          max="200"
          v-model.number="legumesAndNuts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('legumesAndNuts', legumesAndNuts) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="plantBasedProteinProducts">
          {{ $t('$plantBasedProteinProducts') }}
          <span class="range-label-description">
            {{ $t('$plantBasedProteinProductsDescription') }}
          </span>
        </label>
        <input
          id="plantBasedProteinProducts"
          type="range"
          min="0"
          max="200"
          v-model.number="plantBasedProteinProducts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'plantBasedProteinProducts',
              plantBasedProteinProducts
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="dryPlantBasedProtein">
          {{ $t('$dryPlantBasedProtein') }}
          <span class="range-label-description">
            {{ $t('$dryPlantBasedProteinDescription') }}
          </span>
        </label>
        <input
          id="dryPlantBasedProtein"
          type="range"
          min="0"
          max="200"
          v-model.number="dryPlantBasedProtein"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'dryPlantBasedProtein',
              dryPlantBasedProtein
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="plantBasedDrinks">
          {{ $t('$plantBasedDrinks') }}
          <span class="range-label-description">
            {{ $t('$plantBasedDrinksDescription') }}
          </span>
        </label>
        <input
          id="plantBasedDrinks"
          type="range"
          min="0"
          max="200"
          v-model.number="plantBasedDrinks"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('plantBasedDrinks', plantBasedDrinks) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryDrinks') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="coffeeAndTea">
          {{ $t('$coffeeAndTea') }}
        </label>
        <input
          id="coffeeAndTea"
          type="range"
          min="0"
          max="200"
          v-model.number="coffeeAndTea"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('coffeeAndTea', coffeeAndTea) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
      <div class="range-item">
        <label class="range-label" for="alcoholicBeverages">
          {{ $t('$alcoholicBeverages') }}
        </label>
        <input
          id="alcoholicBeverages"
          type="range"
          min="0"
          max="200"
          v-model.number="alcoholicBeverages"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'alcoholicBeverages',
              alcoholicBeverages
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
      <div class="range-item">
        <label class="range-label" for="otherDrinks">
          {{ $t('$otherDrinks') }}
          <span class="range-label-description">
            {{ $t('$otherDrinksDescription') }}
          </span>
        </label>
        <input
          id="otherDrinks"
          type="range"
          min="0"
          max="200"
          v-model.number="otherDrinks"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('otherDrinks', otherDrinks) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryFat') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="butterAndAnimalFats">
          {{ $t('$butterAndAnimalFats') }}
        </label>
        <input
          id="butterAndAnimalFats"
          type="range"
          min="0"
          max="200"
          v-model.number="butterAndAnimalFats"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'butterAndAnimalFats',
              butterAndAnimalFats
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="margarine">
          {{ $t('$margarine') }}
        </label>
        <input
          id="margarine"
          type="range"
          min="0"
          max="200"
          v-model.number="margarine"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('margarine', margarine) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>

      <div class="range-item">
        <label class="range-label" for="vegetableOils">
          {{ $t('$vegetableOils') }}
        </label>
        <input
          id="vegetableOils"
          type="range"
          min="0"
          max="200"
          v-model.number="vegetableOils"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount('vegetableOils', vegetableOils) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>

    <div>
      <label class="section-title-food">
        {{ $t('$resultCategorySweets') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="sugarCandiesAndChocolate">
          {{ $t('$sugarCandiesAndChocolate') }}
        </label>
        <input
          id="sugarCandiesAndChocolate"
          type="range"
          min="0"
          max="200"
          v-model.number="sugarCandiesAndChocolate"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'sugarCandiesAndChocolate',
              sugarCandiesAndChocolate
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
    </div>
    <div>
      <label class="section-title-food">
        {{ $t('$resultCategoryOther') }}
      </label>
      <div class="range-item">
        <label class="range-label" for="otherFoodProducts">
          {{ $t('$otherFoodProducts') }}
        </label>
        <input
          id="otherFoodProducts"
          type="range"
          min="0"
          max="200"
          v-model.number="otherFoodProducts"
        />
        <span class="field-unit">
          {{
            foodStore.consumptionAmount(
              'otherFoodProducts',
              otherFoodProducts
            ) +
            ' kg/' +
            $t('$weekLong')
          }}
        </span>
      </div>
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

export default defineComponent({
  computed: {
    ...mapStores(useFoodStore, useBaseDataStore),
    food(): IFoodState {
      return this.foodStore.$state
    },
    alcoholicBeverages: {
      get(): number {
        return this.food.alcoholicBeveragesRatio
      },
      set(value: number) {
        this.foodStore.setAlcoholicBeverages(value)
      },
    },
    beef: {
      get(): number {
        return this.food.beefRatio
      },
      set(value: number) {
        this.foodStore.setBeef(value)
      },
    },
    berries: {
      get(): number {
        return this.food.berriesRatio
      },
      set(value: number) {
        this.foodStore.setBerries(value)
      },
    },
    butterAndAnimalFats: {
      get(): number {
        return this.food.butterAndAnimalFatsRatio
      },
      set(value: number) {
        this.foodStore.setButterAndAnimalFats(value)
      },
    },
    cheeses: {
      get(): number {
        return this.food.cheesesRatio
      },
      set(value: number) {
        this.foodStore.setCheeses(value)
      },
    },
    chickenAndTurkey: {
      get(): number {
        return this.food.chickenAndTurkeyRatio
      },
      set(value: number) {
        this.foodStore.setChickenAndTurkey(value)
      },
    },
    coffeeAndTea: {
      get(): number {
        return this.food.coffeeAndTeaRatio
      },
      set(value: number) {
        this.foodStore.setCoffeeAndTea(value)
      },
    },
    dryPlantBasedProtein: {
      get(): number {
        return this.food.dryPlantBasedProteinRatio
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
        return this.food.fermentedMilkProductsRatio
      },
      set(value: number) {
        this.foodStore.setFermentedMilkProducts(value)
      },
    },
    fishAndShellfishAndFishProducts: {
      get(): number {
        return this.food.fishAndShellfishAndFishProductsRatio
      },
      set(value: number) {
        this.foodStore.setFishAndShellfishAndFishProducts(value)
      },
    },
    frozenVegetables: {
      get(): number {
        return this.food.frozenVegetablesRatio
      },
      set(value: number) {
        this.foodStore.setFrozenVegetables(value)
      },
    },
    fruitAndBerryPreserves: {
      get(): number {
        return this.food.fruitAndBerryPreservesRatio
      },
      set(value: number) {
        this.foodStore.setFruitAndBerryPreserves(value)
      },
    },
    fruits: {
      get(): number {
        return this.food.fruitsRatio
      },
      set(value: number) {
        this.foodStore.setFruits(value)
      },
    },
    grainsAndGrainProducts: {
      get(): number {
        return this.food.grainsAndGrainProductsRatio
      },
      set(value: number) {
        this.foodStore.setGrainsAndGrainProducts(value)
      },
    },
    legumesAndNuts: {
      get(): number {
        return this.food.legumesAndNutsRatio
      },
      set(value: number) {
        this.foodStore.setLegumesAndNuts(value)
      },
    },
    margarine: {
      get(): number {
        return this.food.margarineRatio
      },
      set(value: number) {
        this.foodStore.setMargarine(value)
      },
    },
    meatProducts: {
      get(): number {
        return this.food.meatProductsRatio
      },
      set(value: number) {
        this.foodStore.setMeatProducts(value)
      },
    },
    milk: {
      get(): number {
        return this.food.milkRatio
      },
      set(value: number) {
        this.foodStore.setMilk(value)
      },
    },
    otherDairyProducts: {
      get(): number {
        return this.food.otherDairyProductsRatio
      },
      set(value: number) {
        this.foodStore.setOtherDairyProducts(value)
      },
    },
    otherDrinks: {
      get(): number {
        return this.food.otherDrinksRatio
      },
      set(value: number) {
        this.foodStore.setOtherDrinks(value)
      },
    },
    otherFoodProducts: {
      get(): number {
        return this.food.otherFoodProductsRatio
      },
      set(value: number) {
        this.foodStore.setOtherFoodProducts(value)
      },
    },
    otherMeatsAndOffal: {
      get(): number {
        return this.food.otherMeatsAndOffalRatio
      },
      set(value: number) {
        this.foodStore.setOtherMeatsAndOffal(value)
      },
    },
    plantBasedDrinks: {
      get(): number {
        return this.food.plantBasedDrinksRatio
      },
      set(value: number) {
        this.foodStore.setPlantBasedDrinks(value)
      },
    },
    plantBasedProteinProducts: {
      get(): number {
        return this.food.plantBasedProteinProductsRatio
      },
      set(value: number) {
        this.foodStore.setPlantBasedProteinProducts(value)
      },
    },
    pork: {
      get(): number {
        return this.food.porkRatio
      },
      set(value: number) {
        this.foodStore.setPork(value)
      },
    },
    potatoes: {
      get(): number {
        return this.food.potatoesRatio
      },
      set(value: number) {
        this.foodStore.setPotatoes(value)
      },
    },
    rice: {
      get(): number {
        return this.food.riceRatio
      },
      set(value: number) {
        this.foodStore.setRice(value)
      },
    },
    rootVegetables: {
      get(): number {
        return this.food.rootVegetablesRatio
      },
      set(value: number) {
        this.foodStore.setRootVegetables(value)
      },
    },
    sausages: {
      get(): number {
        return this.food.sausagesRatio
      },
      set(value: number) {
        this.foodStore.setSausages(value)
      },
    },
    sugarCandiesAndChocolate: {
      get(): number {
        return this.food.sugarCandiesAndChocolateRatio
      },
      set(value: number) {
        this.foodStore.setSugarCandiesAndChocolate(value)
      },
    },
    vegetablesAndMushrooms: {
      get(): number {
        return this.food.vegetablesAndMushroomsRatio
      },
      set(value: number) {
        this.foodStore.setVegetablesAndMushrooms(value)
      },
    },
    vegetableOils: {
      get(): number {
        return this.food.vegetableOilsRatio
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
