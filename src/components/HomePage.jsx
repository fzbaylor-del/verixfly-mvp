import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import SearchWidget from './SearchWidget'
import TrustBadge from './TrustBadge'
import FeatureRow from './FeatureRow'
import FlightResults from './FlightResults'

export default function HomePage() {
  const [searchData, setSearchData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (data) => {
    setLoading(true)
    // Simulate network delay — later this will be a real API call
    setTimeout(() => {
      setSearchData(data)
      setLoading(false)
    }, 1500)
    console.log('Searching flights:', data)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <SearchWidget onSearch={handleSearch} />

      {/* LOADING STATE: Show plane animation while "fetching" */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-flyAcross text-5xl">✈️</div>
        </div>
      )}

      {/* RESULTS STATE: Show flight results after search */}
      {!loading && searchData && <FlightResults searchData={searchData} />}

      {/* INITIAL STATE: Show trust badges before any search */}
      {!loading && !searchData && (
        <>
          <TrustBadge />
          <FeatureRow />
        </>
      )}
    </div>
  )
}