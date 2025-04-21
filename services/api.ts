import { Stat } from '../hooks/useStats'

export const fetchStats = async (): Promise<Stat[]> => {
  // const response = await fetch(`${process.env.API_URL}/api/data/`)
  const response = await fetch(`http://192.168.1.38:3000/api/data/`)
  const data = await response.json()
  return data
}
