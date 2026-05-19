import Header from './Header'
import Hero from './Hero'
import SearchWidget from './SearchWidget'
import TrustBadge from './TrustBadge'
import FeatureRow from './FeatureRow'
import FlightResults from './FlightResults'

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <SearchWidget />
      <TrustBadge />
      <FeatureRow />
      <FlightResults />
    </div>
  )
}