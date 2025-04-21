import { useEffect, useState } from 'react'
import {
  fetchDollar,
  fetchCountryRisk,
  Stat,
  fetchMonthlyInflation,
  fetchAnualInflation,
} from '../services/api'
import * as Notifications from 'expo-notifications'

export function useStats() {
  const [stats, setStats] = useState<Stat[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const dollar = await fetchDollar()
      const countryRisk = await fetchCountryRisk()
      const monthlyInflation = await fetchMonthlyInflation()
      const anualInflation = await fetchAnualInflation()

      setStats([dollar, countryRisk, monthlyInflation, anualInflation])
      setLoading(false)

      const currentDate = new Date()
      setLastUpdated(currentDate.toLocaleString())

      // Send Dollar Value Notification
      if (dollar.value < 1001 || dollar.value > 1200) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Alerta del dólar',
            body: `El valor actual es $${dollar.value}`,
            sound: true,
          },
          trigger: null,
        })
      }
    }

    fetchData()

    const interval = setInterval(fetchData, 5 * 60000) // every 5 minutes

    return () => clearInterval(interval)
  }, [])

  return { stats, loading, lastUpdated }
}
