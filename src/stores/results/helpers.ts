import i18n from '@/locale/i18n'
export function parseResponse(response: any): IResultData | null {
  if (!response) {
    return null
  }
  const date = new Date(response.timeStamp)
  return {
    date,
    name: i18n.global.d(date),
    housing: Math.round(response.housing),
    secondaryHouse: Math.round(response.secondaryHouse),
    food: Math.round(response.food),
    transport: Math.round(response.transport),
    consumption: Math.round(response.consumption),
    waste: Math.round(response.waste),
  }
}
