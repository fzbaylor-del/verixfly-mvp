export default function Header() {
  return (
    <header className="bg-[#1e3a5f] text-white px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">✈️</span>
        <h1 className="text-xl font-bold tracking-wide">Verix<span className="text-[#f97316]">FLY</span></h1>
      </div>
    </header>
  )
}