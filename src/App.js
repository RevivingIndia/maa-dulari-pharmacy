import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import Categories from './components/Categories';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import Toast from './components/Toast';
import { medicines } from './data/medicines';
import './styles/App.css';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(medicines);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredProducts(medicines);
      return;
    }

    const filtered = medicines.filter(medicine =>
      medicine.name.toLowerCase().includes(query.toLowerCase()) ||
      medicine.usage.toLowerCase().includes(query.toLowerCase()) ||
      medicine.category.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (category) => {
    const filtered = medicines.filter(medicine => medicine.category === category);
    setFilteredProducts(filtered);
  };

  const handleWhatsAppOrder = (medicineName = '', price = '') => {
    setToastMessage('Redirecting to WhatsApp...');
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero onWhatsAppClick={handleWhatsAppOrder} />
      <SearchSection onSearch={handleSearch} />
      <Categories onCategoryClick={handleCategoryFilter} />
      <Products products={filteredProducts} onOrderClick={handleWhatsAppOrder} />
      <HowItWorks />
      <TrustSection />
      <Footer onWhatsAppClick={handleWhatsAppOrder} />
      <StickyWhatsApp onOrderClick={handleWhatsAppOrder} />
      <Toast show={showToast} message={toastMessage} />
    </div>
  );
}

export default App;

