import React from 'react';
import '../styles/Categories.css';

const categories = [
  { id: 'tablets', name: 'Tablets', icon: 'fas fa-pills' },
  { id: 'syrups', name: 'Syrups', icon: 'fas fa-prescription-bottle' },
  { id: 'injections', name: 'Injections', icon: 'fas fa-syringe' },
  { id: 'baby-care', name: 'Baby Care', icon: 'fas fa-baby' },
  { id: 'diabetes', name: 'Diabetes Care', icon: 'fas fa-heartbeat' },
  { id: 'bp-heart', name: 'BP & Heart', icon: 'fas fa-heart' },
  { id: 'vitamins', name: 'Vitamins & Supplements', icon: 'fas fa-capsules' },
  { id: 'devices', name: 'Medical Devices', icon: 'fas fa-stethoscope' },
];

const Categories = ({ onCategoryClick }) => {
  const handleCategoryClick = (categoryId) => {
    onCategoryClick(categoryId);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="categories">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

