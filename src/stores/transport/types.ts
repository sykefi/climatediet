export interface ITransportStoreState {
  activeSection: TransportSections
  cars: ICarData[]
  motorcycle: IMotorcycleData | null
  publicTransport: IPublicTransportData
  travel: ITravelData
  boat: IBoatData
  id: number
  submitted: boolean

  boatResult: number
  cruiseResult: number
  flightResult: number
  motorcycleResult: number
  publicTransportResult: IPublicTransportResults
  carResults: ICarResult[]
  totalResult: number
}

export enum TransportSections {
  Car,
  PublicTransport,
  Travel,
  Boat,
}

export interface IPublicTransportResults {
  bus: number
  train: number
  other: number
  total: number
}

export interface ITransportResults {
  boat: number
  cruise: number
  flight: number
  motorcycle: number
  publicTransport: IPublicTransportResults
  cars: ICarResult[]
  total: number
}

export interface ICarResult {
  order: number
  result: number
}

export enum BoatTypes {
  None = 'None',
  Sailing = 'Sailing',
  Rowing = 'Rowing',
  MotorAluminum = 'MotorAluminum',
  MotorFiber = 'MotorFiber',
}

export interface IBoatData {
  type: BoatTypes
  fuelConsumption: number
  usageHours: number
  power: number
  userCount: number
  unSavedChanges: boolean
}

export enum Fuels {
  None = 'None',
  BioGas = 'BioGas',
  GroundGas = 'GroundGas',
  Diesel = 'Diesel',
  Electricity = 'Electricity',
  GreenElectricity = 'GreenElectricity',
  Gasoline = 'Gasoline',
  EthanolMix = 'EthanolMix',
}

export enum Sizes {
  Mini = 'Mini',
  Small = 'Small',
  SmallFamily = 'SmallFamily',
  MediumFamily = 'MediumFamily',
  LargeFamily = 'LargeFamily',
  Large = 'Large',
}

export interface IFuelDetails {
  fuelName: Fuels
  percentage: number
  consumption: number
}

export interface ICarData {
  /** Client side id for helping the UI logic. Used for identifying the car in the backend */
  order: number
  /** The manufacturing year   */
  buildYear: number
  /** Distance driven in a year, in kilometers */
  driveDistance: number
  /** Average number of passengers */
  passengerCount: number
  /** Is the car shared between multiple owners */
  shared: boolean
  /** Primary fuel used, if the user has not defined specifics */
  fuel: Fuels
  /** The size of the car, from a predefined selection */
  size: Sizes
  detailsAdded: boolean
  fuelDetailsAdded: boolean

  fuelDetails: IFuelDetails[]
  fuelDetailsAsPercentage: boolean

  unSavedChanges: boolean
}

export interface IMotorcycleData {
  /** kilometers driven in a year */
  driveDistance: number
  /** fuel consumption, in liters / 100km */
  fuelConsumption: number
  unSavedChanges: boolean
}

export interface IPublicTransportData {
  cityBusDistance: number
  cityTrainDistance: number
  busDistance: number
  trainDistance: number
  metroDistance: number
  tramDistance: number
  unSavedChanges: boolean
}

export interface ITravelData {
  estoniaCruises: number
  germanyCruises: number
  swedenCruises: number
  canaryFlights: number
  europeanFlights: number
  finlandFlights: number
  transContinentalFlights: number
  unSavedChanges: boolean
}
