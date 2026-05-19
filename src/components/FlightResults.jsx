export default function FlightResults() {
  // Dummy flight data — this will later come from Amadeus API
  const flights = [
    {
      id: 1,
      airline: "Air Peace",
      departure: "07:00",
      arrival: "08:15",
      duration: "1h 15m",
      baseFare: 45000,
      taxes: 8500,
      baggage: 15000,
      total: 68500,
      stops: 0,
    },
    {
      id: 2,
      airline: "Green Africa",
      departure: "12:30",
      arrival: "13:45",
      duration: "1h 15m",
      baseFare: 38000,
      taxes: 7200,
      baggage: 12000,
      total: 57200,
      stops: 0,
    },
    {
      id: 3,
      airline: "Ibom Air",
      departure: "18:00",
      arrival: "19:10",
      duration: "1h 10m",
      baseFare: 52000,
      taxes: 9000,
      baggage: 15000,
      total: 76000,
      stops: 0,
    },
  ]

  return (
    <section className="px-4 mt-6 max-w-md mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Lagos (LOS) → Abuja (ABV)
      </h2>

      {flights.map((flight) => (
        <div key={flight.id} className="bg-white rounded-xl shadow-md p-4 mb-4 border border-gray-100">
          {/* Airline & Time */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="font-semibold text-gray-800">{flight.airline}</p>
              <p className="text-sm text-gray-500">
                {flight.departure} — {flight.arrival} · {flight.duration}
              </p>
              <p className="text-xs text-green-600 mt-1">Non-stop</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#1e3a5f]">
                ₦{flight.total.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400">total incl. taxes & fees</p>
            </div>
          </div>

          {/* Price Breakdown — THE VERIXFLY DIFFERENCE */}
          <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-500">Base fare</span>
              <span className="text-gray-700">₦{flight.baseFare.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Taxes & fees</span>
              <span className="text-gray-700">₦{flight.taxes.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Baggage (est.)</span>
              <span className="text-gray-700">₦{flight.baggage.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold pt-1 border-t border-gray-200">
              <span>Total you'll pay</span>
              <span className="text-[#1e3a5f]">₦{flight.total.toLocaleString()}</span>
            </div>
          </div>

          {/* Trust note */}
          <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <span>🛡️</span> This is the full price. No surprise fees at checkout.
          </p>

          {/* Book button */}
          <button className="w-full mt-3 bg-[#f97316] hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
            View Deal
          </button>
        </div>
      ))}
    </section>
  )
}