import { fetchPrayers } from '@/lib/api/prayers'
import { useEffect, useState } from 'react'
import type { Tables } from '@/types/supabase'

type Prayer = Tables<'prayers_dev'>

function usePrayers(limit = 10) {
  const [prayers, setPrayers] = useState<Prayer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPrayers(limit)
      .then(setPrayers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [limit])

  const refresh = async () => {
    setLoading(true)
    try {
      const data = await fetchPrayers(limit)
      setPrayers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error')
    } finally {
      setLoading(false)
    }
  }

  return { prayers, loading, error, refresh }
}

export default usePrayers
