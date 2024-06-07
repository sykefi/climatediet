export enum Frequencies {
  Never = 'Never',
  Sometimes = 'Sometimes',
  Often = 'Often',
  Always = 'Always',
}

export enum AmountEstimates {
  Low = 'Low',
  Normal = 'Normal',
  High = 'High',
}

export interface IWasteDataState {
  id: number
  amountEstimate: AmountEstimates
  bioWaste: Frequencies
  electronic: Frequencies
  glass: Frequencies
  hazardous: Frequencies
  carton: Frequencies
  metal: Frequencies
  paper: Frequencies
  plastic: Frequencies

  submitted: boolean
  unSavedChanges: boolean

  totalResult: number
}

export interface IWasteResults {
  total: number
}
