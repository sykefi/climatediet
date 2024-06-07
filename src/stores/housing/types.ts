export enum Sections {
  Base,
  Electricity,
  Heating,
  Purchases,
  SecondaryBase,
  SecondaryElectricity,
  WinterHeating,
  SecondaryHeating,
  SecondaryPurchases,
}

export interface IHousingState {
  primaryHouse: IHouse
  hasSecondaryHouse: boolean
  secondaryHouse: IHouse
  activeSection: Sections
  submitted: boolean
}

export interface IHousingResultData {
  id: number
  electricity: number
  heating: number
  building: number
  purchase: number
  total: number
}

export interface IElectricityData {
  consumption: number
  estimate: number
  greenPercentage: number
  unSavedChanges: boolean
}

export enum HeatingModes {
  None = 'None',
  District = 'District',
  Electric = 'Electric',
  Wood = 'Wood',
  Oil = 'Oil',
  Pump = 'Pump',
  AirPump = 'AirPump',
  SelfGenerated = 'SelfGenerated',
}

export enum WinterHeatingOptions {
  /** No heating during winter */
  Off = 'Off',
  /** Living temperature year round */
  Always = 'Always',
  /** Base heat during winters */
  Base = 'Base',
  /** Constant output == keep-dry=heating */
  Dry = 'Dry',
}

export interface IHeatingData {
  mainMode: HeatingModes
  additionalModes: HeatingModes[]
  /** kWh / year */
  districtConsumption: number
  districtEstimate: number
  districtGreenPercentage: number
  /** l/year */
  oilConsumption: number
  oilEstimate: number
  winterHeating: WinterHeatingOptions
  unSavedChanges: boolean
}

export enum HouseTypes {
  None = 'None',
  Family = 'Family',
  Flat = 'Flat',
  Row = 'Row',
}

export interface IHouse {
  id: number
  type: HouseTypes
  /** square meters */
  area: number
  floors: number
  buildYear: number
  users: number
  postalCode: string
  electricity: IElectricityData
  heating: IHeatingData
  purchases: IPurchaseData
  electricityResult: number
  heatingResult: number
  buildingResult: number
  purchaseResult: number
  totalResult: number
  unSavedChanges: boolean
}

export interface IPurchaseData {
  appliances: number
  cleaning: number
  furniture: number
  misc: number
  renovations: number
  defaultsChanged: boolean
  unSavedChanges: boolean
}
