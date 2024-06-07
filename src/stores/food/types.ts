export enum Diets {
  Vegan = 'Vegan',
  Vegetarian = 'Vegetarian',
  Omnivore = 'Omnivore',
}

export enum FoodSections {
  Diet,
  Consumption,
  Restaurant,
}

/** The Finnish consumption averages, in kg/week */
// this dictionary is used to calculate the actual consumption in kg
// see foodGetters.CONSUMPTION_AMOUNT
export const foodConsumptionAverages: { [index: string]: number } = {
  beef: 0.4,
  cheese: 0.3,
  dairy: 3.8,
  egg: 0.16,
  fish: 0.6,
  porkPoultry: 1.0,
  rice: 0.088,
  winterSalad: 1.4,
}

export interface IFoodState {
  id: number
  submitted: boolean
  activeSection: FoodSections
  diet: Diets
  lowCarbonPreference: boolean
  beefRatio: number
  cheeseRatio: number
  dairyRatio: number
  eggCount: number
  fishRatio: number
  porkPoultryRatio: number
  riceRatio: number
  winterSaladRatio: number
  restaurantSpending: number
  dairyResult: number
  meatResult: number
  plantResult: number
  restaurantResult: number
  totalResult: number
  unSavedChanges: boolean
  consumptionDefaultsChanged: boolean
}

export interface IFoodResults {
  dairy: number
  meat: number
  plant: number
  restaurant: number
  total: number
}
