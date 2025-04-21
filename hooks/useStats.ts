import { useEffect, useState } from 'react'
import { fetchStats } from '@/services/api'

export type Stat = {
  name: string
  value: number
  unit?: string
  color?: string
}

export function useStats() {
  const [stats, setStats] = useState<Stat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.1.38:3000')

    ws.onmessage = event => {
      const data = JSON.parse(event.data)
      setStats(Object.values(data))

      console.log('Received data:', data)

      setLoading(false)
    }

    ws.onerror = err => {
      console.error('WebSocket error:', err)
    }

    return () => {
      ws.close()
    }
  }, [])

  return { stats, loading }
}
