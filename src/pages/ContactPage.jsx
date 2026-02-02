import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="contact-hero">
        <div className="contact-hero-icon contact-hero-pie-chart" aria-hidden>
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M25 25 L25 3 A22 22 0 0 1 45 25 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        <div className="contact-hero-icon contact-hero-zig-zag" aria-hidden>
          <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15 L20 5 L40 25 L60 5 L80 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="contact-hero-icon contact-hero-wavy-arrow" aria-hidden>
          <svg viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 Q50 60 80 70 Q110 80 130 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M115 40 L130 30 L125 48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="contact-breadcrumb-home">Home</Link>
            <span className="contact-breadcrumb-separator">/</span>
            <span className="contact-breadcrumb-current">Contact Us</span>
          </nav>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-info-intro">
          <h2>Contact Dulari Care</h2>
          <p>Ready to experience our pharmacy services? Get in touch with us today.</p>
        </div>

        <div className="contact-info-wrapper">
          <div className="contact-info-card">
            <h3>Visit Our Pharmacy</h3>
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon-circle">
                  <FaMapMarkerAlt className="contact-info-icon" />
                </div>
                <div>
                  <strong>Our Location</strong>
                  <p>Dinkar golambar, Arya Kumar Rd, Rajendra Nagar, Patna, Bihar 800016</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-circle">
                  <FaPhone className="contact-info-icon" />
                </div>
                <div>
                  <strong>Call Us</strong>
                  <p><a href="tel:+919798133879" className="contact-info-link">+91 9798133879</a></p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-circle">
                  <FaEnvelope className="contact-info-icon" />
                </div>
                <div>
                  <strong>Email Us</strong>
                  <p><a href="mailto:care@dularicare.com" className="contact-info-link">care@dularicare.com</a></p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919798133879?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Dulari."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-whatsapp-btn"
            >
              <FaWhatsapp className="contact-info-btn-icon" /> WhatsApp Us
            </a>
          </div>

          <div className="contact-info-form-card">
            <h3>Send Us a Message</h3>
            <form className="contact-info-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-info-form-grid">
                <input type="text" placeholder="Your Full Name" aria-label="Full Name" />
                <input type="email" placeholder="Your Email Address" aria-label="Email" />
                <input type="tel" placeholder="Your Phone Number" aria-label="Phone" />
                <select aria-label="Select an option">
                  <option>Select an option</option>
                </select>
              </div>
              <textarea placeholder="Tell us how we can help you..." rows={5} aria-label="Message" />
              <button type="submit" className="contact-info-send-btn">
                Send Message <FaPaperPlane className="contact-info-btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-container">
          <div className="contact-map-header">
            <h2>Find Us</h2>
            <div className="contact-map-info">
              <h3>Dulari Pharmacy</h3>
              <p className="contact-map-address">
                Dinkar golambar, Arya Kumar Rd, Rajendra Nagar, Patna, Bihar 800016
              </p>
              <div className="contact-map-actions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dinkar+golambar,+Arya+Kumar+Rd,+Rajendra+Nagar,+Patna,+Bihar+800016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-directions-btn"
                >
                  Directions
                </a>
                <div className="contact-map-rating">
                  <span className="contact-map-stars">4.8 ★</span>
                  <span className="contact-map-reviews">17 reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map-embed-wrapper">
            <iframe
              title="Dulari Pharmacy location"
              src="https://www.google.com/maps?q=Dinkar+golambar,+Arya+Kumar+Rd,+Rajendra+Nagar,+Patna,+Bihar+800016&output=embed"
              className="contact-map-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="contact-order-now">
        <a
          href="https://api.whatsapp.com/send/?phone=919798133879&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-order-now-btn"
        >
          <FaWhatsapp className="contact-order-now-icon" /> Order Now
        </a>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
