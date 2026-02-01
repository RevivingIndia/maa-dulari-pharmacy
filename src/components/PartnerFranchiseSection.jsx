import React from 'react'
import './PartnerFranchiseSection.css'

const PartnerFranchiseSection = () => {
  return (
    <section className="partner-franchise-section" id="partner-franchise">
      <div className="hero">
        <span className="badge">Franchise Opportunity</span>
        <h1>Partner with DULARI</h1>
        <p className="subtitle">
          Join our growing network as a Health Partner. Build a successful business
          while serving your community.
        </p>
      </div>

      <div className="card">
        <h2>Enquire Now</h2>
        <p className="card-subtitle">
          Fill out the form below and our team will get back to you within 24
          hours
        </p>

        <form
          action="#"
          method="post"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="pf-name">Full Name *</label>
              <input
                type="text"
                id="pf-name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pf-email">Email Address *</label>
              <input
                type="email"
                id="pf-email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pf-phone">Phone Number *</label>
              <input
                type="tel"
                id="pf-phone"
                name="phone"
                placeholder="10-digit mobile number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pf-city">City *</label>
              <input
                type="text"
                id="pf-city"
                name="city"
                placeholder="Your city"
                required
              />
            </div>
            <div className="form-group full">
              <label htmlFor="pf-message">Message (Optional)</label>
              <textarea
                id="pf-message"
                name="message"
                placeholder="Tell us about your interest in partnering with us..."
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            ✈ Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default PartnerFranchiseSection
