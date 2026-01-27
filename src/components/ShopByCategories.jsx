import React, { useState, useEffect, useRef } from 'react'
import { FaSnowflake, FaCapsules, FaHeart, FaBaby, FaWheelchair, FaDumbbell, FaHeartbeat, FaLeaf, FaAppleAlt, FaStethoscope, FaEye, FaFlask, FaBandAid, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ShopByCategories = () => {
  const scrollContainerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const categories = [
    { name: 'Winter Store', icon: FaSnowflake, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50' },
    { name: 'Vitamin Store', icon: FaCapsules, color: 'from-teal-500 to-cyan-500', bgColor: 'bg-teal-50' },
    { name: 'Sexual Wellness', icon: FaHeart, color: 'from-blue-500 to-teal-500', bgColor: 'bg-blue-50' },
    { name: 'Personal Care', icon: FaFlask, color: 'from-cyan-500 to-teal-500', bgColor: 'bg-cyan-50' },
    { name: 'Health Concerns', icon: FaStethoscope, color: 'from-teal-500 to-green-500', bgColor: 'bg-teal-50' },
    { name: 'Health Food & Drinks', icon: FaAppleAlt, color: 'from-green-500 to-teal-500', bgColor: 'bg-green-50' },
    { name: 'Diabetes Essentials', icon: FaHeartbeat, color: 'from-blue-600 to-teal-600', bgColor: 'bg-blue-50' },
    { name: 'Heart Care', icon: FaHeartbeat, color: 'from-teal-600 to-cyan-600', bgColor: 'bg-teal-50' },
    { name: 'Ayurvedic Care', icon: FaLeaf, color: 'from-green-500 to-teal-500', bgColor: 'bg-green-50' },
    { name: 'Mother & Baby Care', icon: FaBaby, color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-50' },
    { name: 'Mobility & Elderly Care', icon: FaWheelchair, color: 'from-teal-500 to-blue-500', bgColor: 'bg-teal-50' },
    { name: 'Sports Nutrition', icon: FaDumbbell, color: 'from-blue-500 to-teal-500', bgColor: 'bg-blue-50' },
    { name: 'Healthcare Devices', icon: FaStethoscope, color: 'from-teal-600 to-cyan-600', bgColor: 'bg-teal-50' },
    { name: 'Skin Care', icon: FaBandAid, color: 'from-cyan-500 to-teal-500', bgColor: 'bg-cyan-50' },
    { name: 'Eye Care', icon: FaEye, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50' },
    { name: 'Explore More', icon: FaCapsules, color: 'from-teal-500 to-blue-500', bgColor: 'bg-teal-50' },
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || isPaused) return

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [isPaused])

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">Shop by Categories</h2>
            <p className="text-gray-600 text-sm sm:text-base">Must haves for your health and wellness</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="flex-shrink-0 w-36 sm:w-40 md:w-48 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform`}>
                  <IconComponent />
                </div>
                <h3 className="text-center font-bold text-gray-800 text-sm sm:text-base md:text-lg group-hover:text-gray-900 transition-colors">
                  {category.name}
                </h3>
                <div className="mt-3 sm:mt-4 text-center">
                  <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700">Shop Now →</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategories
