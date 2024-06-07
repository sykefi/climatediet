import { defineStore } from 'pinia'
import { IRootState, IVerificationData } from './types'
import api from '@/utilities/api'
import i18n from '@/locale/i18n'
import { useBaseDataStore } from '../startView/store'
import { useHousingStore } from '../housing/store'
import { useConsumptionStore } from '../consumption/store'
import { useWasteStore } from '../waste/store'
import { useFoodStore } from '../food/store'
import { useTransportStore } from '../transport/store'
import { useResultsComparisonStore } from '../results/store'

export const useGlobalStateStore = defineStore('globalState', {
  state: (): IRootState => ({
    testInstanceId: 0,
    sessionId: '',
    busy: false,
    error: '',
    createGroupCodeVisible: false,
    loginVisible: false,
    userEmail: '',
    userEmailWaitingForCode: '',
    userId: '',
    groupCode: '',
    carbonOffset: 0,
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    setBusy(value: boolean) {
      this.busy = value
    },
    setCreateGroupCodeVisible(value: boolean) {
      this.createGroupCodeVisible = value
    },
    setLoginVisible(value: boolean) {
      this.loginVisible = value
    },
    setUserWaitingEmail(address: string) {
      this.userEmailWaitingForCode = address
    },
    setLoggedInUserEmail(value: string) {
      this.userEmail = value
      this.userEmailWaitingForCode = ''
    },
    setLoggedInUserUuid(value: string) {
      this.userId = value
    },
    removeUserInfo() {
      this.userEmail = ''
      this.userEmailWaitingForCode = ''
      this.userId = ''
    },
    setGroupCode(code: string) {
      this.groupCode = code
    },
    setTestInstanceId(value: number) {
      this.testInstanceId = value
      console.info('Started new calculation with instance id ' + value)
    },
    setSessionId(value: string) {
      this.sessionId = value
    },
    setOffset(value: number) {
      this.carbonOffset = value
    },
    setError(error: string | null) {
      this.error = error
    },
    globalReset() {
      this.$reset()
    },
    async associateUserWithGroup() {
      if (this.busy) {
        return
      }
      this.busy = true
      const data = {
        testInstanceId: this.testInstanceId,
        groupCode: this.groupCode,
      }
      try {
        await api.post(
          'testinstance/AssociateTestWithGroup',
          data,
          this.sessionId
        )
      } catch (error: any) {
        this.error = error
        return Promise.reject(error)
      } finally {
        this.busy = false
      }
    },
    async associateUserWithTest() {
      if (this.busy) {
        return
      }
      const data = {
        testInstanceId: this.testInstanceId,
        userId: this.userId,
      }
      try {
        await api.post(
          'testinstance/AssociateTestWithUser',
          data,
          this.sessionId
        )
      } catch (error: any) {
        this.error = error
        return Promise.reject(error)
      }
    },
    async sendVerificationEmail({ email, locale }: IVerificationData) {
      if (this.busy) {
        return
      }
      this.busy = true
      const data: IVerificationData = {
        email,
        locale,
      }
      try {
        await api.post('user/SendLoginLink', data, this.sessionId)
        this.setUserWaitingEmail(email)
      } catch (error) {
        return Promise.reject(error)
      } finally {
        this.busy = false
      }
    },
    async verifyUser({ token }: { token: string }) {
      if (this.busy) {
        return
      }
      this.busy = true
      const data = {
        email: this.userEmailWaitingForCode,
        token,
      }
      try {
        const response = await api.post('user/VerifyUserLogin', data, '')
        this.setLoggedInUserUuid(response)
        this.setLoggedInUserEmail(this.userEmailWaitingForCode)
      } catch (error: any) {
        this.error = error
        return Promise.reject(error)
      } finally {
        this.busy = false
      }
    },
    async resetAllData() {
      if (!confirm(i18n.global.t('$resetDataConfirmation').toString())) {
        return
      }
      const startViewState = useBaseDataStore()
      const housingState = useHousingStore()
      const consumptionState = useConsumptionStore()
      const wasteState = useWasteStore()
      const foodState = useFoodStore()
      const transportState = useTransportStore()
      const resultState = useResultsComparisonStore()

      this.globalReset()
      startViewState.startReset()
      housingState.housingReset()
      consumptionState.consumptionReset()
      wasteState.wasteReset()
      foodState.foodReset()
      transportState.transportReset()
      resultState.resultsReset()
    },
  },
})
