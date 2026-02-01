import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaTruck, FaShieldAlt, FaPills, FaWhatsapp, FaChevronLeft, FaSearch } from 'react-icons/fa'

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

// Tablet bubble (responsive text)
function ChatBubbleTablet({ text, show, isDulari }) {
  if (!show) return null
  return (
    <div className={`flex flex-shrink-0 animate-bubble-in ${isDulari ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-sm max-w-[90%] sm:max-w-[85%] ${
          isDulari ? 'bg-white rounded-tl-none' : 'bg-[#DCF8C6] rounded-tr-none'
        }`}
      >
        <p className="text-[10px] sm:text-xs text-gray-800 break-words">{text}</p>
        <span className={`text-[9px] sm:text-[10px] block mt-0.5 ${isDulari ? 'text-gray-400' : 'text-gray-500 text-right'}`}>
          {isDulari ? '10:24 AM' : '10:25 AM'}
        </span>
      </div>
    </div>
  )
}

// Tablet view – conversation appears message by message
function TabletWhatsAppView({ conversation }) {
  const visibleCount = useChatSequence(conversation)

  return (
    <div className="animate-device-in w-full h-full max-h-full flex items-center justify-center px-1">
      <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[320px] flex-shrink-0">
        <div className="bg-neutral-800 rounded-xl sm:rounded-[2rem] p-2 sm:p-3 md:p-4 shadow-2xl border-4 sm:border-[8px] border-neutral-700 h-full flex flex-col min-h-0">
          <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-inner flex flex-1 min-h-0 flex-shrink-0">
          <div className="w-1/3 min-w-0 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 overflow-hidden">
            <div className="bg-[#075E54] text-white px-2 sm:px-3 py-2 sm:py-3">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-lg sm:text-xl md:text-2xl text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-[10px] sm:text-xs md:text-sm truncate">Dulari</div>
                  <div className="text-[9px] sm:text-xs text-white/80 truncate">Tablet</div>
                </div>
              </div>
            </div>
            <div className="p-1.5 sm:p-2 border-b border-gray-100 flex items-center gap-1 sm:gap-2 bg-gray-50">
              <FaSearch className="text-gray-400 text-xs sm:text-sm flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-gray-400 truncate">Search</span>
            </div>
            <div className="flex-1 p-1.5 sm:p-2 space-y-1 sm:space-y-1.5 min-h-0">
              <div className="bg-[#E7F5E9] rounded-md sm:rounded-lg p-1.5 sm:p-2.5">
                <div className="font-medium text-[10px] sm:text-xs text-gray-800 truncate">Dulari</div>
                <div className="text-[9px] sm:text-[11px] text-gray-500 truncate">60 mins* 🚚</div>
              </div>
              <div className="rounded-md sm:rounded-lg p-1.5 sm:p-2.5 hover:bg-gray-50">
                <div className="font-medium text-[10px] sm:text-xs text-gray-800 truncate">Support</div>
                <div className="text-[9px] sm:text-[11px] text-gray-500 truncate">We're here</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-0 min-w-0">
            <div className="bg-[#075E54] text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 flex items-center gap-1 sm:gap-2 border-b border-[#054D45] flex-shrink-0">
              <FaChevronLeft className="text-xs sm:text-sm flex-shrink-0" />
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-sm sm:text-base md:text-lg text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-[10px] sm:text-xs md:text-sm truncate">Dulari</div>
                <div className="text-[9px] sm:text-xs text-white/80 truncate">online</div>
              </div>
            </div>
            <div className="flex-1 bg-[#ECE5DD] p-2 sm:p-3 space-y-2 sm:space-y-3 overflow-y-auto overflow-x-hidden flex flex-col min-h-0">
              {conversation?.map((msg, i) => (
                <ChatBubbleTablet
                  key={i}
                  text={msg.text}
                  show={i < visibleCount}
                  isDulari={msg.from === 'dulari'}
                />
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Web bubble (responsive text)
function ChatBubbleWeb({ text, show, isDulari }) {
  if (!show) return null
  return (
    <div className={`flex flex-shrink-0 animate-bubble-in ${isDulari ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 shadow-sm max-w-[92%] sm:max-w-[90%] ${
          isDulari ? 'bg-white rounded-tl-none' : 'bg-[#DCF8C6] rounded-tr-none'
        }`}
      >
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-800 break-words">{text}</p>
        <span className={`text-[9px] sm:text-[10px] block mt-0.5 sm:mt-1 ${isDulari ? 'text-gray-400' : 'text-gray-500 text-right'}`}>
          {isDulari ? '10:24 AM' : '10:25 AM'}
        </span>
      </div>
    </div>
  )
}

// Web/Desktop – conversation appears message by message
function WebWhatsAppView({ conversation }) {
  const visibleCount = useChatSequence(conversation)

  return (
    <div className="animate-device-in w-full h-full max-h-full flex items-center justify-center px-1">
      <div className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[500px] lg:max-w-[540px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[340px] flex-shrink-0 flex flex-col min-h-0">
        <div className="bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-gray-300 sm:border-2 h-full flex flex-col min-h-0">
        <div className="bg-gray-200/90 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 flex items-center gap-2 sm:gap-3 border-b border-gray-300 flex-shrink-0">
          <div className="flex gap-1 sm:gap-2 flex-shrink-0">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 min-w-0 flex items-center gap-1 sm:gap-2 bg-white rounded-md sm:rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300">
            <span className="text-gray-400 text-[10px] sm:text-xs flex-shrink-0">🔒</span>
            <span className="text-[10px] sm:text-xs text-gray-600 truncate">web.whatsapp.com</span>
          </div>
        </div>
        <div className="flex bg-white flex-1 min-h-0 flex-shrink-0 overflow-hidden">
          <div className="w-[38%] min-w-0 border-r border-gray-200 flex flex-col bg-white flex-shrink-0 overflow-hidden">
            <div className="bg-[#F0F2F5] px-2 sm:px-3 md:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#075E54] flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-sm sm:text-lg md:text-xl text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[10px] sm:text-xs md:text-sm text-gray-800 truncate">WhatsApp</div>
                <div className="text-[9px] sm:text-xs text-gray-500 truncate">Dulari</div>
              </div>
            </div>
            <div className="flex-1 p-2 sm:p-3 space-y-1 min-h-0">
              <div className="bg-[#E7F5E9] rounded-md sm:rounded-lg p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#075E54]/20 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-[#075E54] text-xs sm:text-sm md:text-base" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-[10px] sm:text-xs md:text-sm text-gray-800 truncate">Dulari</div>
                  <div className="text-[9px] sm:text-xs text-gray-500 truncate">Verified</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-0 min-w-0">
            <div className="bg-[#F0F2F5] px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 flex items-center gap-2 sm:gap-3 border-b border-gray-200 flex-shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#075E54] flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-white text-xs sm:text-sm md:text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[10px] sm:text-xs md:text-sm text-gray-800 truncate">Dulari</div>
                <div className="text-[9px] sm:text-xs text-gray-500 truncate">online</div>
              </div>
            </div>
            <div className="flex-1 bg-[#ECE5DD] p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 overflow-y-auto overflow-x-hidden flex flex-col min-h-0 shrink-0">
              {conversation?.map((msg, i) => (
                <ChatBubbleWeb
                  key={i}
                  text={msg.text}
                  show={i < visibleCount}
                  isDulari={msg.from === 'dulari'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

// Conversations per slide – show how to order medicine via chat
const SLIDE_1_CHAT = [
  { from: 'dulari', text: 'Namaste! 👋 Send prescription or medicine list. We care like family – dawa bhi, dua bhi.' },
  { from: 'user', text: 'Hi, I need medicines for my mother' },
  { from: 'dulari', text: 'Please send the prescription. We\'ll arrange everything. Dawa bhi, dua bhi! 🙏' },
  { from: 'user', text: 'Sending now 📎' },
  { from: 'dulari', text: 'Received! We\'ll confirm shortly. Thank you!' },
]

const SLIDE_2_CHAT = [
  { from: 'dulari', text: '60 mins* delivery! 🚚 Share prescription to get started.' },
  { from: 'user', text: 'I\'ll send my prescription now' },
  { from: 'dulari', text: 'Got it! Checking availability...' },
  { from: 'dulari', text: '✅ All in stock. Total ₹850. Confirm to place order?' },
  { from: 'user', text: 'Yes please confirm' },
  { from: 'dulari', text: 'Order confirmed! Delivery in 60 mins*. Thank you! 🙏' },
]

const SLIDE_3_CHAT = [
  { from: 'dulari', text: 'Welcome! We verify every prescription. Genuine medicines, safe delivery.' },
  { from: 'user', text: 'Ordering for family. Prescription attached.' },
  { from: 'dulari', text: 'Thank you! Our pharmacist has verified. All genuine. ✅' },
  { from: 'dulari', text: 'Order #MD456. Delivery in 2 hrs. Thank you for trusting us!' },
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
      rightView: 'phone',
      conversation: SLIDE_1_CHAT,
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
      conversation: SLIDE_2_CHAT,
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
      conversation: SLIDE_3_CHAT,
    },
  ]

  const renderRightView = (slide) => {
    const conversation = slide?.conversation || SLIDE_1_CHAT
    switch (slide?.rightView) {
      case 'phone':
        return <PhoneWhatsAppView conversation={conversation} />
      case 'tablet':
        return <TabletWhatsAppView conversation={conversation} />
      case 'web':
        return <WebWhatsAppView conversation={conversation} />
      default:
        return <PhoneWhatsAppView conversation={conversation} />
    }
  }

  return (
    <section className="relative w-full" style={{ overflow: 'hidden' }}>
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
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="hero-swiper !h-[480px] sm:!h-[520px] md:!h-[540px] lg:!h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-full">
            <div className={`${slide.image} h-full w-full flex flex-col md:flex-row md:items-center md:justify-center overflow-hidden`}>
              {/* Mobile: device on top (order-1). Desktop: device right (md:order-2) */}
              <div className="flex-shrink-0 flex items-center justify-center w-full py-2 md:py-0 md:w-auto md:flex-1 md:min-h-0 order-1 md:order-2 h-[240px] sm:h-[260px] md:h-full">
                <div className="h-full flex items-center justify-center w-full px-1 max-w-full">
                  {renderRightView(slide)}
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
