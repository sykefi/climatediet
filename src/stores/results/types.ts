export interface IResultData {
  name: string
  date: Date | null
  housing: number
  secondaryHouse: number
  food: number
  transport: number
  consumption: number
  waste: number
}

export interface IResultsComparisonState {
  finnishAverage: IResultData
  diet: IResultData | null
  familySize: IResultData | null
  income: IResultData | null
  postalCode: IResultData | null
  userHistory: IResultData[]
  shareUrl: string
}

export interface ICarouselSlide {
  image: string
}
