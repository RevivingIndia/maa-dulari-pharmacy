import React from 'react'
import { FaFire, FaShoppingCart, FaStar } from 'react-icons/fa'

const TrendingNearYou = () => {
  const trendingProducts = [
    { id: 1, name: 'Cough Syrup Premium', price: '₹149', image: '🍯', rating: 4.6, trending: true },
    { id: 2, name: 'Pain Relief Gel', price: '₹199', image: '💊', rating: 4.7, trending: true },
    { id: 3, name: 'Vitamin C Tablets', price: '₹249', image: '🍊', rating: 4.8, trending: true },
    { id: 4, name: 'Digestive Enzymes', price: '₹299', image: '🌿', rating: 4.5, trending: false },
    { id: 5, name: 'Blood Pressure Monitor', price: '₹1,499', image: '📊', rating: 4.9, trending: true },
    { id: 6, name: 'Face Mask Pack', price: '₹99', image: '😷', rating: 4.4, trending: false },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <FaFire className="text-orange-500 text-2xl sm:text-3xl" />
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">Trending Near You</h2>
              <p className="text-gray-600 text-sm sm:text-base">Popular in your city</p>
            </div>
          </div>
          <button className="hidden md:block px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group relative"
            >
              {product.trending && (
                <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-orange-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-0.5 sm:gap-1">
                  <FaFire className="text-[8px] sm:text-xs" />
                  <span className="hidden sm:inline">Trending</span>
                </div>
              )}
              
              <div className="relative mb-2 sm:mb-3">
                <div className="w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
                  {product.image}
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors min-h-[2.5rem] sm:min-h-[3rem]">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-1 sm:mb-2">
                <FaStar className="text-yellow-400 text-[10px] sm:text-xs" />
                <span className="text-[10px] sm:text-xs text-gray-600">{product.rating}</span>
              </div>
              
              <div className="mb-2 sm:mb-3">
                <span className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">{product.price}</span>
              </div>
              
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <FaShoppingCart className="text-xs sm:text-sm" />
                <span className="hidden sm:inline">Add to Cart</span>
                <span className="sm:hidden">Cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingNearYou
