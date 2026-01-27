import React from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaHeart, FaCreditCard } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'FAQs', href: '#' },
  ]

  const categories = [
    { name: 'Prescription Medicines', href: '#' },
    { name: 'Health Supplements', href: '#' },
    { name: 'Personal Care', href: '#' },
    { name: 'Baby Care', href: '#' },
    { name: 'Wellness Products', href: '#' },
    { name: 'Healthcare Devices', href: '#' },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-600' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Maa Dulari Pharmacy</h3>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Your trusted healthcare partner. We provide authentic medicines with care, trust, and professionalism.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-400" />
                <span className="text-sm">1200+ Cities, 19,000+ Pin Codes</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-400" />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-green-400" />
                <a href="mailto:info@maadulari.com" className="text-sm hover:text-white transition-colors">
                  info@maadulari.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Shop by Category</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect With Us</h4>
            <div className="mb-4 sm:mb-6">
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Maa%20Dulari%20Pharmacy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors mb-4 text-sm sm:text-base"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
            
            <div className="mb-4">
              <p className="text-sm mb-3 text-gray-400">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors hover:bg-gray-700`}
                    >
                      <IconComponent />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Taglines */}
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <FaHeart className="text-blue-500" />
                <span>Dawa Bhi • Dua Bhi</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaHeart className="text-teal-500" />
                <span>Bharosa Har Dawa Mein</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaHeart className="text-cyan-500" />
                <span>Trusted Medicines with Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Partners & Certifications */}
      <div className="border-t border-gray-800 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center">Our Payment Partners</h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3 max-w-6xl mx-auto">
              {/* Google Pay */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="Google Pay">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                  G
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">GPay</span>
              </div>
              
              {/* Paytm */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="Paytm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                  P
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">Paytm</span>
              </div>
              
              {/* PhonePe */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="PhonePe">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                  Ph
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">PhonePe</span>
              </div>
              
              {/* Amazon Pay */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="Amazon Pay">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                  A
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">Amazon</span>
              </div>
              
              {/* MobiKwik */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="MobiKwik">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                  M
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">MobiKwik</span>
              </div>
              
              {/* Maestro */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="Maestro">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white">
                  <FaCreditCard className="text-xs sm:text-sm" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">Maestro</span>
              </div>
              
              {/* Mastercard */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="Mastercard">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white">
                  <FaCreditCard className="text-xs sm:text-sm" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">Mastercard</span>
              </div>
              
              {/* Visa */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="Visa">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white">
                  <FaCreditCard className="text-xs sm:text-sm" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">Visa</span>
              </div>
              
              {/* RuPay */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center gap-1 hover:bg-gray-700 transition-colors" title="RuPay">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                  <FaCreditCard className="text-xs sm:text-sm" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-300 text-center">RuPay</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800">
            <div>
              <p className="text-sm text-gray-400 mb-2">Licensed & Certified</p>
              <div className="flex gap-2">
                <div className="bg-gray-800 rounded px-3 py-1 text-xs text-gray-300">FSSAI</div>
                <div className="bg-gray-800 rounded px-3 py-1 text-xs text-gray-300">GST</div>
                <div className="bg-gray-800 rounded px-3 py-1 text-xs text-gray-300">Verified</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500">
                All transactions are secured with 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 sm:py-6 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} Maa Dulari Pharmacy. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <FaHeart className="text-teal-500 mx-1" />
              <span>in India</span>
            </div>
            <div>
              <span className="text-gray-500">Licensed Pharmacy | DL No: XXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
