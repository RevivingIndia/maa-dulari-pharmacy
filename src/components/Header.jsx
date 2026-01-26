import React, { useState } from 'react'
import { FaSearch, FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdLocalPharmacy } from 'react-icons/md'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MdLocalPharmacy className="text-4xl text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gradient">Dulari Healthcare</h1>
              <p className="text-xs text-gray-600">Your Trusted Pharmacy</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for medicines, health products..."
                className="w-full px-4 py-3 pl-12 pr-32 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

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

        {/* Mobile Search Bar */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for medicines..."
              className="w-full px-4 py-2 pl-10 pr-24 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Medicines</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Healthcare</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Lab Tests</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Offers</a>
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
