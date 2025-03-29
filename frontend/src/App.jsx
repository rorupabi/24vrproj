import Navbar from '../src/callComponents/navbar.jsx'
import HeroSection from './components/heroSection.jsx'
import FeaturesSection from './components/featuresSection.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-start">
        <HeroSection />
      </div>
      <FeaturesSection />
    </>
  )
}

export default App
