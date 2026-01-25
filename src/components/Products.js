import React from 'react';
import ProductCard from './ProductCard';
import '../styles/Products.css';

const Products = ({ products, onOrderClick }) => {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Popular Medicines</h2>
        {products.length === 0 ? (
          <div className="no-products">
            <i className="fas fa-search"></i>
            <p>No medicines found. Try a different search.</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrderClick={onOrderClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

