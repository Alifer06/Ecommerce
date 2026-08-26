import React from 'react';
import ProductsContainer from '../components/Products';

const ProductsPage: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="gradient-text">E-Commerce</h1>
        <p className="subtitle">Explora nuestro catálogo exclusivo de productos</p>
      </header>

      <main className="page-content">
        <ProductsContainer />
      </main>
    </div>
  );
};

export default ProductsPage;
