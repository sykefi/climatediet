export enum Diets {
  Vegan = 'Vegan',
  Vegetarian = 'Vegetarian',
  Mixed = 'Mixed',
}

export enum FoodSections {
  Diet,
  Consumption,
}

/** The Finnish consumption averages, in kg/week.
 * Except for eggs that is in count/week (average in kg/week / weight of sigle egg in kg: 0.168/0.058= 2.897
 **/

export const consumptionAverageKgPerCapPerWeek: {
  [index: string]: { [dietType: string]: number }
} = {
  alcoholicBeverages: { Mixed: 0.689, Vegetarian: 0.689, Vegan: 0.689 },
  beef: { Mixed: 0.179, Vegetarian: 0.0, Vegan: 0.0 },
  berries: { Mixed: 0.209, Vegetarian: 0.209, Vegan: 0.209 },
  butterAndAnimalFats: { Mixed: 0.169, Vegetarian: 0.169, Vegan: 0.0 },
  cheeses: { Mixed: 0.282, Vegetarian: 0.282, Vegan: 0.0 },
  chickenAndTurkey: { Mixed: 0.275, Vegetarian: 0.0, Vegan: 0.0 },
  coffeeAndTea: { Mixed: 3.899, Vegetarian: 3.899, Vegan: 3.899 },
  dryPlantBasedProtein: { Mixed: 0.0, Vegetarian: 0.0, Vegan: 0.038 },
  eggs: { Mixed: 3, Vegetarian: 3, Vegan: 0.0 },
  fermentedMilkProducts: { Mixed: 0.816, Vegetarian: 0.816, Vegan: 0.0 },
  fishAndShellfishAndFishProducts: {
    Mixed: 0.218,
    Vegetarian: 0.0,
    Vegan: 0.0,
  },
  frozenVegetables: { Mixed: 0.06, Vegetarian: 0.06, Vegan: 0.06 },
  fruitAndBerryPreserves: { Mixed: 0.083, Vegetarian: 0.083, Vegan: 0.083 },
  fruits: { Mixed: 0.856, Vegetarian: 0.856, Vegan: 1.071 },
  grainsAndGrainProducts: { Mixed: 0.838, Vegetarian: 1.005, Vegan: 1.257 },
  legumesAndNuts: { Mixed: 0.096, Vegetarian: 0.216, Vegan: 0.216 },
  margarine: { Mixed: 0.078, Vegetarian: 0.078, Vegan: 0.097 },
  meatProducts: { Mixed: 0.161, Vegetarian: 0.0, Vegan: 0.0 },
  milk: { Mixed: 1.767, Vegetarian: 1.767, Vegan: 0.0 },
  otherDairyProducts: { Mixed: 0.178, Vegetarian: 0.178, Vegan: 0.0 },
  otherDrinks: { Mixed: 1.086, Vegetarian: 1.086, Vegan: 1.086 },
  otherFoodProducts: { Mixed: 0.132, Vegetarian: 0.132, Vegan: 0.132 },
  otherMeatsAndOffal: { Mixed: 0.05, Vegetarian: 0.0, Vegan: 0.0 },
  plantBasedDrinks: { Mixed: 0.084, Vegetarian: 0.084, Vegan: 1.767 },
  plantBasedProteinProducts: { Mixed: 0.0, Vegetarian: 0.0, Vegan: 0.767 },
  pork: { Mixed: 0.189, Vegetarian: 0.0, Vegan: 0.0 },
  potatoes: { Mixed: 0.51, Vegetarian: 0.51, Vegan: 0.637 },
  rice: { Mixed: 0.07, Vegetarian: 0.07, Vegan: 0.07 },
  rootVegetables: { Mixed: 0.203, Vegetarian: 0.203, Vegan: 0.254 },
  sausages: { Mixed: 0.14, Vegetarian: 0.0, Vegan: 0.0 },
  sugarCandiesAndChocolate: { Mixed: 0.227, Vegetarian: 0.227, Vegan: 0.227 },
  vegetableOils: { Mixed: 0.065, Vegetarian: 0.065, Vegan: 0.081 },
  vegetablesAndMushrooms: { Mixed: 0.773, Vegetarian: 1.546, Vegan: 2.061 },
}

export interface IFoodState {
  id: number
  submitted: boolean
  activeSection: FoodSections
  diet: Diets
  alcoholicBeveragesValue: number
  beefValue: number
  berriesValue: number
  butterAndAnimalFatsValue: number
  cheesesValue: number
  chickenAndTurkeyValue: number
  coffeeAndTeaValue: number
  dryPlantBasedProteinValue: number
  eggsCount: number
  fermentedMilkProductsValue: number
  fishAndShellfishAndFishProductsValue: number
  frozenVegetablesValue: number
  fruitAndBerryPreservesValue: number
  fruitsValue: number
  grainsAndGrainProductsValue: number
  legumesAndNutsValue: number
  margarineValue: number
  meatProductsValue: number
  milkValue: number
  otherDairyProductsValue: number
  otherDrinksValue: number
  otherFoodProductsValue: number
  otherMeatsAndOffalValue: number
  plantBasedDrinksValue: number
  plantBasedProteinProductsValue: number
  porkValue: number
  potatoesValue: number
  riceValue: number
  rootVegetablesValue: number
  sausagesValue: number
  sugarCandiesAndChocolateValue: number
  vegetablesAndMushroomsValue: number
  vegetableOilsValue: number
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
