// this file contains the definitions that all translation objects must follow
export interface IStartViewTranslations {
  $adultCount: string
  $baseData: string
  $baseDataSummary: string
  $birthDecade: string
  $childCount: string
  $continueToCalculator: string
  $continueToCalculatorWithRegistration: string
  $familySize: string
  $familySizeDetails: string
  $gender: string
  $genderFemale: string
  $genderMale: string
  $genderOther: string
  $groupCode: string
  $groupCodeDetails: string
  $groupCodeError: string
  $infoForUsers: string
  $postalCode: string
  $postalCodeDetails: string
  $registrationInfo: string
  $yearlyIncome: string
  $siteSlogan: string
  $termsOfUseInfo: string
}

export interface ICreateGroupCodeTranslations {
  $createNewGroupCode: string
  $groupCodeInstruction: string
  $validityPeriod: string
  $newGroupCode: string
  $note: string
  $requiredFieldInfo: string
  $noteInstruction: string
  $submitForm: string
  $codeCreationSuccessful: string
  $createdCodeInfo: string
  $expiresInfo: string
  $expiresTimePrefix: string
  $emailSentInfo: string
  $codeCreationFail: string
}

export interface IHousingTranslations {
  $appliances: string
  $building: string
  $cleaning: string
  $cottage: string
  $ekoEnergyDescription: string
  $ekoEnergyUrl: string
  $electricity: string
  $electricityConsumption: string
  $electricitySummary: string
  $energyExpert: string
  $energyExpertUrl: string
  $houseTypeFamily: string
  $houseTypeFlat: string
  $floorCountDetails: string
  $furniture: string
  $greenElectricityDetails: string
  $greenElectricityPercentage: string
  $greenHeatPercentage: string
  $hasSecondaryHouse: string
  $heating: string
  $heatingSummary: string
  $heatSourceDistrict: string
  $heatSourceElectric: string
  $heatSourceOil: string
  $heatSourcePump: string
  $heatSourceAirPump: string
  $heatSourceSelfGenerated: string
  $heatSourceWood: string
  $heldaCottageGuide: string
  $heldaCottageGuideUrl: string
  $houseArea: string
  $houseBuildYear: string
  $houseFloorCount: string
  $housingActionEnergyExpert: string
  $housingActionFindOutHeatConsumption: string
  $housingActionHeatingConsumptionBelowEstimates: string
  $housingActionHeatingEstimatesExceeded: string
  $housingActionHeatingEstimatesMatched: string
  $housingActionSecondaryHouseInfo: string
  $housingActionSecondaryHouseZeroElectricity: string
  $housingActionSmallHouseMaintenanceBook: string
  $housingActionWarmWater: string
  $housingActionWinterHeatAlways: string
  $housingActionWinterHeatBase: string
  $housingActionWinterHeatOff: string
  $housingActionWoodHeating: string
  $housingResultsSummary: string
  $housingResultsTitle: string
  $houseType: string
  $includeInElectricity: string
  $korjaustieto: string
  $korjaustietoDescription: string
  $korjaustietoUrl: string
  $mainHeatingMode: string
  $miscPurchases: string
  $motivaDescription: string
  $motivaUrl: string
  $motivaWoodHeatingGuide: string
  $motivaWoodHeatingGuideUrl: string
  $noSecondaryHouse: string
  $primaryHouse: string
  $primaryHousePurchasesSummary: string
  $primaryHouseSummary: string
  $primaryHousePurchases: string
  $secondaryHousePurchases: string
  $purchasesShort: string
  $renovations: string
  $houseTypeRow: string
  $additionalHeating: string
  $secondaryHouse: string
  $secondaryHousePostalCodeDetails: string
  $secondaryHousePurchasesSummary: string
  $secondaryHouseReportLinkText: string
  $secondaryHouseReportUrl: string
  $secondaryHouseSummary: string
  $secondaryHouseYearlyUsersDetails: string
  $secondaryHouseYearlyUsers: string
  $smallHouseMaintenanceBook: string
  $smallHouseMaintenanceBookDescription: string
  $smallHouseMaintenanceBookUrl: string
  $valoniaCottageGuide: string
  $valoniaCottageGuideUrl: string
  $winterHeatAlways: string
  $winterHeatBase: string
  $winterHeatDry: string
  $winterHeating: string
  $winterHeatOff: string
  $winterHeatBaseDetails: string
  $winterHeatDryDetails: string
  $winterHeatingSummary: string
  $woodHeatingDetails: string
  $flatHeatCalculation: string
  $greenDistrictHeatDetails: string
  $additionalHeatingDetails: string
  $sitraNoHeatPump: string
  $sitraNoHeatPumpUrl: string
  $sitraWastedSpace: string
  $sitraWastedSpaceUrl: string
  $sitraSolarHeat: string
  $sitraSolarHeatUrl: string
  $sitraShowerChallenge: string
  $sitraShowerChallengeUrl: string
}

