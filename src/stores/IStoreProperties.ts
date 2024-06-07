import { IResultActionLink } from '@/components/ResultBase.vue'
import { IChartData } from '@/types'
import 'pinia'

declare module 'pinia' {
  export interface IStoreProperties {
    resultActions: (currentlyShownResults?: string) => string[]
    resultLinks: (currentlyShownResults?: string) => IResultActionLink[]
    resultChartData?: (currentlyShownResults?: string) => IChartData[]
    resultButtons?: string[]
  }
}
