import React from 'react';
import { WHATSAPP_NUMBER } from '../data/medicines';
import '../styles/StickyWhatsApp.css';

const StickyWhatsApp = ({ onOrderClick }) => {
  const handleClick = () => {
    onOrderClick();

    let message = 'Hello! I would like to order medicine from Dulari Health Care.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 500);
  };

  return (
    <a href="#whatsapp-order" className="sticky-whatsapp pulse" onClick={(e) => { e.preventDefault(); handleClick(); }}>
      <i className="fab fa-whatsapp"></i>
      <span>Order Now</span>
    </a>
  );
};

export default StickyWhatsApp;

