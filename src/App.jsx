import HeroSection from './components/hero/HeroSection'
import OutroSection from './components/OutroSection'

/**
 * Page composition only — all hero markup, copy, and animation logic
 * live in their respective modules (see src/components, src/hooks,
 * src/animations, src/data, src/lib).
 */
function App() {
  return (
    <div className="bg-neutral-950 text-white">
      <HeroSection />
      <OutroSection />
    </div>
  )
}

export default App
