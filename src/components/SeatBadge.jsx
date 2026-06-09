import airlineRatings from '../data/airlineRatings.json'

export default function SeatBadge({ airline }) {
  const stats = airlineRatings[airline]
  if (!stats) return null

  const isGood = stats.onTimePerformance >= 85

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
        isGood
          ? 'bg-green-100 text-green-700'
          : 'bg-orange-100 text-orange-700'
      }`}
    >
      <span>{isGood ? '⏱️' : '⚠️'}</span>
      {isGood ? 'On‑time' : 'Delays common'} ({stats.onTimePerformance}%)
    </span>
  )
}