import { defineStore } from 'pinia'
import {
  defaultArea,
  getHouse,
  getInitialHouse,
  getPurchaseDefaults,
  sendHouse,
} from './helpers'
import {
  HeatingModes,
  HouseTypes,
  IHousingResultData,
  IHousingState,
  Sections,
  WinterHeatingOptions,
} from './types'
import { useGlobalStateStore } from '../global/store'
import api from '@/utilities/api'
import i18n from '@/locale/i18n'
import { TranslateResult } from 'vue-i18n'
import { IChartData } from '@/types'

export const useHousingStore = defineStore('housing', {
  state: (): IHousingState => ({
    primaryHouse: getInitialHouse(true),
    hasSecondaryHouse: false,
    secondaryHouse: getInitialHouse(false),
    activeSection: Sections.Base,
    submitted: false,
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async districtEstimate(par: [boolean, boolean]) {
      const global = useGlobalStateStore()
      try {
        const isPrimary = par[0]
        const updateConsumption = par[1]
        global.setBusy(true)

        const response = await api.get(
          'housing/districtheatestimate',
          isPrimary ? this.primaryHouse.id : this.secondaryHouse.id
        )
        this.setDistrictEstimate([isPrimary, response as number])
        if (updateConsumption) {
          this.setDistrictConsumption([isPrimary, response as number])
        }
        global.setError(null)
      } catch (error: any) {
        global.setError(error)
        return Promise.reject(error)
      } finally {
        global.setBusy(false)
      }
    },
    async electricityEstimate(par: [boolean, boolean]) {
      const global = useGlobalStateStore()
      try {
        global.setBusy(true)
        const isPrimary = par[0]
        const updateConsumption = par[1]

        const response = await api.get(
          'housing/electricityestimate',
          isPrimary ? this.primaryHouse.id : this.secondaryHouse.id
        )
        this.setElectricityEstimate([isPrimary, response as number])
        if (updateConsumption) {
          this.setElectricityConsumption([isPrimary, response as number])
        }
        global.setError(null)
      } catch (error: any) {
        global.setError(error)
        return Promise.reject(error)
      } finally {
        global.setBusy(false)
      }
    },
    async oilEstimate(par: [boolean, boolean]) {
      const global = useGlobalStateStore()
      try {
        global.setBusy(true)
        const isPrimary = par[0]
        const updateConsumption = par[1]
        const response = await api.get(
          'housing/heatingoilestimate',
          isPrimary ? this.primaryHouse.id : this.secondaryHouse.id
        )
        this.setOilEstimate([isPrimary, response as number])
        if (updateConsumption) {
          this.setOilConsumption([isPrimary, response as number])
        }
        global.setError(null)
      } catch (error: any) {
        global.setError(error)
        return Promise.reject(error)
      } finally {
        global.setBusy(false)
      }
    },
    async submit() {
      const global = useGlobalStateStore()
      try {
        global.setBusy(true)
        const primaryHouse = await sendHouse(
          this.primaryHouse,
          true,
          global.testInstanceId,
          global.sessionId
        )
        if (primaryHouse.id > 0) {
          const results: IHousingResultData = {
            id: primaryHouse.id,
            electricity: primaryHouse.result.electricity,
            heating: primaryHouse.result.heating,
            building: primaryHouse.result.infrastructure,
            purchase: primaryHouse.result.purchases,
            total: primaryHouse.result.total,
          }
          this.setResults([true, results])
        }

        if (this.hasSecondaryHouse) {
          const secondaryHouse = await sendHouse(
            this.secondaryHouse,
            false,
            global.testInstanceId,
            global.sessionId
          )
          if (secondaryHouse.id > 0) {
            const results: IHousingResultData = {
              id: secondaryHouse.id,
              electricity: secondaryHouse.result.electricity,
              heating: secondaryHouse.result.heating,
              building: secondaryHouse.result.infrastructure,
              purchase: secondaryHouse.result.purchases,
              total: secondaryHouse.result.total,
            }
            this.setResults([false, results])
          }
        }
        global.setError(null)
      } catch (error: any) {
        global.setError(error)
        return Promise.reject(error)
      } finally {
        global.setBusy(false)
      }
    },
    setType(payload: [boolean, HouseTypes]) {
      const house = getHouse(payload[0], this)
      house.type = payload[1]
      house.unSavedChanges = true
    },
    setArea(payload: [boolean, number]) {
      const house = getHouse(payload[0], this)
      house.area = payload[1]
      house.unSavedChanges = true
    },
    setBuildYear(payload: [boolean, number]) {
      const house = getHouse(payload[0], this)
      house.buildYear = payload[1]
      house.unSavedChanges = true
    },
    setFloorCount(payload: [boolean, number]) {
      const house = getHouse(payload[0], this)
      house.floors = payload[1]
      house.unSavedChanges = true
    },
    setPostalCode(payload: [boolean, string]) {
      const house = getHouse(payload[0], this)
      house.postalCode = payload[1]
      house.unSavedChanges = true
    },
    setSecondHouse(value: boolean) {
      this.hasSecondaryHouse = value
      if (value) {
        this.secondaryHouse.unSavedChanges = true
      } else {
        this.secondaryHouse.buildingResult = 0
        this.secondaryHouse.electricityResult = 0
        this.secondaryHouse.heatingResult = 0
        this.secondaryHouse.purchaseResult = 0
        this.secondaryHouse.totalResult = 0
      }
    },
    setSecondHouseUsers(value: number) {
      this.secondaryHouse.users = value
      this.secondaryHouse.unSavedChanges = true
    },
    setElectricityConsumption(payload: [boolean, number]) {
      const electricity = getHouse(payload[0], this).electricity
      electricity.consumption = payload[1]
      electricity.unSavedChanges = true
    },
    setElectricityEstimate(payload: [boolean, number]) {
      const electricity = getHouse(payload[0], this).electricity
      electricity.estimate = payload[1]
    },
    setElectricityGreen(payload: [boolean, number]) {
      const electricity = getHouse(payload[0], this).electricity
      electricity.greenPercentage = payload[1]
      electricity.unSavedChanges = true
    },
    setDistrictConsumption(payload: [boolean, number]) {
      const heating = getHouse(payload[0], this).heating
      heating.districtConsumption = payload[1]
      heating.unSavedChanges = true
    },
    setDistrictEstimate(payload: [boolean, number]) {
      getHouse(payload[0], this).heating.districtEstimate = payload[1]
    },
    setDistrictGreen(payload: [boolean, number]) {
      const heating = getHouse(payload[0], this).heating
      heating.districtGreenPercentage = payload[1]
      heating.unSavedChanges = true
    },
    setOilConsumption(payload: [boolean, number]) {
      const heating = getHouse(payload[0], this).heating
      heating.oilConsumption = payload[1]
      heating.unSavedChanges = true
    },
    setOilEstimate(payload: [boolean, number]) {
      getHouse(payload[0], this).heating.oilEstimate = payload[1]
    },
    setMainHeat(payload: [boolean, HeatingModes]) {
      const heating = getHouse(payload[0], this).heating
      heating.mainMode = payload[1]
      heating.unSavedChanges = true
    },
    setSecondaryHeat(payload: [boolean, HeatingModes[]]) {
      const heating = getHouse(payload[0], this).heating
      heating.additionalModes = payload[1]
      heating.unSavedChanges = true
    },
    setWinterHeat(payload: [boolean, WinterHeatingOptions]) {
      const heating = getHouse(payload[0], this).heating
      heating.winterHeating = payload[1]
      heating.unSavedChanges = true
    },
    setPurchAppliances(payload: [boolean, number]) {
      const purchases = getHouse(payload[0], this).purchases
      purchases.appliances = payload[1]
      purchases.defaultsChanged = true
      purchases.unSavedChanges = true
    },
    setPurhCleaning(payload: [boolean, number]) {
      const purchases = getHouse(payload[0], this).purchases
      purchases.cleaning = payload[1]
      purchases.defaultsChanged = true
      purchases.unSavedChanges = true
    },
    setPurhFurniture(payload: [boolean, number]) {
      const purchases = getHouse(payload[0], this).purchases
      purchases.furniture = payload[1]
      purchases.defaultsChanged = true
      purchases.unSavedChanges = true
    },
    setPurchMisc(payload: [boolean, number]) {
      const purchases = getHouse(payload[0], this).purchases
      purchases.misc = payload[1]
      purchases.defaultsChanged = true
      purchases.unSavedChanges = true
    },
    setPurchRenovations(payload: [boolean, number]) {
      const purchases = getHouse(payload[0], this).purchases
      purchases.renovations = payload[1]
      purchases.defaultsChanged = true
      purchases.unSavedChanges = true
    },
    resetPurchases(payload: [boolean, number]) {
      const house = getHouse(payload[0], this)
      house.purchases = getPurchaseDefaults(payload[0], payload[1])
      house.purchases.unSavedChanges = true
    },
    setActiveSection(section: Sections) {
      this.activeSection = section
    },
    setResults(payload: [boolean, IHousingResultData]) {
      const results = payload[1]
      const house = getHouse(payload[0], this)
      house.id = results.id
      house.electricityResult = Math.round(results.electricity)
      house.heatingResult = Math.round(results.heating)
      house.buildingResult = Math.round(results.building)
      house.purchaseResult = Math.round(results.purchase)
      house.totalResult = Math.round(results.total)
    },
    setSubmitted(value: boolean) {
      this.submitted = value
    },
    setSectionSaved() {
      switch (this.activeSection) {
        case Sections.Base: {
          this.primaryHouse.unSavedChanges = false
          break
        }
        case Sections.Electricity: {
          this.primaryHouse.electricity.unSavedChanges = false
          break
        }
        case Sections.Heating: {
          this.primaryHouse.heating.unSavedChanges = false
          break
        }
        case Sections.Purchases: {
          this.primaryHouse.purchases.unSavedChanges = false
          break
        }
        case Sections.SecondaryBase: {
          this.secondaryHouse.unSavedChanges = false
          break
        }
        case Sections.SecondaryElectricity: {
          this.secondaryHouse.electricity.unSavedChanges = false
          break
        }
        case Sections.SecondaryHeating: {
          this.secondaryHouse.heating.unSavedChanges = false
          break
        }
        case Sections.SecondaryPurchases: {
          this.secondaryHouse.purchases.unSavedChanges = false
          break
        }
      }
    },
    setSaved() {
      this.primaryHouse.unSavedChanges = false
      this.primaryHouse.electricity.unSavedChanges = false
      this.primaryHouse.heating.unSavedChanges = false
      this.primaryHouse.purchases.unSavedChanges = false
      this.secondaryHouse.unSavedChanges = false
      this.secondaryHouse.electricity.unSavedChanges = false
      this.secondaryHouse.heating.unSavedChanges = false
      this.secondaryHouse.purchases.unSavedChanges = false
    },
    setFamilySizeChanged() {
      this.primaryHouse.unSavedChanges = true
      this.secondaryHouse.unSavedChanges = true
    },
    housingReset() {
      this.$reset()
    },
  },
  getters: {
    defaultArea: () => {
      return defaultArea()
    },
    totalPurchases: (state) => {
      const purchases = state.primaryHouse.purchases
      return (
        purchases.appliances +
        purchases.cleaning +
        purchases.furniture +
        purchases.renovations +
        purchases.misc
      )
    },
    totalPurchasesSecondary: (state) => {
      const purchases = state.secondaryHouse.purchases
      return (
        purchases.appliances +
        purchases.cleaning +
        purchases.furniture +
        purchases.renovations +
        purchases.misc
      )
    },
    resultChartData: (state) => {
      return (currentlyShownResults?: string) => {
        const data: Array<IChartData> = []
        const buildingData = {
          label: i18n.global.t('$building'),
          value: state.primaryHouse.buildingResult,
        }
        if (currentlyShownResults === 'secondaryHouse') {
          buildingData.value = state.secondaryHouse.buildingResult
        } else if (currentlyShownResults === 'total') {
          buildingData.value += state.secondaryHouse.buildingResult
        }
        data.push(buildingData)

        const electricityData = {
          label: i18n.global.t('$electricity'),
          value: state.primaryHouse.electricityResult,
        }
        if (currentlyShownResults === 'secondaryHouse') {
          electricityData.value = state.secondaryHouse.electricityResult
        } else if (currentlyShownResults === 'total') {
          electricityData.value += state.secondaryHouse.electricityResult
        }
        data.push(electricityData)

        const heatingData = {
          label: i18n.global.t('$heating'),
          value: state.primaryHouse.heatingResult,
        }
        if (currentlyShownResults === 'secondaryHouse') {
          heatingData.value = state.secondaryHouse.heatingResult
        } else if (currentlyShownResults === 'total') {
          heatingData.value += state.secondaryHouse.heatingResult
        }
        data.push(heatingData)

        const purchaseData = {
          label: i18n.global.t('$purchasesShort'),
          value: state.primaryHouse.purchaseResult,
        }
        if (currentlyShownResults === 'secondaryHouse') {
          purchaseData.value = state.secondaryHouse.purchaseResult
        } else if (currentlyShownResults === 'total') {
          purchaseData.value += state.secondaryHouse.purchaseResult
        }
        data.push(purchaseData)

        data.sort((a, b) => {
          return b.value - a.value
        })

        return data
      }
    },
    resultActions: (state) => {
      return (currentlyShownResults?: string) => {
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
          actions.push(i18n.global.t('$housingAction' + key, params))
        }

        if (currentlyShownResults === 'secondaryHouse') {
          const house = state.secondaryHouse
          const heat = house.heating
          addAction(
            'SecondaryHouseInfo',
            i18n.global.t('$secondaryHouseReportUrl'),
            i18n.global.t('$secondaryHouseReportLinkText')
          )

          if (house.electricity.consumption === 0) {
            addAction(
              'SecondaryHouseZeroElectricity',
              i18n.global.t('$motivaUrl'),
              'motiva.fi'
            )
          } else if (heat.winterHeating === WinterHeatingOptions.Off) {
            addAction('WinterHeatOff')
          } else if (heat.winterHeating === WinterHeatingOptions.Base) {
            addAction(
              'WinterHeatBase',
              i18n.global.t('$secondaryHouseReportUrl'),
              i18n.global.t('$secondaryHouseReportLinkText')
            )
          } else if (heat.winterHeating === WinterHeatingOptions.Always) {
            addAction(
              'WinterHeatAlways',
              i18n.global.t('$motivaUrl'),
              'motiva.fi'
            )
          }
        } else {
          const house = state.primaryHouse
          const heat = house.heating

          if (house.type !== HouseTypes.Flat) {
            addAction(
              'SmallHouseMaintenanceBook',
              i18n.global.t('$smallHouseMaintenanceBookUrl'),
              i18n.global.t('$smallHouseMaintenanceBook')
            )
          } else {
            addAction('WarmWater')
            addAction(
              'EnergyExpert',
              i18n.global.t('$energyExpertUrl'),
              i18n.global.t('$energyExpert')
            )
          }

          if (heat.mainMode === HeatingModes.Wood) {
            addAction(
              'WoodHeating',
              i18n.global.t('$motivaWoodHeatingGuideUrl'),
              i18n.global.t('$motivaWoodHeatingGuide')
            )
          } else {
            const heatingEstimatesUsed =
              (heat.mainMode === HeatingModes.District &&
                heat.districtConsumption === heat.districtEstimate) ||
              (heat.mainMode === HeatingModes.Oil &&
                heat.oilConsumption === heat.oilEstimate)

            const heatingEstimatesExceeded =
              (heat.mainMode === HeatingModes.District &&
                heat.districtConsumption - heat.districtEstimate > 500) ||
              (heat.mainMode === HeatingModes.Oil &&
                heat.oilConsumption - heat.oilEstimate > 200)

            const heatingConsumptionBelowEstimates =
              (heat.mainMode === HeatingModes.District &&
                heat.districtConsumption + 500 < heat.districtEstimate) ||
              (heat.mainMode === HeatingModes.Oil &&
                heat.oilConsumption + 200 < heat.oilEstimate)

            if (heatingEstimatesUsed) {
              addAction('FindOutHeatConsumption')
            } else {
              if (heatingEstimatesExceeded) {
                addAction(
                  'HeatingEstimatesExceeded',
                  'https://www.energiatehokaskoti.fi/',
                  'energiatehokaskoti.fi'
                )
              } else if (heatingConsumptionBelowEstimates) {
                addAction(
                  'HeatingConsumptionBelowEstimates',
                  i18n.global.t('$motivaUrl'),
                  'motiva.fi'
                )
              } else {
                addAction(
                  'HeatingEstimatesMatched',
                  i18n.global.t('$korjaustietoUrl'),
                  i18n.global.t('$korjaustieto')
                )
              }
            }
          }
        }

        return actions
      }
    },
    resultButtons: (state) => {
      if (state.hasSecondaryHouse) {
        return ['total', 'primaryHouse', 'secondaryHouse']
      }
      return []
    },
    resultLinks: () => {
      return (currentlyShownResults?: string) => {
        let links = []
        if (currentlyShownResults === 'secondaryHouse') {
          links = [
            {
              title: i18n.global.t('$heldaCottageGuide'),
              description: '',
              url: i18n.global.t('$heldaCottageGuideUrl'),
            },
            {
              title: i18n.global.t('$valoniaCottageGuide'),
              description: '',
              url: i18n.global.t('$valoniaCottageGuideUrl'),
            },
          ]
        } else {
          links = [
            {
              title: 'motiva.fi',
              description: i18n.global.t('$motivaDescription'),
              url: i18n.global.t('$motivaUrl'),
            },
            {
              title: i18n.global.t('$korjaustieto'),
              description: i18n.global.t('$korjaustietoDescription'),
              url: i18n.global.t('$korjaustietoUrl'),
            },
            {
              title: 'ekoenergy.org',
              description: i18n.global.t('$ekoEnergyDescription'),
              url: i18n.global.t('$ekoEnergyUrl'),
            },
          ]
        }
        return links
      }
    },
    sitraCases: (state) => {
      const house = state.primaryHouse
      if (house.area > defaultArea()) {
        return '$sitraWastedSpace'
      }
      if (
        house.type === HouseTypes.Family &&
        !house.heating.additionalModes.find((m) => m === HeatingModes.AirPump)
      ) {
        return '$sitraNoHeatPump'
      }
      if (house.type === HouseTypes.Family) {
        return '$sitraSolarHeat'
      }
      return '$sitraShowerChallenge'
    },
    sectionUnsavedChanges: (state) => {
      switch (state.activeSection) {
        case Sections.Base: {
          return state.primaryHouse.unSavedChanges
        }
        case Sections.Electricity: {
          return state.primaryHouse.electricity.unSavedChanges
        }
        case Sections.Heating: {
          return state.primaryHouse.heating.unSavedChanges
        }
        case Sections.Purchases: {
          return state.primaryHouse.purchases.unSavedChanges
        }
        case Sections.SecondaryBase: {
          return state.secondaryHouse.unSavedChanges
        }
        case Sections.SecondaryElectricity: {
          return state.secondaryHouse.electricity.unSavedChanges
        }
        case Sections.SecondaryHeating: {
          return state.secondaryHouse.heating.unSavedChanges
        }
        case Sections.WinterHeating: {
          return state.secondaryHouse.heating.unSavedChanges
        }
        case Sections.SecondaryPurchases: {
          return state.secondaryHouse.purchases.unSavedChanges
        }
        default: {
          return false
        }
      }
    },
    unSavedChanges: (state) => {
      return (
        state.primaryHouse.unSavedChanges ||
        state.primaryHouse.electricity.unSavedChanges ||
        state.primaryHouse.heating.unSavedChanges ||
        state.primaryHouse.purchases.unSavedChanges ||
        state.secondaryHouse.unSavedChanges ||
        state.secondaryHouse.electricity.unSavedChanges ||
        state.secondaryHouse.heating.unSavedChanges ||
        state.secondaryHouse.purchases.unSavedChanges
      )
    },
  },
})
