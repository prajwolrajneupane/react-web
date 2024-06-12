import HeroSection from "./components/heroSection"
import Navbar from "./components/navbar"
import FeatureSection from "./components/FeatureSection"
import Workflow from "./components/Workflow"
import Footer from "./components/Footer"
export default function App() {

  return (
<>
<Navbar/>
<div className="max-w-7xl mx-auto pt-20 px-6">
  
<HeroSection/>
<FeatureSection/>
<Workflow/>
<Footer/>
</div>
</>
  )
}