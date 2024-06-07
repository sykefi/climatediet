import { defineStore } from 'pinia'
import {
  Frequencies,
  AmountEstimates,
  IWasteDataState,
  IWasteResults,
} from './types'
import { useGlobalStateStore } from '../global/store'
import api from '@/utilities/api'
import { IResultActionLink } from '@/components/ResultBase.vue'
import i18n from '@/locale/i18n'
import { TranslateResult } from 'vue-i18n'
import { IChartData } from '@/types'
import { ICarouselSlide } from '../results/types'

export const useWasteStore = defineStore('waste', {
  state: (): IWasteDataState => ({
    id: 0,
    amountEstimate: AmountEstimates.Normal,
    bioWaste: Frequencies.Sometimes,
    electronic: Frequencies.Sometimes,
    glass: Frequencies.Sometimes,
    hazardous: Frequencies.Sometimes,
    carton: Frequencies.Sometimes,
    metal: Frequencies.Sometimes,
    paper: Frequencies.Sometimes,
    plastic: Frequencies.Sometimes,
    submitted: false,
    unSavedChanges: false,
    totalResult: 0,
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async submit() {
      const glob = useGlobalStateStore()
      try {
        glob.busy = true
        const data = {
          BioWaste: this.bioWaste,
          Electronic: this.electronic,
          Carton: this.carton,
          Hazardous: this.hazardous,
          Glass: this.glass,
          Metal: this.metal,
          Paper: this.paper,
          Plastic: this.plastic,
          AmountEstimate: this.amountEstimate,
        }
        const createNew = this.id === 0
        const response = createNew
          ? await api.post('waste/' + glob.testInstanceId, data, glob.sessionId)
          : await api.put('waste/' + this.id, data, glob.sessionId)
        if (createNew) {
          this.id = response.id
          this.submitted = true
        }

        const results: IWasteResults = {
          total: response.result.total,
        }

        this.setResults(results)
        glob.setError(null)
      } catch (error: any) {
        glob.setError(error)
        return Promise.reject(error)
      } finally {
        glob.setBusy(false)
      }
    },
    setBio(value: Frequencies) {
      this.bioWaste = value
      this.unSavedChanges = true
    },
    setCarton(value: Frequencies) {
      this.carton = value
      this.unSavedChanges = true
    },
    setElectronic(value: Frequencies) {
      this.electronic = value
      this.unSavedChanges = true
    },
    setGlass(value: Frequencies) {
      this.glass = value
      this.unSavedChanges = true
    },
    setHazardous(value: Frequencies) {
      this.hazardous = value
      this.unSavedChanges = true
    },
    setMetal(value: Frequencies) {
      this.metal = value
      this.unSavedChanges = true
    },
    setPaper(value: Frequencies) {
      this.paper = value
      this.unSavedChanges = true
    },
    setPlastic(value: Frequencies) {
      this.plastic = value
      this.unSavedChanges = true
    },
    setEstimate(value: AmountEstimates) {
      this.amountEstimate = value
      this.unSavedChanges = true
    },
    setId(value: number) {
      this.id = value
    },
    setResults(results: IWasteResults) {
      this.totalResult = Math.round(results.total)
      this.unSavedChanges = false
    },
    setSubmitted(value: boolean) {
      this.submitted = value
    },
    wasteReset() {
      this.$reset()
    },
  },
  getters: {
    resultChartData: (state) => {
      return () => {
        const data: Array<IChartData> = []
        // data.push({ label: i18n.global.t('$bioWaste'), value: state.bioWasteResult });
        // data.push({
        //   label: i18n.global.t('$cartonWaste'),
        //   value: state.cartonResult
        // });
        // data.push({
        //   label: i18n.global.t('$paperWaste'),
        //   value: state.paperResult
        // });
        // data.push({
        //   label: i18n.global.t('$wasteTransport'),
        //   value: state.transportResult
        // });

        // data.sort((a, b) => {
        //   return b.value - a.value;
        // });
        data.push({
          label: i18n.global.t('$wasteTotalResult'),
          value: state.totalResult,
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

          actions.push(i18n.global.t('$wasteAction' + key, params))
        }

        addAction('FoodWaste')
        addAction('Recycling')

        return actions
      }
    },
    resultLinks: () => {
      return () => {
        return Array({
          title: i18n.global.t('$hsyEatBetter'),
          description: i18n.global.t('$hsyEatBetterDetails'),
          url: i18n.global.t('$hsyEatBetterUrl'),
        } as IResultActionLink)
      }
    },
    sitraCases: () => {
      return '$sitraItemLifespan'
    },
    carouselSlides: (): ICarouselSlide[] => {
      const end = '_' + i18n.global.locale + '.png'
      return [
        {
          image: `./assets/images/waste/household${end}`,
        },
        {
          image: `./assets/images/waste/bio${end}`,
        },
        {
          image: `./assets/images/waste/carton${end}`,
        },
        {
          image: `./assets/images/waste/plastic${end}`,
        },
      ]
    },
  },
})
