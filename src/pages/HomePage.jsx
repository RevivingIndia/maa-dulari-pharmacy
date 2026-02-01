import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeroTrustSection from '../components/HeroTrustSection'
import SearchOrderHero from '../components/SearchOrderHero'
import TestimonialsSection from '../components/TestimonialsSection'
import PanIndiaSection from '../components/PanIndiaSection'
import OurPromiseToYou from '../components/OurPromiseToYou'
import TrustedByFamilies from '../components/TrustedByFamilies'
import WhyChooseUs from '../components/WhyChooseUs'
import PartnerFranchiseSection from '../components/PartnerFranchiseSection'
import BlogNewsSection from '../components/BlogNewsSection'
import MobileOrderGuide from '../components/MobileOrderGuide'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <HeroTrustSection />
      <TrustedByFamilies />
      <TestimonialsSection />
      <PanIndiaSection />
      <OurPromiseToYou />
      <WhyChooseUs />
      <PartnerFranchiseSection />
      <BlogNewsSection />
      <SearchOrderHero />
      <MobileOrderGuide />
      <Footer />
    </div>
  )
}

export default HomePage
