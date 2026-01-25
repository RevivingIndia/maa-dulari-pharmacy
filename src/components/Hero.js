import React from 'react';
import '../styles/Hero.css';

const Hero = ({ onWhatsAppClick }) => {
  const handleWhatsApp = () => {
    onWhatsAppClick();
  };

  const scrollToSearch = () => {
    const element = document.getElementById('search');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Order Medicines Easily on WhatsApp</h1>
          <p className="hero-subtitle">Trusted medicines • Fast delivery • Doctor-friendly support</p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-whatsapp pulse" onClick={handleWhatsApp}>
              <i className="fab fa-whatsapp"></i>
              Order on WhatsApp
            </button>
            <button className="btn btn-secondary" onClick={scrollToSearch}>
              <i className="fas fa-search"></i>
              Search Medicines
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-icon">
            <i className="fas fa-pills"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

