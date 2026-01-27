import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaTruck, FaShieldAlt, FaPills, FaHeartbeat } from 'react-icons/fa'

const Hero = () => {
  const slides = [
    {
      id: 1,
      label: 'Emotion',
      title: 'Dawa Bhi • Dua Bhi',
      subtitle: 'Har dawa ke saath, har maa ki dua ka bharosa',
      description: 'Maa Dulari Pharmacy – jahaan sirf medicine nahi, parivaar jaisa khayal bhi milta hai.',
      image: 'bg-gradient-to-r from-blue-600 to-teal-600',
      icon: <FaTruck className="text-6xl text-white" />,
    },
    {
      id: 2,
      label: 'Trust',
      title: 'Bharosa Har Dawa Mein',
      subtitle: '60 minutes* mein aapke darwaze par dawa',
      description: 'Fast, reliable delivery from trusted local pharmacies so you never have to stand in line again.',
      image: 'bg-gradient-to-r from-teal-600 to-blue-600',
      icon: <FaShieldAlt className="text-6xl text-white" />,
    },
    {
      id: 3,
      label: 'Professional',
      title: 'Trusted Medicines with Care',
      subtitle: 'Experienced team, professional guidance, and careful handling',
      description:
        'From prescription check to doorstep delivery, every step is monitored so you and your family always get the right medicine with the right care.',
      image: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      icon: <FaPills className="text-6xl text-white" />,
    },
  ]

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`${slide.image} h-full flex items-center`}>
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
                      <div className="text-4xl md:text-6xl">{slide.icon}</div>
                    </div>
                    {slide.label && (
                      <div className="inline-flex items-center px-4 py-1 mb-3 rounded-full bg-white/90 text-blue-700 text-xs sm:text-sm font-semibold shadow-sm">
                        {slide.label}
                      </div>
                    )}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 opacity-90">
                      {slide.subtitle}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg mb-6 opacity-80">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Order Now
                      </button>
                      <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        Flat 20% Off + Super Fast Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
