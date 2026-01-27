import React, { useState, useEffect, useMemo, useRef } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaHandshake } from 'react-icons/fa'

const WhatsAppOrder = () => {
  const [phoneNumber] = useState('919798133879')
  const [message, setMessage] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [showMessages, setShowMessages] = useState([])
  const chatContainerRef = useRef(null)

  const conversationSteps = useMemo(() => [
    { sender: 'user', text: 'Hello, I need to order medicines', delay: 1000 },
    { sender: 'pharmacy', text: 'Namaste! Welcome to Maa Dulari Pharmacy 👋\nHow can I help you today?', delay: 2000 },
    { sender: 'user', text: 'I have a prescription. Can I send it?', delay: 3000 },
    { sender: 'pharmacy', text: 'Yes, please share your prescription. We will confirm availability and pricing.', delay: 4000 },
    { sender: 'user', text: '📷 [Prescription Image]', delay: 5000 },
    { sender: 'pharmacy', text: 'Thank you! We have all medicines in stock.\nTotal: ₹1,250\nDelivery: Free\nETA: 2 hours\nProceed?', delay: 6000 },
    { sender: 'user', text: 'Yes, please confirm the order', delay: 7000 },
    { sender: 'pharmacy', text: '✅ Order Confirmed!\nOrder ID: #MD12345\nYour medicines will be delivered soon.\nThank you for choosing Maa Dulari Pharmacy! 🙏', delay: 8000 },
  ], [])

  useEffect(() => {
    if (currentStep >= conversationSteps.length) {
      // Reset after showing all messages
      const resetTimer = setTimeout(() => {
        setCurrentStep(0)
        setShowMessages([])
      }, 3000)
      return () => clearTimeout(resetTimer)
    }

    const timer = setTimeout(() => {
      setShowMessages((prev) => [...prev, conversationSteps[currentStep]])
      setCurrentStep((prev) => prev + 1)
    }, conversationSteps[currentStep]?.delay || 1000)

    return () => clearTimeout(timer)
  }, [currentStep, conversationSteps])

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [showMessages])

  const handleWhatsAppOrder = () => {
    const defaultMessage = 'Hello, I would like to order medicines from Maa Dulari Pharmacy.'
    const finalMessage = message || defaultMessage
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 medical-bg-pills relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust Line */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
              <FaHandshake className="text-teal-600 text-2xl" />
              <span className="text-2xl font-bold text-gray-800">Bharosa Har Dawa Mein</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="inline-block bg-green-500 rounded-full p-3 md:p-4 mb-4">
              <FaWhatsapp className="text-4xl md:text-6xl text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Order Medicines via WhatsApp
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Quick and easy ordering through WhatsApp. Just send us your prescription or medicine list!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Mobile WhatsApp Animation */}
            <div className="order-2 md:order-1">
              <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-4 shadow-2xl max-w-xs sm:max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-green-600 text-white px-4 py-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <FaWhatsapp className="text-green-600 text-sm" />
                      </div>
                      <div>
                        <div className="font-semibold">Maa Dulari Pharmacy</div>
                        <div className="text-xs opacity-90">online</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div 
                    ref={chatContainerRef}
                    className="bg-gray-100 h-[350px] sm:h-[400px] md:h-[500px] p-3 sm:p-4 overflow-y-auto flex flex-col gap-2 sm:gap-3 scroll-smooth"
                  >
                    {/* Welcome Message */}
                    <div className="bg-green-100 rounded-lg p-3 self-start max-w-[80%]">
                      <div className="text-sm text-gray-800">
                        <strong>Maa Dulari Pharmacy</strong>
                      </div>
                      <div className="text-sm text-gray-700 mt-1">
                        Namaste! Welcome to Maa Dulari Pharmacy 👋
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Bharosa Har Dawa Mein
                      </div>
                    </div>

                    {/* Animated Messages */}
                    {showMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`rounded-lg p-3 max-w-[80%] ${
                          msg.sender === 'user'
                            ? 'bg-green-500 text-white self-end ml-auto'
                            : 'bg-white text-gray-800 self-start shadow-sm'
                        }`}
                        style={{
                          animation: 'fade-in-up 0.5s ease-out',
                        }}
                      >
                        <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                        <div
                          className={`text-xs mt-1 ${
                            msg.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                          }`}
                        >
                          {new Date().toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {currentStep < conversationSteps.length && (
                      <div className="bg-white rounded-lg p-3 self-start shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: '0.2s' }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: '0.4s' }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="bg-white border-t border-gray-200 p-3 flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500">
                      Type a message...
                    </div>
                    <button className="bg-green-500 text-white rounded-full p-2">
                      <FaWhatsapp className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Steps Card */}
            <div className="order-1 md:order-2 bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-500 rounded-full p-3">
                  <FaWhatsapp className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">How to Order</h3>
                  <p className="text-gray-600">Get your medicines in just 3 easy steps</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Send Your Prescription</h4>
                    <p className="text-gray-600 text-sm">
                      Share your prescription or medicine list via WhatsApp at 9798133879.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Confirm Your Order</h4>
                    <p className="text-gray-600 text-sm">
                      Provide your delivery address and confirm the order details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Receive Your Medicines</h4>
                    <p className="text-gray-600 text-sm">
                      Get your order delivered to your doorstep, anywhere in India.
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
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Order via WhatsApp</span>
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
                <div className="text-sm text-gray-600">+91 97981 33879</div>
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
