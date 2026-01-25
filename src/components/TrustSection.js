import React from 'react';
import '../styles/TrustSection.css';

const trustItems = [
  {
    icon: 'fas fa-shield-alt',
    title: '100% Genuine Medicines',
    description: 'All medicines are authentic and verified',
  },
  {
    icon: 'fas fa-certificate',
    title: 'Licensed Pharmacy',
    description: 'Fully licensed and regulated pharmacy',
  },
  {
    icon: 'fas fa-file-medical',
    title: 'Prescription Verified',
    description: 'We verify all prescriptions for your safety',
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'Secure WhatsApp Ordering',
    description: 'Safe and convenient ordering via WhatsApp',
  },
];

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <h2 className="section-title">Why Trust Dulari Health Care?</h2>
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-card">
              <div className="trust-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

