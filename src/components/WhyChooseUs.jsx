import React from 'react'
import { FaWhatsapp, FaCheckCircle, FaTruck } from 'react-icons/fa'

const steps = [
  {
    number: 1,
    icon: FaWhatsapp,
    iconBg: 'bg-[#e7f9ef]',
    iconColor: 'text-[#22c55e]',
    title: 'Send Your Prescription',
    description: 'Share your prescription or medicine list via WhatsApp.',
  },
  {
    number: 2,
    icon: FaCheckCircle,
    iconBg: 'bg-[#eef0f5]',
    iconColor: 'text-[#1b1642]',
    title: 'Confirm Your Order',
    description: 'Provide your delivery address and confirm the order details.',
  },
  {
    number: 3,
    icon: FaTruck,
    iconBg: 'bg-[#fff1e8]',
    iconColor: 'text-[#fb923c]',
    title: 'Receive Your Medicines',
    description: 'Get your order delivered to your doorstep, anywhere in India.',
  },
]

const WhyChooseUs = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-[90px] px-4 sm:px-6 bg-[#fafaff] text-center"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Badge */}
        <span className="inline-block bg-[#1b1642] text-white py-2 px-[18px] rounded-[20px] text-[13px] font-semibold mb-4">
          SIMPLE PROCESS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#1b1642] mb-2.5">
          How to Order
        </h2>
        <p className="text-base text-[#6b7280] mb-12 sm:mb-14 md:mb-[60px]">
          Get your medicines in just 3 easy steps
        </p>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[30px] relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="bg-white p-8 sm:p-10 md:py-10 md:px-6 rounded-[20px] relative shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-full">
                  {/* Step number badge - top right */}
                  <span className="absolute -top-3.5 -right-3.5 w-8 h-8 rounded-full bg-[#1b1642] text-white text-sm font-semibold flex items-center justify-center">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center ${step.iconBg} ${step.iconColor}`}
                  >
                    <IconComponent className="text-2xl" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#1b1642] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[#6b7280] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - desktop only, hidden on last card */}
                  {index < steps.length - 1 && (
                    <span
                      className="absolute hidden md:block top-1/2 -translate-y-1/2 text-[#1b1642] text-2xl font-bold"
                      style={{ right: '-22px' }}
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
