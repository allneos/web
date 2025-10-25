import { supabase } from '@/lib/supabase'
import type { Tables } from '@/types/supabase'

type Prayer = Tables<'prayers_dev'>

export const fetchPrayers = async (limit = 10) => {
  const { data, error } = await supabase
    .from('prayers_dev')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching prayers:', error)
    throw error
  }

  return data as Prayer[]
}

export const createPrayer = async (prayer: {
  content: string
  user_name?: string
}) => {
  const { data, error } = await supabase
    .from('prayers_dev')
    .insert(prayer)
    .select()
    .single()

  if (error) throw error
  return data as Prayer
}

export const incrementPrayCount = async (id: number) => {
  const { data, error } = await supabase.rpc('increment_pray_count', {
    prayer_id: id,
  })

  if (error) throw error
  return data?.[0] as Prayer
}

export const incrementReportCount = async (id: number) => {
  const { data, error } = await supabase.rpc('increment_report_count', {
    prayer_id: id,
  })

  if (error) throw error
  return data?.[0] as Prayer
}
