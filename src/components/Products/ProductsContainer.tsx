import React from 'react';
import { useProducts } from './hooks/useProducts';
import { ProductList } from './components/ProductList';

export const ProductsContainer: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="products-container">
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando productos...</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p className="error-message">Error: {error}</p>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="empty-container">
          <p>No se encontraron productos.</p>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <ProductList products={products} />
      )}
    </div>
  );
};
