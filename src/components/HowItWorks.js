import React from 'react';
import '../styles/HowItWorks.css';

const steps = [
  {
    number: 1,
    icon: 'fas fa-search',
    title: 'Search Medicine',
    description: 'Find your medicine quickly using our search bar',
  },
  {
    number: 2,
    icon: 'fab fa-whatsapp',
    title: 'Click "Order on WhatsApp"',
    description: 'Connect with us directly on WhatsApp',
  },
  {
    number: 3,
    icon: 'fas fa-truck',
    title: 'Get Medicines Delivered',
    description: 'Fast and secure delivery to your doorstep',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

