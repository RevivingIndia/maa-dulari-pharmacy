import React, { useState } from 'react'
import { FaWhatsapp, FaShoppingCart, FaPhone, FaEnvelope } from 'react-icons/fa'

const WhatsAppOrder = () => {
  const [phoneNumber] = useState('919876543210') // Replace with actual WhatsApp number
  const [message, setMessage] = useState('')

  const handleWhatsAppOrder = () => {
    const defaultMessage = 'Hello, I would like to order medicines from Dulari Healthcare.'
    const finalMessage = message || defaultMessage
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-500 rounded-full p-4 mb-4">
              <FaWhatsapp className="text-6xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Order Medicines via WhatsApp
            </h2>
            <p className="text-gray-600 text-lg">
              Quick and easy ordering through WhatsApp. Just send us your prescription or medicine list!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp Order Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-500 rounded-full p-3">
                  <FaWhatsapp className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">WhatsApp Order</h3>
                  <p className="text-gray-600">Fast & Convenient</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Send Prescription</h4>
                    <p className="text-gray-600 text-sm">
                      Share your prescription or medicine list via WhatsApp
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Get Confirmation</h4>
                    <p className="text-gray-600 text-sm">
                      Our team will confirm your order and provide pricing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                    <p className="text-gray-600 text-sm">
                      Get your medicines delivered to your doorstep
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here (optional)..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 resize-none"
                  rows="3"
                />
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* E-commerce Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-500 rounded-full p-3">
                  <FaShoppingCart className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Online Store</h3>
                  <p className="text-gray-600">Shop Anytime, Anywhere</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaShoppingCart className="text-blue-500" />
                  <span className="text-gray-800">Browse 25,000+ Products</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaShoppingCart className="text-blue-500" />
                  <span className="text-gray-800">Secure Online Payment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaShoppingCart className="text-blue-500" />
                  <span className="text-gray-800">Track Your Orders</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaShoppingCart className="text-blue-500" />
                  <span className="text-gray-800">Easy Returns & Refunds</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaShoppingCart className="text-blue-500" />
                  <span className="text-gray-800">Prescription Upload</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <FaShoppingCart className="text-blue-500" />
                  <span className="text-gray-800">Medicine Reminders</span>
                </div>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <a
              href={`tel:+${phoneNumber}`}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-center space-x-3"
            >
              <FaPhone className="text-blue-500 text-2xl" />
              <div>
                <div className="font-semibold text-gray-800">Call Us</div>
                <div className="text-sm text-gray-600">+91 98765 43210</div>
              </div>
            </a>
            <a
              href={`https://wa.me/${phoneNumber}`}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-center space-x-3"
            >
              <FaWhatsapp className="text-green-500 text-2xl" />
              <div>
                <div className="font-semibold text-gray-800">WhatsApp</div>
                <div className="text-sm text-gray-600">Chat with us</div>
              </div>
            </a>
            <a
              href="mailto:info@dularihealthcare.com"
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-center space-x-3"
            >
              <FaEnvelope className="text-red-500 text-2xl" />
              <div>
                <div className="font-semibold text-gray-800">Email</div>
                <div className="text-sm text-gray-600">info@dularihealthcare.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppOrder
