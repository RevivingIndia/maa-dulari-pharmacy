import React, { useState, useEffect } from 'react'
import { FaClock, FaShoppingCart, FaTag } from 'react-icons/fa'

const DealsOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 30, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const deals = [
    { id: 1, name: 'Complete Health Package', price: '₹1,999', originalPrice: '₹2,999', discount: '33%', image: '📦', tag: 'Best Deal' },
    { id: 2, name: 'Diabetes Care Combo', price: '₹899', originalPrice: '₹1,299', discount: '31%', image: '💉', tag: 'Hot' },
    { id: 3, name: 'Winter Wellness Kit', price: '₹599', originalPrice: '₹899', discount: '33%', image: '❄️', tag: 'New' },
    { id: 4, name: 'Family Health Pack', price: '₹1,499', originalPrice: '₹2,199', discount: '32%', image: '👨‍👩‍👧‍👦', tag: 'Popular' },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 medical-bg-pattern relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2 mb-2">
              <FaTag className="text-teal-600 text-xl sm:text-2xl" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Deals of the Day</h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">Limited time offers - Don't miss out!</p>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 bg-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg shadow-md w-full md:w-auto justify-center md:justify-start">
            <FaClock className="text-teal-600 text-lg sm:text-xl" />
            <div className="flex gap-1 sm:gap-2">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Hours</div>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">:</span>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Minutes</div>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">:</span>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-teal-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-teal-600 text-white px-2 sm:px-3 md:px-4 py-1 rounded-bl-lg text-xs sm:text-sm font-bold">
                {deal.tag}
              </div>
              
              <div className="relative mb-3 sm:mb-4">
                <div className="w-full h-32 sm:h-36 md:h-40 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
                  {deal.image}
                </div>
                <div className="absolute -top-2 -right-2 bg-teal-600 text-white text-sm sm:text-base md:text-lg font-bold px-2 sm:px-3 py-1 rounded-full">
                  {deal.discount} OFF
                </div>
              </div>
              
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                {deal.name}
              </h3>
              
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="font-bold text-xl sm:text-2xl text-gray-800">{deal.price}</span>
                <span className="text-sm sm:text-base md:text-lg text-gray-400 line-through">{deal.originalPrice}</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl">
                <FaShoppingCart />
                <span>Buy Now</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DealsOfTheDay
