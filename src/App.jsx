import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Taglines from './components/Taglines'
import Categories from './components/Categories'
import DeliveryMap from './components/DeliveryMap'
import WhatsAppOrder from './components/WhatsAppOrder'
import ShopByCategories from './components/ShopByCategories'
import NewLaunches from './components/NewLaunches'
import TrendingNearYou from './components/TrendingNearYou'
import DealsOfTheDay from './components/DealsOfTheDay'
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
      <Categories />
      <DeliveryMap />
      <WhatsAppOrder />
      <ShopByCategories />
      <NewLaunches />
      <TrendingNearYou />
      <DealsOfTheDay />
      <WhyChooseUs />
      <CustomerReviews />
      <MobileOrderGuide />
      <Footer />
    </div>
  )
}

export default App
