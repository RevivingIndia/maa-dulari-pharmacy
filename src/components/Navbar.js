import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <i className="fas fa-heartbeat"></i>
          <span>Dulari Health Care</span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#categories" onClick={(e) => { e.preventDefault(); scrollToSection('categories'); }}>Categories</a>
          <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Medicines</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

