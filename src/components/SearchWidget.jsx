import { useState } from 'react'

export default function SearchWidget({ onSearch }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [departure, setDeparture] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState('1 Passenger')

  return (
    <section className="px-4 -mt-6 relative z-10">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">

        {/* From Field */}
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-1">From</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✈️</span>
            <input
              type="text"
              placeholder="Lagos (LOS)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            />
          </div>
        </div>

        {/* To Field */}
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-1">To</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📍</span>
            <input
              type="text"
              placeholder="Abuja (ABV)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            />
          </div>
        </div>

        {/* Dates Row */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">📅</span>
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full pl-10 pr-2 py-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">📅</span>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full pl-10 pr-2 py-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Passengers */}
        <div className="mb-6">
          <label className="block text-base font-medium text-gray-700 mb-1">Passengers</label>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
          >
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            <option>3 Passengers</option>
            <option>4 Passengers</option>
            <option>5+ Passengers</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={() => onSearch({ from, to, departure, returnDate, passengers })}
          className="w-full bg-[#f97316] hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
        >
          <span>🔍</span>
          Search Flights
        </button>

      </div>
    </section>
  )
}