import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="about-badge">❤️ About Dulari Care</span>
          <h1>
            Your Trusted Partner in <br />
            <span className="highlight">Healthcare</span>
          </h1>
          <p className="about-hero-desc">
            Making quality medicines accessible and affordable for everyone across India.
            From metro cities to remote regions, we bring healthcare to your doorstep.
          </p>
          <div className="about-features">
            <div className="about-feature-card">
              <div className="icon">🛡️</div>
              <h3>100% Authentic</h3>
              <p>Licensed Medicines</p>
            </div>
            <div className="about-feature-card">
              <div className="icon">₹</div>
              <h3>Flat 20% Off</h3>
              <p>On All Medicines</p>
            </div>
            <div className="about-feature-card">
              <div className="icon">📍</div>
              <h3>PAN India</h3>
              <p>Nationwide Service</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="about-mission-badge">
            <span className="about-mission-badge-icon">🎯</span>
            Our Mission & Promise
          </div>
          <h2>Healthcare is a Right, Not a Luxury</h2>
          <p>
            At Dulari Care, we believe that quality healthcare isn't a luxury — it's a right.
            Our aim is to ensure that every individual, from metro to remote regions, has access
            to reliable medicines, trusted guidance and transparent pricing.
          </p>
          <p>
            Through technology, partnerships and unwavering ethics, we work to make medicine
            procurement simple, safe and affordable.
          </p>
        </div>
      </section>
      <section className="about-what-we-do">
        <div className="about-wwd-container">
          <div className="about-wwd-badge">
            <span>➕</span> What We Do
          </div>
          <h2>What We Do for You</h2>
          <p className="about-wwd-subtitle">
            We provide an online pharmacy experience built around three key pillars
          </p>
          <div className="about-wwd-cards">
            <div className="about-wwd-card">
              <div className="about-wwd-icon-box">➕</div>
              <h3>Ease of Access</h3>
              <p>
                You can upload your prescription or send your medicine list via WhatsApp.
                No complicated apps, no confusing processes — just a straightforward way
                to get what you need.
              </p>
            </div>
            <div className="about-wwd-card">
              <div className="about-wwd-icon-box">✳️</div>
              <h3>Authenticity and Transparency</h3>
              <p>
                All medicines come from licensed manufacturers or trusted distributors.
                We clearly show brand, salt composition, strength and pricing — so you
                know exactly what you're choosing.
              </p>
            </div>
            <div className="about-wwd-card">
              <div className="about-wwd-icon-box">🏷️</div>
              <h3>Affordability with Assurance</h3>
              <p>
                We offer flat-discount pricing across our catalogue, with free or swift
                delivery, and a simple, hassle-free return policy when necessary.
                Your convenience and peace of mind are paramount.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-why-matters">
        <div className="about-why-matters-content">
          <div className="about-why-matters-badge">
            <span>❓</span> Why That Matters
          </div>
          <h2>Every Rupee Counts, Every Delay Impacts Well-Being</h2>
          <p>
            For patients who rely on medicines continuously, especially for chronic
            conditions, every rupee counts and every delay can impact well-being.
            At Dulari Care, we bridge that gap by combining technology, logistics
            and pharmacy expertise.
          </p>
          <p>
            We work across India — expanding our reach so that even those in tier-2
            and tier-3 cities don't face second-tier service.
          </p>
        </div>
      </section>
      <section className="about-process">
        <div className="about-process-container">
          <div className="about-process-badge">
            <span>⚙️</span> Our Process
          </div>
          <h2>How We Work</h2>
          <p className="about-process-subtitle">
            Simple, transparent, and efficient — just three easy steps
          </p>
          <div className="about-process-steps">
            <div className="about-process-card">
              <div className="about-process-step-number">01</div>
              <div className="about-process-icon-circle">💬</div>
              <h3>Send Your Prescription</h3>
              <p>
                Send your prescription or medicine list via WhatsApp
                to our trained pharmacist team.
              </p>
            </div>
            <div className="about-process-card">
              <div className="about-process-step-number">02</div>
              <div className="about-process-icon-circle">📋</div>
              <h3>Confirm Your Order</h3>
              <p>
                You'll receive a clear breakdown of the medicines,
                manufacturers, discount applied and delivery time.
              </p>
            </div>
            <div className="about-process-card">
              <div className="about-process-step-number">03</div>
              <div className="about-process-icon-circle">🚚</div>
              <h3>Receive Your Delivery</h3>
              <p>
                Receive your delivery at your doorstep, with tracking
                and support from our care team for any queries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-values">
        <div className="about-values-container">
          <div className="about-values-badge">
            ⭐ Our Core Values
          </div>
          <h2>The Values That Drive Us</h2>
          <p className="about-values-subtitle">
            Principles that guide every decision we make
          </p>
          <div className="about-values-grid">
            <div className="about-values-card">
              <div className="about-values-icon">🤝</div>
              <div className="about-values-card-content">
                <h3>Integrity in Sourcing and Service</h3>
                <p>
                  We partner only with licensed, reputable pharmacies
                  and manufacturers.
                </p>
              </div>
            </div>
            <div className="about-values-card">
              <div className="about-values-icon">👁️</div>
              <div className="about-values-card-content">
                <h3>Transparency in Pricing and Process</h3>
                <p>
                  No hidden costs, no surprises, just clear
                  communication.
                </p>
              </div>
            </div>
            <div className="about-values-card">
              <div className="about-values-icon">❤️</div>
              <div className="about-values-card-content">
                <h3>Empathy, Not Just Efficiency</h3>
                <p>
                  We understand that each order represents real health
                  needs, real people. We treat every delivery with care.
                </p>
              </div>
            </div>
            <div className="about-values-card">
              <div className="about-values-icon">💡</div>
              <div className="about-values-card-content">
                <h3>Innovation in Outreach</h3>
                <p>
                  From major cities to smaller towns, we are building a
                  network that ensures access and affordability — not
                  just for some, but for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-commitment">
        <div className="about-commitment-container">
          <div className="about-commitment-badge">
            🛡️ Our Promise
          </div>
          <h2>Our Commitment to You</h2>
          <p className="about-commitment-text">
            We commit to making Dulari Care the pharmacy you trust for both routine
            needs and unexpected health moments. Whether it's maintaining your
            wellness regimen or handling urgent needs, we stand beside you with
            prompt service, genuine medicines and a team ready to assist.
          </p>
          <div className="about-commitment-actions">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20order%20medicines%20from%20Dulari."
              target="_blank"
              rel="noopener noreferrer"
              className="about-commitment-btn about-commitment-btn-whatsapp"
            >
              🟢 Order on WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="about-commitment-btn about-commitment-btn-call"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage
