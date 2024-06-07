import { defineStore } from 'pinia'
import {
  BoatTypes,
  Fuels,
  IPublicTransportResults,
  ITransportResults,
  ITransportStoreState,
  Sizes,
  TransportSections,
} from './types'
import { useGlobalStateStore } from '../global/store'
import { carsToSendFormat, getCarFuelPercentageTotal } from './helpers'
import api from '@/utilities/api'
import i18n from '@/locale/i18n'
import { TranslateResult } from 'vue-i18n'
import { useBaseDataStore } from '../startView/store'
import { IChartData } from '@/types'
import { IResultActionLink } from '@/components/ResultBase.vue'

export const useTransportStore = defineStore('transport', {
  state: (): ITransportStoreState => ({
    activeSection: TransportSections.Car,
    cars: [],
    motorcycle: null,
    publicTransport: {
      busDistance: 0,
      cityBusDistance: 0,
      cityTrainDistance: 0,
      trainDistance: 0,
      metroDistance: 0,
      tramDistance: 0,
      unSavedChanges: false,
    },
    travel: {
      estoniaCruises: 0,
      germanyCruises: 0,
      swedenCruises: 0,
      canaryFlights: 0,
      finlandFlights: 0,
      europeanFlights: 0,
      transContinentalFlights: 0,
      unSavedChanges: false,
    },
    boat: {
      fuelConsumption: 0,
      power: 0,
      type: BoatTypes.None,
      usageHours: 0,
      userCount: 1,
      unSavedChanges: false,
    },
    id: 0,
    submitted: false,
    boatResult: 0,
    cruiseResult: 0,
    flightResult: 0,
    motorcycleResult: 0,
    publicTransportResult: {
      train: 0,
      bus: 0,
      other: 0,
      total: 0,
    },
    carResults: [],
    totalResult: 0,
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
          Cars: carsToSendFormat(this.cars),
          Motorcycle: {
            FuelConsumption: this.motorcycle
              ? this.motorcycle.fuelConsumption
              : 0,
            Distance: this.motorcycle ? this.motorcycle.driveDistance : 0,
          },
          PublicTransport: {
            BusDistance: this.publicTransport.busDistance,
            CityBusDistance: this.publicTransport.cityBusDistance,
            CityTrainDistance: this.publicTransport.cityTrainDistance,
            MetroDistance: this.publicTransport.metroDistance,
            TrainDistance: this.publicTransport.trainDistance,
            TramDistance: this.publicTransport.tramDistance,
          },
          Flights: {
            CanaryFlights: this.travel.canaryFlights,
            FinlandFlights: this.travel.finlandFlights,
            EuropeanFlights: this.travel.europeanFlights,
            TransContinentalFlights: this.travel.transContinentalFlights,
          },
          Cruises: {
            EstoniaCruises: this.travel.estoniaCruises,
            GermanyCruises: this.travel.germanyCruises,
            SwedenCruises: this.travel.swedenCruises,
          },
          Boat: {
            FuelConsumption: this.boat.fuelConsumption,
            Power: this.boat.power,
            UsageHours: this.boat.usageHours,
            UserCount:
              this.boat.type === BoatTypes.None ? 0 : this.boat.userCount,
            Type: this.boat.type,
          },
        }

        const createNew = this.id === 0
        const response = createNew
          ? await api.post(
              'transport/' + glob.testInstanceId,
              data,
              glob.sessionId
            )
          : await api.put('transport/' + this.id, data, glob.sessionId)
        if (createNew) {
          this.setId(response.id)
        }

        const publicResult: IPublicTransportResults = {
          train: Math.round(response.result.publicTransport.train),
          bus: Math.round(response.result.publicTransport.bus),
          other: Math.round(response.result.publicTransport.other),
          total: Math.round(response.result.publicTransport.total),
        }

        const res: ITransportResults = {
          boat: response.result.boat,
          cruise: response.result.cruises,
          flight: response.result.flights,
          motorcycle: response.result.motorcycle,
          cars: response.result.cars,
          publicTransport: publicResult,
          total: response.result.total,
        }
        this.setResults(res)
        glob.setError(null)
      } catch (error: any) {
        glob.setError(error)
        return Promise.reject(error)
      } finally {
        glob.setBusy(false)
      }
    },
    addCar() {
      this.cars.push({
        order: this.cars.length + 1,
        passengerCount: 1.7,
        size: Sizes.SmallFamily,
        fuel: Fuels.Gasoline,
        driveDistance: 0,
        buildYear: 2007,
        shared: false,
        detailsAdded: false,
        fuelDetailsAdded: false,
        fuelDetails: [
          { fuelName: Fuels.Gasoline, percentage: 0, consumption: 0 },
          { fuelName: Fuels.Diesel, percentage: 0, consumption: 0 },
          { fuelName: Fuels.EthanolMix, percentage: 0, consumption: 0 },
          { fuelName: Fuels.Electricity, percentage: 0, consumption: 0 },
          { fuelName: Fuels.GreenElectricity, percentage: 0, consumption: 0 },
          { fuelName: Fuels.BioGas, percentage: 0, consumption: 0 },
          { fuelName: Fuels.GroundGas, percentage: 0, consumption: 0 },
        ],
        fuelDetailsAsPercentage: true,
        unSavedChanges: true,
      })
    },
    addMotorcycle() {
      this.motorcycle = {
        unSavedChanges: true,
        driveDistance: 0,
        fuelConsumption: 3,
      }
    },
    removeCar(order: number) {
      const index = this.cars.findIndex((c) => c.order === order)
      this.cars.splice(index, 1)
      this.publicTransport.unSavedChanges = true // cannot mark unsaved changes on any car element for certain, so use public transport
    },
    setCarBuildYear(payload: [number, number]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        car.buildYear = payload[1]
        car.unSavedChanges = true
      }
    },
    setCarFuel(payload: [number, Fuels]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        if (payload[1] !== Fuels.None) {
          car.fuelDetailsAdded = false
        } else {
          car.fuelDetailsAdded = true
        }
        car.fuel = payload[1]
        car.unSavedChanges = true
      }
    },
    setCarFuelsUsePercentage(payload: [number, boolean]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        car.unSavedChanges = true
        car.fuelDetailsAsPercentage = payload[1]
      }
    },
    setCarFuelPercentage(payload: [number, Fuels, number]) {
      const car = this.cars.find((c) => c.order === payload[0])

      if (!car) {
        return
      }

      const fuel = payload[1]
      let value = payload[2]

      if (value > 100) {
        value = 100
      }

      const details = car.fuelDetails.find((f) => f.fuelName === fuel)
      if (!details) {
        return
      }

      details.percentage = value
      car.unSavedChanges = true

      const sumAfter = getCarFuelPercentageTotal(car)
      if (sumAfter === 100) {
        return
      }
      if (sumAfter > 100) {
        let diff = sumAfter - 100

        for (const detail of car.fuelDetails) {
          if (detail.fuelName === fuel || detail.percentage === 0) {
            continue
          }
          const remainder = diff - detail.percentage

          if (remainder <= 0) {
            detail.percentage -= diff
            break
          } else {
            detail.percentage = 0
            diff = remainder
          }
        }
      }
      if (sumAfter < 100) {
        details.percentage += 100 - sumAfter
      }
    },
    setCarFuelConsumption(payload: [number, Fuels, number]) {
      const car = this.cars.find((c) => c.order === payload[0])

      if (!car) {
        return
      }
      const details = car.fuelDetails.find((f) => f.fuelName === payload[1])
      if (!details) {
        return
      }
      details.consumption = payload[2]
      car.unSavedChanges = true
    },
    setCarPassengerCount(payload: [number, number]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        car.passengerCount = payload[1]
        car.unSavedChanges = true
      }
    },
    setCarDetails(payload: [number, boolean]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        car.detailsAdded = payload[1]
        car.unSavedChanges = true
      }
    },
    setCarDistance(payload: [number, number]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        car.driveDistance = payload[1]
        car.unSavedChanges = true
      }
    },
    setCarShare(payload: [number, boolean]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        car.shared = payload[1]
        car.unSavedChanges = true
      }
    },
    setCarSize(payload: [number, Sizes]) {
      const car = this.cars.find((c) => c.order === payload[0])
      if (car) {
        car.size = payload[1]
        car.unSavedChanges = true
      }
    },
    setBusDistance(value: number) {
      this.publicTransport.busDistance = value
      this.publicTransport.unSavedChanges = true
    },
    setCityBusDistance(value: number) {
      this.publicTransport.cityBusDistance = value
      this.publicTransport.unSavedChanges = true
    },
    setCityTrainDistance(value: number) {
      this.publicTransport.cityTrainDistance = value
      this.publicTransport.unSavedChanges = true
    },
    setMetroDistance(value: number) {
      this.publicTransport.metroDistance = value
      this.publicTransport.unSavedChanges = true
    },
    setTrainDistance(value: number) {
      this.publicTransport.trainDistance = value
      this.publicTransport.unSavedChanges = true
    },
    setTramDistance(value: number) {
      this.publicTransport.tramDistance = value
      this.publicTransport.unSavedChanges = true
    },
    setCaFlights(value: number) {
      this.travel.canaryFlights = value
      this.travel.unSavedChanges = true
    },
    setFinFlights(value: number) {
      this.travel.finlandFlights = value
      this.travel.unSavedChanges = true
    },
    setEurFlights(value: number) {
      this.travel.europeanFlights = value
      this.travel.unSavedChanges = true
    },
    setContFlights(value: number) {
      this.travel.transContinentalFlights = value
      this.travel.unSavedChanges = true
    },
    setEstCruises(value: number) {
      this.travel.estoniaCruises = value
      this.travel.unSavedChanges = true
    },
    setGerCruises(value: number) {
      this.travel.germanyCruises = value
      this.travel.unSavedChanges = true
    },
    setSweCruises(value: number) {
      this.travel.swedenCruises = value
      this.travel.unSavedChanges = true
    },
    setBoatType(value: BoatTypes) {
      this.boat.type = value
      this.boat.unSavedChanges = true
    },
    setBoatFuelConsumption(value: number) {
      this.boat.fuelConsumption = value
      this.boat.unSavedChanges = true
    },
    setBoatUse(value: number) {
      this.boat.usageHours = value
      this.boat.unSavedChanges = true
    },
    setBoatPower(value: number) {
      this.boat.power = value
      this.boat.unSavedChanges = true
    },
    setBoatUserCount(value: number) {
      this.boat.userCount = value
      this.boat.unSavedChanges = true
    },
    setMotorcycleFuelConsumption(value: number) {
      if (this.motorcycle) {
        this.motorcycle.fuelConsumption = value
        this.motorcycle.unSavedChanges = true
      }
    },
    setMotorcycleDistance(value: number) {
      if (this.motorcycle) {
        this.motorcycle.driveDistance = value
        this.motorcycle.unSavedChanges = true
      }
    },
    // common
    setChangesSaved() {
      switch (this.activeSection) {
        case TransportSections.Car:
          if (this.motorcycle) {
            this.motorcycle.unSavedChanges = false
          }
          for (const car of this.cars) {
            car.unSavedChanges = false
          }
          break
        case TransportSections.PublicTransport:
          this.publicTransport.unSavedChanges = false
          break
        case TransportSections.Travel:
          this.travel.unSavedChanges = false
          break
        case TransportSections.Boat:
          this.boat.unSavedChanges = false
      }
    },
    setActiveSection(section: TransportSections) {
      this.activeSection = section
    },
    setSubmitted() {
      this.submitted = true
    },
    setId(id: number) {
      this.id = id
    },
    setResults(results: ITransportResults) {
      this.boatResult = Math.round(results.boat)
      this.cruiseResult = Math.round(results.cruise)
      this.flightResult = Math.round(results.flight)
      this.motorcycleResult = Math.round(results.motorcycle)
      this.carResults = results.cars
      this.publicTransportResult = results.publicTransport
      this.totalResult = Math.round(results.total)
    },
    transportReset() {
      this.$reset()
    },
  },
  getters: {
    sectionUnsaved: (state) => {
      switch (state.activeSection) {
        case TransportSections.Car:
          return (
            (state.motorcycle && state.motorcycle.unSavedChanges) ||
            state.cars.find((c) => c.unSavedChanges) !== undefined
          )
        case TransportSections.PublicTransport:
          return state.publicTransport.unSavedChanges
        case TransportSections.Travel:
          return state.travel.unSavedChanges
        case TransportSections.Boat:
          return state.boat.unSavedChanges
        default:
          return false
      }
    },
    unsavedChanges: (state) => {
      return (
        (state.motorcycle && state.motorcycle.unSavedChanges) ||
        state.publicTransport.unSavedChanges ||
        state.cars.some((c) => c.unSavedChanges) ||
        state.travel.unSavedChanges ||
        state.boat.unSavedChanges
      )
    },
    resultChartData: (state) => {
      return (currentlyShownResults?: string) => {
        const data: Array<IChartData> = []

        if (currentlyShownResults === 'publicTransport') {
          data.push({
            label: i18n.global.t('$bus'),
            value: state.publicTransportResult.bus,
          })

          data.push({
            label: i18n.global.t('$train'),
            value: state.publicTransportResult.train,
          })

          data.push({
            label: i18n.global.t('$otherPublicTransport'),
            value: state.publicTransportResult.other,
          })
        } else {
          for (const res of state.carResults) {
            if (res.result) {
              data.push({
                label: i18n.global.t('$car') + ' ' + res.order,
                value: res.result,
              })
            }
          }

          data.push({
            label: i18n.global.t('$boat'),
            value: state.boatResult,
          })

          data.push({
            label: i18n.global.t('$flights'),
            value: state.flightResult,
          })
          data.push({
            label: i18n.global.t('$cruises'),
            value: state.cruiseResult,
          })
          data.push({
            label: i18n.global.t('$motorcycle'),
            value: state.motorcycleResult,
          })
          data.push({
            label: i18n.global.t('$publicTransport'),
            value: state.publicTransportResult.total,
          })
        }

        data.sort((a, b) => {
          return b.value - a.value
        })

        return data
      }
    },
    resultActions: (state) => {
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
          actions.push(i18n.global.t('$transportAction' + key, params))
        }
        const carResultSum =
          state.carResults.length > 0
            ? state.carResults.reduce((a, b) => a + b.result, 0)
            : 0
        if (
          carResultSum > 0 &&
          carResultSum > state.publicTransportResult.total
        ) {
          addAction('IncreasePublicTransport')
        } else if (state.publicTransportResult.total > 0) {
          addAction('PublicTransportToCycling')
        }

        return actions
      }
    },
    resultLinks: () => {
      return (): IResultActionLink[] => {
        return [
          {
            title: i18n.global.t('$motivaTransportTitle'),
            url: i18n.global.t('$motivaTransportUrl'),
          },
        ]
      }
    },
    resultButtons: (state) => {
      if (state.publicTransportResult.total) {
        return ['total', 'publicTransport']
      }
      return []
    },
    sitraCases: (state) => {
      const baseData = useBaseDataStore()
      if (state.cars.length > 0) {
        const totalCarDistance = state.cars
          .map((c) => c.driveDistance)
          .reduce((x, y) => x + y)
        const hasBioGasCar = state.cars.find((c) => c.fuel === Fuels.BioGas)

        if (baseData.postalCode) {
          let postalCodeAsNumber = -1
          try {
            postalCodeAsNumber = Number.parseInt(baseData.postalCode, undefined)
          } catch (error) {
            console.error(
              'Failed to parse postal code into a number: ' +
                baseData.postalCode +
                ' ' +
                error
            )
          }
          if (postalCodeAsNumber > -1) {
            if (
              postalCodeAsNumber < 69000 &&
              totalCarDistance > 10000 &&
              !hasBioGasCar
            ) {
              return '$sitraBioGasCar'
            }
            if (postalCodeAsNumber < 10000 && totalCarDistance <= 7000) {
              return '$sitraSharedCar'
            }
          }
        }
        return '$sitraForgetTrafficAndParking'
      }
      return '$sitraTimeMoneyFitness'
    },
  },
})
