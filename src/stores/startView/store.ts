import { defineStore } from 'pinia'
import { IBaseDataState } from './types'
import { useGlobalStateStore } from '../global/store'
import api from '@/utilities/api'

export const useBaseDataStore = defineStore('baseData', {
  state: (): IBaseDataState => ({
    id: 0,
    adultCount: 1,
    birthDecade: 0, // 0 is default, meaning that user does not want to supply this information
    childCount: 0,
    gender: '',
    postalCode: '',
    yearlyIncome: 0,
    submitted: false,
    error: '',
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async submit() {
      const glob = useGlobalStateStore()
      try {
        glob.setBusy(true)
        const data = {
          AdultCount: this.adultCount,
          ChildCount: this.childCount,
          BirthDecade: this.birthDecade,
          Gender: this.gender ? this.gender : '-',
          PostalCode: this.postalCode,
          YearlyIncome: this.yearlyIncome,
        }

        const createNew = this.id === 0
        const response = createNew
          ? await api.post('basedataentries', data, '')
          : await api.put('basedataentries/' + this.id, data, glob.sessionId)

        if (createNew) {
          this.id = response.id
          this.submitted = true
          glob.setTestInstanceId(response.testInstanceId)
          glob.setSessionId(response.sessionId)
        }
        glob.setError(null)
      } catch (error: any) {
        glob.setError(error)
        return Promise.reject(error)
      } finally {
        glob.setBusy(false)
      }
    },
    setAdultCount(count: number) {
      this.adultCount = count
    },
    setBirthDecade(decade: number) {
      this.birthDecade = decade
    },
    setChildCount(count: number) {
      this.childCount = count
    },
    setGender(tag: string) {
      this.gender = tag
    },
    setId(id: number) {
      this.id = id
    },
    setPostalCode(code: string) {
      this.postalCode = code
    },
    setYearlyIncome(income: number) {
      this.yearlyIncome = income
    },
    setSubmitted(value: boolean) {
      this.submitted = value
    },
    startReset() {
      this.$reset()
    },
  },
})
