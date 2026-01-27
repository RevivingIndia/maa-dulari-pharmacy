import React from 'react'
import { FaShieldAlt, FaTruck, FaClock, FaUserMd, FaAward, FaHeadset } from 'react-icons/fa'

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: '100% Authentic Products',
      description: 'All medicines are verified and authentic, sourced directly from licensed manufacturers',
      color: 'from-blue-600 to-teal-600',
    },
    {
      icon: FaTruck,
      title: 'Fast & Free Delivery',
      description: 'Quick delivery across 1200+ cities. Free delivery on orders above ₹500',
      color: 'from-teal-600 to-green-600',
    },
    {
      icon: FaClock,
      title: '24/7 Availability',
      description: 'Order anytime, anywhere. Our services are available round the clock',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: FaUserMd,
      title: 'Expert Consultation',
      description: 'Free consultation with qualified pharmacists and healthcare experts',
      color: 'from-teal-600 to-blue-600',
    },
    {
      icon: FaAward,
      title: 'Trusted by Millions',
      description: 'Serving millions of customers with care and compassion since years',
      color: 'from-cyan-600 to-teal-600',
    },
    {
      icon: FaHeadset,
      title: '24/7 Customer Support',
      description: 'Dedicated customer support team ready to help you anytime',
      color: 'from-blue-600 to-teal-600',
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-[#0A0F4A] to-[#050833] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Why Choose Us?
          </h2>
          <p className="text-[#B8C1EC] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We are committed to providing the best healthcare services with trust, care, and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-[#070B3F]/80 rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[rgba(255,255,255,0.15)] group"
                style={{
                  animation: `fade-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-3xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#B8C1EC] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
