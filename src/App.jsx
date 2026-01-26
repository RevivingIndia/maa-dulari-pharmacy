import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import DeliveryMap from './components/DeliveryMap'
import WhatsAppOrder from './components/WhatsAppOrder'
import Taglines from './components/Taglines'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Taglines />
      <Categories />
      <DeliveryMap />
      <WhatsAppOrder />
    </div>
  )
}

export default App
