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
      title: 'Get Medicines in 60 Minutes',
      subtitle: 'Fast delivery from trusted local pharmacies',
      description: 'Order now and get 35% off on your first order',
      image: 'bg-gradient-to-r from-blue-500 to-green-500',
      icon: <FaTruck className="text-6xl text-white" />,
    },
    {
      id: 2,
      title: 'Trusted Medicines with Care',
      subtitle: '100% Genuine Products',
      description: 'FDA approved medicines from top manufacturers',
      image: 'bg-gradient-to-r from-green-500 to-blue-500',
      icon: <FaShieldAlt className="text-6xl text-white" />,
    },
    {
      id: 3,
      title: 'Over 25,000 Health Products',
      subtitle: 'One App, Many Benefits',
      description: 'Medicines, wellness products, and healthcare essentials',
      image: 'bg-gradient-to-r from-purple-500 to-pink-500',
      icon: <FaPills className="text-6xl text-white" />,
    },
    {
      id: 4,
      title: 'Your Health, Our Priority',
      subtitle: 'Professional Healthcare Services',
      description: 'Expert guidance and care for all your health needs',
      image: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      icon: <FaHeartbeat className="text-6xl text-white" />,
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
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
                      <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center">
                      <div className="text-6xl font-bold text-white mb-2">60</div>
                      <div className="text-2xl text-white">Minutes Delivery</div>
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
