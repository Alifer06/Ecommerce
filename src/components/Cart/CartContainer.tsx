import React from 'react';
import type { CartItem } from '../../interfaces/ICartItem';

interface CartContainerProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onBack: () => void;
}

export const CartContainer: React.FC<CartContainerProps> = ({
  cart,
  onUpdateQuantity,
  onRemove,
  onBack,
}) => {
  let totalItems = 0;
  let subtotal = 0;

  for (const item of cart) {
    totalItems = totalItems + item.quantity;
    subtotal = subtotal + item.product.price * item.quantity;
  }

  const shipping = totalItems > 0 ? 149 : 0;
  const total = subtotal + shipping;


  return (
    <div className="cart-container">
      <button className="back-button" onClick={onBack}>
        ← Volver a la tienda
      </button>

      <div className="cart-header">
        <h2 className="cart-title">Tu carrito</h2>
        <p className="cart-subtitle">
          {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Tu carrito está vacío.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {cart.map((item) => (
              <div key={item.product.id} className="cart-item-card">
                <div className="cart-item-image-wrapper">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="cart-item-img"
                  />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.product.title}</h3>
                  <span className="cart-item-category">
                    {item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1)}
                  </span>
                  <div className="quantity-section">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="quantity-btn"
                    >
                      —
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-item-actions">
                  <button className="remove-item-btn" onClick={() => onRemove(item.product.id)}>
                    🗑
                  </button>
                  <div className="cart-item-price">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary-wrapper">
            <div className="cart-summary-card">
              <div className="summary-row">
                <span className="summary-label">Subtotal</span>
                <span className="summary-val">${subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Envío</span>
                <span className="summary-val">${shipping.toLocaleString()}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span className="summary-label-total">Total</span>
                <span className="summary-val-total">${total.toLocaleString()}</span>
              </div>
              <button className="checkout-btn">Continuar al pago</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
