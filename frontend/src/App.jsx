import Navbar from '../src/callComponents/navbar.jsx'
import HeroSection from './components/heroSection.jsx'
import FeaturesSection from './components/featuresSection.jsx'
import CodingWorkFlow from './components/codingWorkflow.jsx'
import PricingSection from './components/pricingSection.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="">
        <HeroSection />
      </div>
      <FeaturesSection />
      <CodingWorkFlow />
      <PricingSection />
    </>
  )
}

export default App
