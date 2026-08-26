const DEFAULT_B2C_APP_URL = 'https://app.goalbertai.com'

export const SUPPORT_EMAIL = 'UnitySupport@UnityGlobalCare.com'

export function getB2CAppUrl() {
  return String(import.meta.env.VITE_B2C_APP_URL || DEFAULT_B2C_APP_URL).replace(/\/$/, '')
}

export function getB2CSignInUrl() {
  return `${getB2CAppUrl()}/login`
}
