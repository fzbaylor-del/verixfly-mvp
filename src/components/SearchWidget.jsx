export default function SearchWidget() {
  return (
    <section className="px-4 -mt-6 relative z-10">
      {/* White card */}
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">

        {/* From Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✈️</span>
            <input
              type="text"
              placeholder="Lagos (LOS)"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            />
          </div>
        </div>

        {/* To Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📍</span>
            <input
              type="text"
              placeholder="Abuja (ABV)"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
            />
          </div>
        </div>

        {/* Dates Row */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">📅</span>
              <input
                type="date"
                className="w-full pl-10 pr-2 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">📅</span>
              <input
                type="date"
                className="w-full pl-10 pr-2 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Passengers */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
          <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent">
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            <option>3 Passengers</option>
            <option>4 Passengers</option>
            <option>5+ Passengers</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="w-full bg-[#f97316] hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg text-base transition-colors flex items-center justify-center gap-2">
          <span>🔍</span>
          Search Flights
        </button>

      </div>
    </section>
  )
}