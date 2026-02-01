import React from 'react'
import { FaUsers } from 'react-icons/fa'

const HeroTrustSection = () => {
  return (
    <section
      className="bg-white pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-5 md:px-6 flex justify-center text-center"
      style={{ fontFamily: "'Inter', 'Poppins', 'Roboto', sans-serif" }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Trust Badge - rounded pill, icon left */}
        <div className="inline-flex items-center gap-2 bg-[#f1f0ff] text-[#3b5bdb] py-2 px-4 rounded-full text-sm font-semibold mb-6">
          <FaUsers className="text-base flex-shrink-0" aria-hidden />
          <span>Trusted by Thousands</span>
        </div>

        {/* Main Heading - matches Our Promise navy (#0A0F4A) */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A0F4A] mb-5 leading-tight">
          Trusted by Thousands, Order via WhatsApp
        </h1>

        {/* Sub heading - muted gray */}
        <p className="text-base sm:text-lg md:text-[19px] text-[#6b7280] max-w-[760px] mx-auto leading-relaxed max-md:px-0">
          Easy ordering through WhatsApp – Just send your prescription and get
          medicines delivered to your doorstep.
        </p>
      </div>
    </section>
  )
}

export default HeroTrustSection
