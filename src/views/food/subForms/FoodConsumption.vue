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
      id="reset-button"
      @click="reset"
    >
      {{ $t('$resetToDefaults') }}
    </button>
    <b id="range-details-text">{{ $t('$foodIngredientsRangeDetails') }}</b>
    <div class="range-item" v-if="food.diet === 'Omnivore'">
      <label class="range-label" for="beef">
        {{ $t('$beefAndLamb') }}
      </label>
      <input id="beef" type="range" min="0" max="200" v-model.number="beef" />
      <span class="field-unit">
        {{
          foodStore.consumptionAmount('beef', beef) + ' kg/' + $t('$weekLong')
        }}
      </span>
    </div>
    <div class="range-item" v-if="food.diet === 'Omnivore'">
      <label class="range-label" for="pork">{{ $t('$porkAndPoultry') }}</label>
      <input
        id="pork"
        type="range"
        min="0"
        max="200"
        v-model.number="porkPoultry"
      />
      <span class="field-unit">
        {{
          foodStore.consumptionAmount('porkPoultry', porkPoultry) +
          ' kg/' +
          $t('$weekLong')
        }}
      </span>
    </div>
    <div class="range-item" v-if="food.diet === 'Omnivore'">
      <label class="range-label" for="fish">{{ $t('$fishAndSeafood') }}</label>
      <input id="fish" type="range" min="0" max="200" v-model.number="fish" />
      <span class="field-unit">
        {{
          foodStore.consumptionAmount('fish', fish) + ' kg/' + $t('$weekLong')
        }}
      </span>
    </div>
    <div
      class="range-item"
      v-if="food.diet === 'Omnivore' || food.diet === 'Vegetarian'"
    >
      <label class="range-label" for="cheese">{{ $t('$cheese') }}</label>
      <input
        id="cheese"
        type="range"
        min="0"
        max="200"
        v-model.number="cheese"
      />
      <span class="field-unit">
        {{
          foodStore.consumptionAmount('cheese', cheese) +
          ' kg/' +
          $t('$weekLong')
        }}
      </span>
    </div>
    <div
      class="range-item"
      v-if="food.diet === 'Omnivore' || food.diet === 'Vegetarian'"
    >
      <label class="range-label" for="dairy">
        {{ $t('$dairy') }}
      </label>
      <input id="dairy" type="range" min="0" max="200" v-model.number="dairy" />
      <span class="field-unit">
        {{
          foodStore.consumptionAmount('dairy', dairy) + ' kg/' + $t('$weekLong')
        }}
      </span>
    </div>
    <div class="range-item">
      <label class="range-label" for="rice">{{ $t('$rice') }}</label>
      <input id="rice" type="range" min="0" max="200" v-model.number="rice" />
      <span class="field-unit">
        {{
          foodStore.consumptionAmount('rice', rice) + ' kg/' + $t('$weekLong')
        }}
      </span>
    </div>
    <div class="range-item">
      <label class="range-label" for="winterSalad">
        {{ $t('$winterSalad') }}
      </label>
      <input
        id="winterSalad"
        type="range"
        min="0"
        max="200"
        v-model.number="winterSalad"
      />
      <span class="field-unit">
        {{
          foodStore.consumptionAmount('winterSalad', winterSalad) +
          ' kg/' +
          $t('$weekLong')
        }}
      </span>
    </div>
    <div
      class="range-item"
      v-if="food.diet === 'Omnivore' || food.diet === 'Vegetarian'"
    >
      <label class="range-label" for="eggs">{{ $t('$eggs') }}</label>
      <input
        id="eggs"
        type="range"
        min="0"
        max="30"
        v-model.number="eggCount"
      />
      <span class="field-unit">
        {{ eggCount + ' ' + $t('$piecesShort') + '/' + $t('$weekLong') }}
      </span>
    </div>
  </SubForm>
</template>

<style lang="scss" scoped>
#range-details-text {
  text-align: center;
  display: block;
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
    beef: {
      get(): number {
        return this.food.beefRatio
      },
      set(value: number) {
        this.foodStore.setBeef(value)
      },
    },
    cheese: {
      get(): number {
        return this.food.cheeseRatio
      },
      set(value: number) {
        this.foodStore.setCheese(value)
      },
    },
    dairy: {
      get(): number {
        return this.food.dairyRatio
      },
      set(value: number) {
        this.foodStore.setDairy(value)
      },
    },
    eggCount: {
      get(): number {
        return this.food.eggCount
      },
      set(value: number) {
        this.foodStore.setEggs(value)
      },
    },
    fish: {
      get(): number {
        return this.food.fishRatio
      },
      set(value: number) {
        this.foodStore.setFish(value)
      },
    },
    porkPoultry: {
      get(): number {
        return this.food.porkPoultryRatio
      },
      set(value: number) {
        this.foodStore.setPorkPoultry(value)
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
    winterSalad: {
      get(): number {
        return this.food.winterSaladRatio
      },
      set(value: number) {
        this.foodStore.setWinterSalad(value)
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
