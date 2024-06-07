export interface IRootState {
  testInstanceId: number
  sessionId: string
  busy: boolean
  error: string | null
  createGroupCodeVisible: boolean
  loginVisible: boolean
  userEmail: string
  userEmailWaitingForCode: string
  userId: string
  groupCode: string
  carbonOffset: number
}

export interface IVerificationData {
  email: string
  locale: string
}
