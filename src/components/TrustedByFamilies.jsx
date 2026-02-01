import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaPhone, FaUsers, FaCheckCircle, FaMapMarkedAlt } from 'react-icons/fa'
import pharmacyImage from '../pharmacy-702x360.jpg'

const TrustedByFamilies = () => {
  const [activeCustomers, setActiveCustomers] = useState(0)
  const [ordersCompleted, setOrdersCompleted] = useState(0)

  useEffect(() => {
    const duration = 1500
    const frameTime = 16
    const targetCustomers = 6000
    const targetOrders = 25000
    const steps = duration / frameTime
    const customersIncrement = targetCustomers / steps
    const ordersIncrement = targetOrders / steps

    const interval = setInterval(() => {
      setActiveCustomers((prev) => {
        const next = prev + customersIncrement
        return next >= targetCustomers ? targetCustomers : Math.floor(next)
      })
      setOrdersCompleted((prev) => {
        const next = prev + ordersIncrement
        return next >= targetOrders ? targetOrders : Math.floor(next)
      })
    }, frameTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#f8f9ff]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10">
        {/* LEFT CARD - Dark gradient */}
        <div
          className="rounded-[20px] p-6 sm:p-7 md:p-8 text-white overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #12074f 0%, #1b0f6b 100%)',
          }}
        >
          <img
            src={pharmacyImage}
            alt="Maa Dulari Pharmacy"
            className="w-full rounded-[14px] mb-5 object-cover h-48 sm:h-56 md:h-64"
          />

          <div className="inline-flex items-center gap-2 bg-white/15 rounded-[20px] px-3.5 py-2 text-sm font-medium mb-4">
            <span className="text-base" aria-hidden>📈</span>
            <span>Trusted by Families Across India</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Order Your Medicines Now
          </h2>

          <p className="text-base leading-relaxed text-[#e0e0ff] mb-6">
            Simple ordering through WhatsApp. Send your prescription and get
            genuine medicines delivered straight to your home. Save time, skip
            queues, and enjoy safe doorstep delivery.
          </p>

          <div className="flex flex-col gap-3.5">
            <a
              href="https://wa.me/919798133879?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Maa%20Dulari%20Pharmacy."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-[30px] bg-[#2ed573] hover:bg-[#26c468] text-white font-semibold text-base flex items-center justify-center gap-2 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Order on WhatsApp
            </a>
            <a
              href="tel:+919798133879"
              className="w-full py-3.5 px-4 rounded-[30px] bg-white/15 hover:bg-white/20 text-white font-semibold text-base flex items-center justify-center gap-2 transition-colors border border-white/20"
            >
              <FaPhone className="text-lg" />
              Call Us For More Details
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN - Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-5">
          <div className="bg-white rounded-[20px] p-6 sm:p-7 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <div className="mb-3 text-2xl sm:text-3xl text-[#1b1642]">
              <FaUsers className="text-teal-600" aria-hidden />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1b1642] mb-1.5">
              {activeCustomers.toLocaleString()}+
            </h3>
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              Active Customers
            </h4>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Trusted by families for their monthly healthcare needs.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-6 sm:p-7 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
            <div className="mb-3 text-2xl sm:text-3xl text-[#1b1642]">
              <FaCheckCircle className="text-green-600" aria-hidden />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1b1642] mb-1.5">
              {ordersCompleted.toLocaleString()}+
            </h3>
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              Orders Completed
            </h4>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Delivering medicines with care and reliability.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-6 sm:p-7 shadow-[0_10px_25px_rgba(0,0,0,0.05)] sm:col-span-2">
            <div className="mb-3 text-2xl sm:text-3xl text-[#1b1642]">
              <FaMapMarkedAlt className="text-blue-600" aria-hidden />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1b1642] mb-1.5">
              PAN India
            </h3>
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              Available PAN India
            </h4>
            <p className="text-sm text-[#6b7280] leading-relaxed">
              Delivering trusted medicines to every corner of the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedByFamilies
