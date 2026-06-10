export default function FlyerGuide({ from, to }) {
  return (
    <details className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-5 max-w-md mx-auto">
      <summary className="font-bold text-[#1e3a5f] text-lg cursor-pointer list-none flex items-center gap-2">
        <span>🎓</span> First-Time Flyer Tips
        <span className="ml-auto text-xs text-gray-500">Tap to expand</span>
      </summary>

      <div className="mt-3 space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">🗺️ Check your airport:</span> Not sure where to go? Look for the terminal on your ticket. Arrive <strong>2 hours early</strong> for domestic flights.
        </p>
        <p>
          <span className="font-medium">🧳 Baggage rules:</span> Your carry‑on is free, but checked bags have fees. We've included the estimate above so there are <strong>no surprises</strong>.
        </p>
        <p>
          <span className="font-medium">🛂 At security:</span> Remove laptops and liquids from your bag. Have your ID ready. Don't worry—this is normal!
        </p>
        <p>
          <span className="font-medium">📱 Stay connected:</span> Download your airline's app before you go. That way you'll get gate changes and delay alerts instantly.
        </p>
        <p>
          <span className="font-medium">🛡️ Know your rights:</span> If your flight is delayed, scroll down to our Passenger Rights guide. You may be owed meals or a hotel.
        </p>
        <p className="text-xs text-gray-400 mt-3 italic">
          You're flying from {from || 'your origin'} to {to || 'your destination'}. We've got your back!
        </p>
      </div>
    </details>
  )
}