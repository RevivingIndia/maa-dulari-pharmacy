import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Taglines from './components/Taglines'
import SearchOrderHero from './components/SearchOrderHero'
import OurPromiseToYou from './components/OurPromiseToYou'
import TrustedByFamilies from './components/TrustedByFamilies'
import WhatsAppOrder from './components/WhatsAppOrder'
import WhyChooseUs from './components/WhyChooseUs'
import CustomerReviews from './components/CustomerReviews'
import MobileOrderGuide from './components/MobileOrderGuide'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Taglines />
      <OurPromiseToYou />
      <TrustedByFamilies />
      <WhatsAppOrder />
      <WhyChooseUs />
      <CustomerReviews />
      <SearchOrderHero />
      <MobileOrderGuide />
      <Footer />
    </div>
  )
}

export default App
