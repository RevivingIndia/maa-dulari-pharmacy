import React from 'react'
import { FaHeart, FaHandshake, FaHospital, FaShieldAlt, FaWhatsapp } from 'react-icons/fa'

const Taglines = () => {
  const taglines = [
    {
      icon: FaHeart,
      iconColor: 'text-red-500',
      bgGradient: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      title: 'Dawa Bhi • Dua Bhi',
      subtitle: 'Emotion',
      description: 'Medicines with care and compassion',
      hindi: 'दवा भी • दुआ भी',
    },
    {
      icon: FaHandshake,
      iconColor: 'text-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      title: 'Bharosa Har Dawa Mein',
      subtitle: 'Trust',
      description: 'Trust in every medicine we deliver',
      hindi: 'भरोसा हर दवा में',
    },
    {
      icon: FaShieldAlt,
      iconColor: 'text-green-600',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      title: 'Trusted Medicines with Care',
      subtitle: 'Professional',
      description: 'Professional healthcare services you can rely on',
      hindi: 'विश्वसनीय दवाएं देखभाल के साथ',
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white medical-bg-pattern relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4">
            Our Promise to You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Three pillars that define our commitment to your health and wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {taglines.map((tagline, index) => {
            const IconComponent = tagline.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-200 overflow-hidden"
                style={{
                  animation: `fade-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Decorative background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tagline.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`relative p-4 rounded-full bg-gradient-to-br ${tagline.bgGradient} border-2 ${tagline.borderColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`text-5xl ${tagline.iconColor} relative z-10`}
                      />
                      {/* Pulsing ring effect */}
                      <div
                        className={`absolute inset-0 rounded-full ${tagline.bgGradient} animate-ping opacity-20`}
                      />
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="text-center mb-3">
                    <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-gray-600 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      {tagline.subtitle}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center group-hover:text-gray-900 transition-colors">
                    {tagline.title}
                  </h3>

                  {/* Hindi Text */}
                  <p className="text-xl text-gray-700 mb-4 text-center font-medium">
                    {tagline.hindi}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed">
                    {tagline.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 flex justify-center">
                    <div
                      className={`h-1 w-16 bg-gradient-to-r ${tagline.bgGradient} rounded-full group-hover:w-24 transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tagline.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full`}
                />
              </div>
            )
          })}
        </div>

        {/* WhatsApp Order Button */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Dulari%20Healthcare."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg md:text-xl relative overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* WhatsApp Icon - Left */}
            <div className="relative z-10">
              <FaWhatsapp className="text-3xl md:text-4xl animate-bounce" />
            </div>
            
            {/* Button Text */}
            <span className="relative z-10">Order Now on WhatsApp</span>
            
            {/* WhatsApp Icon - Right */}
            <div className="relative z-10">
              <FaWhatsapp className="text-3xl md:text-4xl animate-bounce" />
            </div>
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
          </a>
          
          {/* Helper text */}
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Click to chat with us instantly on WhatsApp
          </p>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-50 via-green-50 to-red-50 rounded-full border-2 border-gray-200">
            <FaHeart className="text-red-500 text-2xl animate-pulse" />
            <span className="text-lg font-semibold text-gray-700">
              Serving with Heart, Trust, and Professionalism
            </span>
            <FaShieldAlt className="text-green-500 text-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Taglines
