import React from 'react'
import { FaTag, FaShieldAlt, FaUndoAlt } from 'react-icons/fa'

const promises = [
  {
    id: 1,
    title: 'Flat 20% Off',
    description: 'Get instant 20% discount on all medicines with absolutely no minimum order value',
    icon: <FaTag className="text-2xl md:text-3xl text-white" />,
    number: '01',
  },
  {
    id: 2,
    title: 'Genuine Medicine',
    description: '100% authentic medicines directly sourced from licensed manufacturers and trusted suppliers',
    icon: <FaShieldAlt className="text-2xl md:text-3xl text-white" />,
    number: '02',
  },
  {
    id: 3,
    title: 'Easy Return',
    description: 'Simple and hassle-free return process with full refund guarantee for your peace of mind',
    icon: <FaUndoAlt className="text-2xl md:text-3xl text-white" />,
    number: '03',
  },
]

const OurPromiseToYou = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0A0F4A] to-[#050833] py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center justify-center rounded-full bg-white px-4 sm:px-5 py-1.5 sm:py-2 mb-5 shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#0A0F4A]">
              Our Commitment
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Promise to You
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#B8C1EC]">
            Three simple promises that make us your trusted healthcare partner
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-3">
          {promises.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[#070B3F]/80 px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8 hover:border-white/25 transition-colors duration-200"
            >
              {/* Large background number */}
              <div className="pointer-events-none absolute top-3 right-4 sm:top-4 sm:right-5 md:top-5 md:right-6 text-5xl sm:text-6xl md:text-7xl font-extrabold text-white/10 select-none">
                {item.number}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-4 sm:mb-5">
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 p-3 sm:p-3.5 md:p-4">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm sm:text-base text-[#B8C1EC] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPromiseToYou

