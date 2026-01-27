import React from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa'

const NewLaunches = () => {
  const products = [
    { id: 1, name: 'Advanced Multivitamin', price: '₹599', originalPrice: '₹799', discount: '25%', image: '💊', rating: 4.5 },
    { id: 2, name: 'Organic Honey & Turmeric', price: '₹349', originalPrice: '₹449', discount: '22%', image: '🍯', rating: 4.8 },
    { id: 3, name: 'Premium Vitamin D3', price: '₹299', originalPrice: '₹399', discount: '25%', image: '☀️', rating: 4.6 },
    { id: 4, name: 'Herbal Immunity Booster', price: '₹449', originalPrice: '₹599', discount: '25%', image: '🌿', rating: 4.7 },
    { id: 5, name: 'Protein Powder Premium', price: '₹1,299', originalPrice: '₹1,599', discount: '19%', image: '🥤', rating: 4.9 },
    { id: 6, name: 'Ayurvedic Hair Oil', price: '₹199', originalPrice: '₹249', discount: '20%', image: '💆', rating: 4.4 },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white medical-bg-heartbeat relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">New Launches</h2>
            <p className="text-gray-600 text-sm sm:text-base">Latest products just for you</p>
          </div>
          <button className="hidden md:block px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="relative mb-2 sm:mb-3">
                <div className="w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
                  {product.image}
                </div>
                <span className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-teal-600 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  {product.discount} OFF
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors min-h-[2.5rem] sm:min-h-[3rem]">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-1 sm:mb-2">
                <FaStar className="text-yellow-400 text-[10px] sm:text-xs" />
                <span className="text-[10px] sm:text-xs text-gray-600">{product.rating}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                <span className="font-bold text-gray-800 text-sm sm:text-base">{product.price}</span>
                <span className="text-[10px] sm:text-xs text-gray-400 line-through">{product.originalPrice}</span>
              </div>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
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

export default NewLaunches
