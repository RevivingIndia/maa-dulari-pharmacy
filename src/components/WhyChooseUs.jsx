import React from 'react'
import { FaShieldAlt, FaTruck, FaClock, FaUserMd, FaAward, FaHeadset } from 'react-icons/fa'

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: '100% Authentic Products',
      description: 'All medicines are verified and authentic, sourced directly from licensed manufacturers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaTruck,
      title: 'Fast & Free Delivery',
      description: 'Quick delivery across 1200+ cities. Free delivery on orders above ₹500',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaClock,
      title: '24/7 Availability',
      description: 'Order anytime, anywhere. Our services are available round the clock',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaUserMd,
      title: 'Expert Consultation',
      description: 'Free consultation with qualified pharmacists and healthcare experts',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: FaAward,
      title: 'Trusted by Millions',
      description: 'Serving millions of customers with care and compassion since years',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: FaHeadset,
      title: '24/7 Customer Support',
      description: 'Dedicated customer support team ready to help you anytime',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 medical-bg-pattern relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4">Why Choose Us?</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            We are committed to providing the best healthcare services with trust, care, and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                style={{
                  animation: `fade-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
