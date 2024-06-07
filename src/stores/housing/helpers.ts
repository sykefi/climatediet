import api from '@/utilities/api'
import { useBaseDataStore } from '../startView/store'
import {
  HeatingModes,
  HouseTypes,
  IElectricityData,
  IHeatingData,
  IHouse,
  IHousingState,
  IPurchaseData,
  WinterHeatingOptions,
} from './types'

export function getInitialHouse(isPrimary: boolean): IHouse {
  return {
    id: 0,
    // Primary house area is calculated in the HousingBasicsView mounted()
    // Secondary house: Mökkibarometri 2016 chapter 5.1: Average area of all summer cottages in 2014 was 48 square meters
    area: isPrimary ? 0 : 48,
    type: HouseTypes.None,
    floors: 1,
    buildYear: 1980,
    users: 1,
    postalCode: '',
    electricity: getElectricityDefaults(),
    heating: getHeatingDefaults(),
    purchases: getPurchaseDefaults(isPrimary, 1),
    electricityResult: 0,
    heatingResult: 0,
    buildingResult: 0,
    purchaseResult: 0,
    totalResult: 0,
    unSavedChanges: false,
  }
}

export function getPurchaseDefaults(
  isPrimary: boolean,
  familySize: number
): IPurchaseData {
  return {
    // constants from finnGoodsAndServicesConstants2016.py
    furniture: isPrimary ? familySize * 317 : 235,
    appliances: isPrimary ? familySize * 267 : 235,
    misc: isPrimary ? familySize * 169 : 235,
    renovations: isPrimary ? familySize * 5 : 0,
    cleaning: 0,
    defaultsChanged: false,
    unSavedChanges: false,
  }
}

export function getElectricityDefaults(): IElectricityData {
  return {
    greenPercentage: 0,
    consumption: 0,
    estimate: 0,
    unSavedChanges: false,
  }
}

export function getHeatingDefaults(): IHeatingData {
  return {
    mainMode: HeatingModes.None,
    additionalModes: [HeatingModes.None],
    districtConsumption: 0,
    districtGreenPercentage: 0,
    districtEstimate: 0,
    oilConsumption: 0,
    oilEstimate: 0,
    unSavedChanges: false,
    winterHeating: WinterHeatingOptions.Always,
  }
}

export async function sendHouse(
  h: IHouse,
  isPrimary: boolean,
  testInstanceId: number,
  sessionId: string
) {
  const el = h.electricity
  const he = h.heating
  const house = {
    Id: h.id,
    TestInstanceId: testInstanceId,
    IsPrimaryHouse: isPrimary,
    HouseType: h.type,
    BuildYear: h.buildYear,
    Area: h.area,
    FloorCount: h.floors,
    YearlyUsers: h.users,
    PostalCode: h.postalCode,
    ElectricityConsumption: el.consumption,
    ElectricityEstimateUsed: el.consumption === el.estimate,
    GreenElectricityPercentage: el.greenPercentage,
    HeatingMode: he.mainMode,
    DistrictHeatConsumption: he.districtConsumption,
    GreenDistrictHeatPercentage: he.districtGreenPercentage,
    DistrictHeatEstimateUsed: he.districtConsumption === he.districtEstimate,
    HeatingOilConsumption: he.oilConsumption,
    HeatingOilEstimateUsed: he.oilConsumption === he.oilEstimate,
    AdditionalHeatPump: he.additionalModes.includes(HeatingModes.AirPump),
    AdditionalHeatSelfGenerated: he.additionalModes.includes(
      HeatingModes.SelfGenerated
    ),
    AdditionalHeatWood: he.additionalModes.includes(HeatingModes.Wood),
    WinterHeating: he.winterHeating,
    AppliancePurchases: h.purchases.appliances,
    CleaningPurchases: h.purchases.cleaning,
    FurniturePurchases: h.purchases.furniture,
    RenovationPurchases: h.purchases.renovations,
    MiscPurchases: h.purchases.misc,
  }
  try {
    const response =
      house.Id === 0
        ? await api.post('housing/' + testInstanceId, house, sessionId)
        : await api.put('housing/' + house.Id, house, sessionId)
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

/* helper method for targeting mutations**/
export function getHouse(isPrimary: boolean, state: IHousingState) {
  return isPrimary ? state.primaryHouse : state.secondaryHouse
}

export function defaultArea() {
  const startView = useBaseDataStore()
  const familySize = startView.adultCount + startView.childCount
  let area = 40 // for one occupant, default is 40

  if (familySize > 1) {
    area += 40 // for two persons, double up
  }
  if (familySize > 2) {
    area += 20 * (familySize - 2) // add half of the default for everyone over 2
  }
  return area
}
