import React, { useState } from 'react';
import type { Product } from '../../../interfaces/IProduct';
import { getDiscountedPrice } from '../../../utils/priceUtils';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (quantity: number) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.thumbnail);
  const [quantity, setQuantity] = useState<number>(1);

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.thumbnail];
  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = getDiscountedPrice(product);

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={onBack}>
        ← Volver al catálogo
      </button>

      <div className="product-detail-layout">
        <div className="product-detail-gallery">
          <div className="main-image-wrapper">
            <img src={selectedImage} alt={product.title} className="main-image" />
          </div>
          <div className="thumbnail-list">
            {imagesList.map((img, idx) => (
              <div
                key={idx}
                className={`thumbnail-wrapper ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`${product.title} ${idx + 1}`} className="thumbnail-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="product-detail-info">
          <span className="detail-category">{product.category.toUpperCase()}</span>
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-subtitle">{product.description}</p>

          <div className="detail-price-container">
            {hasDiscount ? (
              <div className="detail-price-wrapper">
                <span className="detail-price">
                  {discountedPrice.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
                </span>
                <span className="detail-original-price">
                  {product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
                </span>
                <span className="detail-discount-badge">
                  -{Math.round(product.discountPercentage)}% OFF
                </span>
              </div>
            ) : (
              <div className="detail-price">
                ${product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
              </div>
            )}
          </div>

          <div className="detail-checklist">
            <div className="checklist-item">✓ Calidad premium garantizada</div>
            <div className="checklist-item">✓ Garantía oficial de la marca</div>
            <div className="checklist-item">✓ Envío express a domicilio</div>
          </div>

          <div className="quantity-container">
            <span className="quantity-label">Cantidad</span>
            <div className="quantity-section">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                —
              </button>
              <span className="quantity-value">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={() => onAddToCart(quantity)}>
              Agregar al carrito
            </button>
          </div>

          <div className="specs-table">
            <div className="specs-row">
              <div className="specs-cell">
                <span className="specs-label">RATING</span>
                <span className="specs-value">★ {product.rating}</span>
              </div>
              <div className="specs-cell">
                <span className="specs-label">CATEGORÍA</span>
                <span className="specs-value">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
              </div>
            </div>
            <div className="specs-row">
              <div className="specs-cell">
                <span className="specs-label">DESCUENTO</span>
                <span className="specs-value">{Math.round(product.discountPercentage)}% OFF</span>
              </div>
              <div className="specs-cell">
                <span className="specs-label">ESTADO</span>
                <span className="specs-value">Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
