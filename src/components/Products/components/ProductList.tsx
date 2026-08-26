import React from 'react';
import type { Product } from '../../../interfaces/IProduct';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  );
};
