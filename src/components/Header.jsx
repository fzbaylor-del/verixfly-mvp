export default function Header() {
  return (
    <header className="bg-[#1e3a5f] text-white px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">✈️</span>
        <h1 className="text-xl font-bold tracking-wide">VerixFLY</h1>
      </div>
      <button className="text-2xl" aria-label="Open menu">
        &#9776;
      </button>
    </header>
  )
}