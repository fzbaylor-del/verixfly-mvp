import Header from './Header'
import Hero from './Hero'
import SearchWidget from './SearchWidget'

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <SearchWidget />
    </div>
  )
}