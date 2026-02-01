import React from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'FAQs', href: '#' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Dulari</h3>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              dawa bhi dua bhi — Your trusted healthcare partner.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Dinkar Golmbar, Aryan Kumar Road, Rajendra Nagar, Patna, Bihar, 800016</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-green-400" />
                <a href="mailto:care@dularicare.com" className="text-sm hover:text-white transition-colors">
                  care@dularicare.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-400" />
                <a href="tel:+919798133879" className="text-sm hover:text-white transition-colors">
                  +91 97981 33879
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-green-400" />
                <span className="text-sm">Mon - Fri : 10 AM - 05 PM</span>
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

          {/* Contact & Social */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect With Us</h4>
            <div className="mb-4 sm:mb-6">
              <a
                href="https://wa.me/919798133879?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Dulari."
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

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 sm:py-6 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © Copyright 2025 Dulari <span className="text-white">•</span> All Rights Reserved <span className="text-white">•</span> DadBee
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
