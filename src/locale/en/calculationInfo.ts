/* tslint:disable:max-line-length */
import { ICalculationInfoTranslations } from '../interfaces'

const en: ICalculationInfoTranslations = {
  $goBack: 'Go back',
  $linkToDocumentation: 'Link to the documentation (pdf, 14 March 2019)',
  $calculationInfoTitle: `How is the carbon footprint calculated in the Climate diet tool?`,
  $tableOfContents: `Contents`,
  $introductionTitle: `Introduction`,
  $introductionContent: `Climate diet (climatediet.fi) is a citizens’ tool for assessing the carbon footprint or greenhouse gas emissions of their household consumption. The tool can be used to calculate one’s annual carbon footprint from housing, mobility, food, waste and other consumption. This report describes the most important calculation principles used in the tool.

  The Finnish Environment Institute published the first version of the service with the Finnish Broadcasting Company, Yle, in 2010. The service has been updated and modernised in 2013, 2016, 2017 and 2019.

  The calculated amount should be considered an estimate of one’s carbon footprint. In many areas of consumption, even the initial data for the calculation are difficult to assess, and the results of the calculation are approximate. For example, heat consumption in blocks of flats is usually measured per building, which means that residents do not know how much heat they consume in their flat. The calculations for goods and services in ‘Consumption’ and ‘Housing’ are rough estimates that are based on national accounts and emissions information (Seppälä et al. 2009). Although carbon footprint labels are already used by some products and the standardised calculation methods are being developed, only a fraction of products in the market carry these labels. Including carbon footprints in the labels of goods and services requires extensive collection of greenhouse gas information from companies across the world because the majority of products are manufactured in global supply chains (Nissinen and Seppälä 2008, Usva et al. 2009).

  Climate diet calculation follows the consumption-based approach (i.e. the emissions of consumed goods and services are taken into account regardless of their geographical origin). However, the footprint focuses on the consumption decisions of households, and therefore the footprint of certain goods and services are excluded, for example, the footprint of public health care, education and services for free time provided by the public sector or non-profit institutions are excluded. If the consumption of the above-mentioned services were to be included in economics, in addition to household consumption expenditure, this would be referred to as ‘actual individual consumption’. The average per capita carbon footprint calculated from the household consumption expenditure in Finland varied from 10.5 tonnes to 12 tonnes during 2003–2013 (Salo et al. 2016). Climate diet footprint estimates are roughly comparable with the above-mentioned figures.

  If the consumption of services provided by the public sector and non-profit organisations were to be included, the footprint per capita would be higher. The difference was 1.2 tonnes per year per capita (Seppälä et al. 2009). The definitions of carbon footprints are further discussed in the work of Seppälä et al. (2009). Definitions are important when comparing per capita figures with goals (e.g. sustainable per capita emission budgets) (see also the section ‘What does the carbon footprint tell us?’).

  The key terms used in the calculator are carbon footprint, greenhouse gas emissions and climate impact. These three terms denote the same entity, the greenhouse gas emissions from a specific activity or consumption. Other greenhouse gases (e.g. methane and nitrous oxide) are also taken into account in the calculation when data is available, but they are converted into carbon dioxide equivalents.

  The carbon footprint calculator is based on the lifecycle approach, meaning that it takes the entire lifecycle of the goods or services into account when assessing the emissions, where permitted by the initial data. For example, the calculation of fuel consumption is based not only on the greenhouse gas emissions from burning the fuel, but also those resulting from producing it.

  <b>Authors:</b> Marja Salo, Ari Nissinen, Maija K Mattinen, Kaisa Manninen, Helena Dahlbo, Jáchym Judl.
  <b>Specialists of active mobility health impacts:</b> Emma Lommi and Juha Pekkanen.

  <b>Latest version 14 March 2019</b>`,
  $baseDataTitle: `Personal information`,
  $baseDataContent: `The calculation begins with background questions. These are used for calculating the climate impact or for drawing up summaries of the data. For example, the number of persons living in the household is used to divide the total housing footprint among people. The postal code is only used in certain cases to assess the need for heating. Sex, age and income do not affect the calculation result, but this information may be used in summaries.`,
  $housingTitle: `Housing`,
  $housingContent: `Housing footprint is comprised of heating and electricity at home, construction and renovation, and goods and services for housekeeping and decoration. The amount of energy used at the apartment is calculated on the basis of the type of housing or the energy consumption data entered by the user. Expenditure is used as the basis for the estimated climate impact of goods and services. The expenditure is multiplied by the product group’s climate intensity factor (i.e. greenhouse gas emissions per euro).

  The carbon footprint for building products is calculated with a factor that takes into account the floor area and useful life of the housing unit (default useful life is 50 years). The factor for blocks of flats is 8.0 and for detached and terraced houses 6.9 kg CO2eq/year, FA2. The factor is based on a publication on the environmental reports of buildings and elements by the Building Information Foundation (Saari 2001). The calculation takes into account construction, maintenance and demolition. In 2017, the average size of Finnish homes was 40,5 m2 per person (according to Statistics Finland, dwellings and housing conditions). The emissions from housing are divided by the number of persons living in the household. (Please note that Housing is the only section that concerns families, not individuals. Emissions from driving are also affected by the average number of passengers).`,
  $housingElectricityTitle: `Electricity`,
  $housingElectricityContent: `If you know your actual electricity consumption, please use it for the calculation. Many electricity companies offer online tools and applications for viewing one’s electricity consumption over a certain period (for example, Sävel+ by Helsingin energia and Valpas by Fortum). Actual consumption provides a more accurate assessment of emissions, compared to a calculation of averages. Because users might not have their consumption figures at hand when they are using the calculator, the tool allows users to assess their emissions, based on the type of housing and number of persons living in the household.

  The assessment of default electricity consumption values (excluding energy for heating) for different households is based on a survey on the use of electricity at Finnish households in 2011 (Adato Energia 2013). The default values are calculated as follows, where X = (family size - 1):
  Electricity consumption at a block of flats = 1,400 + X * 500
  Electricity consumption at a terraced house = 2,600 + X * 700
  Electricity consumption at a detached house = 4,600 + X * 900

  Households and companies can choose green electricity that is produced from renewable sources, using, for example, wind, solar and hydropower. Select whether the electricity you use at home and/or the second home is green or average. You can also enter your use of green electricity as a percentage of all consumption (for example, if you have changed your electricity provider during the year).

  The total figure for greenhouse gas emissions includes both direct emissions from the burning of fuel and emissions from the entire supply chain (for example, from the excavation and transport of coal).  The emissions from constructing power plants and other facilities are not included in the calculation. Importing and exporting are taken into account in the emissions factor and the emissions are allocated to the country of consumption.  The emissions factor for average electricity was calculated by subtracting the amount of green energy sold in Finland from the total power supply volume and dividing the total emissions from the Finnish power sector with the remainder. The power supply volume used in the calculation is the average for 2011–2015. Based on these figures, the emissions factor for average electricity is 281 g CO2eq/kWh. The calculation principles can be found from Finnish Environment Institute report (2011). The calculation was updated for years 2013–2015 in 2017.

  The emissions factor for green electricity is zero. If we included the emissions from the entire fuel supply chain and, for example, emissions from the construction and renovation of wind power plants and methane emissions from hydropower reservoirs (Kopsakangas-Savolainen et al. 2017), the estimated emissions factor could be 20 g CO2eq/kWh (of course, there is a great deal of variation in actual emissions). Thus, the factor is less than 10% of the factor for average electricity, which means using zero in the calculation does not distort the result. Green electricity is considered to cause no emissions, also in rail traffic. See the section on mobility for more details. Please note that green electricity covers a greater variety of electricity sources and supply methods than EKOenergy. The environmental requirements of the EKOenergy label are stricter (more information at: http://www.ekoenergy.org/).

  Although the emissions factor of green electricity is small, it is important to use energy efficiently. The total emissions from electricity production vary on a case-by-case basis. During peak consumption, such as on cold days in the winter, electricity production generates more emissions per kWh of electricity produced. The total consumption on such days affects the emissions from electricity production at a national level. This is why consumers who use green electricity should also use it sparingly, particularly at peak times.`,
  $housingHeatingTitle: `Heating`,
  $housingHeatingContent: `User can insert figures of real heat consumption or use the default values based on typical heating consumption. The energy used for heating detached and terraced houses is assessed using the KORTY calculation model that was developed by the Tampere University of Technology. The assessment is based on the construction year, living space and the number of floors and residents. The thermal characteristics of structures are taken into account in the calculation. These are specified in Table 1 of the calculation appendix of the decree of the Ministry of the Environment (Ministry of the Environment 2013). The appendix also specifies the thermal efficiencies of buildings (Tables 10 and 11) and the SPF factors of geothermal heat pumps (Table 13, temperature 50°C). The need for heating is based on figures from the Finnish Meteorological Institute (Finnish Meteorological Institute 2013).  In order to find a suitable reference city for each postal code, we have used Posti’s map of postal codes and information provided by Motiva (Motiva 2013).

  The average energy consumption at blocks of flats was estimated by multiplying the floor area by the average heat consumption figure that was derived from the energy and housing statistics of Statistics Finland. The estimate is 241 kWh/m2 (Saarinen et al. 2011). The heat consumption in common areas (corridors, warehouses, etc.) is also included in the heat consumption at blocks of flats. Residents can calculate their own share within the total consumption with the help of their housing company’s annual report. Heating consumption = (living area of your flat / total living area in the housing company) * total heating energy consumption in the housing company in kWh. If heating energy consumption is indicated in MWh, multiply it by a thousand to convert it into kWh.

  The default emission from district heat is 267 g CO2 eq/kWh. The figure is based on the greenhouse gas emissions from Finnish district heating in 2009–2013, identified in the Carbon footprint of consumption project (Salo et al. 2015). The figure includes emissions from the entire fuel supply chain, which means that the specific emissions estimate (g/kWh) is greater than the estimate for average emissions from district heating found in most sources (the typical estimate is 200–230 g/kWh, for example, in the energy statistics of Statistics Finland). The emissions factor of green district heat is 0 g CO2eq/kWh. The green district heating market is still very young (cf. green energy sources and EKOenergy). Some district heating providers offer district heat that is produced partly from renewable sources. In practice, this means that the company guarantees that a certain share of heat it delivers is produced with low-carbon energy sources. Green district heat was included in the calculator in 2016 update. District heat is one of the major elements of the carbon footprint of consumption, which is why it was included in the calculator as an example of choices that one can make to reduce one’s greenhouse gas emissions. We will further develop the green district heat feature and calculation as the market develops.

  The estimated emissions from burning oil are 73.5 g CO2eq/MJ (or 265 g CO2eq/kWh) (Statistics Finland, fuel classification 2015, light fuel oil). The estimated amount of emissions from the fuel supply chain and other greenhouse gases from the combustion (approx. 20%) are added to this figure. The estimate of emissions in the fuel supply chain is based on a well-to-wheels analysis of diesel fuel in the European context (WTW 2014).

  The value for the wood and pellets used for heating is 14 g/kWh (estimated emissions from harvesting, calculation by Syke). If you primarily use ground heat, the energy used by the ground heat system is included in the total electricity consumption. The electricity is included in the actual consumption entered by the user or in the estimate of electricity used for operating devices and heating, as provided by the calculator. Additional heating (additional heating with wood/pellets, ground heat pump or one’s own electricity production) reduce the amount of energy bought from the grid. The additional heating systems referred to in the calculator do not affect the calculation result. If you have entered the actual amount of electricity bought from the grid, the savings brought by additional heating systems will be taken into account in this figure.

  The feedback provided after the Housing section is based on the KORTY model of the Tampere University of Technology. If you live in a detached or terraced house and entered the actual amount of energy you consume for heating, your consumption is compared with the estimate derived from information on your house. The calculator gives you feedback, based on whether your consumption exceeds, falls below or equals the estimated average at similar houses.`,
  $housingPurchasesTitle: `Goods and services for housekeeping and decoration`,
  $housingPurchasesContent: `The housing section also includes furniture, appliances and other goods. Household goods cover a variety of different items. For this reason, the calculator uses expenditure to calculate the footprint. The estimates are based on statistics on the consumption expenditure of households from 2013 (Statistics Finland, national accounts). The climate impact is based on product group-specific climate intensity factors (kg CO2eq per EUR) that are taken from the ENVIMAT model, the Finnish environmentally extended input-output analysis (Seppälä et al. 2009).`,
  $secondaryHouseTitle: `Second homes`,
  $secondaryHouseContent: `The second home section was included in the calculator in 2013. The climate impact of a second home is divided by the number of persons using it in a year. Electricity is becoming a standard amenity in Finnish second homes, but there are notable differences between second homes regarding the consumption volume. While some only use electricity for lighting and appliances, others heat their second homes with electricity through all seasons. You can enter the actual amount of electricity bought from the grid in one year into the calculator. If you do not know your actual amount of electricity consumption and/or your consumption of other energy sources for heating, your consumption can be estimated as follows:
  <ul><li>	Energy consumption in flats and terraced houses are estimated as in the ‘Housing’ section.</li><li>	For detached houses (including also simple cottages), the types of winter heating options are:</li><ul><li>	‘No heating during winter’: the estimated heating consumption is zero.</li><li>	‘The house is always heated’: heating is estimated as in the ‘Housing’ section.</li><li>	‘There is base heating during the winter; the house is not in use’: estimated heating consumption is 93 kWh per m2.</li><li>	‘Constant output heating’: estimated heating is 48 kWh per m2.</li><li>	Electricity consumption estimate for lighting and appliances (i.e. excluding heating) when house not used all the time (i.e. winter heating is not ‘The house is always heated’): 8 kWh per m2.</li></ul></ul>
  The default values for size, energy consumption and expenditure for second homes are derived from the Finnish Free-Time Residence Barometer (Mökkibarometri 2016), a report on eco-efficient holiday homes (Nieminen et al. 2013) and a report of the VAPET study (Rytkönen and Kirkkari 2010).`,
  $transportTitle: `Travel`,
  $transportContent: `The Travel section focuses on motorised vehicles. Walking or cycling to school or work or making your other daily trips by foot or bicycle will reduce your use of motorised vehicles. This will also reduce your carbon footprint, compared to, for example, driving.

  You do not have to include trips that are part of your jobs in the calculation (i.e. trips commissioned and paid by your employer). In the national economy, these trips are included in the figures for the workplace, which makes them either emissions from production (when your employer is a private company) or emissions from public affairs (when your employer is a government organisation or a municipality). However, commuting between home and workplace are included in your carbon footprint.`,
  $transportCarTitle: `Car`,
  $transportCarContent: `The carbon footprint from driving is based on the annual number of kilometres, energy consumption and average number of people travelling in the car. The default number of people travelling in a car (passengers including the driver) is 1.7 in Finland. The average number is 1.9 on main roads and 1.3 in urban centres (LIPASTO). The average distance covered by Finns in a passenger car is 31.5 kilometres (National Travel Survey 2016), which means a total of approximately 11,500 km per year. This figure includes trips in both private cars and taxis.

  The majority of emissions from driving (about 80%) originate from fuel. However, the emissions from producing the car are also included in the calculation. The calculator also includes a question on shared cars. Shared car refers to commercial car sharing services (rental vehicles and urban car sharing) and sharing a ride with other people if there is no car in your household. In the case of a shared car, the emissions from production are evaluated in accordance with the average number of kilometres covered by the car during its lifecycle. If the car is not in shared use, the emissions from production are evaluated per year of using the car. The expected useful life of a shared car is 20 years. The expected total distance covered by a car during its lifecycle is 200,000 km (Audi Life Cycle Assessment).

  The simplest way of calculating emissions from driving is to use the annual number of kilometres and average number of passengers. In this case, the emissions from fuel consumption are 200 CO2eq/vehicle km. The estimate is based on the fuel consumption of average vehicles and the shares of petrol and diesel among all vehicles (from the LIPASTO database), complemented with emissions from fuel production. The calculation also includes emissions from car manufacturing. You can also provide the detailed specifications of your car. You can specify up to four vehicles. Calculation is designed for cars that are actually used. Therefore cars with that have driven zero km return zero as a result.

  You can enter petrol, diesel, RE85 ethanol, gas (natural gas or biogas), electricity (regular or green) as the power for your car. You can also choose multiple power options. The most typical combinations are electricity and petrol (plug-in hybrid cars), gas and petrol and RE85 and petrol (flex-fuel vehicles). The emissions are calculated with the lifecycle approach, i.e. the production chain is taken into account, in addition to fuel combustion. The calculation also takes into account biocomponents in fuel blends. In 2016, the statutory distribution obligation was set at 10% of calorific value. The biocomponent share in “regular” petrol and diesel is expected to be 10% of fuel volume, not 10% of calorific value. This is based on the fact that the levels of fossil and biocomponents in blends are determined by volume.  In accordance with the RES Directive, emissions from the burning of biofuels amount to zero. However, the calculator includes emissions from the production of biofuel. The emissions from biocomponents in fuels in Finland were calculated on the basis of data provided by Neste and North European Oil Trade Oy. The emissions data concerning Finnish gas were provided by Gasum Corporation. Table 1 lists the emissions per unit of energy used in the calculation (MJ or kWh).


  <b>Table 1. Greenhouse gas emissions from different powers per energy unit</b>
  <table>
  <tr><th>Power</th><th><span>g, CO<sub>2</sub>eq</span></th><th>Unit</th><th>Source</th></tr>
  <tr><td>petrol, fossil</td><td>	88.6</td><td>per MJ</td><td>WTW, 2014</td></tr>
  <tr><td>ethanol component, E10 mixture</td><td>25.0</td><td>per MJ</td><td>North European Oil Trade</td></tr>
  <tr><td>ethanol component, E85 mixture</td><td>12.5</td><td>per MJ</td><td>North European Oil Trade</td></tr>
  <tr><td>diesel, fossil</td><td>	87.1</td><td>per MJ</td><td>WTW, 2014</td></tr>
  <tr><td>biodiesel component (HVO)</td><td>10.0</td><td>per MJ</td><td>Liquid</td></tr>
  <tr><td>natural gas</td><td>	64.2</td><td>per MJ</td><td>Gasum</td></tr>
  <tr><td>biogas</td><td>	19.7</td><td>per MJ</td><td>Gasum</td></tr>
  <tr><td>electricity (see the section on housing for details)</td><td>281.0</td><td>per kWh</td><td>Finnish Environment Institute 2017</td></tr>
  <tr><td>electricity, green (see the section on housing for details)</td><td>0</td><td>per kWh</td><td>see the section on electricity in this document</td></tr>
  </table>
  Car size-specific emissions from driving were assessed in accordance with Table 2, using car magazines from 2003–2013 and some of the most popular car models in each size category.
  The emissions in the table are based on consumption reported by the manufacturers (in the EU context). In the calculation, the typical difference between reported and measured emissions is included in these figures. For example, in the Eco car contest of the Tuulilasi magazine, the measured emissions during driving were 25% higher than the reported emissions. The change in emissions from 2003 to 2013 is estimated to be linear. The masses of cars were estimated with the same method and multiplied by emissions from materials and production (4.2 kg CO2eq/kg) (Schweimer & Levin 2004). Emissions from the production of an electric car are estimated to be 1.5 times greater, compared to combustion engine cars (e.g. Audi Life Cycle Assessment).

  <b>Table 2. Estimated car weights and emissions from driving by size and age</b>
  <table>
  <tr><th colspan=2><span>Greenhouse gas emissions, g CO<sub>2</sub> per vehicle kilometre</span></th><th colspan=2>2003 model</th><th colspan=2>2013 model</th></tr>
  <tr><th>size</th><th>examples</td><th>petrol</th><th>diesel</td><th>petrol</th><th>diesel</th></tr>
  <tr><td>minis</td><td>Ka, Aygo, Smart</td><td>110</td><td>90</td><td>97</td><td>86</td></tr>
  <tr><td>small cars</td><td>Yaris, Fiesta, Polo</td><td>140</td><td>118</td><td>105</td><td>93</td></tr>
  <tr><td>small family cars</td><td>Golf, Focus, Corolla</td><td>159</td><td>144</td><td>123</td><td>109</td></tr>
  <tr><td>large family cars</td><td>Avensis, Passat, Mondea, V70</td><td>176</td><td>153</td><td>139</td><td>113</td></tr>
  <tr><td>large cars</td><td>CR-V, Verso, Touran, Zafira, RAV</td><td>179</td><td>161</td><td>152</td><td>125</td></tr>
  <tr><td>sport utility cars, vans, camper cars and other large vehicles</td><td>Caravelle, Alhambra</td><td>268</td><td>192</td><td>206</td><td>161</td></tr>
  </table>
  You can select the size, age and power of your car by clicking on the “Add car specs” button. The fuel consumption and greenhouse gas emissions of your car will be calculated on the basis of these specifications. To have the most accurate result, enter the total amount of fuels consumed within one year. You can do this in the Power menu by clicking on “Enter specific information”.

  If you drive a camper van, choose the last option. The calculator will estimate your footprint, if you enter your actual fuel consumption.`,
  $transportPublicTransportTitle: `Buses, train, trams and metro`,
  $transportPublicTransportContent: `The emissions of buses are based on the LIPASTO database that is updated by VTT. Emissions from the diesel supply chain (approximately 20%) were added to the fuel figure for buses (WTW 2014). The small emissions factor of rail traffic is due to the fact that VR and HKL both use green electricity.

  <b>Table 3. Estimated footprint of public transport</b>
  <table>
  <tr><th>Means of transport</th><th>Greenhouse gas emissions g CO<sub>2</sub>eq/passenger km</th></tr>
  <tr><td>bus, local*</td><td>68</td></tr>
  <tr><td>bus, long-distance*</td><td>54</td></tr>
  <tr><td>local train**</td><td>1</td></tr>
  <tr><td>long-distance train (electricity, Intercity)**</td><td>1</td></tr>
  <tr><td>tram**</td><td>1</td></tr>
  <tr><td>metro**</td><td>1</td></tr>
  <tr><td colspan=2>* Source: VTT’s LIPASTO database (data from 2011), complemented with estimated emissions from the fuel supply chain (diesel approximately 20%) and fleet production (approximately 1 g per passenger km)
  ** VR and HKL use green electricity, and the calculated emissions factor of green electricity is 0 g CO2eq/kWh. The figure 1 g CO2eq/kWh is derived from the estimated emissions from fleet production.</td></tr>
  </table>

  The estimated emissions from bus manufacture are 1.3 g/passenger km (based on a lifecycle assessment of natural gas-powered Volvo EDP), when the average utilisation rate in local traffic in Finland is 18 passengers in a bus for 80 people (LIPASTO). The same figure (1.3 g/passenger km) was also used for trains, trams and other vehicles. The calculation was not originally performed on these vehicles, but the result was considered appropriate for this examination.

  One might ask whether it makes sense to compare emissions per passenger kilometre in driving and in public transport. If five people travel in the same passenger car and the greenhouse gas emissions of the trip are divided between five people, the calculated emissions might be smaller than if the same five people took the bus. Starting a passenger car always increases emissions, whereas boarding a public transport vehicle does not, provided that there are vacant seats in the vehicle. It could be argued that emissions from driving and from using public transport should only be compared at the level of systems (for example, within a specific urban area or at the national level), not at the level of personal choices. However, the approach used in the calculator is to calculate emissions, both for driving one’s own car and for using public transport. In practice, public transport is always the better option. The more we use public transport, the more we improve its emissions efficiency (emissions per passenger kilometre).`,
  $transportMotorcyclesBoatsTitle: `Motorcycles and boats`,
  $transportMotorcyclesBoatsContent: `The estimated footprints of motorcycles and mopeds are based on the number of kilometres driven per year. The estimated fuel consumption is 3 litres per one hundred kilometres. Of course, the actual consumption depends on the bike. To receive a more accurate result, enter the average consumption of your bike per a hundred kilometres. There are calculations on the emissions of Finnish motorcycles in VTT’s LIPASTO system. Furthermore, the footprint of motorcycling includes emissions from the fuel supply chain and an assessment on the emissions from the production of the vehicle.

  The estimate for boats takes into account the type of boat, which is used for calculating the lifecycle footprint of the boat and its engine. The estimated useful life of a boat is 30 years. The assessment is based on the case studies in VTT’s study report Ympäristömyötäisyyden kehittäminen venealalla (“Raising environmental awareness in the boat sector”) (Tonteri et al. 2010). Fuel consumption makes up the majority of the climate impact of motorboats. For a more accurate estimate of your boating footprint, enter the amount of fuel consumed per year in the calculator. If you do not know the amount, the calculator assesses the consumption, based on the engine power (50% of the nominal power entered by the user) and operating hours. The default engine is a four-stroke engine that is powered with petrol. The emissions of boating are divided between the number of people using the boat per year.`,
  $transportTravelTitle: `Cruises and flights`,
  $transportTravelContent: `The emissions of both cruises and flights are calculated with the help of the LIPASTO database. The estimated emissions from the supply chain (approximately 20%) are added to these figures. You can enter your long-distance cruises and flights in the calculator, using a few example destinations.

  <b>Table 4. Estimated footprints of flights and cruises</b>
  <table>
  <tr><th>Trip and means of transport (one-way)</th><th>Greenhouse gas emissions kg, CO<sub>2</sub>,eq/trip</th></tr>
  <tr><td>Helsinki–Tallinn (80 km), car ferry, speed 24–27 knots</td><td>39</td></tr>
  <tr><td>Helsinki–Stockholm (400 km), car ferry, speed 18 knots</td><td>108</td></tr>
  <tr><td>Helsinki–Travemünde (1,140 km), Ropax vessel, speed 24 knots</td><td>500</td></tr>
  <tr><td>Helsinki-Oulu flight (515 km)</td><td>111</td></tr>
  <tr><td>Helsinki–Düsseldorf flight (1,603 km)</td><td>289</td></tr>
  <tr><td>Helsinki–Las Palmas flight (4,700 km)</td><td>848</td></tr>
  <tr><td>Helsinki–Bangkok flight (8,317 km)</td><td>1,147</td></tr>
  <tr><td colspan=2>Source: VTT’s LIPASTO database, per-unit emissions (data from 2009), with emissions from the fuel supply chain added (approximately 20%). The flight distances were estimated with the help of flight calculators.</td></tr>
  </table>
  The emissions of an individual flight depend on several factors, such as the utilisation rate, fleet, the allocation of emissions between passengers and cargo, as well as the effects of atmospheric clouds. Flight calculators use different sets of initial data, which is why they produce different results. For example, the per-passenger kilometre emissions of regular flights differ from those of holiday charters because of differences in utilisation rate. Holiday flights or charters tend to have higher utilisation rates. The figures used in this calculator are based on the weighted average of holiday and regular flights provided by the LIPASTO database. The actual emissions of a specific holiday flight are also affected by the aircraft type and route. New aircrafts typically generate fewer emissions per passenger kilometre, compared to older ones. Emissions are lower on non-stop flights, compared to connecting flights. If you must choose a connecting flight, you can lower your total flight distance by flying “in the right direction”, starting from the first flight.

  At the moment, the calculator only includes the CO2eq emissions derived from fuel consumption in aviation. This is harmonious with the statistics on greenhouse gases and, for example, the analyses in the ENVIMAT model. Paragraph 19 of the Introduction of Directive 2008/101/EC states the following on the climate impact of aviation: “Aviation has an impact on the global climate through releases of carbon dioxide, nitrogen oxides, water vapour and sulphate and soot particles. The IPCC has estimated that the total climate impact of aviation is currently two to four times higher than the effect of its past carbon dioxide emissions alone. Recent Community research indicates that the total climate impact of aviation could be around two times higher than the impact of carbon dioxide alone. However, none of these estimates takes into account the highly uncertain cirrus cloud effects. [...] Research on the formation of contrails and cirrus clouds and effective mitigation measures, including operational and technical measures, should be promoted.” Hence, the emission values for aviation could be justifiably multiplied by two.

  There are many associations and companies that offer carbon offset services. Aviation is the field where the offset system is used the most. The idea is to use the funds for projects that reduce greenhouse gas emissions, typically in developing countries. Even if you have paid, for example, an emissions charge on your flight, please still enter all your flights in the Mobility section. There is a separate question on emissions charges at the end.

  Air travel emissions have been discussed (in Finnish) more extensively in a report by Niemistö et al. (2019).`,
  $transportWalkingCyclingTitle: `Health and emissions benefits from walking and cycling`,
  $transportWalkingCyclingContent: `After the mobility section, an additional calculator illustrates the personal health benefits of walking and cycling. If walking and cycling substitutes car driving, less greenhouse gas emissions are released. The additional calculator allows you to see both of the benefits at the same time. However, the results do not affect your total carbon footprint. The additional mobility section was launched in 2017 in cooperation between Syke and the Department of Public Health at University of Helsinki, with support from the Ministry of Education and Culture (IRKE-project).

  <i>Health benefits of walking and cycling</i>

  There is strong evidence about the health benefits of everyday physical activity. Regular cycling and walking lowers the risk of high blood pressure and reduces already existing hypertension, lowers the risk of diabetes, heart disease and cardiovascular death, as well as lowers the risk of cerebral infarction. Walking and cycling prevents falls and protects your bones, muscles and joints. They also protect you from depression, anxiety, obesity and some forms of cancer. All the aforementioned diseases increase the risk of premature death and by cycling and walking regularly you can reduce this risk.

  The different effects of walking and cycling on morbidity and mortality are here summarised as a reduction in the risk of all-cause mortality. The reduction in mortality caused by walking and cycling is estimated using a tool called HEAT developed by the World Health Organisation WHO (http://www.heatwalkingcycling.org/ ). HEAT is best suited for estimating the effect of regular walking and cycling among those with the average activity level. For cycling, HEAT works best in the age range of 20-64 years, and for walking, in the age range of 20-74 years. The HEAT estimates average effects and does not take into account individual differences.

  The negative health effects of walking and cycling are increased risk of road traffic accidents and increased exposure to air pollution. However, the positive health effects of walking and cycling greatly outweigh the negative effects of air pollution and road traffic accidents. These negative effects are also included in the estimated effect on all-cause mortality. As walking and cycling becomes more common and this is also reflected in improved infrastructure, walking and cycling is likely to become even safer (Jacobsen, 2003; de Hartog et al., 2010; Rojas-Rueda et al., 2011).

  The estimated reductions in mortality obtained from HEAT were compared with the effects of passive smoking on mortality. Passive smoking refers to exposure on cigarette smoke indoors, when the person is not smoking himself. The expected risk of death for each cigarette (passive exposure) was estimated based on recent studies (Lv et al., 2015; van der Zee et al., 2016). The estimated effects on the mortality are based on the assumption of that both the physical activity and the passive exposure to cigarette smoke occur regularly.

  <i>Greenhouse gas emission savings from walking and cycling</i>

  Greenhouse gas emission savings from driving follow the calculation procedure of the mobility section. The total per kilometre emissions are divided by the number of passengers. The default emissions are as described in the mobility section documentation. If you specified the features of a car in the mobility section, e.g. type of fuel, the specified car data is used in the additional calculator. In case you specified more than one car, the first one is used in the calculation.

  Each kilometre walked or cycled is assumed to substitute one kilometre of car driving. In real life the substitution is not so straightforward. However, the car use may be reduced even more if long shopping trips with a car are replaced with shorter trips to a grocery store close by. According to the Finnish National Travel Survey, roughly a third of car trips are only three kilometres or less.`,
  $foodTitle: `Food`,
  // TODO: update food calculation description when the new model is in use
  $foodContent: `Diets are grouped into three broad categories in the calculator, and users can customise the diet in the Food items section. If your diet is mostly plant-based, but you sometimes eat meat of fish, select the omnivorious diet and enter a smaller amount of meat or fish in the following section. Vegetarian diet excludes meat and fish. Vegan diet also excludes dairy and eggs. If your consumption of meat or other animal-based products is below average (or if you use none), the calculator will add plant-based protein sources to your result.

  Low-carbon food choices include: seasonal vegetables, carbon compensated products, products that have a carbon label indicating low emissions, products produced with renewable energy, emissions-neutral products and fresh produce, instead of frozen products. The estimate is that low-carbon choices will reduce the carbon footprint by five per cent.

  Users are asked to assess their consumption, compared to the average Finn (Ravintotase – Balance Sheet for Food Commodities, data from 2013), and increase or decrease the estimated amount of consumption if needed. In beef consumption, also include lamb and other ruminant meat. Fish consumption also includes shrimps and other shellfish. Please note that many prepared foods and bakery products contain dairy and eggs.


  <b>Table 5. Estimated footprints of food items</b>
  <table>
  <tr><th>Food item</th><th>Greenhouse gas emissions kg CO<sub>2</sub>, eq per kg of food</th></tr>
  <tr><td>broiler, r</td><td>5.0</td></tr>
  <tr><td>fruit, berries</td><td>0.2</td></tr>
  <tr><td>cheese*</td><td>10.0</td></tr>
  <tr><td>fish**, r</td><td>1.5</td></tr>
  <tr><td>egg***, c</td><td>2.5</td></tr>
  <tr><td>vegetable oil***</td><td>3.0</td></tr>
  <tr><td>beans, dry</td><td>0.7</td></tr>
  <tr><td>dairy****</td><td>1.0</td></tr>
  <tr><td>beef, r</td><td>15.0</td></tr>
  <tr><td>potato, vegetables, r</td><td>0.2</td></tr>
  <tr><td>rice, r</td><td>5.0</td></tr>
  <tr><td>pork, r</td><td>5.0</td></tr>
  <tr><td>sugar***</td><td>1.1</td></tr>
  <tr><td>tomato, cucumber (in winter from a Finnish greenhouse)</td><td>5.0</td></tr>
  <tr><td>wheat flour, flakes</td><td>0.5</td></tr>
  <tr><td>soft drinks*****</td><td>0.2</td></tr>
  <tr><td>rye bread*</td><td>1.3</td></tr>
  <tr><td colspan=2>*Nissinen et al. 2007, original references in the article</td></tr>
  <tr><td colspan=2>**Silvenius & Grönroos 2004</td></tr>
  <tr><td colspan=2>***Menutool</td></tr>
  <tr><td colspan=2>****Grönroos & Seppälä 2000</td></tr>
  <tr><td colspan=2>*****Soft drink EPD, environdec.com</td></tr>
  <tr><td colspan=2>r=raw, c=cooked</td></tr>
  </table>

  The estimated footprints of different food items are based on sources that assess the greenhouse gas emissions of food in general (Katajajuuri 2009, Angervall et al. 2007 and Carlsson-Kanyama 1998). In addition to these, we used sources that concern specific food items, and these are referred to in the table.

  The factors for greenhouse gas emissions apply to food groups, and the footprints of individual food items can differ greatly from the average. For example, Katajajuuri (2009) has drawn up a summary of studies on the climate impact of food, and the food-specific variation is illustrated in Figure 1 in the downloadable documentation.

  Because not all products bear labels indicating their carbon footprint, it is difficult to know the exact climate impact of a given product. However, there are some general rules of thumb that help create a guideline on how to reduce the carbon footprint of food. The first thing to remember is to prefer different vegetables and plant-based proteins and eat only a moderate amount of meat. The most climate-friendly fish species are local wild fish, such as Baltic herring and cyprinids. Avoiding food waste and eating only the amount of food one needs are good ways of preventing the ‘unnecessary’ production of food.

  Typically, the share of packaging within the footprint of food is small. Good packaging that is proportionate to the food item’s serving size protects the product from going bad. Avoiding food waste plays a considerably greater role in the carbon footprint of food, compared to packaging.

  Locally produced food is not automatically more climate-friendly than imported food. For example, dried legumes that are shipped to Finland have a small carbon footprint. Food is rarely transported by air, due to the high costs of airfreight. Typically, the shopping trip makes up most of the climate impact of the food transport chain. We can affect the emissions from the transport chain by selecting our means of transport and shop distance wisely.

  Self-harvested food, such as berries, have many environmental and health benefits. Outdoor activities and natural products improve our health. Natural products grow without fertilisers and artificial lights, which makes their carbon footprint smaller. The carbon footprint of self-harvested food is the smallest when picking the natural products does not require driving long distances and when the amount of food gathered during one trip is large. The eventual carbon footprint of self-harvested food depends on the distance, means of transport and the carbon footprint of these, compared with the amount of food gathered.`,
  $goodsAndServicesTitle: `Consumption of other goods and services`,
  $goodsAndServicesContent: `The estimated climate impact of the consumption of other goods and services is calculated with the help of expenditure. The consumption in euro is multiplied by the product group-specific climate intensity factors (Seppälä et al. 2009, Appendix 8). Estimated expenditures (in EUR) are based on a consumption study by Statistics Finland from 2013 (see Table 6). The share of food (about two-thirds) has been deducted from the estimate concerning cafeterias and restaurants.

  Expenditure was selected as the method for assessing the climate impact of goods and services for the following reasons: 1) reporting all household goods per item would be too laborious and 2) there is little information on the climate impacts of specific goods and services available at the moment. The availability of information on product-specific carbon footprints is likely to improve in the future. Labelling goods and services with their accurate and comparable carbon footprints would require adopting a standardised labelling system. A technical document on such a system was published in 2013. The calculation of product-specific carbon footprints is difficult, because initial data have to be collected from companies located across the world. Furthermore, the manufacturer of the final product should receive the information upon receiving the materials and components. The systems needed for producing product-specific carbon footprint data do not exist yet (Usva et al. 2009). The described status of product-specific carbon footprints is still valid in 2019.

  The calculator does not have questions on all the expenditure groups listed in the ENVIMAT model, but you can assess your expenditure on other goods and services after the most common groups (“Other goods and services”). Each euro you consume affects your carbon footprint to some extent. This is why it is important to estimate your total expenditure in the calculator.

  <b>Table 6. Estimated footprints of goods and services</b>
  <table>
  <tr><th>Goods or services</th><th>Greenhouse gas emissions kg CO<sub>2</sub>, eq per EUR</th></tr>
  <tr><td>clothes</td><td>0.47</td></tr>
  <tr><td>footwear</td><td>0.29</td></tr>
  <tr><td>furniture, carpets, etc.</td><td>0.58</td></tr>
  <tr><td>household textiles, decoration, tableware, etc.</td><td>0.74</td></tr>
  <tr><td>appliances and tools</td><td>0.68</td></tr>
  <tr><td>leisure time (recreation, hobbies, accommodation and other services)*</td><td>0.39</td></tr>
  <tr><td>electronics, such as computers, cameras, etc.</td><td>0.89</td></tr>
  <tr><td>paper, books, magazines, etc.</td><td>0.32</td></tr>
  <tr><td>telephone, the internet, etc. (communication)</td><td>0.28</td></tr>
  <tr><td>renovation***</td><td>0.02</td></tr>
  <tr><td>restaurant services**</td><td>0.14</td></tr>
  <tr><td>cleaning services***</td><td>0.10</td></tr>
  <tr><td>other consumption*</td><td>0.24</td></tr>
  <tr><td colspan=2>Source: The ENVIMAT model, economic data from 2013
  *A combination of several product categories in the ENVIMAT model
  **Excluding the climate impact of food and drink, which is included elsewhere in the calculation
  ***Estimate, not included in the ENVIMAT model</td></tr>
  </table>

  <b>Why is consumption measured in euro and not as the number of goods purchased?</b>

  It is not easy to keep track of the number of goods one buys and the related expenditure. A list of all goods and services purchased in a year would be excessively long.  This is why expenditure in EUR was selected as the initial data for this calculation. Using expenditure allows us to assess the total amount of money spent during one month or year and compare it with the consumption in EUR per month or year given in the calculator. Each euro we spend increases our carbon footprint, which is why it is important to keep track of one’s overall expenditure. What if I buy less, but prefer high quality? It is likely that the per-euro footprint of high-quality product with a longer useful life is smaller than the footprint of less durable products.

  What does the average expenditure in euro mean in terms of the number of goods purchased? For example, if an average Finn spends EUR 565 on clothes per year, how much textile does he/she buy? The TEXJÄTE survey (Dahlbo et al. 2015) analysed the textile flows in Finland in 2012. Finns bought an average of 8.1 kg of new clothes per year. Similarly, the estimated volume of textile waste generated by each Finn is 8–9 kg per year, according to waste sorting studies. Eight kilograms of clothes could comprise, for example, the following: two pairs of jeans, two jackets or coats, a suit, five T-shirts, 10 pairs of socks, three long-sleeved shirts, five sets of underwear.

  Examining individual low-carbon purchases is not relevant in the context of this calculator, because the aim is to generate an overall assessment of one’s housing, transport, food and other consumption. However ,in our daily lives we can affect the per-euro carbon footprint of our consumption by choosing more environmentally-friendly goods and services. Preferring eco-labelled products and services, carbon-compensated products and second hand goods is better for the environment. Often, choosing environmentally-friendly products is also a way of letting the retail and manufacturing sector know that consumers are interested in the carbon footprint and other sustainability aspects of products.`,
  $wasteTitle: `Waste`,
  $wasteContent: `Waste sorting and recycling are often the first things that come to mind at the mention of everyday environmental deeds. The priority should always be on waste prevention. Preventing the generation of waste means both minimising the adverse effects of waste and reducing unnecessary production. For example, reducing the amount of food waste reduces the need for energy and processing at the biowaste treatment stage. However, the greatest impacts can be achieved at the beginning of the supply chain: consuming less will save raw materials and energy during the production, transport and storage of food.

  You can make some products last longer with appropriate maintenance and repair. If you no longer need certain goods or materials, the primary step should always be to re-use them. An excellent example is the re-using of clean and undamaged clothes. If the item cannot be re-used, the material should be recycled or recovered as energy. For example, paper, cardboard and metal can be recycled, which reduces the need for virgin raw materials. Waste that cannot be recycled should be recovered as energy. Waste prevention and recycling have many benefits. For example, they prevent substances that are hazardous to health or to the environment from entering the environment. Furthermore, if the re-use or recycling of material replaces the use of virgin materials, the environmental gain is even greater.

  Typically, the impact of waste on the carbon footprint is small. However, the transportation and treatment of waste require energy, which causes emissions.

  The ‘average’ amounts of waste in the calculator are the average amounts of waste in Finland, based on data collected in the KEIKKA project (Salmenperä et al. 2018). Mixed waste produces 506 kg CO2/t mixed waste when burned in a waste-to-energy plant. The emission factor is based on the energy content of the mixed waste (10 GJ/t), the emission coefficient (40 kg CO2-ekv./GJ; fuel classification from Statistics Finland 2019) and the energy gain at the Vantaa Energy waste power plant (82%, of which 38% is electricity and 62% is heat) (Myllymaa et al. 2008).`,
  $emissionCreditsTitle: `Voluntary carbon offsets`,
  $emissionCreditsContent: `The calculator includes a question on voluntary emissions charges or carbon offsets. Offsets do not reduce your carbon footprint, but you can compare their amount with your final result. The priority should always be on reducing emissions in one’s everyday life. Due to circumstances, some changes can only take place over the long term, and mitigating greenhouse gas emissions elsewhere with the help of carbon offsets is a good way to compensate for this.

  Many actors, NGOs and companies offer carbon offset services to those who wish to compensate for their greenhouse gas emissions. Flying is the most common field of voluntary carbon offsets, but you could also compensate for your total carbon footprint by buying offsets. There are both Finnish and international carbon offset services available online.

  Offsets are used for funding projects that reduce emissions elsewhere. Most of these projects seek to mitigate greenhouse gas emissions in developing countries, for example, by promoting renewable energy or reforesting areas. Emission reductions are verified with the help of certification systems, e.g. Gold Standard. There are also some operators that sell allowances within the EU emissions trading system. Buying an allowance reduces the emissions trading quota.

  You can search for offsetting services with key words such as: CO2 compensation, CO2 offseting, carbon offset, CO2 elimination.`,
  $resultsTitle: `Result page, carbon footprint of the average Finn and comparisons with other users`,
  $resultsContent: `The result page contains a comparison with the ‘average Finn’. The average carbon footprint of Finnish households is roughly 10 tonnes per year (based on consumption expenditure).  Housing (building, energy consumption, household goods) makes up one-third of the total footprint, mobility and food contribute to one-fifth each, and the remaining emissions result from the consumption of goods and services. Household expenditure does not cover all services provided by society, such as education and healthcare.

  The carbon footprint of the average Finn is based on the greenhouse gas intensities of consumables (per EUR), calculated in accordance with the ENVIMAT model (Seppälä et al. 2009). The calculation is based on national accounts from 2013. The ENVIMAT model is the environmentally extended input-output analysis of the Finnish economy. The model was built in cooperation between the Thule institute at the University of Oulu and the Finnish Environment Institute (Seppälä et al. 2009). The model is intricate: it divides production into 147 sectors and 232 products and household expenditure into 66 commodity groups.

  The ENVIMAT model covers both domestic and imported products. The lifecycle environmental loads of imported goods are mainly derived from data stored in the international LCIA databank Ecoinvent. The environmental impact of consumables per purchase price – including the footprint of trade and distribution – are based on the Ecoinvent figures.

  The 2016 update of the Climate diet calculator takes into account the updated ENVIMAT model, which is now more comprehensive. In the new version, the footprints of goods and services also cover the machinery and equipment used for production. This change has also increased the carbon footprint of the average Finn that is used as the benchmark.

  In addition to comparing yourself to the average Finn, you can compare your result with the following groups of respondents (comparison is not shown if there are fewer than 15 responses to compare with):
  <ul><li>all respondents starting from release in March 2019</li><li>respondents with the same postal code</li><li>respondents with the same family size</li><li>respondents with similar income</li><li>respondents with similar diet</li></ul>`,
  $analysisTitle: `What does the carbon footprint tell us?`,
  $analysisContent: `The calculated carbon footprint is of course an estimate. However, it illustrates the volumes and shares of emissions: What are the greatest sources of emissions in our daily lives? You can reduce your carbon footprint every day through small and easy choices: adjust the indoor temperature to 21°C or below (when the heating is on), travel short distances by foot or bicycle and choose low-carbon food, goods and services. Not all changes happen overnight. For example, improving the energy efficiency of one’s house by renovating, replacing one’s car or giving up driving all require advance planning. The calculator includes links to a few sources of additional information that support both short and long-term changes.

  People often ask what is the target level for one’s personal carbon footprint. Committing to the Paris agreement and keeping global warming below 1.5 degrees require a vast decrease in the per capita carbon footprint, especially in affluent countries. Niemistö et al. (2019; see Table 11) drew on research on estimated carbon budgets and summarised that in the year 2030, the per capita footprints should be roughly 3000 kg and by the year 2050, they should be 600 kg. Although the figures are presented per capita, the responsibility for decreasing the emissions is not only about the individual level and our individual choices. Also bear in mind that Climate diet calculation excludes emissions from some goods and services (e.g. public health care and education) as briefly explained in the Introduction. The definitions of carbon footprint calculations and concepts are explained in more detail in the work of Seppälä et al. (2009). The definitions matter when per capita figures are compared to targets such as the 1.5 degrees goal.

  These emission reduction targets can only be met by making thorough changes to energy systems and the ways in which we produce, consume, store and transfer energy. Citizens can affect greenhouse gas emissions by making wise choices, creating demand for low-carbon solutions and supporting ambitious climate policy.`,
  $sourcesTitle: `References`,
  $sourcesContent: `Adato Energia. Kotitalouksien sähkönkäyttö 2011. Study report 26 February 2013.

  Angervall T, Flysjö A, Ziegler F, 2007. Klimatpåverkan av tio ekologiska livsmedel. Slutrapport. UP- 07-14456, SIK.

  Audi Life Cycle Assessment. https://www.audi-mediacenter.com/en/lifecycle-analysis-14683 (accessed 19 September 2023)

  Balance Sheet for Food Commodities. https://www.luke.fi/en/statistics/balance-sheet-for-food-commodities (accessed 25 September 2023)

  Carlsson-Kanyama, A, 1998. “Climate change and dietary choices - how can emissions of greenhouse gases from food consumption be reduced?” Food Policy, vol 23, no.3/4, pp.277–293.

  Dahlbo H, Aalto K, Salmenperä H, Eskelinen H, Pennanen J, Sippola K, Huopalainen M, 2015. Tekstiilijätteen uudelleenkäytön ja tekstiilijätteen kierrätyksen tehostaminen Suomessa. Suomen ympäristö 4/2015.

  Finnish Environment Institute, 2011. Suomen sähkönhankinnan päästöt elinkaarilaskelmissa.

  The Finnish Meteorological Institute. 2013. Lämmitystarveluvut vertailukaudella 1981–2010, http://ilmatieteenlaitos.fi/lammitystarveluvut (accessed 12 June 2013)

  Grönroos J, Seppälä J, (eds.)  2000. “Maatalouden tuotantotavat ja ympäristö.” Suomen ympäristö 431. Luonto ja luonnonvarat.

  De Hartog JJ, Boogaard H, Nijland H, Hoek G, 2010. Do the Health Benefits of Cycling Outweigh the Risks? Environmental Health Perspectives. 118(8), pp. 1109–1116.

  HKL’s Environmental Report 2012.

  Jacobsen PL, 2003. Safety in numbers: more walkers and bicyclists, safer walking and bicycling. Injury Prevention, 9, pp. 205–209.

  Katajajuuri J-M, 2009. In: Valtioneuvoston tulevaisuusselonteko ilmasto- ja energiapolitiikasta. Valtioneuvoston kanslian julkaisusarja 28/2009.

  Kopsakangas-Savolainen M, Mattinen MK, Manninen K, Nissinen A, 2017. “Hourly-based greenhouse gas emissions of electricity – cases demonstrating possibilities for households and companies to decrease their emissions.” Journal of Cleaner Production 153: 384–396.

  LIPASTO Traffic exhaust emissions database. http://lipasto.vtt.fi/en/index.htm (accessed 21 September 2023)

  Lv X, Sun J, Bi Y, Xu M, Lu J, Zhao L, Xu Y, 2015. Risk of all-cause mortality and cardiovascular disease associated with secondhand smoke exposure: a systematic review and meta-analysis. International Journal of Cardiology. 15;199, pp. 106–15.

  Menutool – Ett verktyg för klimat- och näringsanpassad måltidsplanering. Report available at: http://docplayer.se/4574738-Bilaga-menutool-ett-verktyg-for-klimat-och-naringsanpassad-maltidsplanering-kravspecifikation.html (accessed 18 February 2019)

  Ministry of the Environment, 2013. Calculation annex to the Decree of the Ministry of the Environment on Improving the Energy Efficiency of Buildings in Repair and Alteration Work.

  Motiva, 2013. Vertailupaikkakunnat, korjauskertoimet ja normaalivuoden 1981-2010 lämmitystarveluvut. https://www.motiva.fi/julkinen_sektori/kiinteiston_energiankaytto/kulutuksen_normitus/vertailukausi-_ja_paikkakunnat_korjauskertoimet_ja_lammitystarveluvut (accessed 21 September 2023)

  Myllymaa T, Moliis K, Tohka A, Rantanen P, Ollikainen M, Dahlbo H, 2008. “Jätteiden kierrätyksen ja polton käsittelyketjujen ympäristökuormitus ja kustannukset.” Reports of the Finnish Environment Institute 28/2008. https://helda.helsinki.fi/bitstream/handle/10138/39792/SYKEra_28_2008.pdf?sequence=1 (accessed 26 February 2019)

  Mökkibarometri 2016. Saaristoasiain neuvottelukunta, Maa- ja metsätalousministeriö.

  National Travel Survey 2016. https://www.traficom.fi/fi/hlt (accessed 18  February 2019)

  Nieminen J, Haapio A, Vesanen T, Rekola M, Vienonen S, Santala E, Lylykangas K, Korhonen A, Mäntylä H, Kirkkari A-M, 2013. Ekotehokas loma-asuminen. VTT-R-00723-13

  Niemistö J, Soimakallio S, Nissinen A, Salo M, 2019. Lentomatkustuksen päästöt - Mistä lentoliikenteen päästöt syntyvät ja miten niitä voidaan vähentää? Suomen ympäristökeskuksen raportteja 2/2019. Suomen ympäristökeskus.

  Nissinen A, Grönroos J, Heiskanen E, Honkanen A, Katajajuuri J-M, Kurppa S, Mäkinen T, Mäenpää I, Seppälä J, Timonen P, Usva K, Virtanen, Y., Voutilainen P, 2007. Developing benchmarks for consumer-oriented life cycle assessment-based environmental information on products, services and consumption patterns. Journal of Cleaner Production 15, 538–549. https://doi.org/10.1016/j.jclepro.2006.05.016

  Nissinen A. Seppälä J, 2008. Tuotteiden ilmastovaikutuksista kertovat merkit. Valtioneuvoston kanslian julkaisusarja 11/2008.

  Nissinen A, Heiskanen E, Perrels A, Berghall E, Liesimaa V ja Mattinen MK, 2012. Ohjauskeinoyhdistelmät asumisen, henkilöliikenteen ja ruoan ilmastovaikutusten hillintään – KUILU-hankkeen loppuraportti. Suomen ympäristö 11/2012.

  Nissinen A, Heiskanen E, Perrels A, Berghall E, Liesimaa V, Mattinen MK, 2015. Combinations of policy instruments to decrease the climate impacts of housing, passenger transport and food in Finland. Journal of Cleaner Production 107: 455–466.

  Rytkönen A, Kirkkari, A (eds.) 2010. “Vapaa-ajan asumisen ekotehokkuus.” Suomen ympäristö 6/2010, 122 pp.

  Rojas-Rueda D, de Nazelle A, Tainio M, Nieuwenhuijsen MJ, 2011. The health risks and benefits of cycling in urban environments compared with car use: health impact assessment study. BMJ. Aug 4;343:d4521.

  Saarinen M, Kurppa S, Nissinen M, Mäkelä J, (eds.) 2011. “Aterioiden ja asumisenvalinnat kulutuksen ympäristövaikutusten ytimessä.” Suomen ympäristö 2011/14.

  Saari A, 2001. “Rakennusten ja rakennusosien ympäristöselosteet.” Building Information Foundation and Building Information.

  Salmenperä H, Sahimaa O, Koutonen H, 2018. Kierrätyksen keinot, taloudelliset vaikutukset sekä toteutettavuus. Ympäristöministeriön raportteja 17/2018. http://urn.fi/URN:ISBN:978-952-11-4798-2 (accessed 26 February.2019).

  Salo M, Nissinen A,  2015. Indicator for carbon footprint of household consumption.http://www.syke.fi/fi-fi/Tutkimus__kehittaminen/Tutkimus_ja_kehittamishankkeet/Hankkeet/Kulutuksen_hiilijalanjaljen_indikaattori (accessed 18 February 2019)

  Salo M, Nissinen A, Mäenpää I, Heikkinen M, 2016. Kulutuksen hiilijalanjäljen seurantaa tarvitaan. Tieto&Trendit – Talous ja hyvinvointikatsaus 1/2016.

  Schweimer GW, Levin M, 2004. Life Cycle Inventory for the Golf A4.

  Seppälä J, Mäenpää I, Koskela S, Mattila T, Nissinen A, Katajajuuri J-M, Härmä T, Korhonen M-R, Saarinen M, Virtanen Y, 2009. “An assessment of greenhouse gas emissions and material flows caused by the Finnish economy using the ENVIMAT model.” Suomen ympäristö 20/2009. 134 pp https://helda.helsinki.fi/handle/10138/38010 (accessed 18 February 2019)

  Silvenius F, Grönroos J, 2004. Suomen kalatuotteiden elinkaariarviointi, Suomen ympäristö 687. Suomen ympäristökeskus.

  Statistics Finland, dwellings and housing conditions. Data are from 2017.

  Statistics Finland, national accounts, household expenditure. Data are from 2013.

  Statistics Finland, fuel classification 2015.

  Statistics Finland, fuel classification 2019. https://www.stat.fi/tup/khkinv/khkaasut_polttoaineluokitus.html

  Tonteri H, Auvinen H, Helin T and Johansson M, 2010. Ympäristömyötäisyyden kehittäminen venealalla. Research report VTT-R-02928-10.

  Usva K, Hongisto M, Saarinen M, Nissinen A, Katajajuuri J-M, Perrels A, Nurmi P, Kurppa S, Koskela S, 2009. Towards certified carbon footprints of products - a road map for data production - Climate Bonus project report (WP3). Helsinki: Oy Nord Print Ab.

  Volvo Environmental Product Declaration.

  WTW 2014, Well-to-Wheels analysis of future automotive fuels and powertrains in European context. WELL-TO-TANK Report Appendix 2, Version 4a, April 2014. https://op.europa.eu/en/publication-detail/-/publication/1cffb832-f2bc-42df-9dc2-59db08e24eee/language-en (accessed 21 September 2023)

  van der Zee SC, Fischer PH, Hoek G, 2016. Air pollution in perspective: Health risks of air pollution expressed in equivalent numbers of passively smoked cigarettes. Environmental Research. 148, pp. 475–483.`,
}
export default en
