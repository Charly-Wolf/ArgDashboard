export type Stat = {
  name: string
  value: number
  unit?: string
  color?: string
}

const API_URL_DOLLAR = 'https://dolarapi.com/v1/dolares/oficial'
const API_URL_COUNTRY_RISK =
  'https://mercados.ambito.com//riesgopais/variacion-ultimo'
const API_URL_MONTHLY_INFLATION =
  'https://api.argentinadatos.com/v1/finanzas/indices/inflacion/'
const API_URL_ANUAL_INFLATION =
  'https://api.argentinadatos.com/v1/finanzas/indices/inflacionInteranual/'

export const fetchDollar = async (): Promise<Stat> => {
  try {
    const response = await fetch(API_URL_DOLLAR)
    const data = await response.json()

    return {
      name: 'Dólar oficial',
      value: data.venta,
      unit: '$',
      color: '#00FF99',
    }
  } catch (error) {
    console.error('Error obteniendo dólar oficial:', error)
    return {
      name: 'Dólar oficial',
      value: -1,
    }
  }
}

export const fetchCountryRisk = async (): Promise<Stat> => {
  try {
    const response = await fetch(API_URL_COUNTRY_RISK)
    const data = await response.json()

    return {
      name: 'Riesgo País',
      value: data.ultimo,
      color: '#FF5555',
    }
  } catch (error) {
    console.error('Error obteniendo riesgo país:', error)
    return {
      name: 'Riesgo País',
      value: -1,
    }
  }
}

export const fetchMonthlyInflation = async (): Promise<Stat> => {
  try {
    const response = await fetch(API_URL_MONTHLY_INFLATION)
    const data = await response.json()
    const lastValue = data[data.length - 1].valor

    return {
      name: 'Inflación mensual',
      value: lastValue,
      unit: '%',
      color: '#B18BE0',
    }
  } catch (error) {
    console.error('Error obteniendo inflación mensual:', error)
    return {
      name: 'Inflación mensual',
      value: -1,
    }
  }
}

export const fetchAnualInflation = async (): Promise<Stat> => {
  try {
    const response = await fetch(API_URL_ANUAL_INFLATION)
    const data = await response.json()
    const lastValue = data[data.length - 1].valor

    return {
      name: 'Inflación anual',
      value: lastValue,
      unit: '%',
      color: '#FFCC00',
    }
  } catch (error) {
    console.error('Error obteniendo inflación anual:', error)
    return {
      name: 'Inflación anual',
      value: -1,
    }
  }
}
