import React, { useEffect, useState } from 'react'
import { FaHandshake, FaChartLine, FaWhatsapp, FaPhone } from 'react-icons/fa'
import pharmacyImage from '../pharmacy-702x360.jpg'

const TrustedByFamilies = () => {
  const [activeCustomers, setActiveCustomers] = useState(0)
  const [ordersCompleted, setOrdersCompleted] = useState(0)

  useEffect(() => {
    const duration = 1500 // animation duration in ms
    const frameTime = 16 // ~60fps
    const targetCustomers = 6000
    const targetOrders = 25000

    let currentCustomers = 0
    let currentOrders = 0

    const steps = duration / frameTime
    const customersIncrement = targetCustomers / steps
    const ordersIncrement = targetOrders / steps

    const interval = setInterval(() => {
      currentCustomers += customersIncrement
      currentOrders += ordersIncrement

      if (currentCustomers >= targetCustomers && currentOrders >= targetOrders) {
        setActiveCustomers(targetCustomers)
        setOrdersCompleted(targetOrders)
        clearInterval(interval)
      } else {
        setActiveCustomers(Math.floor(currentCustomers))
        setOrdersCompleted(Math.floor(currentOrders))
      }
    }, frameTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Bento Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Column: Image + Order Content */}
              <div className="flex flex-col">
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 md:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={pharmacyImage}
                    alt="Maa Dulari Pharmacy store front"
                    className="w-full h-full object-cover"
                  />

                  {/* Image Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <FaHandshake className="text-teal-600 text-2xl" />
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base">
                        Bharosa Har Dawa Mein
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Content Below Image */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full px-4 py-2">
                    <FaChartLine className="text-teal-600 text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm font-semibold text-teal-700">
                      Trusted by Families Across India
                    </span>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                      Order Your Medicines Now
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      Simple ordering through WhatsApp send your prescription and get genuine medicines delivered straight to your home. Save time, skip queues, and enjoy safe doorstep delivery.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/919798133879?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Maa%20Dulari%20Pharmacy."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <FaWhatsapp className="text-xl sm:text-2xl" />
                      <span className="text-sm sm:text-base">Order on WhatsApp</span>
                    </a>

                    {/* Phone Button */}
                    <a
                      href="tel:+919798133879"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <FaPhone className="text-lg sm:text-xl" />
                      <span className="text-sm sm:text-base">Call Us For More Details</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Stats with Counting Numbers */}
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-teal-50 via-white to-blue-50 border-t md:border-t-0 md:border-l border-gray-100 flex items-center">
                <div className="w-full space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
                      DulariCare in Numbers
                    </h4>
                    <p className="text-base sm:text-lg text-gray-600">
                      Trusted by families who rely on Maa Dulari Pharmacy for their monthly healthcare needs.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:gap-8">
                    {/* Active Customers */}
                    <div className="bg-white/80 rounded-2xl shadow-sm border border-teal-100 p-5 sm:p-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-teal-700 mb-2">
                        {activeCustomers.toLocaleString()}+
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                        Active Customers
                      </div>
                      <p className="text-sm sm:text-base text-gray-600">
                        Trusted by families who rely on DulariCare for their monthly healthcare needs.
                      </p>
                    </div>

                    {/* Orders Completed */}
                    <div className="bg-white/80 rounded-2xl shadow-sm border border-blue-100 p-5 sm:p-6">
                      <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-2">
                        {ordersCompleted.toLocaleString()}+
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                        Orders Completed
                      </div>
                      <p className="text-sm sm:text-base text-gray-600">
                        Delivering medicines with care and reliability every single day.
                      </p>
                    </div>

                    {/* PAN India */}
                    <div className="bg-white/80 rounded-2xl shadow-sm border border-teal-100 p-5 sm:p-6">
                      <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 mb-2">
                        PAN India
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                        Available PAN India
                      </div>
                      <p className="text-sm sm:text-base text-gray-600">
                        Delivering trusted medicines and healthcare essentials to every corner of the country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedByFamilies
