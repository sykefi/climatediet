export interface IConsumptionState {
  clothing: number
  clothingLowCarbon: boolean
  communications: number
  communicationsLowCarbon: boolean
  electronics: number
  electronicsLowCarbon: boolean
  other: number
  otherLowCarbon: boolean
  paper: number
  paperLowCarbon: boolean
  recreation: number
  recreationLowCarbon: boolean
  shoes: number
  shoesLowCarbon: boolean
  id: number
  submitted: boolean
  unSavedChanges: boolean
  defaultsChanged: boolean
  clothingResult: number
  communicationsResult: number
  electronicsResult: number
  otherResult: number
  paperResult: number
  recreationResult: number
  shoesResult: number
  totalResult: number
}

export enum ConsumptionFields {
  Clothing = 'clothing',
  Communications = 'communications',
  Electronics = 'electronics',
  Other = 'other',
  Paper = 'paper',
  Recreation = 'recreation',
  Shoes = 'shoes',
}

export interface IConsumptionResults {
  clothing: number
  communications: number
  electronics: number
  other: number
  paper: number
  recreation: number
  shoes: number
  total: number
}
