export default function TrustBadge() {
  return (
    <div className="flex justify-center items-center mt-6 px-4">
      <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center gap-2">
        <span className="text-[#1e3a5f] text-lg">🛡️</span>
        <p className="text-sm font-medium text-gray-700">
          All-in price shown from the start. No hidden fees.
        </p>
      </div>
    </div>
  )
}