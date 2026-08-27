import React, { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import type { Product } from '../../interfaces/IProduct';

interface ProductsContainerProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductsContainer: React.FC<ProductsContainerProps> = ({ onAddToCart }) => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="products-container">
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={(qty) => onAddToCart(selectedProduct, qty)}
        />
      ) : (
        <>
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
            <ProductList products={products} onProductClick={setSelectedProduct} />
          )}
        </>
      )}
    </div>
  );
};
