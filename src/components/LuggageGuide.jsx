import airportBaggageTips from '../data/airportBaggageTips.json'

export default function LuggageGuide({ from, to }) {
  // Look up tips for the arrival airport (destination); fallback to a generic message if airport not in file
  const arrivalTips = airportBaggageTips[to] || {
    claimArea: "Follow signs to Baggage Claim after you exit the aircraft. Look for your flight number on the screens.",
    lostAndFound: "Go to the airline's Baggage Services counter near the baggage claim area."
  }

  return (
    <details className="mt-6 bg-white border border-gray-200 rounded-xl p-5 max-w-md mx-auto">
      <summary className="font-bold text-[#1e3a5f] text-lg cursor-pointer list-none flex items-center gap-2">
        <span>🧳</span> Baggage Claim Guide
        <span className="ml-auto text-xs text-gray-500">Tap to expand</span>
      </summary>

      <div className="mt-3 text-sm text-gray-700 space-y-3">
        {/* Airport‑specific arrival info */}
        <div>
          <h4 className="font-medium text-[#1e3a5f]">📍 Arriving at {to || 'your destination'}</h4>
          <p className="text-xs text-gray-600 mt-1">{arrivalTips.claimArea}</p>
        </div>

        <div>
          <h4 className="font-medium text-[#1e3a5f]">🆘 If your bag doesn't show up</h4>
          <p className="text-xs text-gray-600 mt-1">{arrivalTips.lostAndFound}</p>
        </div>

        {/* General steps (still helpful) */}
        <div>
          <h4 className="font-medium text-[#1e3a5f]">📋 General Steps for Missing Bags</h4>
          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1 mt-1">
            <li>Go to the airline's <strong>Baggage Services counter</strong> (near the carousels).</li>
            <li>Show them your luggage receipt (stuck on your boarding pass or ticket).</li>
            <li>Fill out a <strong>Property Irregularity Report (PIR)</strong> – they must give you a reference number.</li>
            <li>Keep all receipts for essential items you buy – the airline may reimburse you.</li>
          </ul>
        </div>

        {/* Complaint template */}
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <h4 className="font-medium text-[#1e3a5f] text-xs uppercase tracking-wide mb-1">
            📋 Missing Bag Complaint Template
          </h4>
          <p className="text-xs text-gray-500 italic">
            Copy and paste this, fill in your details, and hand it to the Baggage Services agent.
          </p>
          <div className="mt-2 p-3 bg-white border border-gray-300 rounded text-xs font-mono text-gray-700 whitespace-pre-wrap">
{`To: [Airline Name] Baggage Services

I, [Your Full Name], was on flight [Flight Number] from [Origin] to [Destination] on [Date]. My bag tag number is [Tag Number].

My bag has not arrived. I am filing a Property Irregularity Report. Please provide me with a reference number and a timeline for when I should expect the bag.

I also request written confirmation of my rights to purchase essential items while I wait.

Thank you.

Signature: _______________
Date: _______________`}
          </div>
        </div>

        <p className="text-xs text-gray-400 italic mt-2">
          Information provided as a courtesy. Always verify with your airline's official policy. VerixFLY does not operate flights or handle baggage.
        </p>
      </div>
    </details>
  )
}