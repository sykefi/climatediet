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

And excpet for drinks that are in liters/ week -> ≈ kg/ week

Averages need to be rounded to the same precision as allowed in input elements
**/

export const consumptionAverageKgPerCapPerWeek: {
  [index: string]: { [dietType: string]: number }
} = {
  alcoholicBeverages: { Mixed: 0.7, Vegetarian: 0.7, Vegan: 0.7 },
  beef: { Mixed: 180, Vegetarian: 0, Vegan: 0 },
  berries: { Mixed: 210, Vegetarian: 210, Vegan: 210 },
  butterAndAnimalFats: { Mixed: 170, Vegetarian: 170, Vegan: 0 },
  cheeses: { Mixed: 280, Vegetarian: 280, Vegan: 0 },
  chickenAndTurkey: { Mixed: 280, Vegetarian: 0, Vegan: 0 },
  coffeeAndTea: { Mixed: 3.9, Vegetarian: 3.9, Vegan: 3.9 },
  dryPlantBasedProtein: { Mixed: 0, Vegetarian: 0, Vegan: 40 },
  eggs: { Mixed: 3, Vegetarian: 3, Vegan: 0 },
  fermentedMilkProducts: { Mixed: 820, Vegetarian: 820, Vegan: 0 },
  fishAndShellfishAndFishProducts: { Mixed: 220, Vegetarian: 0, Vegan: 0 },
  frozenVegetables: { Mixed: 60, Vegetarian: 60, Vegan: 60 },
  fruitAndBerryPreserves: { Mixed: 80, Vegetarian: 80, Vegan: 80 },
  fruits: { Mixed: 860, Vegetarian: 860, Vegan: 1070 },
  grainsAndGrainProducts: { Mixed: 840, Vegetarian: 1010, Vegan: 1260 },
  legumesAndNuts: { Mixed: 100, Vegetarian: 220, Vegan: 220 },
  margarine: { Mixed: 80, Vegetarian: 80, Vegan: 100 },
  meatProducts: { Mixed: 160, Vegetarian: 0, Vegan: 0 },
  milk: { Mixed: 1.8, Vegetarian: 1.8, Vegan: 0 },
  otherDairyProducts: { Mixed: 180, Vegetarian: 180, Vegan: 0 },
  otherDrinks: { Mixed: 1.1, Vegetarian: 1.1, Vegan: 1.1 },
  otherFoodProducts: { Mixed: 130, Vegetarian: 130, Vegan: 130 },
  otherMeatsAndOffal: { Mixed: 50, Vegetarian: 0, Vegan: 0 },
  plantBasedDrinks: { Mixed: 0.1, Vegetarian: 0.1, Vegan: 1.8 },
  plantBasedProteinProducts: { Mixed: 0, Vegetarian: 0, Vegan: 770 },
  pork: { Mixed: 190, Vegetarian: 0, Vegan: 0 },
  potatoes: { Mixed: 510, Vegetarian: 510, Vegan: 640 },
  rice: { Mixed: 70, Vegetarian: 70, Vegan: 70 },
  rootVegetables: { Mixed: 200, Vegetarian: 200, Vegan: 250 },
  sausages: { Mixed: 140, Vegetarian: 0, Vegan: 0 },
  sugarCandiesAndChocolate: { Mixed: 230, Vegetarian: 230, Vegan: 230 },
  vegetableOils: { Mixed: 70, Vegetarian: 70, Vegan: 80 },
  vegetablesAndMushrooms: { Mixed: 770, Vegetarian: 1550, Vegan: 2060 },
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
