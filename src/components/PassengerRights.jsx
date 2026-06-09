export default function PassengerRights() {
  return (
    <details className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
      <summary className="font-semibold text-[#1e3a5f] text-base cursor-pointer list-none flex items-center gap-2">
        <span>🛡️</span> Your Rights During Delays & Cancellations
        <span className="ml-auto text-xs text-gray-500">Tap to expand</span>
      </summary>

      <div className="mt-3 text-sm text-gray-700 space-y-3">
        <div>
          <h4 className="font-medium text-[#1e3a5f]">⏳ Flight Delayed (2‑3 hours)</h4>
          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1 mt-1">
            <li>You’re entitled to free refreshments and two phone calls/emails.</li>
            <li>Ask at the check‑in counter or gate for a meal voucher.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[#1e3a5f]">🏨 Long Delay (Overnight)</h4>
          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1 mt-1">
            <li>If your flight is delayed overnight, the airline must provide hotel accommodation and transport to/from the hotel.</li>
            <li>Don’t leave the airport until the airline has given you a written confirmation of the hotel booking.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[#1e3a5f]">🚫 Cancellation</h4>
          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1 mt-1">
            <li>You can choose a full refund or the next available flight to your destination.</li>
            <li>While waiting, the airline must provide meals and accommodation if the re‑routed flight departs the next day or later.</li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 italic mt-2">
          Based on Nigerian Civil Aviation Authority (NCAA) Passenger Rights. Always politely ask to speak to a supervisor and reference these rights if you’re not being helped. VerixFLY does not operate flights – we’re just equipping you with information.
        </p>
      </div>
    </details>
  )
}