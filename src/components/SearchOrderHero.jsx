import React, { useState } from 'react'
import { FaSearch, FaWhatsapp, FaCamera, FaPhone, FaGooglePlay, FaApple } from 'react-icons/fa'

const SearchOrderHero = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#0A0F4A] to-[#050833] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* White Card Container */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-4 text-[#9CA3AF] text-xl" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Medicines…"
                  className="w-full pl-12 pr-32 py-4 text-base sm:text-lg border-2 border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#0D9488] text-[#111827] placeholder-[#9CA3AF]"
                />
                <button
                  type="submit"
                  className="absolute right-2 bg-[#0D9488] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0F766E] transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Alternate Order Options */}
            <div className="mb-8">
              <div className="text-center mb-4">
                <span className="text-sm sm:text-base text-[#9CA3AF] font-medium">
                  OR YOU CAN ORDER VIA
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* WhatsApp Button */}
                <button className="flex items-center justify-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 hover:shadow-md transition-shadow">
                  <FaWhatsapp className="text-green-500 text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-base font-medium text-[#111827]">
                    Order with WhatsApp
                  </span>
                </button>

                {/* Scan Rx Button */}
                <button className="flex items-center justify-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 hover:shadow-md transition-shadow">
                  <FaCamera className="text-blue-500 text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-base font-medium text-[#111827]">
                    Scan Rx
                  </span>
                </button>

                {/* Call us Button */}
                <button className="flex items-center justify-center gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 hover:shadow-md transition-shadow">
                  <FaPhone className="text-teal-500 text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-base font-medium text-[#111827]">
                    Call us to Order
                  </span>
                </button>
              </div>
            </div>

            {/* Offer Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Card - App Offer */}
              <div className="relative overflow-hidden border-2 border-[#BFDBFE] rounded-xl p-5 sm:p-6 bg-white">
                {/* Decorative percentage icon watermark */}
                <div className="absolute top-2 right-2 text-6xl sm:text-7xl font-extrabold text-[#BFDBFE] opacity-20 select-none">
                  25%
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    APP ONLY OFFER
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">
                    Get 25% OFF on orders above Rs 1000
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4">
                    on medicine & healthcare
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <button className="bg-[#DBEAFE] text-[#2563EB] font-medium px-5 py-2.5 rounded-lg hover:bg-[#BFDBFE] transition-colors flex items-center gap-2">
                      Install App
                      <div className="flex items-center gap-1">
                        <FaGooglePlay className="text-sm" />
                        <FaApple className="text-sm" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Card - Website Offer */}
              <div className="relative overflow-hidden border-2 border-[#FECACA] rounded-xl p-5 sm:p-6 bg-white">
                {/* Decorative offer icon watermark */}
                <div className="absolute top-2 right-2 text-5xl sm:text-6xl text-[#FECACA] opacity-20 select-none">
                  🎁
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block bg-[#EF4444] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    WEBSITE OFFER
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">
                    Get Extra 25% off on CIPLA products on your first order
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4">
                    Order CIPLA products to get Extra 25% off.
                  </p>
                  <div className="inline-block bg-[#FEE2E2] text-[#EF4444] font-semibold text-sm px-4 py-2 rounded-full">
                    CODE: CIPLAJAN25
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchOrderHero
