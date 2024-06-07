import { Fuels, ICarData } from './types'

export function carsToSendFormat(cars: ICarData[]) {
  if (cars.length === 0) {
    return []
  }

  const retCars = []

  for (const car of cars) {
    retCars.push({
      Order: car.order,
      DetailsAdded: car.detailsAdded,
      FuelDetailsAdded: car.fuelDetailsAdded,
      UseFuelPercentages: car.fuelDetailsAsPercentage,
      BioGasConsumption: getFuelDetails(car, Fuels.BioGas).consumption,
      BioGasPercentage: getFuelDetails(car, Fuels.BioGas).percentage,
      GroundGasConsumption: getFuelDetails(car, Fuels.GroundGas).consumption,
      GroundGasPercentage: getFuelDetails(car, Fuels.GroundGas).percentage,
      DieselConsumption: getFuelDetails(car, Fuels.Diesel).consumption,
      DieselPercentage: getFuelDetails(car, Fuels.Diesel).percentage,
      ElectricityConsumption: getFuelDetails(car, Fuels.Electricity)
        .consumption,
      ElectricityPercentage: getFuelDetails(car, Fuels.Electricity).percentage,
      GreenElectricityConsumption: getFuelDetails(car, Fuels.GreenElectricity)
        .consumption,
      GreenElectricityPercentage: getFuelDetails(car, Fuels.GreenElectricity)
        .percentage,
      GasolineConsumption: getFuelDetails(car, Fuels.Gasoline).consumption,
      GasolinePercentage: getFuelDetails(car, Fuels.Gasoline).percentage,
      EthanolMixConsumption: getFuelDetails(car, Fuels.EthanolMix).consumption,
      EthanolMixPercentage: getFuelDetails(car, Fuels.EthanolMix).percentage,
      BuildYear: car.buildYear,
      DriveDistance: car.driveDistance,
      Shared: car.shared,
      Size: car.size,
      Fuel: car.fuel,
      PassengerCount: car.passengerCount,
    })
  }
  return retCars
}

export function getFuelDetails(car: ICarData, fuel: Fuels) {
  const details = car.fuelDetails.find((f) => f.fuelName === fuel)
  if (!details) {
    return { percentage: 0, consumption: 0 }
  }
  return details
}

export function getCarFuelPercentageTotal(car: ICarData) {
  let sum = 0
  for (const details of car.fuelDetails) {
    sum += details.percentage
  }
  return sum
}
