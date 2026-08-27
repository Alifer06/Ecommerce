import React from 'react';
import CartContainer from '../components/Cart';
import type { CartItem } from '../interfaces/ICartItem';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onBack: () => void;
  onCheckout: () => void;
}

const CartPage: React.FC<CartPageProps> = ({
  cart,
  onUpdateQuantity,
  onRemove,
  onBack,
  onCheckout,
}) => {
  return (
    <CartContainer
      cart={cart}
      onUpdateQuantity={onUpdateQuantity}
      onRemove={onRemove}
      onBack={onBack}
      onCheckout={onCheckout}
    />
  );
};

export default CartPage;
