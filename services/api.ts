export type Stat = {
  name: string
  value: number
  unit?: string
  color?: string
}

const API_URL_DOLAR = 'https://dolarapi.com/v1/dolares/oficial'
const API_URL_RIESGO_PAIS =
  'https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo/'

export const fetchDollar = async (): Promise<Stat> => {
  try {
    const response = await fetch(API_URL_DOLAR)
    const data = await response.json()

    return {
      name: 'Dólar oficial',
      value: data.venta, // usas `venta` para el valor
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
    const response = await fetch(API_URL_RIESGO_PAIS)
    const data = await response.json()

    return {
      name: 'Riesgo País',
      value: data.valor,
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
