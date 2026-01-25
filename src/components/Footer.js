import React from 'react';
import { WHATSAPP_NUMBER } from '../data/medicines';
import '../styles/Footer.css';

const Footer = ({ onWhatsAppClick }) => {
  const handleWhatsApp = () => {
    onWhatsAppClick();

    let message = 'Hello! I would like to know more about Dulari Health Care.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 500);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <i className="fas fa-heartbeat"></i> Dulari Health Care
            </h3>
            <p>
              Your trusted partner for genuine medicines and healthcare products. Doctor ki likhi medicine yahin milegi.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>
                  Categories
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
                  Medicines
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>
                  How It Works
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#whatsapp" className="whatsapp-link" onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}>
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i> +91 XXXXX XXXXX
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> [Your Address Here]
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Dulari Health Care. All rights reserved.</p>
          <p className="disclaimer">
            Disclaimer: Medicines sold as per prescription. Please consult your doctor before use.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

