import { createFileRoute } from '@tanstack/react-router'
import usePrayers from '@/hooks/usePrayers'
import { incrementPrayCount, incrementReportCount } from '@/lib/api/prayers'

export const Route = createFileRoute('/prayers/')({
  component: PrayerBoard,
})

function PrayerBoard() {
  const { prayers, loading, error, refresh } = usePrayers(10)

  const handlePray = async (id: number) => {
    try {
      await incrementPrayCount(id)
      refresh()
    } catch (err) {
      console.error('Failed to pray:', err)
    }
  }

  const handleReport = async (id: number) => {
    try {
      await incrementReportCount(id)
      refresh()
    } catch (err) {
      console.error('Failed to pray:', err)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="gap-sm flex flex-col">
      <button onClick={refresh}>Refresh</button>
      {prayers.map((prayer) => (
        <div key={prayer.id}>
          <p>{prayer.user_name}</p>
          <p>{prayer.content}</p>
          <button
            onClick={() => handlePray(prayer.id)}
            className="cursor-pointer"
          >
            Pray ({prayer.pray_count})
          </button>
          <button
            onClick={() => handleReport(prayer.id)}
            className="cursor-pointer"
          >
            Report ({prayer.report_count})
          </button>
        </div>
      ))}
    </div>
  )
}
