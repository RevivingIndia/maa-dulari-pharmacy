import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaTruck, FaShieldAlt, FaPills, FaWhatsapp, FaChevronLeft, FaSearch } from 'react-icons/fa'

const MESSAGE_DELAY_MS = 2200

// Phone view – messages appear one by one
function PhoneWhatsAppView() {
  const [visibleCount, setVisibleCount] = useState(1)
  useEffect(() => {
    if (visibleCount !== 1) return
    const t2 = setTimeout(() => setVisibleCount(2), MESSAGE_DELAY_MS)
    const t3 = setTimeout(() => setVisibleCount(3), MESSAGE_DELAY_MS * 2)
    const t1 = setTimeout(() => setVisibleCount(1), MESSAGE_DELAY_MS * 3)
    return () => { clearTimeout(t2); clearTimeout(t3); clearTimeout(t1) }
  }, [visibleCount])

  return (
    <div className="animate-device-in mx-auto flex justify-center">
      <div className="relative w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] aspect-[9/19] max-h-[420px] bg-neutral-900 rounded-[2.5rem] sm:rounded-[2.75rem] p-2 sm:p-2.5 shadow-2xl border-[3px] border-neutral-700 flex flex-col">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-neutral-900 rounded-full z-20" />
        <div className="relative flex-1 rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden bg-white flex flex-col min-h-0">
          <div className="bg-[#075E54] text-white px-2.5 sm:px-3 pt-6 sm:pt-7 pb-2 sm:pb-2.5 flex items-center gap-2 flex-shrink-0">
            <FaChevronLeft className="text-sm opacity-90 flex-shrink-0" />
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <FaWhatsapp className="text-base sm:text-lg text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-sm truncate">Dulari</div>
              <div className="text-[10px] sm:text-xs text-white/80 truncate">online • dawa bhi dua bhi</div>
            </div>
          </div>
          <div className="bg-[#ECE5DD] p-2 sm:p-2.5 space-y-2 flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
            {/* Message 1 – Dulari welcome */}
            <div className="flex justify-start flex-shrink-0">
              <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm max-w-[90%] animate-bubble-in">
                <span className="text-[10px] text-gray-600 font-medium">Dulari</span>
                <p className="text-[11px] sm:text-xs text-gray-800 mt-0.5">Namaste! Order via WhatsApp 👋</p>
                <span className="text-[9px] text-gray-400 block mt-0.5">10:24 AM</span>
              </div>
            </div>
            {/* Message 2 – User */}
            {visibleCount >= 2 && (
              <div className="flex justify-end flex-shrink-0 animate-bubble-in">
                <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm max-w-[90%]">
                  <p className="text-[11px] sm:text-xs text-gray-800">Hi, I need medicines</p>
                  <span className="text-[9px] text-gray-500 block text-right mt-0.5">10:25 AM</span>
                </div>
              </div>
            )}
            {/* Message 3 – Dulari reply */}
            {visibleCount >= 3 && (
              <div className="flex justify-start flex-shrink-0 animate-bubble-in">
                <div className="bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm max-w-[90%]">
                  <p className="text-[11px] sm:text-xs text-gray-800">Send prescription. We deliver! 🚚</p>
                  <span className="text-[9px] text-gray-400 block mt-0.5">10:25 AM</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-neutral-700 rounded-full z-10" />
      </div>
    </div>
  )
}

// Tablet view – messages appear one by one
function TabletWhatsAppView() {
  const [visibleCount, setVisibleCount] = useState(1)
  useEffect(() => {
    if (visibleCount !== 1) return
    const t2 = setTimeout(() => setVisibleCount(2), MESSAGE_DELAY_MS)
    const t3 = setTimeout(() => setVisibleCount(3), MESSAGE_DELAY_MS * 2)
    const t1 = setTimeout(() => setVisibleCount(1), MESSAGE_DELAY_MS * 3)
    return () => { clearTimeout(t2); clearTimeout(t3); clearTimeout(t1) }
  }, [visibleCount])

  return (
    <div className="animate-device-in w-full max-w-[380px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[480px] mx-auto">
      <div className="bg-neutral-800 rounded-[2rem] p-4 shadow-2xl border-[8px] border-neutral-700">
        <div className="bg-white rounded-xl overflow-hidden shadow-inner flex min-h-[280px] md:min-h-[320px]">
          <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
            <div className="bg-[#075E54] text-white px-3 py-3">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                  <FaWhatsapp className="text-2xl text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm truncate">Dulari</div>
                  <div className="text-xs text-white/80">Tablet</div>
                </div>
              </div>
            </div>
            <div className="p-2 border-b border-gray-100 flex items-center gap-2 bg-gray-50">
              <FaSearch className="text-gray-400 text-sm" />
              <span className="text-xs text-gray-400">Search</span>
            </div>
            <div className="flex-1 p-2 space-y-1.5">
              <div className="bg-[#E7F5E9] rounded-lg p-2.5">
                <div className="font-medium text-xs text-gray-800">Dulari</div>
                <div className="text-[11px] text-gray-500 truncate">Send prescription. We deliver!</div>
              </div>
              <div className="rounded-lg p-2.5 hover:bg-gray-50">
                <div className="font-medium text-xs text-gray-800">Support</div>
                <div className="text-[11px] text-gray-500 truncate">We're here to help</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="bg-[#075E54] text-white px-4 py-2.5 flex items-center gap-2 border-b border-[#054D45]">
              <FaChevronLeft className="text-sm" />
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaWhatsapp className="text-lg text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-sm">Dulari</div>
                <div className="text-xs text-white/80">online</div>
              </div>
            </div>
            <div className="flex-1 bg-[#ECE5DD] p-3 space-y-3 overflow-y-auto">
              {/* Message 1 */}
              <div className="flex justify-start flex-shrink-0">
                <div className="bg-white rounded-xl rounded-tl-none px-3 py-2 shadow-sm max-w-[85%] animate-bubble-in">
                  <p className="text-xs text-gray-800">Send prescription, get medicines. Flat 20% off.</p>
                  <span className="text-[10px] text-gray-400 block mt-0.5">10:24 AM</span>
                </div>
              </div>
              {/* Message 2 */}
              {visibleCount >= 2 && (
                <div className="flex justify-end flex-shrink-0 animate-bubble-in">
                  <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none px-3 py-2 shadow-sm max-w-[85%]">
                    <p className="text-xs text-gray-800">I'll send my prescription now</p>
                    <span className="text-[10px] text-gray-500 text-right block mt-0.5">10:25 AM</span>
                  </div>
                </div>
              )}
              {/* Message 3 */}
              {visibleCount >= 3 && (
                <div className="flex justify-start flex-shrink-0 animate-bubble-in">
                  <div className="bg-white rounded-xl rounded-tl-none px-3 py-2 shadow-sm max-w-[85%]">
                    <p className="text-xs text-gray-800">✅ We'll confirm & deliver. Thank you!</p>
                    <span className="text-[10px] text-gray-400 block mt-0.5">10:25 AM</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Web/Desktop – messages appear one by one
function WebWhatsAppView() {
  const [visibleCount, setVisibleCount] = useState(1)
  useEffect(() => {
    if (visibleCount !== 1) return
    const t2 = setTimeout(() => setVisibleCount(2), MESSAGE_DELAY_MS)
    const t3 = setTimeout(() => setVisibleCount(3), MESSAGE_DELAY_MS * 2)
    const t1 = setTimeout(() => setVisibleCount(1), MESSAGE_DELAY_MS * 3)
    return () => { clearTimeout(t2); clearTimeout(t3); clearTimeout(t1) }
  }, [visibleCount])

  return (
    <div className="animate-device-in w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px] mx-auto">
      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-300">
        <div className="bg-gray-200/90 px-4 py-2.5 flex items-center gap-3 border-b border-gray-300">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-300">
            <span className="text-gray-400 text-xs">🔒</span>
            <span className="text-xs text-gray-600 truncate">web.whatsapp.com</span>
          </div>
        </div>
        <div className="flex bg-white min-h-[300px] md:min-h-[340px]">
          <div className="w-[38%] border-r border-gray-200 flex flex-col bg-white">
            <div className="bg-[#F0F2F5] px-4 py-3 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#075E54] flex items-center justify-center">
                <FaWhatsapp className="text-xl text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-800">WhatsApp</div>
                <div className="text-xs text-gray-500">Dulari – Order medicines</div>
              </div>
            </div>
            <div className="flex-1 p-3 space-y-1">
              <div className="bg-[#E7F5E9] rounded-lg p-3 flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#075E54]/20 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-[#075E54] text-base" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm text-gray-800">Dulari</div>
                  <div className="text-xs text-gray-500 truncate">Delivery in 60 mins*</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="bg-[#F0F2F5] px-4 py-2.5 flex items-center gap-3 border-b border-gray-200">
              <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center">
                <FaWhatsapp className="text-white text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-800">Dulari</div>
                <div className="text-xs text-gray-500">online • dawa bhi dua bhi</div>
              </div>
            </div>
            <div className="flex-1 bg-[#ECE5DD] p-4 space-y-3 overflow-y-auto">
              {/* Message 1 */}
              <div className="flex justify-start flex-shrink-0">
                <div className="bg-white rounded-xl rounded-tl-none px-3 py-2.5 shadow-sm max-w-[90%] animate-bubble-in">
                  <p className="text-sm text-gray-800">Welcome! Send prescription or medicine list. We deliver across India.</p>
                  <span className="text-[10px] text-gray-400 block mt-1">10:24 AM</span>
                </div>
              </div>
              {/* Message 2 */}
              {visibleCount >= 2 && (
                <div className="flex justify-end flex-shrink-0 animate-bubble-in">
                  <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none px-3 py-2.5 shadow-sm max-w-[85%]">
                    <p className="text-sm text-gray-800">Ordering for family. Prescription attached.</p>
                    <span className="text-[10px] text-gray-500 text-right block mt-1">10:25 AM</span>
                  </div>
                </div>
              )}
              {/* Message 3 */}
              {visibleCount >= 3 && (
                <div className="flex justify-start flex-shrink-0 animate-bubble-in">
                  <div className="bg-white rounded-xl rounded-tl-none px-3 py-2.5 shadow-sm max-w-[90%]">
                    <p className="text-sm text-gray-800">✅ Confirmed. Delivery in 60 mins*. Thank you!</p>
                    <span className="text-[10px] text-gray-400 block mt-1">10:25 AM</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      rightView: 'phone',
    },
    {
      id: 2,
      label: 'Trust',
      title: 'Bharosa Har Dawa Mein',
      subtitle: '60 minutes* mein aapke darwaze par dawa',
      description: 'Fast, reliable delivery from trusted local pharmacies so you never have to stand in line again.',
      image: 'bg-gradient-to-r from-teal-600 to-blue-600',
      icon: <FaShieldAlt className="text-6xl text-white" />,
      rightView: 'tablet',
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
      rightView: 'web',
    },
  ]

  const renderRightView = (rightView) => {
    switch (rightView) {
      case 'phone':
        return <PhoneWhatsAppView />
      case 'tablet':
        return <TabletWhatsAppView />
      case 'web':
        return <WebWhatsAppView />
      default:
        return <PhoneWhatsAppView />
    }
  }

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={400}
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
                  <div className="flex items-center justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] mt-4 md:mt-0 w-full">
                    {renderRightView(slide.rightView)}
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
