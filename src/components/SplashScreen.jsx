export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1e3a5f]">
      {/* Plane flying across */}
      <div className="animate-flyAcross mb-8 text-5xl">✈️</div>

      {/* Brand name */}
      <h1 className="text-5xl font-extrabold text-white tracking-wide">
        Verix<span className="text-[#f97316]">FLY</span>
      </h1>
      <p className="mt-4 text-lg text-white/70">Real Prices, No Surprises</p>
    </div>
  )
}