import { TranslateResult } from 'vue-i18n'

export interface IDataSet {
  label: TranslateResult
  data: number[]
  backgroundColor: string
}

export interface IChartData {
  label: TranslateResult
  value: number
}
