import React from 'react';
import type { CartItem } from '../../interfaces/ICartItem';
import { useCheckout } from './hooks/useCheckout';
import { PaymentOptions } from './components/PaymentOptions';
import { CheckoutSummary } from './components/CheckoutSummary';
import { SuccessModal } from './components/SuccessModal';

interface CheckoutContainerProps {
  cart: CartItem[];
  onBack: () => void;
  onPaymentSuccess: () => void;
}

export const CheckoutContainer: React.FC<CheckoutContainerProps> = ({
  cart,
  onBack,
  onPaymentSuccess,
}) => {
  const {
    selectedMethod,
    setSelectedMethod,
    showSuccessAlert,
    subtotal,
    shipping,
    total,
    handlePay,
  } = useCheckout(cart);

  return (
    <div className="checkout-container">
      <button className="back-button" onClick={onBack}>
        ← Volver al carrito
      </button>

      <div className="checkout-header">
        <h2 className="checkout-title">Método de pago</h2>
        <p className="checkout-subtitle">Selecciona cómo quieres pagar</p>
      </div>

      <PaymentOptions
        selectedMethod={selectedMethod}
        onSelectMethod={setSelectedMethod}
      />

      <CheckoutSummary
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        onPay={handlePay}
      />

      {showSuccessAlert && (
        <SuccessModal
          total={total}
          selectedMethod={selectedMethod}
          onConfirm={onPaymentSuccess}
        />
      )}
    </div>
  );
};
