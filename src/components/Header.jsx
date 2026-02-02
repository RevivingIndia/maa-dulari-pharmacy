import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Refund Policy', path: '/refund-policy' },
  { label: 'Order Now', href: 'https://api.whatsapp.com/send/?phone=919798133879&text&type=phone_number&app_absent=0', external: true },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.jpg" alt="Dulari - dawa bhi dua bhi" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Menu */}
          <nav className="hidden md:flex flex-1 justify-center items-center mx-6">
            <ul className="flex items-center gap-1 sm:gap-2 lg:gap-4">
              {navLinks.map((link) =>
                link.external ? (
                  <li key="order-now">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-green-600 hover:bg-green-50/50"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Right Side Icons - Social Media */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <FaPhone />
              <span className="text-sm">Call Us</span>
            </a>
            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/dularihealthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/dularihealthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-pink-600 hover:text-pink-700 hover:bg-pink-50 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@dularihealthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl" />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key="order-now"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 px-2 rounded-md font-medium transition-colors text-gray-700 hover:text-green-600 hover:bg-green-50"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2.5 px-2 rounded-md font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Social Media Links in Mobile Menu */}
            <div className="flex items-center space-x-4 pt-4 border-t mt-4">
              <a
                href="https://www.facebook.com/dularihealthcare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/dularihealthcare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@dularihealthcare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700"
                aria-label="YouTube"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
