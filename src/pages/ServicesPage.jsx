import React from 'react'
import { Link } from 'react-router-dom'
import { FaPrescriptionBottle, FaCapsules, FaTruck, FaBaby, FaHeartbeat, FaFirstAid, FaLeaf, FaFlask } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './ServicesPage.css'

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="services-hero">
        <div className="services-hero-icon services-hero-pie-chart" aria-hidden>
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M25 25 L25 3 A22 22 0 0 1 45 25 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        <div className="services-hero-icon services-hero-zig-zag" aria-hidden>
          <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15 L20 5 L40 25 L60 5 L80 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="services-hero-icon services-hero-wavy-arrow" aria-hidden>
          <svg viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 Q50 60 80 70 Q110 80 130 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M115 40 L130 30 L125 48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="services-hero-content">
          <h1>Services</h1>
          <nav className="services-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="services-breadcrumb-home">Home</Link>
            <span className="services-breadcrumb-separator">/</span>
            <span className="services-breadcrumb-current">Services</span>
          </nav>
        </div>
      </section>
      <section className="services-offerings">
        <div className="services-offerings-header">
          <h2>Our Offerings</h2>
          <Link to="/services" className="services-offerings-view-all">
            View All Services <span className="services-offerings-arrow">→</span>
          </Link>
        </div>
        <div className="services-offerings-grid">
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaPrescriptionBottle className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">01</div>
            </div>
            <h3>Prescription Medicines</h3>
            <p>Authentic and verified medications for various health conditions.</p>
          </div>
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaCapsules className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">02</div>
            </div>
            <h3>Health & Nutrition Supplements</h3>
            <p>Vitamins, minerals, and herbal supplements to support overall well-being.</p>
          </div>
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaTruck className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">03</div>
            </div>
            <h3>Fast Home Delivery</h3>
            <p>Reliable doorstep delivery with tracking and care team support.</p>
          </div>
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaBaby className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">04</div>
            </div>
            <h3>Baby & Mother Care</h3>
            <p>Products catering to the needs of mothers and infants.</p>
          </div>
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaHeartbeat className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">05</div>
            </div>
            <h3>Diabetic & Cardiac Care</h3>
            <p>Specialized products for managing diabetes and heart health.</p>
          </div>
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaFirstAid className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">06</div>
            </div>
            <h3>First Aid & Medical Devices</h3>
            <p>Essential items for home healthcare and emergency needs.</p>
          </div>
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaLeaf className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">07</div>
            </div>
            <h3>Immunity Boosters & Ayurvedic Products</h3>
            <p>Natural remedies to enhance immunity and promote health.</p>
          </div>
          <div className="services-offering-card">
            <div className="services-offering-card-top">
              <div className="services-offering-icon-box">
                <FaFlask className="services-offering-icon" />
              </div>
              <div className="services-offering-card-number">08</div>
            </div>
            <h3>Lab-Tested Health Essentials</h3>
            <p>Products that meet quality standards for health management.</p>
          </div>
        </div>
      </section>
      <section className="services-stats-wrapper">
        <div className="services-stats-card">
          <div className="services-stat-item">
            <h2 className="services-stats-outline-text">549+</h2>
            <p>Total Client</p>
          </div>
          <div className="services-stat-item">
            <h2 className="services-stats-outline-text">100%</h2>
            <p>Your Satisfaction Rate</p>
          </div>
          <div className="services-stat-item">
            <h2 className="services-stats-outline-text">836</h2>
            <p>Total Employee</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ServicesPage
