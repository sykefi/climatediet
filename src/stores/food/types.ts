export enum Diets {
  Vegan = 'Vegan',
  Vegetarian = 'Vegetarian',
  Mixed = 'Mixed',
}

export enum FoodSections {
  Diet,
  Consumption,
}

/** The Finnish consumption averages, in kg/week */
// this dictionary is used to calculate the actual consumption in kg
// see foodGetters.CONSUMPTION_AMOUNT
export const foodConsumptionAverages: { [index: string]: number } = {
  // TODO: get correct averages
  alcoholicBeverages: 1.0,
  beef: 1.0,
  berries: 1.0,
  butterAndAnimalFats: 1.0,
  cheeses: 1.0,
  chickenAndTurkey: 1.0,
  coffeeAndTea: 1.0,
  dryPlantBasedProtein: 1.0,
  eggs: 1.0,
  fermentedMilkProducts: 1.0,
  fishAndShellfishAndFishProducts: 1.0,
  frozenVegetables: 1.0,
  fruitAndBerryPreserves: 1.0,
  fruits: 1.0,
  grainsAndGrainProducts: 1.0,
  legumesAndNuts: 1.0,
  margarine: 1.0,
  meatProducts: 1.0,
  milk: 1.0,
  otherDairyProducts: 1.0,
  otherDrinks: 1.0,
  otherFoodProducts: 1.0,
  otherMeatsAndOffal: 1.0,
  plantBasedDrinks: 1.0,
  plantBasedProteinProducts: 1.0,
  pork: 1.0,
  potatoes: 1.0,
  rice: 1.0,
  rootVegetables: 1.0,
  sausages: 1.0,
  sugarCandiesAndChocolate: 1.0,
  vegetablesAndMushrooms: 1.0,
  vegetableOils: 1.0,
}

export interface IFoodState {
  id: number
  submitted: boolean
  activeSection: FoodSections
  diet: Diets
  alcoholicBeveragesRatio: number
  beefRatio: number
  berriesRatio: number
  butterAndAnimalFatsRatio: number
  cheesesRatio: number
  chickenAndTurkeyRatio: number
  coffeeAndTeaRatio: number
  dryPlantBasedProteinRatio: number
  eggsCount: number
  fermentedMilkProductsRatio: number
  fishAndShellfishAndFishProductsRatio: number
  frozenVegetablesRatio: number
  fruitAndBerryPreservesRatio: number
  fruitsRatio: number
  grainsAndGrainProductsRatio: number
  legumesAndNutsRatio: number
  margarineRatio: number
  meatProductsRatio: number
  milkRatio: number
  otherDairyProductsRatio: number
  otherDrinksRatio: number
  otherFoodProductsRatio: number
  otherMeatsAndOffalRatio: number
  plantBasedDrinksRatio: number
  plantBasedProteinProductsRatio: number
  porkRatio: number
  potatoesRatio: number
  riceRatio: number
  rootVegetablesRatio: number
  sausagesRatio: number
  sugarCandiesAndChocolateRatio: number
  vegetablesAndMushroomsRatio: number
  vegetableOilsRatio: number
  vegetablesFruitsBerriesResult: number
  grainsPotatoesResult: number
  dairyEggsResult: number
  fatResult: number
  meatResult: number
  fishResult: number
  plantBasedProteinResult: number
  drinksResult: number
  sweetsResult: number
  otherResult: number
  totalResult: number
  unSavedChanges: boolean
  consumptionDefaultsChanged: boolean
}

export interface IFoodResults {
  vegetablesFruitsBerries: number
  grainsPotatoes: number
  dairyEggs: number
  fat: number
  meat: number
  fish: number
  plantBasedProtein: number
  drinks: number
  sweets: number
  other: number
  total: number
}
