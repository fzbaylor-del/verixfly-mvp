// Helper to generate a price that varies based on city names
function generatePrice(base, variance) {
  return Math.round(base + Math.random() * variance)
}

export async function searchFlights({ from, to, departureDate }) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1200))

  // Make prices vary based on the route
  const routeKey = `${from}-${to}`.toLowerCase()
  
  // Base prices for some example routes (in Naira)
  const routePricing = {
    'los-abv': { base: 65000, variance: 20000 },
    'los-kan': { base: 72000, variance: 25000 },
    'los-phc': { base: 80000, variance: 30000 },
    'abv-los': { base: 68000, variance: 20000 },
    'abv-kan': { base: 45000, variance: 15000 },
  }

  const pricing = routePricing[routeKey] || { base: 70000, variance: 30000 }
  const airlines = ['Air Peace', 'Green Africa', 'Ibom Air', 'Dana Air']

  // Generate 3-5 random flights
  const numFlights = 3 + Math.floor(Math.random() * 3)
  const flights = []

  for (let i = 0; i < numFlights; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)]
    const baseFare = generatePrice(pricing.base, pricing.variance)
    const taxes = Math.round(baseFare * 0.12)  // ~12% tax
    const baggage = Math.round(baseFare * 0.18) // ~18% for baggage
    const total = baseFare + taxes + baggage

    // Random departure time between 6am and 10pm
    const depHour = 6 + Math.floor(Math.random() * 16)
    const depMinute = Math.floor(Math.random() * 4) * 15 // 0,15,30,45
    const departure = `${String(depHour).padStart(2, '0')}:${String(depMinute).padStart(2, '0')}`
    
    // Flight duration 1h-2h
    const durationHours = 1 + Math.floor(Math.random() * 1)
    const durationMinutes = Math.floor(Math.random() * 60)
    const duration = `PT${durationHours}H${durationMinutes}M`

    // Arrival time
    const arrHour = depHour + durationHours + Math.floor((depMinute + durationMinutes) / 60)
    const arrMinute = (depMinute + durationMinutes) % 60
    const arrival = `${String(arrHour % 24).padStart(2, '0')}:${String(arrMinute).padStart(2, '0')}`

    flights.push({
      id: `sim-${routeKey}-${i}-${Date.now()}`,
      airline: airline,
      departure: departure,
      arrival: arrival,
      duration: duration.replace('PT', '').toLowerCase(),
      baseFare,
      taxes,
      baggage,
      total,
      stops: Math.random() < 0.2 ? 1 : 0, // 20% chance of a stop
    })
  }

  // Sort by total price
  flights.sort((a, b) => a.total - b.total)
  return flights
}