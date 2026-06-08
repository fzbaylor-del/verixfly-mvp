import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import SplashScreen from './components/SplashScreen'

function App() {
  const [splashVisible, setSplashVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false)
    }, 3500) // after 3.5 seconds, start the crossfade

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Splash screen */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
          splashVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <SplashScreen />
      </div>

      {/* Main app */}
      <div
        className={`transition-opacity duration-1000 ${
          splashVisible ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <HomePage />
      </div>
    </>
  )
}

export default App