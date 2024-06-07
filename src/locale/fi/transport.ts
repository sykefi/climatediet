/* tslint:disable:max-line-length */
import { ITransportTranslations } from '../interfaces'

const fi: ITransportTranslations = {
  $excludeWorkTrips: 'Työnantajan maksamia matkoja ei tarvitse huomioida',
  $boatSummary: `Valitse veneen tyyppi. Laskenta ottaa huomioon veneen valmistuksen aiheuttamat päästöt jaettuna oletetuilla käyttövuosilla. Vuoden veneilyn ilmastovaikutukset jaetaan ilmoittamallesi käyttäjämäärälle.

  Jos veneessä on moottori, ilmoita vuoden aikana käytetty polttoaineen määrä. Polttoaineen kulutus voidaan myös arvioida moottorin nimellistehon (hv) ja käyttötuntien perusteella. Laskelmassa käytetään 50 % ilmoitetusta nimellistehosta.`,
  $boatTypeNone: 'Ei venettä',
  $boatTypeRowing: 'Soutu',
  $boatTypeSailing: 'Purje',
  $boatTypeMotorAluminum: 'Moottori (alumiinirunko)',
  $boatTypeMotorFiber: 'Moottori (kuiturunko)',
  $boatType: 'Veneen tyyppi',
  $boat: 'Vene',
  $userCount: 'Käyttäjät',
  $persons: 'henkilöä',
  $fuelConsumption: 'Polttoaineen kulutus',
  $powerConsumption: 'Tehon kulutus',
  $cruisesAndFlights: 'Laiva- ja lentomatkat',
  $cruiseDistances: `Laskennassa käytetyt kilometrimäärät ovat:
  Helsinki-Tallinna 80 km
  Helsinki-Tukholma 400 km
  Helsinki-Travemunde 1 200 km`,
  $cruisesAndFlightsSummary: `Laivamatkat ilmoitetaan yhdensuuntaisina matkoina vuodessa, esimerkiksi risteily Tallinnaan on yhteensä kaksi matkaa.

  Lentomatkat ilmoitetaan yhdensuuntaisina matkoina vuodessa, meno-paluu on yhteensä kaksi matkaa. Päästöhyvityksiä käsitellään lopuksi Toimenpiteet-osiossa.`,
  $estoniaCruises: 'Helsinki-Tallinna',
  $swedenCruises: 'Helsinki-Tukholma ',
  $germanyCruises: 'Helsinki-Travemunde',
  $cruises: 'Laivamatkat',
  $tripUnit: 'kpl / vuosi',
  $flights: 'Lennot',
  $publicTransport: 'Linja-autot ja raideliikenne',
  $publicTransportSummary:
    'Voit jakaa liikennevälineiden käytön kaupunkiliikenteeseen ja kaukoliikenteeseen. Ilmoita kaupunkiliikenteen matkat kilometreinä viikkoa kohden ja kaukoliikenne koko vuodelta. Joukkoliikenteen kilometrimäärien arvioinnissa auttavat reittioppaat ja karttapalvelut, joista löytyy usein myös joukkoliikennereittejä.',
  $cityTraffic: 'Lähiliikenne',
  $longDistanceTraffic: 'Kaukoliikenne',
  $bus: 'Linja-auto',
  $train: 'Juna',
  $cityBus: 'Linja-auto',
  $cityTrain: 'Juna',
  $tram: 'Raitiovaunu',
  $metro: 'Metro',
  $boatFuelConsumptionDetails:
    'Syötä joko vuodessa kulutettu polttoaineen määrä...',
  $boatPowerConsumptionDetails: '...tai moottorin käyttöaika ja teho.',
  $carAndMotorcycle: 'Auto ja moottoripyörä',
  $carAndMotorcycleSummary: `Ilmoita autolla ja moottoripyörällä/mopolla vuodessa matkustamasi kilometrimäärä. Tilastojen perusteella arvioitu auton keskimääräinen matkustajamäärä (mukaan lukien kuljettaja) on 1,7 hlöä. Voit muuttaa arvioitua henkilömäärää. Autoilun päästöt jaetaan tasan matkustajien kesken.

  Jos matkustat vaihtelevasti useilla autoilla tai et tiedä käyttämäsi auton ominaisuuksia, syötä vuoden aikana ajetut kilometrit ja matkustajamäärä. Laskuri arvioi päästöt tyypillisen ajoneuvon mukaan. Jos haluat laskea päästöt tarkemmin, valitse 'Lisää auton tiedot'. Voit ilmoittaa enintään neljän auton tiedot.`,
  $addCar: 'Lisää auto',
  $addCarDetails: 'Lisää auton tiedot',
  $addMotorcycle: 'Lisää m.pyörä tai mopo',
  $car: 'Auto',
  $motorcycle: 'Moottoripyörä tai mopo',
  $driveDistance: 'Ajomatka',
  $removeCarDetails: 'Poista auton tiedot',
  $passengerCount: 'Matkustajia',
  $sharedCar: 'Jaettu auto',
  $sharedCarDetails:
    'Jaetulla autolla tarkoitetaan laskurissa sekä kaupallisia palveluita (vuokra-autot ja kaupunkialueiden yhteiskäyttöautot) että tilanteita joissa vastaajan taloudessa ei ole autoa ja autoilukilometrit koostuvat muiden kyydissä matkustamisesta.',
  $cars: 'Autot',
  $carDetailsSummary:
    'Laskuri arvioi päästöt auton koon, iän ja polttoaineen perusteella.',
  $carSize: 'Auton koko',
  $carSizeDetails: `Esimerkkiautoja eri kokoluokista:
  Mini: Ka, Aygo, Smart
  Pieni: Yaris, Fiesta, Polo
  Pieni perheauto: Golf, Focus, Corolla
  Perheauto: Avensis, Passat, Mondeo, V70
  Suuri perheauto: CR-V, Verso, Touran, Zafira, RAV
  Suuri: Caravelle, Alhambra, myös maasturit, pakettiautot ja matkailuautot`,
  $carSizeMini: 'Mini',
  $carSizeSmall: 'Pieni',
  $carSizeSmallFamily: 'Pieni perheauto',
  $carSizeMediumFamily: 'Perheauto',
  $carSizeLargeFamily: 'Suuri perheauto',
  $carSizeLarge: 'Suuri',
  $carFuel: 'Polttoaine',
  $buildYear: 'Vuosimalli',
  $orEarlier: ' tai vanhempi',
  $orLater: ' tai uudempi',
  $carFuelDetails: `Voit syöttää yksityiskohtaisemmat polttoainetiedot valitsemalla 'yksityiskohtaiset tiedot'`,
  $carFuelGasoline: 'Bensiini',
  $carFuelEthanolMix: 'Etanolisekoitus (RE85)',
  $carFuelDiesel: 'Diesel',
  $carFuelBioGas: 'Biokaasu',
  $carFuelGroundGas: 'Maakaasu',
  $carFuelDetailed: 'Yksityiskohtaiset tiedot',
  $carFuelElectricity: 'Sähkö',
  $carFuelGreenElectricity: 'Vihreä sähkö',
  $fuelDetailsInputMode: 'Syötä käyttövoimatiedot',
  $asPercentage: 'prosentteina',
  $asConsumption: 'kulutustietona',
  $transportResultsSummary:
    'Liikenne muodostaa keskimäärin viidenneksen kansalaisen ilmastovaikutuksista. Kävely ja pyöräily eivät tuota suoria ilmastovaikutuksia. Siksi niistä ei kysytä laskurissa.',
  $transportResultsTitle: 'Liikenteen hiilijalanjälki',
  $motivaTransportTitle: 'Kestävä liikenne ja liikkuminen',
  $motivaTransportUrl:
    'https://www.motiva.fi/ratkaisut/kestava_liikenne_ja_liikkuminen',
  $transportActionIncreasePublicTransport:
    'Autoilija, vapauta kädet ratista ja hyppää toisinaan junan tai bussin vietäväksi. Reittioppaat helpottavat matkantekoa julkisilla kulkuvälineillä.',
  $transportActionPublicTransportToCycling:
    'Kiitos joukkoliikenteen suosimisesta. Liikutko lyhyitä matkoja myös kävellen tai pyörällä? Jos reitti on outo, apu löytyy karttapalveluista, reittioppaista ja navigaattorista.',
  $walkingCyclingCalculatorResults:
    'Vaihtamalla {distance} km autoilua {to} viikossa parannat terveyttäsi yhtä paljon kuin välttämällä tupakansavussa olemista, eli passiivista tupakointia {cigarettes} savukkeen verran viikossa. Samalla säästyy CO₂-päästöjä {carbon} kg vuodessa.',
  $toCycling: 'pyöräilyyn',
  $toWalking: 'kävelyyn',
  $walking: 'Kävely',
  $cycling: 'Pyöräily',
  $walkingCyclingCalculatorDetails: `Säännöllinen liikunta on hyväksi terveydelle. Se vähentää riskiä sairastua yleisimpiin kansansairauksiin kuten sydän- ja verisuonitauteihin ja diabetekseen. Liikunnan vaikutuksia on verrattu passiiviseen tupakointiin, joka puolestaan lisää riskiä sydän- ja verisuonitauteihin sekä useisiin syöpiin.

  Laskenta on tehty Helsingin yliopiston Kansanterveystieteen osaston ja Suomen ympäristökeskuksen yhteistyönä. Työtä on rahoittanut opetus- ja kulttuuriministeriö.`,
  $walkingCyclingCalculatorCalcInfo:
    'Terveysvaikutuksista ja päästösäästöistä kerrotaan tarkemmin',
  $walkingCyclingCalculatorIntro:
    'Ilmastovaikutusten lisäksi autoilun säännöllinen korvaaminen kävelyllä tai pyöräilyllä tuo merkittäviä terveyshyötyjä: kokeile!',
  $walkingCyclingCalculatorTitle: 'Kävely ja pyöräily',
  $canaryFlights: 'Kanariansaarille',
  $finlandFlights: 'Suomen sisäiset',
  $europeanFlights: 'Euroopan sisäiset',
  $transContinentalFlights: 'Mannertenväliset',
  $flightDistances: `Laskennassa on käytetty seuraavia oletuksia (Helsingistä):
  Oulu (Kotimaan lento) 515 km
  Düsseldorf (Euroopan sisäinen) 1 600 km
  Kanarian saaret  4 700 km
  Bangkok (Mannerten välinen) 8 300 km`,
  $otherPublicTransport: 'Muut julkiset',
  $sitraBioGasCar: 'Biokaasu - puhtaasti kotimainen polttoaine',
  $sitraBioGasCarUrl:
    'https://www.sitra.fi/caset/biokaasu-puhtaasti-kotimainen-polttoaine/',
  $sitraForgetTrafficAndParking: 'Unohda ruuhkat ja parkkirumba',
  $sitraForgetTrafficAndParkingUrl:
    'https://www.sitra.fi/caset/unohda-ruuhkat-ja-parkkirumba/',
  $sitraSharedCar: 'Aidosti huoletonta autoilua',
  $sitraSharedCarUrl: 'https://www.sitra.fi/caset/aidosti-huoletonta-autoilua/',
  $sitraTimeMoneyFitness:
    'Säästä aikaa ja rahaa, ylläpidä kuntoa ja ympäristöä',
  $sitraTimeMoneyFitnessUrl:
    'https://www.sitra.fi/caset/saasta-aikaa-ja-rahaa-yllapida-kuntoa-ja-ymparistoa/',
}
export default fi