export interface IFoodTranslations {
  $alcoholicBeverages: string
  $beef: string
  $berries: string
  $butterAndAnimalFats: string
  $cheeses: string
  $chickenAndTurkey: string
  $coffeeAndTea: string
  $diet: string
  $dietSummary: string
  $dietOmnivore: string
  $dietVegan: string
  $dietVegetarian: string
  $dryPlantBasedProtein: string
  $eggs: string
  $fermentedMilkProducts: string
  $fishAndShellfishAndFishProducts: string
  $foodActionOmnivore: string
  $foodActionVegan: string
  $foodActionVegetarian: string
  $foodIngredients: string
  $foodIngredientsSummary: string
  $foodIngredientsRangeDetails: string
  $foodResultsSummary: string
  $foodResultsTitle: string
  $frozenVegetables: string
  $fruitAndBerryPreserves: string
  $fruits: string
  $grainsAndGrainProducts: string
  $legumesAndNuts: string
  $margarine: string
  $meatProducts: string
  $milk: string
  $otherDairyProducts: string
  $otherDrinks: string
  $otherFoodProducts: string
  $otherMeatsAndOffal: string
  $plantBasedDrinks: string
  $plantBasedProteinProducts: string
  $pork: string
  $potatoes: string
  $resultCategoryDairy: string
  $resultCategoryMeat: string
  $resultCategoryPlants: string
  $rice: string
  $rootVegetables: string
  $saaSyoda: string
  $saaSyodaDetails: string
  $saaSyodaUrl: string
  $sitraVarietyWithVegetables: string
  $sitraVarietyWithVegetablesUrl: string
  $sitraAvoidFoodWaste: string
  $sitraAvoidFoodWasteUrl: string
  $sausages: string
  $sugarCandiesAndChocolate: string
  $vegetablesAndMushrooms: string
  $vegetableOils: string
}

export interface ITransportTranslations {
  $excludeWorkTrips: string
  $boatSummary: string
  $boatTypeNone: string
  $boatTypeRowing: string
  $boatTypeSailing: string
  $boatTypeMotorAluminum: string
  $boatTypeMotorFiber: string
  $boatType: string
  $boat: string
  $userCount: string
  $persons: string
  $fuelConsumption: string
  $powerConsumption: string
  $cruisesAndFlights: string
  $cruiseDistances: string
  $cruisesAndFlightsSummary: string
  $estoniaCruises: string
  $swedenCruises: string
  $germanyCruises: string
  $cruises: string
  $tripUnit: string
  $flights: string
  $publicTransport: string
  $publicTransportSummary: string
  $cityTraffic: string
  $longDistanceTraffic: string
  $bus: string
  $train: string
  $cityBus: string
  $cityTrain: string
  $tram: string
  $metro: string
  $boatFuelConsumptionDetails: string
  $boatPowerConsumptionDetails: string
  $carAndMotorcycle: string
  $carAndMotorcycleSummary: string
  $addCar: string
  $addCarDetails: string
  $addMotorcycle: string
  $car: string
  $motorcycle: string
  $driveDistance: string
  $removeCarDetails: string
  $passengerCount: string
  $sharedCar: string
  $sharedCarDetails: string
  $cars: string
  $carDetailsSummary: string
  $carSize: string
  $carSizeDetails: string
  $carFuel: string
  $buildYear: string
  $carFuelDetails: string
  $orEarlier: string
  $orLater: string
  $carSizeMini: string
  $carSizeSmall: string
  $carSizeSmallFamily: string
  $carSizeMediumFamily: string
  $carSizeLargeFamily: string
  $carSizeLarge: string
  $carFuelGasoline: string
  $carFuelEthanolMix: string
  $carFuelDiesel: string
  $carFuelBioGas: string
  $carFuelGroundGas: string
  $carFuelDetailed: string
  $carFuelElectricity: string
  $carFuelGreenElectricity: string
  $fuelDetailsInputMode: string
  $asPercentage: string
  $asConsumption: string
  $transportResultsSummary: string
  $transportResultsTitle: string
  $motivaTransportTitle: string
  $motivaTransportUrl: string
  $transportActionIncreasePublicTransport: string
  $transportActionPublicTransportToCycling: string
  $walkingCyclingCalculatorResults: string
  $toCycling: string
  $toWalking: string
  $walking: string
  $cycling: string
  $walkingCyclingCalculatorDetails: string
  $walkingCyclingCalculatorCalcInfo: string
  $walkingCyclingCalculatorIntro: string
  $walkingCyclingCalculatorTitle: string
  $canaryFlights: string
  $finlandFlights: string
  $europeanFlights: string
  $transContinentalFlights: string
  $flightDistances: string
  $otherPublicTransport: string
  $sitraBioGasCar: string
  $sitraBioGasCarUrl: string
  $sitraSharedCar: string
  $sitraSharedCarUrl: string
  $sitraForgetTrafficAndParking: string
  $sitraForgetTrafficAndParkingUrl: string
  $sitraTimeMoneyFitness: string
  $sitraTimeMoneyFitnessUrl: string
}

