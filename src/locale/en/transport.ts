/* tslint:disable:max-line-length */
import { ITransportTranslations } from '../interfaces'

const en: ITransportTranslations = {
  $excludeWorkTrips: 'Exclude trips paid by your employer.',
  $boatSummary: `Choose the type of boat. The calculation includes the manufacturing of the boat divided by the estimated life span. The total carbon footprint of boat use is divided by the number of boat users.

  If the boat has an engine, insert the amount of fuel used during one year. Optionally, use the fuel consumption estimate based on power (hp) and hours of use. The calculation is based on 50% of the indicated nominal power.`,
  $boatTypeNone: 'No boat',
  $boatTypeRowing: 'Rowing',
  $boatTypeSailing: 'Sail',
  $boatTypeMotorAluminum: 'Motorboat (aluminum hull)',
  $boatTypeMotorFiber: 'Motorboat (fiber hull)',
  $boatType: 'Boat type',
  $boat: 'Boat',
  $userCount: 'Users',
  $persons: 'persons',
  $fuelConsumption: 'Fuel consumption',
  $powerConsumption: 'Power consumption',
  $cruisesAndFlights: 'Cruises and flights',
  $cruiseDistances: `The distances used:
  Helsinki-Tallinn 80 km
  Helsinki-Stockholm 400 km
  Helsinki-Travemunde 1 200 km`,
  $cruisesAndFlightsSummary: `Indicate the number of trips made on a cruise ship in a year, calculating return trips as two one-way trips.

  Indicate the number of flights in a year, calculating return trips as two one-way trips. Carbon offsets are asked about later in the Actions section.`,
  $estoniaCruises: 'Helsinki-Tallinn',
  $swedenCruises: 'Helsinki-Stockholm',
  $germanyCruises: 'Helsinki-Travemunde',
  $cruises: 'Boat cruises',
  $tripUnit: 'trips / year',
  $flights: 'Flights',
  $publicTransport: 'Buses and rail travel',
  $publicTransportSummary:
    'Indicate both everyday trips and long distance travel. Insert everyday travel in kilometres per week and long distance travel in kilometres per year. Route planners and map services can help you estimate your travelled kilometres.',
  $cityTraffic: 'Local',
  $longDistanceTraffic: 'Long distance',
  $bus: 'Bus',
  $train: 'Train',
  $cityBus: 'Bus',
  $cityTrain: 'Train',
  $tram: 'Tram',
  $metro: 'Metro',
  $boatFuelConsumptionDetails: 'Input either the consumed fuel...',
  $boatPowerConsumptionDetails: '...or the engine usage and power.',
  $carAndMotorcycle: 'Cars and motorcycles',
  $carAndMotorcycleSummary: `Insert the kilometres driven per year by car and motorcycle or scooter. The average number of people traveling in a car is 1.7 persons in Finland (including the driver). You can adjust the number of passengers. The emissions of car use are divided by the number of people on board.

  If you drive several cars and don’t know the specifications of the car you use, insert the kilometres driven and the number of persons travelling on board. Emissions are then calculated based on an average car. You can estimate car-driving emissions in more detail by choosing 'Add car specs'. You can report data separately for up to four cars.`,
  $addCar: 'Add car',
  $addCarDetails: 'Add car details',
  $addMotorcycle: 'Add motorcycle',
  $car: 'Car',
  $motorcycle: 'Motorcycle',
  $driveDistance: 'Drive distance',
  $removeCarDetails: 'Remove car details',
  $passengerCount: 'Passenger count',
  $sharedCar: 'Shared car',
  $sharedCarDetails:
    'A shared car refers to both a car involved in commercial car sharing services (rental vehicles and urban car sharing) and sharing a ride with other people if there is no car in your household.',
  $cars: 'Cars',
  $carDetailsSummary:
    'The emissions are calculated based on the car size, manufacturing year and the fuel used.',
  $carFuel: 'Fuel',
  $carFuelDetails: `You can input more detailed fuel information by selecting  'detailed information'`,
  $buildYear: 'Manufacturing year',
  $orEarlier: ' or earlier',
  $carSize: 'Car size',
  $carSizeDetails: `Examples of cars of different sizes:
  Mini: Ka, Aygo, Smart
  Small: Yaris, Fiesta, Polo
  Small family: Golf, Focus, Corolla
  Family: Avensis, Passat, Mondeo, V70
  Large family: CR-V, Verso, Touran, Zafira, RAV
  Large: Caravelle, Alhambra, also vans, camper cars and other large vehicles`,
  $carSizeMini: 'Mini',
  $carSizeSmall: 'Small',
  $carSizeSmallFamily: 'Small family',
  $carSizeMediumFamily: 'Medium family',
  $carSizeLargeFamily: 'Large family',
  $carSizeLarge: 'Large',
  $carFuelGasoline: 'Gasoline',
  $carFuelEthanolMix: 'Ethanol mix (RE85)',
  $carFuelDiesel: 'Diesel',
  $carFuelBioGas: 'Bio gas',
  $carFuelGroundGas: 'Natural gas',
  $carFuelDetailed: 'Detailed information',
  $carFuelElectricity: 'Electricity',
  $carFuelGreenElectricity: 'Green Electricity',
  $fuelDetailsInputMode: 'Insert fuel consumption as',
  $asPercentage: 'percentage',
  $asConsumption: 'units of consumption',
  $transportResultsSummary:
    'Transportation amounts to about one fifth of personal emissions. Walking and cycling do not cause direct carbon emissions. Therefore kilometres travelled by walking and cycling are not asked.',
  $transportResultsTitle: 'Transportation carbon footprint',
  $motivaTransportTitle: 'Sustainable transport and mobility',
  $motivaTransportUrl:
    'https://www.motiva.fi/en/solutions/sustainable_transport_and_mobility',
  $transportActionIncreasePublicTransport:
    'Driver - ease up the pedal and utilize public transport. Using route guides makes it easier.',
  $transportActionPublicTransportToCycling:
    'Thank you for favoring public transport. Do you do short trips by foot or bicycle? Use planners to optimize your routes.',
  $walkingCyclingCalculatorResults:
    'By {to} {distance} km per week instead of driving, you will protect your health as much as avoiding passive smoking, i.e. exposure to indoor cigarette smoke of {cigarettes} cigarettes per week.  At the same time, CO2 emissions savings are {carbon} kg per year.',
  $toCycling: 'cycling',
  $toWalking: 'walking',
  $walking: 'Walking',
  $cycling: 'Cycling',
  $walkingCyclingCalculatorDetails: `Physical activity is good for your health. Regular physical activity lowers the risk of cardiovascular disease and diabetes, for instance. The positive health impacts are illustrated by comparing them to the benefits of avoiding passive smoking. Passive smoking is bad for your health and increases the risk of cardiovascular diseases and cancer.

  The calculation is jointly produced with the University of Helsinki, the Department of Public Health and the Finnish Environment Institute Syke, with support from the Ministry of Education and Culture.`,
  $walkingCyclingCalculatorCalcInfo:
    'More detailed calculation principles can be found ',
  $walkingCyclingCalculatorIntro:
    'In addition to the positive climate impact, replacing driving a car with walking or cycling is also beneficial to your health: try it!',
  $walkingCyclingCalculatorTitle: 'Walking and cycling',
  $canaryFlights: 'Canary Islands',
  $finlandFlights: 'Within Finland',
  $europeanFlights: 'Within Europe',
  $transContinentalFlights: 'Trans-continental',
  $flightDistances: `Flight distances used in the calculator (from Helsinki) are:
  Oulu (domestic flight) 515 km
  Düsseldorf (intra-European flight) 1600 km
  Las Palmas (in the Canary Islands) 4700 km
  Bangkok (trans-continental flight) 8300 km`,
  $otherPublicTransport: 'Other public',
  $orLater: ' or later',
  $sitraBioGasCar: 'Biogas - a clean domestic fuel',
  $sitraBioGasCarUrl:
    'https://www.sitra.fi/en/cases/biogas-clean-domestic-fuel/',
  $sitraForgetTrafficAndParking: 'Forget traffic jams and parking problems',
  $sitraForgetTrafficAndParkingUrl:
    'https://www.sitra.fi/en/cases/forget-traffic-jams-parking-problems/',
  $sitraSharedCar: 'Genuine care-free driving',
  $sitraSharedCarUrl:
    'https://www.sitra.fi/en/cases/genuine-care-free-driving/',
  $sitraTimeMoneyFitness:
    'Save time and money, stay fit and protect the environment',
  $sitraTimeMoneyFitnessUrl:
    'https://www.sitra.fi/en/cases/save-time-money-stay-fit-protect-environment/',
}
export default en
