import React from 'react'
import { FaWhatsapp, FaUsers, FaHandshake } from 'react-icons/fa'

const Taglines = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white medical-bg-pattern relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full px-5 py-3 shadow-sm">
                <FaUsers className="text-teal-600 text-xl sm:text-2xl" />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-teal-700">
                  Trusted by Thousands
                </span>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Bharosa Har Dawa Mein Trusted by Thousands, Order via WhatsApp
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Easy ordering through WhatsApp - Just send your prescription and get medicines delivered to your doorstep.
            </p>
          </div>

          {/* WhatsApp Order Button */}
          <div className="mt-10">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Maa%20Dulari%20Pharmacy."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg md:text-xl relative overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* WhatsApp Icon - Left */}
              <div className="relative z-10">
                <FaWhatsapp className="text-2xl sm:text-3xl md:text-4xl animate-bounce" />
              </div>
              
              {/* Button Text */}
              <span className="relative z-10">Order Now on WhatsApp</span>
              
              {/* WhatsApp Icon - Right */}
              <div className="relative z-10">
                <FaWhatsapp className="text-2xl sm:text-3xl md:text-4xl animate-bounce" />
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
            </a>
            
            {/* Helper text */}
            <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg">
              Click to chat with us instantly on WhatsApp
            </p>
          </div>

          {/* Trust Badge (removed as per request) */}
        </div>
      </div>
    </section>
  )
}

export default Taglines
