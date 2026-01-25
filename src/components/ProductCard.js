import React from 'react';
import { WHATSAPP_NUMBER } from '../data/medicines';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onOrderClick }) => {
  const handleOrder = () => {
    onOrderClick(product.name, product.price);

    // Create WhatsApp message
    let message = 'Hello! I would like to order medicine from Dulari Health Care.\n\n';
    message += `Medicine: ${product.name}\n`;
    message += `Price: ₹${product.price}\n\n`;
    message += 'Please provide more details about my order.';

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 500);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <i className="fas fa-pills"></i>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-usage">{product.usage}</p>
        <div className="product-price">₹{product.price}</div>
        <button className="product-btn" onClick={handleOrder}>
          <i className="fab fa-whatsapp"></i>
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

