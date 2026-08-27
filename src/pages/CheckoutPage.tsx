import React from 'react';
import type { CartItem } from '../interfaces/ICartItem';
import { CheckoutContainer } from '../components/Checkout/CheckoutContainer';

interface CheckoutPageProps {
  cart: CartItem[];
  onBack: () => void;
  onPaymentSuccess: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, onBack, onPaymentSuccess }) => {
  return (
    <CheckoutContainer
      cart={cart}
      onBack={onBack}
      onPaymentSuccess={onPaymentSuccess}
    />
  );
};

export default CheckoutPage;


