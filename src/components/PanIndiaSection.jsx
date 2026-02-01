import React from 'react'
import IndiaMap from './IndiaMap'
import './PanIndiaSection.css'

const PanIndiaSection = () => {
  // Optional: custom callback when a state is clicked (e.g. navigate, API, modal)
  const handleStateClick = ({ id, name }) => {
    console.log('State/UT selected:', id, name)
    // Add custom action here: navigate(`/availability/${id}`), API call, etc.
  }

  return (
    <section className="pan-india-section">
      <div className="container">
        <div className="header">
          <span className="badge">🌐 Nationwide Service</span>
          <h2>Available PAN India</h2>
          <p>
            Dulari is expanding rapidly across India, bringing quality healthcare to
            your doorstep, no matter where you are.
          </p>
        </div>

        <div className="content">
          <div className="map">
            <IndiaMap onLocationClick={handleStateClick} />
          </div>

          <div className="right">
            <h3>Expanding Our Reach Across India</h3>
            <p>
              From metro cities to tier-2 and tier-3 cities, Dulari is committed to
              making healthcare accessible to everyone across India.
            </p>

            <div className="stats">
              <div className="stat-card">
                <div className="icon">📍</div>
                <div className="stat-text">
                  <h4>100+</h4>
                  <span>Cities Covered</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="icon">🏪</div>
                <div className="stat-text">
                  <h4>170+</h4>
                  <span>Partner Pharmacies</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="icon">🚚</div>
                <div className="stat-text">
                  <h4>25k+</h4>
                  <span>Orders Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PanIndiaSection
