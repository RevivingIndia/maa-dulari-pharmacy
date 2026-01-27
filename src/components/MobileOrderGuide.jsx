import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaHeart, FaHandshake, FaShieldAlt, FaChevronRight } from 'react-icons/fa'

const MobileOrderGuide = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'Open WhatsApp',
      description: 'Click on the WhatsApp button',
      icon: FaWhatsapp,
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Send Prescription',
      description: 'Share your prescription or medicine list',
      icon: FaWhatsapp,
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Get Confirmation',
      description: 'Our team confirms your order',
      icon: FaHandshake,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Fast Delivery',
      description: 'Receive medicines at your doorstep',
      icon: FaShieldAlt,
      color: 'from-teal-500 to-teal-600',
    },
  ]

  const taglines = [
    { icon: FaHeart, text: 'Dawa Bhi • Dua Bhi', subtext: 'Medicines with care and compassion', color: 'text-blue-600' },
    { icon: FaHandshake, text: 'Bharosa Har Dawa Mein', subtext: 'Trust in every medicine we deliver', color: 'text-teal-600' },
    { icon: FaShieldAlt, text: 'Trusted Medicines with Care', subtext: 'Professional healthcare services', color: 'text-cyan-600' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-white md:hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Order in 3 Simple Steps</h2>
          <p className="text-gray-600">Quick and easy ordering via WhatsApp</p>
        </div>

        {/* Steps Carousel */}
        <div className="relative mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = index === currentStep
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                  }`}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-4xl shadow-lg`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              )
            })}
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep ? 'bg-green-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Taglines */}
        <div className="space-y-4 mb-8">
          {taglines.map((tagline, index) => {
            const IconComponent = tagline.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4"
                style={{
                  animation: `fade-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                }}
              >
                <div className={`${tagline.color} text-3xl`}>
                  <IconComponent />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800">{tagline.text}</div>
                  <div className="text-sm text-gray-600">{tagline.subtext}</div>
                </div>
                <FaChevronRight className="text-gray-400" />
              </div>
            )
          })}
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Dulari%20Healthcare."
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-3"
        >
          <FaWhatsapp className="text-3xl animate-bounce" />
          <span className="text-lg">Order Now on WhatsApp</span>
        </a>
      </div>
    </section>
  )
}

export default MobileOrderGuide
