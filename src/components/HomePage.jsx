import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import SearchWidget from './SearchWidget'
import TrustBadge from './TrustBadge'
import FeatureRow from './FeatureRow'
import FlightResults from './FlightResults'

export default function HomePage() {
  const [searchData, setSearchData] = useState(null)

  const handleSearch = (data) => {
    setSearchData(data)
    console.log('Searching flights:', data)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <SearchWidget onSearch={handleSearch} />
      {searchData && <FlightResults searchData={searchData} />}
      {!searchData && (
        <>
          <TrustBadge />
          <FeatureRow />
        </>
      )}
    </div>
  )
}