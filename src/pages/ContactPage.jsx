import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
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

      <section className="contact-info-grid">
        <div className="contact-info-block">
          <div className="contact-icon-wrap">
            <FaMapMarkerAlt className="contact-grid-icon" />
          </div>
          <div className="contact-text-wrap">
            <h4>Visit Us</h4>
            <p>
              Dinkar golambar, Arya Kumar Rd,<br />
              Rajendra Nagar, Patna, Bihar 800016
            </p>
          </div>
        </div>

        <div className="contact-info-block">
          <div className="contact-icon-wrap">
            <FaPhone className="contact-grid-icon" />
          </div>
          <div className="contact-text-wrap">
            <h4>Call us</h4>
            <p>
              <a href="tel:+919798133879" className="contact-grid-link">+91 97981 33879</a>
              <br />
              <a href="tel:+919876543210" className="contact-grid-link">+91 98765 43210</a>
            </p>
          </div>
        </div>

        <div className="contact-info-block">
          <div className="contact-icon-wrap">
            <FaEnvelope className="contact-grid-icon" />
          </div>
          <div className="contact-text-wrap">
            <h4>Email us</h4>
            <p>
              <a href="mailto:care@dularicare.com" className="contact-grid-link">care@dularicare.com</a>
            </p>
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
