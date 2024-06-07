export function eggCountToRatio(count: number) {
  if (count === 0) {
    return 0
  }
  const singleEggWeight = 58 // in grams, https://munax.fi/munamestarilta-kysyttya
  const averageConsumptionWeight = 205 // the average Finnish consumption, in grams. 10.7kg/year * 1000 / 52

  const singleEggPercentage = (singleEggWeight / averageConsumptionWeight) * 100

  return Math.round(singleEggPercentage * count)
}
