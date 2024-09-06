export enum Diets {
  Vegan = 'Vegan',
  Vegetarian = 'Vegetarian',
  Mixed = 'Mixed',
}

export enum FoodSections {
  Diet,
  Consumption,
}

/** The Finnish consumption averages, in g/week.

Converted from average consumption of different food types (per capita in kg per year) for different diet
choices (vegan/vegetarian/mixed) based on FinRavinto (2017) study. Additional information acquired from Ravintotase

Except for eggs that is in count/week (average in kg/week / weight of sigle egg in kg: 0.168/0.058= 2.897)
**/

export const consumptionAverageKgPerCapPerWeek: {
  [index: string]: { [dietType: string]: number }
} = {
  alcoholicBeverages: { Mixed: 689, Vegetarian: 689, Vegan: 689 },
  beef: { Mixed: 179, Vegetarian: 0, Vegan: 0 },
  berries: { Mixed: 209, Vegetarian: 209, Vegan: 209 },
  butterAndAnimalFats: { Mixed: 169, Vegetarian: 169, Vegan: 0 },
  cheeses: { Mixed: 282, Vegetarian: 282, Vegan: 0 },
  chickenAndTurkey: { Mixed: 275, Vegetarian: 0, Vegan: 0 },
  coffeeAndTea: { Mixed: 3899, Vegetarian: 3899, Vegan: 3899 },
  dryPlantBasedProtein: { Mixed: 0, Vegetarian: 0, Vegan: 38 },
  eggs: { Mixed: 3, Vegetarian: 3, Vegan: 0 },
  fermentedMilkProducts: { Mixed: 816, Vegetarian: 816, Vegan: 0 },
  fishAndShellfishAndFishProducts: { Mixed: 218, Vegetarian: 0, Vegan: 0 },
  frozenVegetables: { Mixed: 60, Vegetarian: 60, Vegan: 60 },
  fruitAndBerryPreserves: { Mixed: 83, Vegetarian: 83, Vegan: 83 },
  fruits: { Mixed: 856, Vegetarian: 856, Vegan: 1071 },
  grainsAndGrainProducts: { Mixed: 838, Vegetarian: 1005, Vegan: 1257 },
  legumesAndNuts: { Mixed: 96, Vegetarian: 216, Vegan: 216 },
  margarine: { Mixed: 78, Vegetarian: 78, Vegan: 97 },
  meatProducts: { Mixed: 161, Vegetarian: 0, Vegan: 0 },
  milk: { Mixed: 1767, Vegetarian: 1767, Vegan: 0 },
  otherDairyProducts: { Mixed: 178, Vegetarian: 178, Vegan: 0 },
  otherDrinks: { Mixed: 1086, Vegetarian: 1086, Vegan: 1086 },
  otherFoodProducts: { Mixed: 132, Vegetarian: 132, Vegan: 132 },
  otherMeatsAndOffal: { Mixed: 50, Vegetarian: 0, Vegan: 0 },
  plantBasedDrinks: { Mixed: 84, Vegetarian: 84, Vegan: 1767 },
  plantBasedProteinProducts: { Mixed: 0, Vegetarian: 0, Vegan: 767 },
  pork: { Mixed: 189, Vegetarian: 0, Vegan: 0 },
  potatoes: { Mixed: 510, Vegetarian: 510, Vegan: 637 },
  rice: { Mixed: 70, Vegetarian: 70, Vegan: 70 },
  rootVegetables: { Mixed: 203, Vegetarian: 203, Vegan: 254 },
  sausages: { Mixed: 140, Vegetarian: 0, Vegan: 0 },
  sugarCandiesAndChocolate: { Mixed: 227, Vegetarian: 227, Vegan: 227 },
  vegetableOils: { Mixed: 65, Vegetarian: 65, Vegan: 81 },
  vegetablesAndMushrooms: { Mixed: 773, Vegetarian: 1546, Vegan: 2061 },
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