export interface IConsumptionTranslations {
  $clothing: string
  $communications: string
  $consumerUnionEthicalGuide: string
  $consumerUnionEthicalGuideUrl: string
  $consumption: string
  $consumptionActionPurchaseInfo: string
  $consumptionActionUsageInfo: string
  $consumptionResultsSummary: string
  $consumptionResultsTitle: string
  $consumptionSummary: string
  $electronics: string
  $electronicsShort: string
  $goods: string
  $lowCarbonGoods: string
  $lowCarbonGoodsDetails: string
  $lowCarbonServices: string
  $lowCarbonServicesDetails: string
  $motivaConsumptionLinkText: string
  $motivaConsumptionUrl: string
  $nordicSwanEcoLabel: string
  $nordicSwanEcoLabelUrl: string
  $other: string
  $paper: string
  $recreation: string
  $recreationShort: string
  $services: string
  $shoes: string
  $sitraBuyingHangover: string
  $sitraBuyingHangoverUrl: string
  $sitraInvestInResponsibility: string
  $sitraInvestInResponsibilityUrl: string
}

export interface IWasteTranslations {
  $bioWaste: string
  $cartonWaste: string
  $electronicWaste: string
  $glassWaste: string
  $hazardousWaste: string
  $hsyEatBetter: string
  $hsyEatBetterDetails: string
  $hsyEatBetterUrl: string
  $metalWaste: string
  $paperWaste: string
  $plasticWaste: string
  $wasteActionFoodWaste: string
  $wasteActionRecycling: string
  $wasteAmount: string
  $wasteAmountHigh: string
  $wasteAmountLow: string
  $wasteAmountNormal: string
  $wasteResultsSummary: string
  $wasteResultsTitle: string
  $wasteSortingFrequencyAlways: string
  $wasteSortingFrequencyNever: string
  $wasteSortingFrequencyOften: string
  $wasteSortingFrequencySometimes: string
  $wasteSortingTitle: string
  $wasteSummary: string
  $wasteTotalResult: string
  $wasteTransport: string
  $wasteRecyclingTitle: string
  $sitraItemLifespan: string
  $sitraItemLifespanUrl: string
}

export interface IResultTranslations {
  $resultsTitle: string
  $comparisonSelection: string
  $familySizeAverage: string
  $dietAverage: string
  $postalCodeAverage: string
  $incomeAverage: string
  $familySizeShort: string
  $incomeShort: string
  $finnishAverage: string
  $parisAgreement: string
  $testAverage: string
  $userHistory: string
  $userHistoryGuide: string
  $socialShareTitle: string
  $socialShareText: string
  $finnishAverageComparisonDetails: string
  $testAverageComparisonDetails: string
  $resultsSocietalChangeTitle: string
  $reset: string
}

