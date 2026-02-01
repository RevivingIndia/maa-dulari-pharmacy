import React, { useState } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    review:
      'Best pharmacy in Patna. Ordered via WhatsApp and got delivery same day. Highly recommended!',
    name: 'Sunita R.',
    city: 'Patna',
  },
  {
    id: 2,
    review:
      'I ordered from Bangalore. Received genuine medicines, well packed, with 20% off. Thank you!',
    name: 'Rajeev T.',
    city: 'Bangalore',
  },
  {
    id: 3,
    review:
      'No app needed, just WhatsApp. Quick and reliable delivery. Great service.',
    name: 'Megha P.',
    city: 'Delhi',
  },
]

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 1

  return (
    <section
      className="py-16 sm:py-20 md:py-[90px] px-4 sm:px-6 text-white text-center"
      style={{
        background: 'radial-gradient(circle at top, #1b0f6b, #0b0538)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Badge */}
        <div className="inline-block bg-white text-[#1b1642] py-2 px-4 rounded-[20px] text-sm font-semibold mb-5">
          ❝ Testimonials
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-2.5">
          What Our Customers Say
        </h2>
        <p className="text-base text-[#b6b6e5] mb-10 sm:mb-12 md:mb-[50px]">
          Trusted by thousands of satisfied customers
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[30px]">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white text-[#1b1642] p-6 sm:p-7 md:p-8 rounded-2xl text-left shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-1.5 mb-4 text-[#fbbf24] text-base">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="fill-current" />
                ))}
                <span className="text-[#1b1642] font-semibold ml-1.5">5/5</span>
              </div>
              <p className="text-[15px] leading-relaxed mb-6 text-gray-800">
                {item.review}
              </p>
              <div>
                <strong className="block text-[15px] text-[#1b1642]">
                  {item.name}
                </strong>
                <span className="text-sm text-[#6b7280]">{item.city}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center items-center gap-3.5">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 rounded-full border border-white bg-transparent text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Previous page"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <span className="bg-white text-[#1b1642] py-1.5 px-3 rounded-[20px] font-semibold text-sm">
            {String(currentPage).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() =>
              setCurrentPage((p) => Math.min(totalPages, p + 1))
            }
            className="w-9 h-9 rounded-full border border-white bg-transparent text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Next page"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
