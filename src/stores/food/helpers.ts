export function eggsCountToKilograms(count: number) {
  if (count === 0) {
    return 0
  }
  const singleEggWeight = 0.058 // in kilograms, https://munax.fi/munamestarilta-kysyttya

  return singleEggWeight * count
}
