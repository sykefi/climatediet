import { defineStore } from 'pinia'
import api from '@/utilities/api'
import {
  ConsumptionFields,
  IConsumptionResults,
  IConsumptionState,
} from './types'
import { useGlobalStateStore } from '../global/store'
import { TranslateResult } from 'vue-i18n'
import i18n from '@/locale/i18n'
import { IChartData } from '@/types'

const defaultLevels = {
  clothing: 53,
  communications: 42,
  electronics: 33,
  other: 309,
  paper: 20,
  recreation: 91,
  shoes: 10,
}

export const useConsumptionStore = defineStore('consumption', {
  state: (): IConsumptionState => ({
    // defaults from finnGoodsAndServicesConstants2016.py
    ...defaultLevels,
    clothingLowCarbon: false,
    communicationsLowCarbon: false,
    electronicsLowCarbon: false,
    otherLowCarbon: false,
    paperLowCarbon: false,
    recreationLowCarbon: false,
    shoesLowCarbon: false,
    id: 0,
    submitted: false,
    unSavedChanges: false,
    defaultsChanged: false,
    clothingResult: 0,
    communicationsResult: 0,
    electronicsResult: 0,
    otherResult: 0,
    paperResult: 0,
    recreationResult: 0,
    shoesResult: 0,
    totalResult: 0,
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async submit() {
      const global = useGlobalStateStore()
      try {
        global.setBusy(true)
        const data = {
          Clothing: this.clothing,
          ClothingLowCarbon: this.clothingLowCarbon,
          Communications: this.communications,
          CommunicationsLowCarbon: this.communicationsLowCarbon,
          Electronics: this.electronics,
          ElectronicsLowCarbon: this.electronicsLowCarbon,
          Other: this.other,
          OtherLowCarbon: this.otherLowCarbon,
          Paper: this.paper,
          PaperLowCarbon: this.paperLowCarbon,
          Recreation: this.recreation,
          RecreationLowCarbon: this.recreationLowCarbon,
          Shoes: this.shoes,
          ShoesLowCarbon: this.shoesLowCarbon,
        }
        const createNew = this.id === 0
        const response = createNew
          ? await api.post(
              'consumption/' + global.testInstanceId,
              data,
              global.sessionId
            )
          : await api.put('consumption/' + this.id, data, global.sessionId)
        if (createNew) {
          this.id = response.id
          this.submitted = true
        }

        const results: IConsumptionResults = {
          clothing: response.result.clothing,
          communications: response.result.communications,
          electronics: response.result.electronics,
          other: response.result.other,
          paper: response.result.paper,
          recreation: response.result.recreation,
          shoes: response.result.shoes,
          total: response.result.total,
        }

        this.setResults(results)
        global.setError(null)
      } catch (error: any) {
        global.setError(error)
        return Promise.reject(error)
      } finally {
        global.setBusy(false)
      }
    },
    setValue(payload: [ConsumptionFields, number]) {
      const value = payload[1]
      switch (payload[0]) {
        case ConsumptionFields.Clothing:
          this.clothing = value
          break
        case ConsumptionFields.Communications:
          this.communications = value
          break
        case ConsumptionFields.Electronics:
          this.electronics = value
          break
        case ConsumptionFields.Other:
          this.other = value
          break
        case ConsumptionFields.Paper:
          this.paper = value
          break
        case ConsumptionFields.Recreation:
          this.recreation = value
          break
        case ConsumptionFields.Shoes:
          this.shoes = value
          break
      }
      this.defaultsChanged = true
      this.unSavedChanges = true
    },
    setLowCarbon(payload: [ConsumptionFields, boolean]) {
      const value = payload[1]
      switch (payload[0]) {
        case ConsumptionFields.Clothing:
          this.clothingLowCarbon = value
          break
        case ConsumptionFields.Communications:
          this.communicationsLowCarbon = value
          break
        case ConsumptionFields.Electronics:
          this.electronicsLowCarbon = value
          break
        case ConsumptionFields.Other:
          this.otherLowCarbon = value
          break
        case ConsumptionFields.Paper:
          this.paperLowCarbon = value
          break
        case ConsumptionFields.Recreation:
          this.recreationLowCarbon = value
          break
        case ConsumptionFields.Shoes:
          this.shoesLowCarbon = value
          break
      }
      this.unSavedChanges = true
    },
    setId(value: number) {
      this.id = value
    },
    resetLevels() {
      // we don't want to remove the low carbon selections
      Object.assign(this, defaultLevels)
      this.unSavedChanges = true
      this.defaultsChanged = false
    },
    setSubmitted(value: boolean) {
      this.submitted = value
    },
    setResults(results: IConsumptionResults) {
      this.clothingResult = Math.round(results.clothing)
      this.communicationsResult = Math.round(results.communications)
      this.electronicsResult = Math.round(results.electronics)
      this.otherResult = Math.round(results.other)
      this.paperResult = Math.round(results.paper)
      this.recreationResult = Math.round(results.recreation)
      this.shoesResult = Math.round(results.shoes)
      this.totalResult = Math.round(results.total)
      this.unSavedChanges = false
    },
    consumptionReset() {
      this.$reset()
    },
  },
  getters: {
    consumptionValue: (state) => {
      return (field: ConsumptionFields) => {
        switch (field) {
          case ConsumptionFields.Clothing:
            return state.clothing
          case ConsumptionFields.Communications:
            return state.communications
          case ConsumptionFields.Electronics:
            return state.electronics
          case ConsumptionFields.Other:
            return state.other
          case ConsumptionFields.Paper:
            return state.paper
          case ConsumptionFields.Recreation:
            return state.recreation
          case ConsumptionFields.Shoes:
            return state.shoes
          default:
            return 0
        }
      }
    },
    lowCarbon: (state) => {
      return (field: ConsumptionFields) => {
        switch (field) {
          case ConsumptionFields.Clothing:
            return state.clothingLowCarbon
          case ConsumptionFields.Communications:
            return state.communicationsLowCarbon
          case ConsumptionFields.Electronics:
            return state.electronicsLowCarbon
          case ConsumptionFields.Other:
            return state.otherLowCarbon
          case ConsumptionFields.Paper:
            return state.paperLowCarbon
          case ConsumptionFields.Recreation:
            return state.recreationLowCarbon
          case ConsumptionFields.Shoes:
            return state.shoesLowCarbon
          default:
            return false
        }
      }
    },
    allServicesLowCarbon: (state) => {
      return (
        state.recreationLowCarbon &&
        state.communicationsLowCarbon &&
        state.otherLowCarbon
      )
    },
    allGoodsLowCarbon: (state) => {
      return (
        state.clothingLowCarbon &&
        state.electronicsLowCarbon &&
        state.paperLowCarbon &&
        state.shoesLowCarbon
      )
    },
    monthTotal: (state) => {
      return (
        state.clothing +
        state.communications +
        state.electronics +
        state.other +
        state.paper +
        state.recreation +
        state.shoes
      )
    },
    resultChartData: (state) => {
      return () => {
        const data: Array<IChartData> = []
        data.push({
          label: i18n.global.t('$clothing'),
          value: state.clothingResult,
        })
        data.push({
          label: i18n.global.t('$communications'),
          value: state.communicationsResult,
        })
        data.push({
          label: i18n.global.t('$electronicsShort'),
          value: state.electronicsResult,
        })
        data.push({ label: i18n.global.t('$other'), value: state.otherResult })
        data.push({ label: i18n.global.t('$paper'), value: state.paperResult })
        data.push({
          label: i18n.global.t('$recreationShort'),
          value: state.recreationResult,
        })
        data.push({ label: i18n.global.t('$shoes'), value: state.shoesResult })

        data.sort((a, b) => {
          return b.value - a.value
        })

        return data
      }
    },
    resultActions: () => {
      return () => {
        const actions: TranslateResult[] = []
        const addAction = (
          key: string,
          url: TranslateResult = '',
          linkDisplayText: TranslateResult = ''
        ) => {
          let params = {}
          if (url) {
            params = {
              link: `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkDisplayText}</a>`,
            }
          }
          actions.push(i18n.global.t('$consumptionAction' + key, params))
        }

        addAction(
          'PurchaseInfo',
          i18n.global.t('$motivaConsumptionUrl'),
          i18n.global.t('$motivaConsumptionLinkText')
        )
        addAction('UsageInfo')

        return actions
      }
    },
    resultLinks: () => {
      return () => {
        return [
          {
            title: i18n.global.t('$consumerUnionEthicalGuide'),
            description: '',
            url: i18n.global.t('$consumerUnionEthicalGuideUrl'),
          },
          {
            title: i18n.global.t('$nordicSwanEcoLabel'),
            description: '',
            url: i18n.global.t('$nordicSwanEcoLabelUrl'),
          },
        ]
      }
    },
    sitraCases() {
      if (this.monthTotal > 558) {
        // 558 is the default month total (5.2.2019)
        return '$sitraBuyingHangover'
      }
      return '$sitraInvestInResponsibility'
    },
  },
})
