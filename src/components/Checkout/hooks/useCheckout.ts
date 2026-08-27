import { useState } from 'react';
import type { CartItem } from '../../../interfaces/ICartItem';

export const useCheckout = (cart: CartItem[]) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'wallet' | 'spei'>('card');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  let totalItems = 0;
  let subtotal = 0;
  for (const item of cart) {
    totalItems = totalItems + item.quantity;
    subtotal = subtotal + item.product.price * item.quantity;
  }
  const shipping = totalItems > 0 ? 149 : 0;
  const total = subtotal + shipping;

  const handlePay = () => {
    setShowSuccessAlert(true);
  };

  return {
    selectedMethod,
    setSelectedMethod,
    showSuccessAlert,
    subtotal,
    shipping,
    total,
    handlePay,
  };
};
