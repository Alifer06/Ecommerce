import React from 'react';
import type { Product } from '../../../interfaces/IProduct';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <div className="product-price">${product.price.toLocaleString()}</div>
      </div>
    </div>
  );
};