export interface IActionsTranslations {
  $carbonOffsetSummary: string
  $carbonOffsetTitle: string
  $carbonOffsetResult: string
  $otherCalculatorsLinkText: string
  $otherCalculatorsSuggestion: string
  $otherCalculatorsLinkUrl: string
  $recommendedActions: string
  $recommendedActionsSummary: string
}

export interface ICalculationInfoTranslations {
  $goBack: string
  $linkToDocumentation: string
  $calculationInfoTitle: string
  $tableOfContents: string
  $introductionTitle: string
  $introductionContent: string
  $baseDataTitle: string
  $baseDataContent: string
  $emissionCreditsTitle: string
  $emissionCreditsContent: string
  $housingTitle: string
  $housingContent: string
  $housingElectricityTitle: string
  $housingElectricityContent: string
  $housingHeatingTitle: string
  $housingHeatingContent: string
  $housingPurchasesTitle: string
  $housingPurchasesContent: string
  $secondaryHouseTitle: string
  $secondaryHouseContent: string
  $wasteTitle: string
  $wasteContent: string
  $transportTitle: string
  $transportContent: string
  $transportCarTitle: string
  $transportCarContent: string
  $transportPublicTransportTitle: string
  $transportPublicTransportContent: string
  $transportMotorcyclesBoatsTitle: string
  $transportMotorcyclesBoatsContent: string
  $transportTravelTitle: string
  $transportTravelContent: string
  $transportWalkingCyclingTitle: string
  $transportWalkingCyclingContent: string
  $foodTitle: string
  $foodContent: string
  $goodsAndServicesTitle: string
  $goodsAndServicesContent: string
  $sourcesTitle: string
  $sourcesContent: string
  $resultsTitle: string
  $resultsContent: string
  $analysisTitle: string
  $analysisContent: string
}

export interface IFooterTranslations {
  $footerCopyright: string
  $serviceDescription: string
  $privacyNotice: string
  $calculationInfo: string
  $termsOfUse: string
  $share: string
  $accessibility: string
}

export interface IGlobalTranslations {
  $calculateResults: string
  $ratherNotSay: string
  $resetToDefaults: string
  $total: string
  $yearShort: string
  $yourResult: string
  $resultActionsTitle: string
  $emissionUnit: string
  $continue: string
  $monthShort: string
  $returnToEstimate: string
  $calcInfoText: string
  $calcInfoLinkText: string
  $weekShort: string
  $weekLong: string
  $yearLong: string
  $piecesShort: string
  $busy: string
  $inCalculationInfo: string
  $resetDataConfirmation: string
  $clearError: string
  $lessThan: string
  $orMore: string
  $baseDataNotSubmittedNotification: string
  $sitra100WaysLinkText: string
  $sitra100WaysUrl: string
  $notFoundTitle: string
  $notFoundDescription: string
}

export interface IHeaderTranslations {
  $siteTitle: string
}

export interface ILoginTranslations {
  $email: string
  $login: string
  $loginGuide: string
  $sendLoginMail: string
  $validateToken: string
  $emailSentGuide: string
  $token: string
  $acceptRegistryDescription: string
  $acceptRegistryDescription2: string
}

export interface INavigationTranslations {
  $food: string
  $housing: string
  $info: string
  $results: string
  $transport: string
  $waste: string
  $actionsOverview: string
}

export interface IErrorTranslations {
  $networkError: string
  $inputError: string
  $saveFailedError: string
  $emailSendError: string
  $tokenVerifyError: string
  $loginActiveError: string
  $dublicateCodeError: string
}

export interface IServiceDescriptionTranslations {
  $serviceDescriptionContent: string
  $hinkuLinkText: string
  $hinkuUrl: string
  $climatePledgeLinkText: string
  $climatePledgeUrl: string
  $dietAsEducationLinkText: string
  $dietAsEducationUrl: string
  $ekokotiLinkText: string
  $ekokotiUrl: string
}

export interface IPrivacyNoticeTranslations {
  $privacyNoticeContent: string
}

export interface ITermsOfUseTranslations {
  $termsOfUseContent: string
}

export interface IAccessibilityInformationTranslations {
  $accessibilityInformation: string
}
