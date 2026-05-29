import heroBg from '../assets/Hero.jpg';  // Adjust the relative path of the image later

export default function Hero() {
  return (
    <section 
      className="relative px-6 pt-16 pb-24 text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark over the img so i can read my texts */}
      <div className="absolute inset-0 bg-[#1e3a5f]/70"></div>

      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
          Real Prices, No Surprises
        </h1>
        <p className="text-base md:text-lg text-white/90 max-w-md mx-auto">
          We show you the total cost upfront - base fare, taxes and baggages included
        </p>
      </div>
    </section>
  );
}