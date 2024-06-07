/* tslint:disable:max-line-length */
import { ICalculationInfoTranslations } from '../interfaces'

const sv: ICalculationInfoTranslations = {
  $goBack: 'Tillbaka',
  $linkToDocumentation:
    'Länk till fullständig dokumentation (pdf, version 14.3.2019)',
  $calculationInfoTitle: `Klimatdieten – på vad baseras klimatavtrycken som den anger?`,
  $tableOfContents: `Innehåll`,
  $introductionTitle: `Inledning`,
  $introductionContent: `Ilmastodieetti.fi är ett verktyg som medborgarna kan använda för att utvärdera sitt personliga koldioxidavtryck, det vill säga växthusgasutsläppen (GHG-utsläpp) som räknas ut från hushållets konsumtion. Med verktyget kan man räkna ut koldioxidavtryck från boende, trafik, mat, avfall och annan konsumtion under ett års tid. I den här rapporten beskrivs de centrala grunderna för uträkningen.

  Finlands miljöcentral har publicerat den första versionen av Klimatdieten i samarbete med YLE år 2010. Tjänsten har förnyats och uppdaterats åren 2013, 2016, 2017
  och 2019.

  Beräkningens resultat talar om växthusgasutsläppens storleksklass. På många av konsumtionens delområden kan det redan vara svårt att få primärdata och precisionsnivån är riktgivande. Till exempel mäts flervåningshusens värmeförbrukning typiskt för hela huset och man kan inte få fram ett exakt värde för den egna bostaden. Under punkterna ’Konsumtion’ och ’Boende’ är uträkningarna av olika slags varu- och servicegrupper uppskattningar på en grov nivå, eftersom produkterna har uppskattats med hjälp av nationalräkenskaper och utsläppsuppgifter (Seppälä m.fl. 2009). Det finns en del produktspecifika koldioxidavtryckmärkningar och uträkningsmetoderna för dem utvecklas, men tills vidare finns informationen dock bara för en liten del av produkterna på marknaden och beräkningsmetoderna kan variera. Markering av exakta koldioxidavtryck på varor och tjänster förutsätter insamling av växthusgasuppgifter vid företag runt om i världen, eftersom de flesta produkterna är resultat av globala produktkedjor (Nissinen och Seppälä 2008, Usva m.fl. 2009).

  Klimatdietens beräkning är konsumtionsbaserad, vilket innebär att man beaktar de konsumerade varornas och tjänsternas utsläpp oberoende av deras geografiska ursprung. Beräkningen är dock begränsad till hushållens konsumtionsval. Således hamnar en del av de tjänster som hushållen använder utanför beräkningen, såsom tjänster som den offentliga sektorn och ideella organisationer finansierar för hushållen. I dessa tjänster ingår hälsovård, utbildning, samt fritids- och rekreationstjänster. Inom nationalräkenskaperna beskriver begreppet ’faktisk individuell konsumtion’ hushållens konsumtion, där man har lagt till ovan nämnda tjänster från den offentliga sektorn och ideella organisationer till konsumtionsutgifterna. Växthusgasutsläppen för hushållens konsumtionsutgifter uträknade per genomsnittlig person har varierat under åren 2003–2013 från cirka 10,5 ton till cirka 12 ton (Salo m.fl. 2016). Utsläppen som beräknats för konsumtionsutgifterna är bäst jämförbara med Klimatdietens beräkningsresultat.

  Som det beskrivs ovan täcker utsläppen som baseras på konsumtionsutgifter inte alla utsläpp från varor och tjänster som hushållen använder. Skillnaden mellan utsläppen för konsumtionsutgifterna och den faktiska individuella konsumtionen var 1,2 ton (Seppälä m.fl. 2009). Uträkningens begränsningar har betydelse när de uträknade utsläppen per person jämförs med den globalt hållbara utsläppsnivån per person eller andra konsumtionsbaserade utsläppsmål uträknade per person (se även punkten Vad säger koldioxidavtryckets siffror? i den här rapporten).
  Begränsningarna för koldioxidavtryck har behandlats närmare i rapporten Seppälä m.fl. 2009 och granskningen av konsumtionsbaserade utsläpp har presenterats i källorna Nissinen m.fl. 2012 och Nissinen m.fl. 2015. Huvudprinciperna för Klimatdietens beräkningsmetod följer beräkningen av koldioxidavtryck för hushållens konsumtionsutgifter som presenteras i rapporten ovan.

  I räknaren talas det om koldioxidavtryck, växthusgasutsläpp (ghg-utsläpp) och klimatpåverkan. Uttrycken hänvisar till samma sak i räknaren, det vill säga växthusgasutsläpp som orsakas av en viss aktivitet eller konsumtion. I uträkningen har man strävat efter att

  med vissa undantag beakta förutom koldioxid även andra växthusgaser såsom metan och kväveoxidul (omvandlade till koldioxidekvivalenter).

  Räknaren inbegriper hela livscykeln i enlighet med koldioxidavtrycksprinciperna. Detta innebär att man i utsläppen beaktar livscykelns olika skeden i så stor utsträckning som möjligt utifrån tillgängliga primärdata. I exempelvis en bils bränsleförbrukning beaktar man förutom förbränningens ghg-utsläpp även bränsletillverkningens (d.v.s. produktionskedjans) utsläpp

  <b>Författare:</b>Marja Salo, Ari Nissinen, Maija Mattinen, Kaisa Manninen, Helena Dahlbo, Jáchym Judl.
  <b>Experter inom hälsoeffekter av rörelse:</b>Emma Lommi och Juha Pekkanen.

  <b>Uppdaterad version 14.3.2019</b>`,
  $baseDataTitle: `Grunduppgifter`,
  $baseDataContent: `I början av uträkningen ombeds användaren ange bakgrundsuppgifter. De används i beräkningen av klimatpåverkan eller i sammanfattningar av materialet. Antalet familjemedlemmar eller personer som delar ett hem används till exempel för att dela upp boendets och uppvärmningens klimatpåverkan per person. Postnumret används i vissa fall för att uppskatta uppvärmningsbehovet. Kön, ålder och bruttoinkomst påverkar inte uträkningsresultaten, men de uppgifterna kan utnyttjas vid undersökningar och sammandrag om materialet.`,
  $emissionCreditsTitle: `Frivilliga utsläppsavgifter`,
  $emissionCreditsContent: `I Klimatdieten frågar man om betalning av frivilliga utsläppsavgifter. Utsläppsavgifter minskar inte resultatet av koldioxidavtrycket, men de kompenserade utsläppens storleksklass kan jämföras med hela årets koldioxidavtryck. Det primära med minskandet av koldioxidavtrycket är att minska utsläppen i den egna vardagen. På grund av omständigheterna är det svårt att genomföra vissa åtgärder på kort sikt, då är en möjlighet att betala frivilliga utsläppsavgifter för att främja dämpandet av utsläpp på andra håll.

  Många aktörer, frivilligorganisationer och företag erbjuder en möjlighet att betala utsläppskompensation för producerade växthusgasutsläpp. Mest kända är frivilliga flygavgifter, men på motsvarande sätt kan man kompensera exempelvis det personliga koldioxidavtrycket i sin helhet. På internet finns både finländska och utländska tjänster som erbjuder utsläppskompensation.

  Med utsläppsavgifterna genomförs projekt som minskar utsläpp annanstans. Oftast genomförs projekt som minskar växthusgaser i tillväxtländer. Projekten kan till exempel arbeta för förnybar energi eller beskogning. Utsläppsreduktionerna verifieras med certifieringssystem, till exempel Gold Standard. På marknaden finns även aktörer som i stället för utsläppskompensationer förmedlar utsläppsrätter inom Europeiska unionens utsläppshandel. Genom att köpa utsläppsrätter försvinner de från utsläppshandelns kvot.

  Man kan söka på internet efter tjänster som erbjuder utsläppsavgifter bland annat med orden flygavgift, utsläppsavgift, makulering av utsläppsrätter och på engelska bland annat CO2 compensation, CO2 offsetting, carbon offset, CO2 elimination.`,
  $housingTitle: `Boende`,
  $housingContent: `Boendets klimatpåverkan orsakas av uppvärmning av bostaden, elförbrukning i hemmet, byggande, renoveringar, hemmets varor och tjänster kopplade till boendet. I räknaren uträknas bostadens energiförbrukning utifrån bostadens uppgifter eller information om energiförbrukningen från användaren. Olika varors och tjänsters klimatpåverkan uppskattas utifrån det penningbelopp som använts på dem genom att använda produktgruppsspecifik klimatintensitet som penningbeloppets koefficient (d.v.s. ghg-utsläpp per använd euro).

  Klimatpåverkan för tillverkning av en byggnads material beaktas med en koefficient som räknas ut med lägenhetskvadratmeter (lm2) och användningsår (förmodade total livslängd är 50 år). För flervåningshus är koefficienten 8,0 och för egnahemshus och radhus 6,9 kg CO2ekv/år per lm2. Koefficienten baseras på Bygginformationsstiftelsens publikation om byggnaders och byggkomponenters miljövarudeklarationer (Saari 2001). I uträkningen har man beaktat byggande, underhåll och rivning. År 2017 var ytan av finländarnas hem i genomsnitt 40,5 m2 per person enligt Statistikcentralens statistik om boendeförhållanden. Boendets utsläpp fördelas mellan antalet personer i hushållet. (Observera att det endast är för boendet som man frågar om familjespecifika uppgifter, övriga delar gäller personliga uppgifter. Utsläpp från bilåkning påverkas även av bilens genomsnittliga användarantal.)`,
  $housingElectricityTitle: `Elektricitet`,
  $housingElectricityContent: `Vid uträkningen lönar det sig att använda faktiska elförbrukningsuppgifter om de är tillgängliga. Många elbolag erbjuder webbplatser och applikationer där man kan se det egna hushållets elförbrukning för önskad tidsperiod (till exempel Helsingfors Energis Sävel+ och Fortum Valpas). Den faktiska förbrukningen ger en noggrannare uppskattning av utsläppen än en uträkning baserad på genomsnitt. Eftersom förbrukningsuppgifterna inte nödvändigtvis är tillgängliga när man fyller i räknaren, har man velat ge användaren ett enkelt sätt att uppskatta sina utsläpp. Därför kan man uppskatta utsläppen med räknaren utifrån bostadstyp och antal personer.

  Standardvärdet för elförbrukning (utom el för uppvärmning) uppskattas för olika slags hushåll med hjälp av utredningen Kotitalouksien sähkönkäyttö 2011 (Adato Energia 2013). Standardvärdena räknas ut enligt följande, där X = (antalet personer i familjen - 1):
  Elförbrukning för lägenhet i flervåningshus = 1400 + X * 500 Elförbrukning för radhuslägenhet = 2600 + X * 700 Elförbrukning för egnahemshus = 4600 + X * 900

  Hushåll och företag kan köpa grön elektricitet, vilket innebär elektricitet som är producerad från förnybara energikällor, exempelvis vind-, sol- och vattenkraft. Klimatdietens användare väljer om elektriciteten som används i hemmet och/eller på stugan är så kallad grön eller genomsnittlig elektricitet. I räknaren kan du ange andelen grön elektricitet av all elektricitet som förbrukas i hemmet (till exempel om du har bytt elavtal under året).

  I elproduktionens ghg-utsläpp beaktas både elproduktionens direkta utsläpp, det vill säga förbränningen av bränsle, och utsläpp som orsakas av bränslets produktionskedja (t.ex. utvinning och transport av stenkol). Utsläpp från byggandet av elproduktionsanläggningar och dylikt har inte beaktats i uträkningarna. Utsläppskoefficienten innehåller även export och import av elektricitet där utsläppen riktas till konsumentlandet. Vid uträkningen av den genomsnittliga elektricitetens utsläppskoefficient har man dragit av elektricitet som sålts som grön från hela Finlands elproduktionsmängd, varefter elproduktionens totalutsläpp har delats med den här produktionsmängden. Som elproduktionsmängd har man använt medelvärdet för åren 2011–2015. Således blir utsläppskoefficienten för den genomsnittliga elektriciteten 281 g CO2 ekv/kWh. I Finlands miljöcentrals publikation (2011) finns information om uträkningsprinciperna. För åren 2013–2015 har uträkningen uppdaterats år 2017.

  Utsläppskoefficienten för grön elektricitet är noll i uträkningen. Om man beaktade utsläppen som orsakas av bränslets produktionskedja och exempelvis utsläppen från bygge och reparationer av vindkraftverk och metanutsläpp från reservoarer orsakade av vattenkraft (Kopsakangas- Savolainen m.fl. 2017), skulle man kunna anta att utsläppens typiska storlek vore till exempel 20 g CO2 ekv/kWh (utsläppen varierar dock). Det här är alltså rejält under 10 procent av utsläppskoefficienten för ’vanlig’ elektricitet och nollutsläppet orsakar således inget stort fel i uträkningen. Grön elektricitet har beaktats som nollutsläpp även i spårtrafiken (se närmare i trafikdelen). Observera att grön elektricitet täcker här en mer omfattande del av elproduktionen än EKOenergi, som ska uppfylla stramare miljökriterier (mer information: https://www.ekoenergy.org/sv/).

  Även om den beräknade utsläppskoefficienten för grön elektricitet är liten, är det ändå viktigt att använda elektricitet ekonomiskt. I sin helhet varierar utsläppen från elproduktionen efter produktions- och konsumtionssituationen. När efterfrågan är hög, såsom på kalla vinterdagar, blir man tvungen att tillfälligt producera med bränslen som orsakar mycket utsläpp. Särskilt då påverkar den totala mängden av elförbrukning elproduktionens utsläpp på riksnivå. Därför lönar det sig även för dem som använder grön elektricitet att vara sparsam med elektriciteten särskilt under konsumtionstoppar.`,
  $housingHeatingTitle: `Uppvärmning`,
  $housingHeatingContent: `Användaren kan själv uppge sin uppvärmningsförbrukning. Med räknaren kan man också uppskatta bostadens typiska förbrukning. Uppvärmningsenergiförbrukningen för rad- och egnahemshus uppskattas med hjälp av KORTY-modellen som Tammerfors tekniska högskola har utvecklat. Uppskattningen fastställs genom att använda fastighetens byggår, yta, antal våningar, postnummer och antal invånare. Fastighetsstrukturernas värmeöverföringsegenskaper beaktas enligt miljöministeriets beräkningsbilaga (Miljöministeriet 2013, Tabell 1). Enligt bilagan beaktas även verkningsgraden hos byggnadernas värmeproduktion (Tabell 10 och 11) samt jordvärmepumpars SPF-koefficient (Tabell 13, 50 °C temperatur). Uppvärmningsbehovstalen följer Meteorologiska institutets tal (Meteorologiska institutet, 2013). För att fastställa lämpliga jämförelseorter för postnumren har man använt sig av Itellas postnummerkarta samt Motivas uppgifter (Motiva, 2013).

  Energiförbrukningen för lägenheter i flervåningshus uppskattas genom att multiplicera lägenhetens yta med den genomsnittliga värmeförbrukningsinformationen som räknats ut från Statistikcentralens Energistatistik och Boendestatistik, det vill säga 241 kWh/m2 (Saarinen m.fl. 2011). I värmeförbrukningen för flervåningshus har man även beaktat värmeförbrukningen i gemensamma utrymmen (trappuppgångar, förråd m.m.).
  Boende i ett flervåningshus kan om de vill räkna ut sin egen andel av hela bostadsaktiebolagets värmeförbrukning med hjälp av bostadsaktiebolagets verksamhetsberättelse. Då är värmeförbrukningen = (den egna lägenhetens yta/totala ytan av bostadsaktiebolagets lägenheter) * bostadsaktiebolagets värmeförbrukning kWh. Om enheten för värmeförbrukning är MWh, omvandla värdet till kWh genom att multiplicera det med tusen.

  Standardutsläppet som används för fjärrvärme är 267 g CO2 ekv/kWh. Koefficienten baseras på Suomen kaukolämpös ghg-utsläpp under åren 2009–2013 som räknats ut inom projektet Kulutuksen hiilijalanjälki (Salo m.fl. 2015). Koefficienten inkluderar bränslekedjornas utsläpp och på så sätt är de specifika utsläppen g/kWh större än de genomsnittliga utsläpp som vanligtvis presenteras för fjärrvärme (ofta presenteras genomsnittligt utsläpp på en nivå av 200–230 g/kWh, baserat på bl.a. Statistikcentralens Energistatistik). För grön fjärrvärme ges utsläppskoefficienten 0 g CO2 ekv
  /kWh. Den gröna fjärrvärmens marknad ligger bara i startgroparna (jämför grön elektricitet och EKOenergi). Vissa fjärrvärmebolag erbjuder en möjlighet att välja fjärrvärme som delvis produceras med förnybara energikällor. I praktiken innebär detta att bolaget förbinder sig till att producera och leverera en viss andel av värmen med produktionsmetoder som bolaget definierar som utsläppssnåla. Grön fjärrvärme lades till i räknaren vid uppdateringen år 2016.
  Fjärrvärme är en betydande del av konsumtionens koldioxidavtryck och därför bestämde man sig för att ta med egenskapen i räknaren som en metod att påverka ghg-utsläppen med egna val. Den gröna fjärrvärmens egenskap och uträkning kommer att utvecklas i takt med marknadens utveckling.

  Utsläpp för förbränning av uppvärmningsolja ges standardvärdet 73,5 g CO2 ekv/MJ (d.v.s. 265 g CO2 ekv/kWh) (Statistikcentralen, bränsleklassificering 2015, lätt brännolja) till vilket man lägger till utsläppsuppskattningen för brännoljans produktionskedja och förbränningens övriga växthusgaser cirka 20 procent. Produktkedjans utsläppsuppskattning baseras på utsläppsuppgifter för dieselbränslets produktionskedja som delas i Europa (WTW 2014).

  Ved och pellets som används till uppvärmning får värdet 14 g/kWh (uppskattade utsläpp från skörd, Sykes uträkning). Om den huvudsakliga uppvärmningsformen är jordvärme, syns uppvärmningssystemets energitillförsel i elförbrukningen. Elektriciteten ingår i den faktiska elförbrukningen som användaren själv anger eller i räknarens uppskattning av den elektricitet som går åt till apparater och uppvärmning.
  Extra uppvärmning (ved/pellets som extra uppvärmning, luftvärmepump eller egen elproduktion) minskar i praktiken behovet av övrig energitillförsel. Valen av extra uppvärmningssystem som presenteras i räknaren påverkar inte räkningsresultatet. Om användaren anger den faktiska förbrukningen av elektricitet och dylikt, beaktas de extra uppvärmningssystemens påverkan på energitillförsel den här vägen.

  Responsen från boendets mellanresultatsida baseras på uträkningar i den ovan beskrivna KORTY-modellen, utvecklad av Tammerfors tekniska högskola. För boende i egnahems- och radhus jämförs uppvärmningens energiförbrukning för dem som angett den faktiska värmeförbrukningen med den beräknade värmeförbrukning, som är uträknad utifrån de uppgifter som angetts om byggnaden. Räknaren ger respons enligt om den faktiska värmeförbrukningen är mindre, större eller på samma nivå som modellens uppskattning.`,
  $housingPurchasesTitle: `Hushållsmaskiner och lösöre`,
  $housingPurchasesContent: `I boendet beaktas även inköp av hemmets apparater och inventarier. Hemmets saker täcker en grupp mycket olika föremål. På grund av detta har man i uträkningen kommit fram till granskning via konsumtionsutgifter. De genomsnittliga utgifterna baseras på Statistikcentralens konsumtionsutgiftsstatistik för hushåll från år 2013 (Statistikcentralen, nationalräkenskaperna).
  Klimatpåverkan baseras på produktgruppspecifik klimatintensitet kg CO2 ekv per euro i Finlands miljöutvidgade input-output-modell (ENVIMAT-modellen, se Seppälä m.fl. 2009, Bilaga 8).`,
  $secondaryHouseTitle: `Fritidsbostad`,
  $secondaryHouseContent: `I versionen från år 2013 lade man till uträkning av stugor och andra fritidsbostäder. Deras klimatpåverkan fördelas på det angivna årliga besökarantalet. En ökande mängd av de finländska sommarstugor har elektricitet, men elförbrukningen varierar märkbart. I vissa stugor används elektricitet endast för belysning och apparater, i andra värms stugan upp med elektricitet året om. I räknaren kan man mata in faktisk förbrukning av inköpt elektricitet och värme för ett år. Om man inte vet den exakta förbrukningen, uppskattas el- och värmeförbrukningen enligt följande:
  <ul>
    <li>Förbrukningen av uppvärmningsenergi och elektricitet för lägenheter i flervåningshus och radhus antas vara likadan som för lägenheter i permanent bruk.</li>
    <li>För egnahemshus (med egnahemshus avses även enkla stugor) väljs typ av vinteruppvärmning:
        <ul>
          <li>”Ingen vinteruppvärmning”, varvid uppskattningen av uppvärmningens energiförbrukning är noll.</li>
          <li>”Huset är uppvärmt för boende året om”, varvid uppvärmningens energiförbrukning uppskattas på samma sätt som för ett hus i permanent bruk.<li>
          <li>”Huset har grundvärme på vintern när det inte används”, varvid uppskattningen om uppvärmningsbehovet är 93 kWh per m2.</li>
          <li>”Standardeffektuppvärmning”, varvid uppskattningen om uppvärmningsbehovet är 48 kWh per m2.</li>
          <li>För egnahemshus som inte används kontinuerligt (d.v.s. vinteruppvärmningen är någon annan än ”Huset är uppvärmt för boende året om”) använder man 8 kWh per m2 som uppskattning av den årliga elförbrukningen för annat än uppvärmning.</li>
        </ul>
    </li>
  </ul>
  Vid bildandet av standardvärden för fritidsbostadens storlek, energiförbrukning och konsumtionsutgifter har man använt Mökkibarometri (2016), rapporten Ekotehokas loma-asuminen (Nieminen m.fl. 2013) och VAPET-forskningens rapport (Rytkönen och Kirkkari 2010). Standardvärden och energins utsläppskoefficienter baseras på finländska primärdata och statistiker.`,
  $wasteTitle: `Avfall`,
  $wasteContent: `Sortering och återvinning av avfall är ofta något av det första som man tänker på när man talar om vardagliga miljögärningar. Att förebygga uppkomsten av avfall är den främsta åtgärden för att försöka minska olägenheter som skapas av avfall och minska onödig produktion. Till exempel minskar minskandet av matavfall energin och processerna som krävs vid behandling av bioavfall. En mångfaldigt större effekt uppnås dock i början av produktionskedjan där man sparar på råvaror och energi som behövs för produktion, transport och förvaring.

  Man kan förlänga produkternas livslängd med ändamålsenligt underhåll och reparation. Varor och material som inte behövs borde i första hand försöka återanvändas som sådana. Det här fungerar till exempel med hela och rena kläder. Om det inte är möjligt att återanvända, försöker man utnyttja materialen. Till exempel kan papper, kartong och metaller användas som återvunnet material, vilket minskar behovet av nymaterial.
  Om avfall inte kan återvinnas försöker man utnyttja det som energi. Det finns många fördelar med att återvinna och förebygga uppkomsten av avfall, bland annat att ämnen som är farliga för miljön och hälsan inte hamnar i miljön. Om återanvändning eller återvinning av materialet ersätter

  behovet av nyråvara, uppnår man ofta ännu större miljönytta.

  Avfall har vanligtvis en liten betydelse för konsumtionens koldioxidavtryck. Transport och processning av avfall kräver dock energi, vilket skapar utsläpp.

  I räknaren motsvarar avfallets ’vanliga mängder’ finländarnas genomsnittliga avfallsmängder, som utreddes inom KEIKKA-projektet (Salmenperä m.fl. 2018). Osorterat avfall som bränns i avfallskraftverk skapar koldioxidutsläpp på 506 kg CO2/t blandat avfall. Koefficienten baseras på standardtemperaturen för blandat avfall (10 GJ/t), utsläppskoefficienten (40 kg CO2-ekv./GJ) (Statistikcentralen 2019, bränsleklassificering) samt Vanda Energis avfallskraftverks energiutbyte 82 procent, varav 38 procent är elektricitet och 62 procent värme. (Myllymaa m.fl. 2008).`,
  $transportTitle: `Förflyttning`,
  $transportContent: `I förflyttningen koncentrerar man sig på motortrafikmedel. Om du promenerar eller cyklar till skolan eller jobbet, för att uträtta ärenden eller andra vardagsresor, minskar det resor som utförs med motortrafikmedel. Då är ditt koldioxidavtryck mindre än om samma sträckor skulle färdas med exempelvis bil.

  I det personliga koldioxidavtrycket behöver man inte beakta sådana resor som görs under arbetstid (d.v.s. på order och bekostnad av arbetsgivaren). Inom nationalekonomin räknas de som arbetsplatsens utsläpp, vilket innebär att de antingen tillhör produktionens utsläpp (när arbetsgivaren är ett privat företag) eller offentlig konsumtion (när arbetsgivaren är en statlig organisation eller en kommun). Resor från hemmet till arbetsplatsen och tillbaka räknas dock till det personliga koldioxidavtryck.`,
  $transportCarTitle: `Bilkörning`,
  $transportCarContent: `Koldioxidavtrycket för bilkörning räknas ut utifrån årligt kilometerantal, bilens energiförbrukning och bilens genomsnittliga användarantal. Standardvärdet för en personbils belastning (antal personer, inklusive förare) är det genomsnittliga medelvärdet 1,7. Vid landsvägskörning är medelvärdet 1,9 och i stadstrafik 1,3 personer per bil (Lipasto). I genomsnitt rör sig finländarna med personbil (inkl. taxi) cirka 31,5 km per dygn (Resvaneundersökningen 2016), det vill säga 11 500 km per år. Siffran inkluderar kilometer som färdats både med privatbil och med taxi.

  Vanligtvis skapas merparten av bilkörningens utsläpp (cirka 80 %) av bränsleanvändningen. Räknaren beaktar ändå även utsläppen från biltillverkningen. I början av beräkningen frågas det även om det är en poolbil. Med poolbil avses i räknaren både kommersiella tjänster (hyrbilar och stadsregionernas bilpooler) och situationer där svararens hushåll inte har en bil och bilkilometrarna består av resor som passagerare i andras bilar. Om det är fråga om en poolbil, fördelas andelen av bilens genomsnittliga kilometer under dess livscykel från tillverkningsutsläppen till användaren. Om det inte är en poolbil, fördelas tillverkningsutsläppen per användningsår. För bilar i privatbruk är standardvärdet för användningsår 20. Bilen antas köras 200 000 km under dess livscykel (bl.a. Audi Life Cycle Assessment).

  Som enklast kan utsläppen för bilkörning räknas ut utifrån årets kilometerantal och det genomsnittliga passagerarantalet. Då använder man 200 CO2 ekv/fordonskm som utsläpp för bilkörningens bränsleförbrukning. Uppskattningen baseras på den genomsnittliga bilbeståndets bränsleförbrukning och andelarna bensin och diesel i bilbeståndet (Lipasto-databasen), där man har lagt till utsläpp från bränsletillverkningen samt biltillverkningen. Bilens uppgifter kan även definieras närmare. Du kan ange uppgifter för högst fyra bilar. Beräkningen av bilkörning är planerad för uträkning av kodioxidavtryck för bilar i trafikbruk, det innebär att när det står noll vid körkilometer beaktar räknaren inte heller utsläppen från bilens tillverkning.

  Man kan välja bensin, diesel, RE85 etanolblandning, gas (natur- eller biogas), elektricitet (vanlig eller grön) som bilens drivkraft. Man kan också välja kombinationer av drivkrafter för bilen. Det vanligaste kombinationerna är elektricitet och bensin (laddbara hybrider), gas och bensin och RE85 och bensin (flex-fuel-bilar). Utsläppet gäller hela livscykeln, med andra ord beaktas förutom förbränningen även tillverkningskedjan. I beräkningen har man också beaktat den biokomponent som blandats i delat bränsle. Distributionsskyldigheten som skrevs in i lagen år 2016 var 10 procent av värmevärdet. Andelen biokomponenter av det bränsle som ”vanlig” bensin och diesel använder antas vara 10 procent av volymen, inte av värmevärdet som i distributionsskyldigheten. Det här baseras på att blandningen av bio- och fossila komponenter bildas i relation till volymen. Utsläppen från biobränslenas förbränningsskede är noll enligt RES-direktivet. I beräkningen beaktas dock utsläppen från tillverkningen av biobränslen. Utsläppen från biokomponenter i bränslen som används i Finland baseras på uppgifter från Neste och North European Oil Trade Oy. Gasum Oy har levererat utsläppsuppgifter för gas som tankas i Finland. I tabell 1 har man listat utsläpp som används i beräkningen per energienhet (MJ eller kWh).

  <b>Tabell 1. Drivkrafternas växthusgasutsläpp som används i beräkningen per energienhet</b>
  <table>
  <tr>
    <th><b>drivkraft</b></th>
    <th><b>g </b><b><span>CO<sub>2 </sub>ekv</span><span> </span></b>
    </th><th><b>enhet</b></th>
    <th><b>källa</b></th>
  </tr>
  <tr>
    <td><p>bensin, fossil</p></td>
    <td><p>88,6</p></td>
    <td><p>per MJ</p></td>
    <td><p>WTW, 2014</p></td>
  </tr>
  <tr>
    <td><p>etanolkomponent, E10-blandning</p></td>
    <td><p>25,0</p></td>
    <td><p>per MJ</p></td>
    <td><p>North European Oil Trade</p></td>
  </tr>
  <tr>
    <td><p>etanolkomponent, E85-blandning</p></td>
    <td><p>12,5</p></td>
    <td><p>per MJ</p></td>
    <td><p>North European Oil Trade</p></td>
  </tr>
    <tr><td><p>diesel, fossil</p></td>
    <td><p>87,1</p></td>
    <td><p>per MJ</p></td>
    <td><p>WTW, 2014</p></td>
  </tr>
  <tr>
    <td><p>biodieselkomponent (HVO)</p></td>
    <td><p>10,0</p></td>
    <td><p>per MJ</p></td>
    <td><p>Neste</p></td>
  </tr>
  <tr>
    <td><p>naturgas</p></td>
    <td><p>64,2</p></td>
    <td><p>per MJ</p></td>
    <td><p>Gasum</p></td>
  </tr>
  <tr>
    <td><p>biogas</p></td>
    <td><p>19,7</p></td>
    <td><p>per MJ</p></td>
    <td><p>Gasum</p></td>
  </tr>
  <tr>
    <td><p>elektricitet (se närmare: boende)</p></td>
    <td><p>281</p></td>
    <td><p>per kWh</p></td>
    <td><p>Finlands miljöcentral,2017</p></td>
  </tr>
  <tr>
    <td><p>elektricitet grön (se närmare:boende)</p></td>
    <td><p>0</p></td>
    <td><p>per kWh</p></td>
    <td><p>se kapitlet om elektricitet tidigare i det här dokumentet</p></td>
  </tr>
</table>

  Utsläppen för körning enligt bilens storleksklass har uppskattats i enlighet med tabell 2 med hjälp av biltidningars årgångar 2003–2013 och några av de mest populära bilmodellerna i varje storleksklass. Tabellens utsläpp baseras på tillverkarnas angivna förbrukning (EU-förbrukning vid blandad körning).
  Till tillverkarens angivna utsläpp lägger man vid beräkningen till den typiska skillnaden som har observerats i biltest (bl.a. tidskriften Tuulilasis Ekoauto-tävling), det vill säga 25 procent större utsläpp i en praktisk körsituation.
  Ändringen av utsläppen från år 2003 till år 2013 har förmodats vara linjär. Bilarnas massa har uppskattats på motsvarande sätt och multiplicerats med utsläppen för material och tillverkning 4,2 kg CO2 ekv/kg (Schweimer & Levin 2004). Utsläpp för tillverkning av elbilar antas vara 1,5-faldig i jämförelse med förbränningsmotorbilar (bl.a. Audi Life Cycle Assessment).

  <b>Tabell 2. Uppskattningar av bilarnas vikt och utsläpp från körning per storleksklass och ålder</b>
  <table>
    <tr>
      <th colspan=2><span>GHG-utsläpp g CO<sub>2</sub><span style='color:red'></span>per fordonskilometer</span></th>
      <th colspan=2>årsmodell 2003</th><th colspan=2>årsmodell 2013</th>
   </tr>
    <tr>
      <th>storleksklass</th><th>exempel</th>
      <th>bensin</th>
      <th>diesel</th>
      <th>bensin</th>
      <th>diesel</th>
   </tr>
    <tr>
      <td>minibilar</td>
      <td>Ka, Aygo, Smart</td>
      <td>110</td>
      <td>90</td>
      <td>97</td>
      <td>86</td>
   </tr>
    <tr>
      <td>småbilar</td>
      <td>Yaris, Fiesta, Polo</td>
      <td>140</td>
      <td>118</td>
      <td>105</td>
      <td>93</td>
    </tr>
    <tr>
      <td>små familjebilar</td>
      <td>Golf, Focus, Corolla</td>
      <td>159</td>
      <td>144</td>
      <td>123</td>
      <td>109</td>
    </tr>
    <tr>
      <td>mellanstora och stora familjebilar</td>
      <td>Avensis, Passat, Mondea, V70</td>
      <td>176</td>
      <td>153</td>
      <td>139</td>
      <td>113</td>
    </tr>
    <tr>
      <td>mellanstora minibussar och stadsjeepar</td>
      <td>CR-V, Verso, Touran, Zafira, RAV</td>
      <td>179</td>
      <td>161</td>
      <td>152</td>
      <td>125</td>
    </tr>
    <tr>
      <td>stora minibussar, även jeepar och representationsbilar</td>
      <td>Caravelle, Alhambra</td>
      <td>268</td>
      <td>192</td>
      <td>206</td>
      <td>161</td>
    </tr>
  </table>

  Via knappen ”Lägg till bilens uppgifter” kan man välja bilens storleksklass, ålder och drivkraft. Bilens bränsleförbrukning och ghg-utsläpp uppskattas utifrån de här uppgifterna. Det mest noggranna beräkningsresultatet för bilkörning fås genom att mata in uppgifter för förbrukat bränsle under ett år.
  Det här kan man göra genom att välja ”Mata in exakta bränsleuppgifter” ur drivkraftmenyn.

  Vid beräkningen är stora flexbilar och dylikt den bästa motsvarigheten för husbilar. Beräkningen blir mer noggrann om användaren matar in den faktiska bränsleförbränningen.`,
  $transportPublicTransportTitle: `Bussar, tåg, spårvagnar och metro`,
  $transportPublicTransportContent: `Källan till kollektivtrafikens utsläpp från bussar är VTT:s Lipasto-databas. Till utsläppet har man för bussarnas diesel lagt till produktkedjans utsläpp, cirka 20 procent (WTW 2014). VR och HST använder grön elektricitet, vilket leder till en liten utsläppskoefficient för spårtrafik.

  <b>Tabell 3. Uppskattningar om kollektivtrafikens klimatpåverkan</b>
  <table>
  <tr>
    <th>trafikmedel</th>
    <th><span>GHG-utsläpp <br>g CO<sub>2</sub>ekv. / personkm</span></th>
  </tr>
  <tr>
    <td>buss, stadstrafik*</td>
    <td>68</td>
  </tr>
  <tr><td>buss, långdistanstrafik*</td>
    <td>54</td></tr>
    <tr>
    <td>lokaltåg**</td>
    <td>1</td></tr>
    <tr>
    <td>fjärrtåg (eltåg, Intercity)**</td>
    <td>1</td></tr>
    <tr>
    <td>spårvagn **</td>
    <td>1</td></tr>
    <tr>
    <td>metro**</td>
    <td>1</td></tr>
    <tr>
    <td colspan=2>* Källa: VTT:s LIPASTO-databas (uppgifter för år 2011), med tillägg av uppskattade utsläpp från bränsleproduktionskedjan (diesel cirka 20 %) samt utsläpp från tillverkning av utrustning (cirka 1 g per personkm)
    ** VR och HST använder grön elektricitet, vars beräknade utsläppskoefficient är 0 g CO2ekv./kWh. Koefficienten 1 g CO2ekv./personkm fås från
    de uppskattade utsläppen från tillverkning av utrustning.</td></tr></table>

  Busstillverkningens utsläpp har utifrån Volvos naturgasbuss livscykeluppskattning uppskattas till 1,3 g/personkm (Volvo EPD), när nyttjandegraden i stadstrafiken i genomsnitt är 18 personer i en buss för 80 personer i Finland (Lipasto). För tåg, spårvagn och dylikt har man använt samma värde 1,3 g/personkm (även om inget värde har räknats ut för dessa, ansågs storleksklassen tillräcklig för den här granskningen).

  Man kan fråga sig om det är vettigt att jämföra beräknade utsläpp för personbilars och kollektivtrafikens personkilometer med varandra. Om utsläppen från en personbil fördelas på fem passagerare och koldioxidavtrycket jämförs med ghg-utsläppen för samma sällskaps bussresa, kan personbilens utsläpp vara kalkylmässigt lägre än bussresans. Å andra sidan producerar startandet av en personbil alltid mer utsläpp, medan resande med kollektivtrafiken knappt ökar utsläppen när det finns lediga platser i trafikmedlen.
  Man skulle också kunna tänka att personbilarnas och kollektivtrafikens utsläpp endast borde jämföras på systemnivå (exempelvis i en viss stadsregion eller i hela landet), inte på nivån av personval. I Klimatdiet-räknaren har man kommit fram till att man i beräkningen ger utsläpp för användning av såväl personbil som kollektivtrafik. I praktiken lönar det sig att välja kollektivtrafik. Kollektivtrafikens utsläppseffektivitet, det vill säga utsläpp per personkilometer, är mindre ju mer den används.`,
  $transportMotorcyclesBoatsTitle: `Motorcyklar och båtar`,
  $transportMotorcyclesBoatsContent: `Uppskattningen av motorcyklars och mopeders klimatpåverkan baseras på körda kilometer under ett år. Bränsleförbrukningen har uppskattats till tre liter per kilometer. Förbrukningen beror förstås också mycket på cykelns effekt. Du får en mer noggrann uppskattning genom att mata in ditt fordons genomsnittsförbrukning på hundra kilometer. Utsläppen från Finlands motorcykelbestånd har räknats ut i VTT:s Lipasto-beräkningssystem. I klimatpåverkan har man dessutom beaktat utsläppen från bränslets tillverkningskedja samt en uppskattning av utsläppen från tillverkningen av motorcykeln.

  Vid beräkningen av båtkörning beaktas båtens typ, samt utifrån den uppskattad klimatpåverkan för båten och motorn per livscykel. Man uppskattar att båtar har en livslängd på 30 år. Uppskattningen baseras på case-granskningar i Teknologiska forskningscentralens (VTT) forskningsrapport Ympäristömyötäisyyden kehittäminen venealalla (Tonteri m.fl. 2010). När det gäller motorbåtar skapas merparten av klimatpåverkan av

  bränsleförbrukning. Man får en mer noggrann uppskattning av båtkörningens klimatutsläpp genom att mata in mängden förbrukat bränsle under ett år i räknaren. Om man inte vet bränslemängden, uppskattas konsumtionen utifrån motoreffekten (i beräkningen används 50 % av den nominella effekten som användaren angett) och gångtimmar. Motorn antas vara en 4-taktsmotor och bränslet bensin. Utsläppen för båttrafiken fördelas på det årliga användarantalet.`,
  $transportTravelTitle: `Flyg och båtresor`,
  $transportTravelContent: `Utsläpp från både båt- och flygresor har räknats utifrån Lipasto-databasen. Bränsleproduktionskedjans uppskattade utsläpp (cirka 20 %) har lagts till i utsläppen. För såväl flygresor som båtresor kan användaren lista långa båt- och flygresor i räknaren med hjälp av några exempeldestinationer.

  <b>Tabell 4. Uppskattningar om flyg- och båtresors klimatpåverkan</b>
  <table>
  <tr>
    <th>Sträcka och trafikmedel (en riktning)</th>
    <th>GHG-utsläpp kg CO<sub>2</sub>ekv. / sträcka</th></tr>
  <tr>
  <td>Helsingfors–Tallinn (80 km), bilfärja, hastighet 24–27 knop	39</td>
  <td>39</td></tr>
  <tr>
  <td>Helsingfors–Stockholm (400 km), bilfärja, hastighet 18 knop</td>
  <td>108</td></tr>
  <tr>
  <td>Helsingfors–Travemünde (1 140 km), Ropax-fartyg, hastighet 24 knop</td>
  <td>500</td></tr>
  <tr></tr>
  <tr>
  <td>Helsingfors–Uleåborg med flyg (515 km)</td>
  <td>111</td></tr>
  <tr>
  <td>Helsingfors–Düsseldorf med flyg (1 603 km)</td>
  <td>289</td></tr>
  <tr>
  <td>Helsingfors–Las Palmas med flyg (4 700 km)</td>
  <td>848</td></tr>
  <tr>
  <td>Helsingfors–Bangkok med flyg (8 317 km)</td>
  <td>1147</td></tr>
  <tr>
  <td colspan=2>Källa: VTT:s LIPASTO, enhetsutsläpp (uppgifter för år 2009), med tillägg av uppskattade utsläpp
  från bränsleproduktionskedjan (cirka 20 %). Flygresornas längd har uppskattats med hjälp av flygräknare.
  </td>
  </tr>
  </table>

  Utsläppen från en enskild flygresa beror på många premisser såsom fyllnadsgrader, utrustning, allokering av utsläpp mellan passagerare och frakt samt beaktande av påverkan från moln som bildas högt uppe i atmosfären. Därför varierar resultaten från olika flygräknare. Till exempel skiljer sig rutt - och semesterflygens utsläpp beräknade per personkilometer från varandra på grund av skillnaderna i fyllnadsgrader. Semesterflygens, det vill säga charterflygens, fyllnadsgrad är vanligtvis högre. I vidstående beräkningskoefficienter har man använt Lipastos vägda medeltal av rutt- och charterflyg. De faktiska utsläppen för en viss flygresa påverkas även av flygplanstyp och ruttläggning. När man flyger med ny utrustning är utsläppen per personkilometer vanligtvis lägre än med gammal utrustning. Användning av direktflyg minskar ofta utsläppen i jämförelse med förbindelser med byte. Vid förbindelser med byte kan man minska det totala kilometerantalet genom att flyga åt ”rätt håll” redan med det första flyget.

Beräkningen av flygen beaktar nu bara bränsleförbrukningens beräknade CO2 ekv.-utsläpp. Beräkningen är enhetlig med statistikberäkning av växthusgaser och bland annat ENVIMAT-modellens granskningar. Under punkt 19 i inledningen av EU-direktiv 2008/101/EG konstateras följande om luftfartens klimatpåverkan: ”Luftfarten påverkar det globala klimatet genom utsläpp av koldioxid, kväveoxider, vattenånga, sulfatpartiklar och sotpartiklar. IPCC uppskattar att luftfartens samlade klimatpåverkan för närvarande är två till fyra gånger större än enbart inverkan från dess tidigare koldioxidutsläpp. Nya forskningsrön i gemenskapen visar att luftfartens samlade klimatpåverkan kan vara omkring två gånger högre än påverkan från enbart koldioxidutsläpp. Ingen av dessa uppskattningar tar emellertid hänsyn till cirrusmolnens inverkan... Forskning om bildandet av kondensstrimmor och cirrusmoln och effektiva motåtgärder, inbegripet operationella och tekniska åtgärder, bör främjas.” På så vis skulle det även kunna vara motiverat att multiplicera flygens beräknade utsläppsvärden med exempelvis två.

Många organisationer och företag erbjuder en möjlighet att betala kompensation för ghg-utsläpp. Avgifterna är mer bekanta inom flygtrafiken. Tanken är att avgifterna används för projekt som minskar VHG-utsläpp vanligtvis i tillväxtländer. Även om du har betalat exempelvis en utsläppsavgift för flygen, meddela alla flygresor i trafikdelen. Det finns egna frågor om utsläppsavgifterna på slutet innan uträkningen av totalresultatet.

Problematiken med flygtrafikens utsläpp har behandlas närmare i rapporten ”Lentomatkustuksen päästöt - Mistä lentoliikenteen päästöt syntyvät ja miten niitä voidaan vähentää?” (Niemistö m.fl. 2019).`,
  $transportWalkingCyclingTitle: `Hälsofördelar med och utsläppsbesparingar av trafik, promenader och cykling`,
  $transportWalkingCyclingContent: `Efter beräkningen av trafik finns det en tilläggsdel i räknaren där man samtidigt granskar hälso- och utsläppsfördelar med promenader och cykling. Promenader och cykling har positiv inverkan på trafikanternas egen hälsa. Om man samtidigt minskar färderna med personbil, minskar även koldioxidutsläppen. Med hjälp av tilläggsdelen kan du granska rörelseförändringarnas inverkan, men tilläggsdelens beräkningar påverkar inte slutresultatet av koldioxidavtrycksberäkningen. Tilläggsdelen till trafiken publicerades år 2017. Den har skapats som ett samarbetet mellan Syke och Helsingfors universitets avdelning för folkhälsovetenskap. Publiceringen av tilläggsdelen har fått finansiering av undervisnings- och kulturministeriet (IRKE-projektet).

  <i>Hälsofördelar med promenader och cykling</i>

  Det finns starkt vetenskapligt bevis för vardagsmotionens hälsofördelar. Att cykla och promenera regelbundet förebygger och sköter om ett redan existerande högt blodtryck, minskar risken för att insjukna i diabetes, förebygger hjärtsjukdomar och risken att dö i en hjärtsjukdom som man lider av, samt minskar risken för hjärninfarkt. Promenader och cykling förbättrar balansen, samt skyddar skelettet, musklerna och lederna. Regelbunden motion skyddar bland annat från depression, ångest, övervikt och flera cancerformer. När du promenerar och cyklar aktivt minskar du risken att insjukna i ovan nämnda långvariga eller permanenta, allvarliga sjukdomar.

  Eftersom promenadernas och cyklingens minskande effekt på insjuknande och dödlighet varierar mellan olika sjukdomar, väljer vi för tydlighetens skull effekten på totalmortaliteten för alla olika sjukdomar som jämförelseobjekt. Vår beräkning baseras på den internationellt godkända HEAT-räknaren som har utvecklats av Världshälsoorganisationen WHO (http://www.heatwalkingcycling.org/ ). Räknaren passar bäst för att uppskatta effekten av regelbundna promenader och cykelturer hos dem med medelhög aktivitetsnivå. För cykling är den lämpligaste åldersgruppen 20–64-åringar och för promenader 20–74-åringar. Räknaren uppskattar genomsnittlig påverkan och beaktar inte individuella skillnader.

  Negativa hälsoeffekter av promenader och cykling är utsatthet för olyckor och mikropartiklar. Enligt forskning är den ökande effekten på dödligheten avsevärt mindre än den minskande effekten på risken för dödsfall. Detta beaktas även i HEAT-räknarens uppskattning av totalmortaliteten. I och med att gång-, cykel- och mopedtrafiken blir allt vanligare och med förändringarna infrastrukturen kopplade till den är trafiken dessutom sannolikt ännu säkrare (Jacobsen, 2003; de Hartog m.fl., 2010; Rojas-Rueda m.fl., 2011).

  Förändringen i risken för dödsfall som man fick från HEAT-räknaren illustrerades genom att jämföra den med passiv rökning med vilket man avser exponering för tobaksrök inomhus, även om man själv inte röker. Beräkningsmässigt kan man uppskatta hur mycket risken för dödsfall ökar för varje cigarett vars rök man exponeras för (Lv m.fl., 2015; van der Zee m.fl., 2016). Vid uppskattning av risken för dödsfall antas att såväl vardagsmotionen som den passiva rökningen är regelbunden och bestående.

  <i>Beräkning av växthusgasutsläppen för promenader och cykling</i>

  Tilläggsdelens beräkning av växthusgasutsläpp baseras på uppgifter för den bil som användes i trafikuträkningen. I beräkningen av tilläggsdelen har bilåkningens utsläpp delats upp per person såsom i trafikdelens beräkning av bilåkning. Standarden är den typiska bil som presenteras i beskrivningen av beräkningen för bilåkning och ett genomsnittligt passagerarantal. Om man matade in mer noggranna uppgifter om bilen i trafikdelen, till exempel drivkraft, används dessa uppgifter i tilläggsdelen. Om man har flera bilar, använder man den första bilens uppgifter.

  I beräkningen antas att varje kilometer som färdas till fots eller på cykel minskar bilåkningen med en kilometer. I verkligheten är förhållandet inte såhär enkelt. Om en exempelvis en lång väg till butiken med bil ersätts med en kort promenad till närbutiken kan utsläppspåverkan till och med vara större. Det finns möjligheter för att ersätta bilåkning med promenader och cykling: enligt den nationella resvaneundersökningen är cirka en tredjedel av finländarnas bilresor högst tre kilometer långa.`,
  $foodTitle: `Mat`,
  $foodContent: `I räknaren har man generaliserat grundkosterna i tre typer, varav användaren kan skräddarsy den som bäst beskriver den egna kosten. Om du äter en grönsaksbetonad kost, men ibland även kött eller fisk, välj först flexitariankost och minska sedan mängden kött på nästa sida i räknaren.
  Vegetarisk kost innehåller varken kött eller fisk. I vegankost har man dessutom utelämnat mjölkprodukter och ägg. Om man använder kött eller andra animaliska produkter mindre än genomsnittet (eller inte alls) lägger man till proteinhaltiga produkter rån växtriket.

  Med koldioxidsnåla val avses här: säsongens grönsaker, produkter med koldioxidavtryckmärke som visar låga utsläpp, produkter tillverkade med förnybar energi, produkter vars växthusgasutsläpp har kompenserats, val av färska produkter i stället för frysta, självplockade råvaror från närområdet. I räknaren antas enkelt att kostens koldioxidavtryck minskar med fem procent med koldioxidsnåla val.

  Uppskattningar av råvarukonsumtionen (kg per vecka) baseras på finländarnas genomsnittliga konsumtion (Näringsbalans, uppgifter för år 2013). Uppskattningen kan minskas eller ökas. Under nötkött anges även fårkött och i samband med fisk även räkor och andra skaldjur. När det gäller mjölkprodukter, ost och ägg är det bra att hålla i minnet att man även äter dem mycket som en del av olika slags maträtter och bakverk.

  <b>Tabell 5. Uppskattningar om olika födoämnens klimatpåverkan</b>
  <table>
  <tr><th>födoämnen</th><th><span>GHG-utsläpp kg CO<sub>2</sub>ekv. per kg födoämne</th></tr>
  <tr><td>broiler r</td>
  <td>5,0</td></tr>
  <tr><td>frukt, bär</td>
  <td>0,2</td></tr>
  <tr><td>ost*</td>
  <td>10,0</td></tr>
  <tr><td>fisk**r</td>
  <td>1,5</td></tr>
  <tr><td>ägg***k</td>
  <td>2,5</td></tr>
  <tr><td>vegetabilisk olja***</td>
  <td>3,0</td></tr>
  <tr><td>torr böna</td>
  <td>0,7</td></tr>
  <tr><td>mjölk****</td>
  <td>1,0</td></tr>
  <tr><td>nötkött r</td>
  <td>15</td></tr>
  <tr><td>potatis, grönsaker r</td>
  <td>0,2</td></tr>
  <tr><td>ris r</td>
  <td>5,0</td></tr>
  <tr><td>fläskkött r</td>
  <td>5,0</td></tr>
  <tr><td>socker ***</td>
  <td>1,1</td></tr>
  <tr><td>tomat, gurka (växthus i Finland, på vintern)</td>
  <td>5,0</td></tr>
  <tr><td>vetemjöl, flingor</td>
  <td>0,5</td></tr>
  <tr><td>läskedrycker*****</td>
  <td>0,2</td></tr>
  <tr><td>rågbröd*</td>
  <td>1,3</td></tr>
  <tr><td colspan=2>*Nissinen ym. 2007, originalkällorna i artikeln</td></tr>
  <tr><td colspan=2>**Silvenius & Grönroos 2004</td></tr>
  <tr><td colspan=2>***Menutool</td></tr>
  <tr><td colspan=2>****Grönroos & Seppälä 2000</td></tr>
  <tr><td colspan=2>*****EPD för läskedryck, environdec.com</td></tr>
  <tr><td colspan=2>r=rå, k=tillredd</td></tr>
 </table>

  Allmänna källor, där man hittade uppskattningar av växthusgasutsläpp för flera olika livsmedel, har varit bland annat Katajajuuri 2009, Angervall m.fl. 2007 och Carlsson-Kanyama 1998. Dessutom presenterar tabellen källor som har använts för vissa livsmedel.

  Födoämnesgruppernas koefficienter för ghg-utsläpp är generaliseringar och enskilda produkters klimatpåverkan kan skilja sig stort från genomsnittet. Till exempel Katajajuuri (2009) har samlat ihop födoämnens klimatpåverkan från olika undersökningar och variationen presenteras i bild 1.

  Eftersom alla produkter inte har produktspecifika koldioxidavtrycksmärkningar vet vi inte den exakta klimatpåverkan för just en viss produkt. Generaliseringarna hjälper dock att bilda tumregler som är lätta att komma ihåg för att minska koldioxidavtrycket för mat. Den första minnesregeln är att mångsidigt öka användningen av grönsaker och växtprotein samt minska andelen kött i kosten. När det gäller fisk rekommenderas särskilt inhemsk vild fisk såsom strömming och karpfiskar. Genom att minska matsvinnet och äta efter sitt eget energibehov minskar produktionen av ”onödig” mat.

Livsmedelsförpackningarnas andel av matens klimatpåverkan är vanligtvis liten. En bra förpackning i konsumtionsanpassad storlek skyddar produkten från att förfaras. Att undvika matsvinn har en mångfaldigt större betydelse för matens koldioxidavtryck än förpackningarna.

Närproducerad mat har inte automatiskt mindre klimatpåverkan än mat som transporterats långa sträckor. Exempelvis har torkade baljväxter som importeras som sjöfrakt liten klimatpåverkan. Mat transporteras sällan med flyg, eftersom det är dyrt. Vanligtvis skapas transportkedjans största påverkan på resan hem från butiken. Genom att välja färdmedel och butiksresans längd kan vi dock själva påverka transportkedjans utsläpp.

Självplockad mat, såsom bär, har många bra perspektiv för miljö och hälsa. Friluftsliv och naturprodukter är bra för hälsan. Naturprodukterna ökar utan konstgjort gödsel och belysning, så de har ett litet koldioxidavtryck. Som minst är koldioxidavtrycket för produkter som plockas när införskaffandet av dem inte kräver långa bilresor och man på en plockningstur får en stor skörd. Sträckan man färdas och trafikmedlet samt deras klimatpåverkan i relation till mängden plockade produkter är dock beroende av hurdant koldioxidavtryck som de plockade råvarorna har sist och slutligen.`,
  $goodsAndServicesTitle: `Konsumtion av övriga varor och tjänster`,
  $goodsAndServicesContent: `Klimatpåverkan för övriga varor och tjänster uppskattas utifrån det konsumerade penningbeloppet. Konsumtionen angiven i euro multipliceras med produktgruppsspecifika klimatintensiteter (Seppälä m.fl. 2009, bilaga 8). Standardutgifter (EUR) baseras på Statistikcentralens konsumtionsundersökning (för år 2013), se tabell 6. Från uppskattningen av restaurangtjänsternas utsläppskoefficient har man dragit av matens andel, som är cirka två tredjedelar.

  Man har kommit fram till att uppskatta klimatpåverkan för varor och tjänster utifrån det konsumerade penningbeloppet för att 1) det skulle var väldigt jobbigt för räknarens användare att ange alla saker i hemmet genom att lista upp olika slags varor och 2) det än så länge finns lite varu- och tjänstspecifik klimatinformation att tillgå. I framtiden kommer det sannolikt att finnas mer täckande information tillgänglig om varors produktspecifika koldioxidavtryck. Märkning av varor och tjänster med noggranna och jämförbara koldioxidavtryck skulle förutsätta en standardiserad metod, vars principer ISO:s tekniska dokumentation publicerad år 2013 är kopplad till. Det som gör beräkningen av produktspecifika koldioxidavtryck utmanande är bland annat att man måste samla in primärdata från företag runt om i världen. Data borde även i globala produktionskedjor följa med materialen och delarna till slutproduktens tillverkare. Det finns ännu inga system som skulle behövas för att producera produktspecifika koldioxidavtrycksuppgifter (Usva m.fl. 2009). Lägesbedömningen gäller fortfarande år 2019.

  I Klimatdieten efterfrågas inte alla ENVIMAT-modellens specificerade konsumtionsutgiftsgrupper, utan efter de vanligaste varu- och tjänstegrupperna frågar man om utgifter bestående av övriga konsumtionsutgiftsgrupper (’övrig konsumtion’). Varje förbrukad euro har ett koldioxidavtryck av varierande storlek. Därför är det viktigt att skriva in alla konsumtionsutgifter i räknaren.

  <b>Tabell 6. Uppskattningar av olika slags varu- och tjänstegruppers klimatpåverkan</b>
  <table>
  <tr><th>varu- och tjänstegrupp</th><th><span>GHG-utsläpp kg CO<sub>2</sub>ekv. per EUR</th></tr>
  <tr><td>kläder</td>
  <td>0,47</td></tr>
  <tr><td>skor</td>
  <td>0,29</td></tr>
  <tr><td>möbler, mattor m.m.</td>
  <td>0,58</td></tr>
  <tr><td>hushållstextilier, inredning, kärl m.m. *</td>
  <td>0,74</td></tr>
  <tr><td>hushållsapparater och verktyg</td>
  <td>0,68</td></tr>
  <tr><td>fritid (rekreationstjänster, fritidsintressen, inkvarterings- och andra fritidstjänster) *</td>
  <td>0,39</td></tr>
  <tr><td>elektronik, såsom datorer, kameror m.m. *</td>
  <td>0,89</td></tr>
  <tr><td>papperstillbehör, böcker, tidningar m.m.</td>
  <td>0,32</td></tr>
  <tr><td>telefon och internet m.m. (kommunikation)</td>
  <td>0,28</td></tr>
  <tr><td>renovering***</td>
  <td>0,02</td></tr>
  <tr><td>restaurangtjänster  **</td>
  <td>0,14</td></tr>
  <tr><td>städtjänster***</td>
  <td>0,10</td></tr>
  <tr></tr>
  <tr><td>övrig konsumtion *</td>
  <td>0,24</td></tr>
  <tr>
  <td colspan=2>
  Källa: ENVIMAT-modell, uppgifter för 2013 års ekonomi
  *Kombination av flera produktklasser i ENVIMAT-modellen
  **Med undantag av klimatpåverkan av mat och dryck, som beaktats annanstans
  *** Uppskattning, inte separat granskad i ENVIMAT-modellen
 </td>
 </tr>
 </table>

  <b>Varför frågar man om konsumtionen i euro och inte i mängden köpta varor?</b>

  Det är inte enkelt att gestalta mängden köpta varor och eurobeloppet som använts för dem. Listan över alla varor och tjänster som köpts under ett år skulle vara lång. Därför har man i räknaren kommit fram till att fråga om konsumtionsmängden på ett jämförbart sätt: räknat i euro. När vi pratar om euro kan vi uppskatta det penningbelopp i helhet som man har tillgängligt för olika slags utgifter under en månad och jämföra det med den konsumtionsnivå räknad i euro som räknaren visar.
En euro som används till konsumtion producerar alltid ett visst utsläpp, varför det är viktigt att gestalta den totala konsumtionen. Men om jag köper mindre, men av bättre kvalitet? Sannolikt producerar en euro som konsumeras för en högkvalitativ och långlivad produkt mindre klimatpåverkan än om den används för produkter med kort livslängd.

Vad innebär eurobeloppet av en typisk konsumtion i mängden införskaffade varor? Till exempel konsumerar en finländare i genomsnitt 565 euro på kläder, hur mycket textilier köper hen vanligtvis? I TEXJÄTE-undersökningen (Dahlbo m.fl. 2015) utredde man Finlands textilflöden år 2012. Finländarna skaffar nya kläder i genomsnitt 8,1 kg/person. På motsvarande sätt har man utifrån forskning om avfallssortering uppskattat att det skapas 8–9 kg textilavfall per år. Åtta kilogram kläder kan exempelvis bestå av följande: två par jeans, två jackor, en tvådelad dräkt, fem t-skjortor, tio par strumpor, tre långärmade skjortor, fem omgångar underkläder.

Det är inte meningsfullt att granska enskilda koldioxidsnåla inköpsval på räknarens noggrannhetsnivå, när man försöker gestalta en helhetsbild över boende, förflyttning, mat och annan konsumtion. I vardagen kan vi ändå med val av varor och tjänster påverka så att de skapas mindre skadlig påverkan av de euron som vi konsumerar. För miljöns skull rekommenderar man miljömärkta produkter och tjänster, produkter vars ghg-utsläpp har kompenserats och begagnade produkter i stället för nya. Valet av sådana här produkter är också ett budskap till detaljhandeln och tillverkare om att produkternas koldioxidavtryck och även andra frågor kopplade till ansvarsfullhet är intressanta och styr konsumenterna.`,
  $sourcesTitle: `Källor`,
  $sourcesContent: `Adato Energia. Kotitalouksien sähkönkäyttö 2011. Forskningsrapport 26.2.2013.

  Angervall T, Flysjö A, Ziegler F, 2007. Klimatpåverkan av tio ekologiska livsmedel. Slutrapport. UP- 07-14456, SIK.

  Audi Life Cycle Assessment. https://www.audi-mediacenter.com/en/lifecycle-analysis-14683 (läst 19.9.2023)

  Carlsson-Kanyama A, 1998. Climate change and dietary choices - how can emissions of greenhouse gases from food consumption be reduced? Food Policy, vol 23, no.3/4, pp.277-293.

  Dahlbo H, Aalto K, Salmenperä H, Eskelinen H, Pennanen J, Sippola K, Huopalainen M, 2015. Tekstiilijätteen uudelleenkäytön ja tekstiilijätteen kierrätyksen tehostaminen Suomessa. Suomen ympäristö 4/2015.

  Grönroos J, Seppälä J, (red.) 2000. Maatalouden tuotantotavat ja ympäristö. Suomen ympäristö 431. Luonto ja luonnonvarat.

  De Hartog JJ, Boogaard H, Nijland H, Hoek G, 2010. Do the Health Benefits of Cycling Outweigh the Risks? Environmental Health Perspectives. 118(8), pp. 1109–1116.

  Resvaneundersökningen 2016. https://www.traficom.fi/sv/hlt (läst 18.2.2019)

  HKL Ympäristöraportti 2012.

  Meteorologiska institutet, 2013. Lämmitystarveluvut vertailukaudella 1981-2010,
  http://ilmatieteenlaitos.fi/lammitystarveluvut (läst 12.6.2013)

  Jacobsen PL, 2003. Safety in numbers: more walkers and bicyclists, safer walking and bicycling. Injury Prevention, 9, pp. 205–209.

  Katajajuuri J-M, 2009. I publikationen: Valtioneuvoston tulevaisuusselonteko ilmasto- ja energiapolitiikasta. Statsrådets kanslis publikationsserie 28/2009.

  Kopsakangas-Savolainen M, Mattinen MK, Manninen K, Nissinen A, 2017. Hourly-based greenhouse gas emissions of electricity – cases demonstrating possibilities for households and companies to decrease their emissions. Journal of Cleaner Production. 153: 384–396.

  LIPASTO Liikenteen päästöt –tietokanta. http://lipasto.vtt.fi/index.htm (läst 18.2.2019)

  Lv X, Sun J, Bi Y, Xu M, Lu J, Zhao L, Xu Y, 2015. Risk of all-cause mortality and cardiovascular disease associated with secondhand smoke exposure: a systematic review and meta-analysis. International Journal of Cardiology. 15;199, pp. 106–15.

  Menutool – Ett verktyg för klimat- och näringsanpassad måltidsplanering. Rapport tillgänglig: http://docplayer.se/4574738-Bilaga-menutool-ett-verktyg-for-klimat-och-naringsanpassad-maltidsplanering-kravspecifikation.html (läst 18.2.2019)

  Motiva, 2013. Vertailupaikkakunnat, korjauskertoimet ja normaalivuoden 1981–2010 lämmitystarveluvut. https://www.motiva.fi/julkinen_sektori/kiinteiston_energiankaytto/kulutuksen_normitus/vertailukausi-_ja_paikkakunnat_korjauskertoimet_ja_lammitystarveluvut (läst 21.9.2023)

  Myllymaa T, Moliis K, Tohka A, Rantanen P, Ollikainen M, Dahlbo H, 2008. Jätteiden kierrätyksen ja polton käsittelyketjujen ympäristökuormitus ja kustannukset. Finlands miljöcentrals rapporter 28/2008 https://helda.helsinki.fi/bitstream/handle/10138/39792/SYKEra_28_2008.pdf?sequence=1 (läst 31.5.2016)

  Mökkibarometri 2016. Skärgårdsdelegationen, Jord- och skogsbruksministeriet.

  Nieminen J, Haapio A, Vesanen T, Rekola M, Vienonen S, Santala E, Lylykangas K, Korhonen A, Mäntylä H, Kirkkari A-M, 2013. Ekotehokas loma-asuminen. VTT-R-00723-13

  Niemistö J, Soimakallio S, Nissinen A, Salo M, 2019. Lentomatkustuksen päästöt - Mistä lentoliikenteen päästöt syntyvät ja miten niitä voidaan vähentää? Finlands miljöcentrals rapporter 2/2019. Finlands miljöcentral.

  Nissinen A, Grönroos J, Heiskanen E, Honkanen A, Katajajuuri J-M, Kurppa S, Mäkinen T, Mäenpää I, Seppälä J, Timonen P, Usva K, Virtanen, Y., Voutilainen P, 2007. Developing benchmarks for consumer-oriented life cycle assessment-based environmental information on products, services and consumption patterns. Journal of Cleaner Production 15, 538–549. https://doi.org/10.1016/j.jclepro.2006.05.016

  Nissinen A. Seppälä J, 2008. Tuotteiden ilmastovaikutuksista kertovat merkit. Statsrådets kanslis publikationsserie 11/2008.

  Nissinen A, Heiskanen E, Perrels A, Berghall E, Liesimaa V och Mattinen MK, 2012. Ohjauskeinoyhdistelmät asumisen, henkilöliikenteen ja ruoan ilmastovaikutusten hillintään – KUILU-hankkeen loppuraportti. Suomen ympäristö 11/2012.

  Nissinen A, Heiskanen E, Perrels A, Berghall E, Liesimaa V, Mattinen MK, 2015. Combinations of policy instruments to decrease the climate impacts of housing, passenger transport and food in Finland. Journal of Cleaner Production 107: 455–466.

  Rytkönen A, Kirkkari, A (red.) 2010. Vapaa-ajan asumisen ekotehokkuus. Suomen ympäristö 6/2010.

  Näringsbalans. https://www.luke.fi/sv/statistik/naringsbalans (läst 25.9.2023)

  Rojas-Rueda D, de Nazelle A, Tainio M, Nieuwenhuijsen MJ, 2011. The health risks and benefits of cycling in urban environments compared with car use: health impact assessment study. BMJ. Aug 4;343:d4521.

  Saarinen M, Kurppa S, Nissinen M, Mäkelä J, (red.) 2011. Aterioiden ja asumisenvalinnat kulutuksen ympäristövaikutusten ytimessä. Suomen ympäristö 2011/14.

  Saari A, 2001. Rakennusten ja rakennusosien ympäristöselosteet. Bygginformationsstiftelsen RTS och Bygginfo ab.

  Salmenperä H, Sahimaa O, Koutonen H, 2018. Kierrätyksen keinot, taloudelliset vaikutukset sekä toteutettavuus. Miljöministeriets rapporter 17/2018. http://urn.fi/URN:ISBN:978-952-11-4798-2 (läst 26.2.2019).

  Salo M, Nissinen A, 2015. Kulutuksen hiilijalanjäljen indikaattori.http://www.syke.fi/fi-fi/Tutkimus__kehittaminen/Tutkimus_ja_kehittamishankkeet/Hankkeet/Kulutuksen_hiilijalanjaljen_indikaattori (läst 18.2.2019)

  Salo M, Nissinen A, Mäenpää I, Heikkinen M, 2016. Kulutuksen hiilijalanjäljen seurantaa tarvitaan. Tieto&Trendit – Talous ja hyvinvointikatsaus 1/2016.

  Schweimer GW, Levin M, 2004. Life Cycle Inventory for the Golf A4.

  Seppälä J, Mäenpää I, Koskela S, Mattila T, Nissinen A, Katajajuuri J-M, Härmä T, Korhonen M- R, Saarinen M, Virtanen Y, 2009. Suomen kansantalouden materiaalivirtojen ympäristövaikutusten arviointi ENVIMAT-mallilla. Suomen ympäristö 20/2009, 134 s. https://helda.helsinki.fi/handle/10138/38010 (läst 18.2.2019)

  Silvenius F, Grönroos J, 2004. Suomen kalatuotteiden elinkaariarviointi, Suomen ympäristö 687. Finlands miljöcentral.

  Finlands miljöcentral, 2011. Suomen sähkönhankinnan päästöt elinkaarilaskelmissa.

  Statistikcentralen, boendeförhållanden 2018. Använda uppgifter är från år 2017.

  Statistikcentralen, nationalräkenskaperna, hushållens konsumtionsutgifter. Använda uppgifter är från år 2013.

  Statistikcentralen, bränsleklassificering 2015.

  Statistikcentralen 2019. Bränsleklassificering 2019. https://www.stat.fi/tup/khkinv/khkaasut_polttoaineluokitus.html

  Tonteri H, Auvinen H, Helin T och Johansson M, 2010. Ympäristömyötäisyyden kehittäminen venealalla. Tutkimusraportti VTT-R-02928-10.

  Usva K, Hongisto M, Saarinen M, Nissinen A, Katajajuuri J-M, Perrels A, Nurmi P, Kurppa S, och Koskela S, 2009. Towards certified carbon footprints of products - a road map for data production - Climate Bonus project report (WP3). Helsingfors: Oy Nord Print Ab.

  Volvo Environmental Product Declaration.

  WTW 2014, Well-to-Wheels analysis of future automotive fuels and powertrains in European context. WELL-TO-TANK Report Appendix 2, Version 4a, April 2014. https://op.europa.eu/sv/publication-detail/-/publication/1cffb832-f2bc-42df-9dc2-59db08e24eee (läst 21.9.2023)

  Miljöministeriet, 2013. Laskentaliite ympäristöministeriön asetuksen ”rakennuksen energiatehokkuuden parantamisesta korjaus- ja muutostöissä”

  van der Zee SC, Fischer PH, Hoek G, 2016. Air pollution in perspective: Health risks of air pollution expressed in equivalent numbers of passively smoked cigarettes. Environmental Research. 148, pp. 475–483.`,
  $resultsTitle: `Presentation av resultat, genomsnittsfinländarens koldioxidavtryck och jämförelser med resultat från räknarens andra användare`,
  $resultsContent: `På resultatsidan presenteras en jämförelse med ’genomsnittsfinländaren’. Koldioxidavtrycket som baseras på genomsnittsfinländska hushålls konsumtionsutgifter är cirka 10 ton per år. En tredjedel av detta skapas av boende (byggnad, energianvändning i hemmet, hemmets saker), trafik och mat bildar båda cirka en femtedel och resten av utsläppen skapas av konsumtionen av olika slags varor och tjänster. Hushållens konsumtionsutgifter täcker inte alla tjänster som samhället och

  tredje sektorn erbjuder individer, exempelvis utbildning, hälsovård och barnomsorg (se även Inledning).

  Genomsnittsfinländarens koldioxidavtryck baseras på konsumtionsklasspecifika växthusgasintensiteter beräknade med ENVIMAT-beräkningsmodellen per konsumerad euro (Seppälä m.fl. 2009). Beräkningen gjordes utifrån nationalekonomins uppgifter från år 2013. ENVIMAT-modellen är miljöutvidgade input-output-modell för Finlands ekonomi. Modellen är byggd av Uleåborg universitets Thule-institut i samarbete med Finlands miljöcentral (Seppälä m.fl. 2009). Modellen är detaljerad: produktionsverksamheten är uppdelad i 147 sektorer och 232 produkter och hushållens konsumtionsutgifter i 66 konsumtionsvarugrupper.

  I ENVIMAT-modellen beaktas inhemskt producerade och importprodukter. Importprodukternas miljöbelastning för hela livscykeln baseras huvudsakligen på uppgifter från den internationella LCIA-databanken, Ecoinvent. Från dessa härleder man vidare konsumtionsvarornas miljöbelastningar till köparens pris, som även innehåller handelns och distributionstransporternas påverkan.

  I uppdateringen av Klimatdieten år 2016 tog man hänsyn till ENVIMAT-modellens uppdateringar som förbättrar omfattningen (Salo m.fl. 2016). Utsläppen från varor och tjänster inkluderar till skillnad från tidigare även maskiner och apparater som behövs för produktionen. Ändringen påverkar även koldioxidavtrycket för genomsnittsfinländaren som jämförelsefaktor, varvid det värdet är högre än i räknarens tidigare versioner.

  Förutom genomsnittsfinländaren kan man också jämföra med följande svarargrupper (jämförelsevärdet visas inte om det finns färre än 15 jämförbara svar):
  <ul>
  <li>Genomsnittet för dem som fyllt i räknaren (från och med uppdateringen av räknaren i mars 2019)</li>
  <li>Svarare med samma postnummer</li>
  <li>Svarare med lika stora familjer</li>
  <li>Svarare med samma bruttoinkomstklass</li>
  <li>Svarare med samma kost</li>
  </ul>`,
  $analysisTitle: `Vad säger koldioxidavtryckets siffror?`,
  $analysisContent: `Beräkningsresultatet för koldioxidavtrycket ska ses som en uppskattning. Det berättar dock om storleksklasserna: Vilka är de största utsläppskällorna i min vardag? Det lönar sig att börja minska koldioxidavtrycket med lätta handlingar, såsom att ställa in rimlig inomhustemperatur (högst 21
    °C under uppvärmningssäsongen), röra sig till fots eller med cykel på korta sträckor och välja koldioxidsnåla matvaror, produkter och tjänster. Många saker kräver planmässigt genomförande på lång sikt. Det krävs till exempel planering för att energirenovera hemmet och byta ut eller avstå från bilen.
    I räknaren för man fram några extra informationskällor som stöd för förändringar på såväl kort som lång sikt.

    Ofta ställs frågan om vilken nivå av koldioxidavtryck man bör sträva efter. De utsläppsminskningar som krävs för att följa Parisavtalets väg till under 1,5 grad har behandlats i forskningslitteratur. Enligt sammanfattningen Niemistö m.fl. (2019) borde utsläppen år 2030 vara högst cirka 3 000 kg per person och år 2050 cirka 600 kg per person (se mer i tabell 11 i rapporten av Niemistö m.fl.). Även om utsläppsnivån presenteras som kg per person, ligger inte hela ansvaret för utsläppsminskningarna på enskilda människor och deras val. Man bör komma ihåg att Klimatdietens beräkningsresultat inte inkluderar alla tjänster som hushållen använder, exempelvis offentlig hälsovård och utbildning. Utsläppsberäkningens begrepp och avgränsningar behandlades kort i inledningen av detta dokument och man kan läsa mer om dem i rapporten Seppälä m.fl. 2009. Avgränsning av beräkningen har betydelse när det beräknade resultatet per person jämförs med den eftersträvade nivån eller med den ovan presenterade aspirationsnivån för vägen mot 1,5 grad.

    För att uppnå en minskning av utsläpp behövs stora förändringar i till exempel energisystemen: hur energi produceras, förbrukas, lagras och förflyttas. Medborgarna kan påverka utsläppen av växthusgaser med sina handlingar i vardagen, genom att skapa efterfrågan för koldioxidsnåla lösningar och genom att stödja en ambitiös klimatpolitik.`,
}

export default sv
