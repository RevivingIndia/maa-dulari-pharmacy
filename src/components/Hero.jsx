import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { FaTruck, FaWhatsapp, FaChevronLeft } from 'react-icons/fa'

const MESSAGE_DELAY_MS = 2000
const RESET_DELAY_MS = 3500

// Conversation shape: { from: 'dulari'|'user', text: string }
function useChatSequence(conversation) {
  const total = conversation?.length || 1
  const [visibleCount, setVisibleCount] = useState(1)
  useEffect(() => {
    if (!conversation?.length) return
    if (visibleCount < total) {
      const t = setTimeout(() => setVisibleCount((c) => c + 1), MESSAGE_DELAY_MS)
      return () => clearTimeout(t)
    }
    const reset = setTimeout(() => setVisibleCount(1), RESET_DELAY_MS)
    return () => clearTimeout(reset)
  }, [visibleCount, total, conversation?.length])
  return visibleCount
}

// Shared bubble styles for phone (responsive text on small screens)
function ChatBubblePhone({ from, text, show, isDulari }) {
  if (!show) return null
  return (
    <div className={`flex flex-shrink-0 animate-bubble-in ${isDulari ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`rounded-md sm:rounded-lg px-2 sm:px-2.5 py-1 sm:py-1.5 shadow-sm max-w-[92%] sm:max-w-[90%] ${
          isDulari
            ? 'bg-white rounded-tl-none'
            : 'bg-[#DCF8C6] rounded-tr-none'
        }`}
      >
        {isDulari && <span className="text-[8px] sm:text-[10px] text-gray-600 font-medium">Dulari</span>}
        <p className="text-[9px] sm:text-[11px] md:text-xs text-gray-800 mt-0.5 break-words">{text}</p>
        <span className={`text-[8px] sm:text-[9px] block mt-0.5 ${isDulari ? 'text-gray-400' : 'text-gray-500 text-right'}`}>
          {isDulari ? '10:24 AM' : '10:25 AM'}
        </span>
      </div>
    </div>
  )
}

// Phone view – fits in slider device row on mobile, scales up on larger screens
function PhoneWhatsAppView({ conversation }) {
  const visibleCount = useChatSequence(conversation)

  return (
    <div className="animate-device-in mx-auto flex justify-center items-center w-full h-full min-h-0 max-h-full">
      <div className="relative h-full max-h-[220px] sm:max-h-[260px] md:max-h-[380px] lg:max-h-[420px] w-auto aspect-[9/19] bg-neutral-900 rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[2.75rem] p-1.5 sm:p-2 md:p-2.5 shadow-2xl border-2 sm:border-[3px] border-neutral-700 flex flex-col flex-shrink-0" style={{ minHeight: '140px' }}>
        <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-10 sm:w-14 md:w-16 lg:w-20 h-3 sm:h-4 md:h-5 lg:h-6 bg-neutral-900 rounded-full z-20" />
        <div className="relative flex-1 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.25rem] overflow-hidden bg-white flex flex-col min-h-0">
          <div className="bg-[#075E54] text-white px-2 sm:px-2.5 md:px-3 pt-4 sm:pt-6 md:pt-7 pb-1.5 sm:pb-2 md:pb-2.5 flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <FaChevronLeft className="text-xs sm:text-sm opacity-90 flex-shrink-0" />
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <FaWhatsapp className="text-xs sm:text-base md:text-lg text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-[10px] sm:text-sm truncate">Dulari</div>
              <div className="text-[8px] sm:text-[10px] md:text-xs text-white/80 truncate">online • dawa bhi dua bhi</div>
            </div>
          </div>
          <div className="bg-[#ECE5DD] p-1.5 sm:p-2 md:p-2.5 space-y-1.5 sm:space-y-2 flex-1 overflow-y-auto overflow-x-hidden flex flex-col min-h-0">
            {conversation?.map((msg, i) => (
              <ChatBubblePhone
                key={i}
                from={msg.from}
                text={msg.text}
                show={i < visibleCount}
                isDulari={msg.from === 'dulari'}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-neutral-700 rounded-full z-10" />
      </div>
    </div>
  )
}

// Conversation for the hero – show how to order medicine via chat
const SLIDE_1_CHAT = [
  { from: 'dulari', text: 'Namaste! 👋 Send prescription or medicine list. We care like family – dawa bhi, dua bhi.' },
  { from: 'user', text: 'Hi, I need medicines for my mother' },
  { from: 'dulari', text: 'Please send the prescription. We\'ll arrange everything. Dawa bhi, dua bhi! 🙏' },
  { from: 'user', text: 'Sending now 📎' },
  { from: 'dulari', text: 'Received! We\'ll confirm shortly. Thank you!' },
]

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
      conversation: SLIDE_1_CHAT,
    },
  ]

  return (
    <section className="relative w-full" style={{ overflow: 'hidden' }}>
      <Swiper
        modules={[]}
        spaceBetween={0}
        slidesPerView={1}
        speed={400}
        pagination={false}
        navigation={false}
        loop={false}
        className="hero-swiper !h-[480px] sm:!h-[520px] md:!h-[540px] lg:!h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-full">
            <div className={`${slide.image} h-full w-full flex flex-col md:flex-row md:items-center md:justify-center overflow-hidden`}>
              {/* Mobile: device on top (order-1). Desktop: device right (md:order-2) */}
              <div className="flex-shrink-0 flex items-center justify-center w-full py-2 md:py-0 md:w-auto md:flex-1 md:min-h-0 order-1 md:order-2 h-[240px] sm:h-[260px] md:h-full">
                <div className="h-full flex items-center justify-center w-full px-1 max-w-full">
                  <PhoneWhatsAppView conversation={slide.conversation} />
                </div>
              </div>
              {/* Mobile: text below (order-2). Desktop: text left (md:order-1) */}
              <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden flex items-center justify-center md:justify-start order-2 md:order-1 py-2 px-3 sm:px-4 md:py-6 md:px-6 md:flex-1">
                <div className="text-white text-center md:text-left w-full max-w-full">
                  <div className="mb-1 md:mb-4 flex justify-center md:justify-start">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">{slide.icon}</div>
                  </div>
                  {slide.label && (
                    <div className="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 mb-1 md:mb-3 rounded-full bg-white/90 text-blue-700 text-[10px] sm:text-xs md:text-sm font-semibold shadow-sm">
                      {slide.label}
                    </div>
                  )}
                  <h2 className="text-base sm:text-lg md:text-3xl lg:text-5xl font-bold mb-1 md:mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-[11px] sm:text-sm md:text-xl lg:text-2xl mb-1 md:mb-4 opacity-90 line-clamp-2 md:line-clamp-none">
                    {slide.subtitle}
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-lg mb-2 md:mb-6 opacity-80 line-clamp-2 md:line-clamp-none hidden sm:block">
                    {slide.description}
                  </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">
                    <button className="bg-white text-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base">
                      Order Now
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors text-xs sm:text-sm md:text-base">
                      Learn More
                    </button>
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
