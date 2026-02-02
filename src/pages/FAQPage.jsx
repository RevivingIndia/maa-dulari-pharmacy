import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './FAQPage.css'

const faqItems = [
  {
    question: 'How do I place an order?',
    answer: 'Message your medicine names or upload a clear photo/PDF of your prescription to our WhatsApp number, or call us. Provide your name, full address and pincode.',
  },
  {
    question: 'Can I pay online?',
    answer: "We do not have an online checkout. After you confirm your order on WhatsApp, we'll share the secure payment options available for your area (UPI, bank transfer, or cash/card on pickup/delivery where available).",
  },
  {
    question: 'Do you accept prescriptions?',
    answer: 'Yes. We accept prescriptions—you can send a clear photo or PDF via WhatsApp or bring it when you visit. Our team will verify and fulfil your order.',
  },
  {
    question: 'Do you deliver to my area?',
    answer: 'We deliver PAN India. Share your pincode or address with us via WhatsApp or call, and we will confirm if we can deliver to your area. We serve metro cities as well as tier-2 and tier-3 towns.',
  },
  {
    question: 'How quickly will I receive my medicines?',
    answer: 'Delivery times vary by location. We aim for fast delivery—often within 60 minutes* in select areas. You will receive a clear delivery timeline when you place your order.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer: 'Yes. Contact us as soon as possible via WhatsApp or call. If your order has not been dispatched, we can modify or cancel it. Once shipped, we will assist you based on our policy.',
  },
  {
    question: 'What if an item is damaged or incorrect?',
    answer: 'We take quality seriously. If you receive a damaged or incorrect item, please contact us immediately with details and a photo if possible. We will arrange a replacement or refund as per our policy.',
  },
  {
    question: 'Can I get repeat/refill reminders?',
    answer: 'Yes. You can ask us to set reminders for your regular medicines. Message us your refill schedule and we will remind you when it is time to reorder.',
  },
  {
    question: 'Will you give medical advice?',
    answer: 'We do not provide medical advice or diagnose conditions. We dispense medicines as per your prescription. For any health concerns, please consult your doctor.',
  },
  {
    question: 'Is my personal data safe?',
    answer: 'Yes. We treat your personal and health information with care. We do not share your data with third parties for marketing. Prescription and order details are used only to fulfil your order and comply with regulations.',
  },
]

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="faq-hero-banner">
        <div className="faq-hero-content">
          <h1>FAQ&apos;s</h1>
          <nav className="faq-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="faq-breadcrumb-home">Home</Link>
            <span className="faq-breadcrumb-sep">/</span>
            <span className="faq-breadcrumb-current">FAQ&apos;s</span>
          </nav>
        </div>
        <div className="faq-vector faq-v-pie" aria-hidden>
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M25 25 L25 3 A22 22 0 0 1 45 25 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        <div className="faq-vector faq-v-zigzag" aria-hidden>
          <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15 L20 5 L40 25 L60 5 L80 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faq-vector faq-v-wavy" aria-hidden>
          <svg viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 Q50 60 80 70 Q110 80 130 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M115 40 L130 30 L125 48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <section className="faq-accordion-section">
        <div className="faq-accordion-container">
          <h2 className="faq-accordion-title">
            We will be there for you every time <br /> of the way 24/7! for customer
          </h2>

          <div className="faq-accordion">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-accordion-item ${openIndex === index ? 'active' : ''}`}
              >
                <div
                  className="faq-accordion-question"
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => e.key === 'Enter' && toggleItem(index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{item.question}</span>
                  <FaChevronDown className="faq-accordion-chevron" aria-hidden />
                </div>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-accordion-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQPage
