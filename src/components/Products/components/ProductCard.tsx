import React from 'react';
import type { Product } from '../../../interfaces/IProduct';
import { getDiscountedPrice } from '../../../utils/priceUtils';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const roundedRating = Math.round(product.rating || 0);
  const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  const discountedPrice = getDiscountedPrice(product);

  return (
    <div className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="product-image-container">
        {product.discountPercentage > 0 && (
          <span className="product-discount">-{Math.round(product.discountPercentage)}%</span>
        )}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <div className="product-rating">
          <span className="stars">{stars}</span>
          <span className="rating-number">({product.rating})</span>
        </div>
        <h3 className="product-name">{product.title}</h3>
        <div className="product-price">{discountedPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</div>
      </div>
    </div>
  );
};
