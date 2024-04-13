export interface CreatePayoutAccountResponse {
  accountId: string
  onboardingUrl: string
}

export interface IsAccountValidResponse {
  isValid: boolean
}

export interface CreateCheckoutOptions {
  username: string
  gistId: string
  price: string
}

export interface CreateCheckoutResponse {
  id: string
  checkoutUrl: string
}
