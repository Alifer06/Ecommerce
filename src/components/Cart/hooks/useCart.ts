import { useState } from 'react';
import type { Product } from '../../../interfaces/IProduct';
import type { CartItem } from '../../../interfaces/ICartItem';

export const useCart = () => {
  const [view, setView] = useState<'products' | 'cart'>('products');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, quantity: number) => {
    const itemExistente = cart.find((item) => item.product.id === product.id);
    
    if (itemExistente) {
      itemExistente.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      setCart([...cart]);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    const nuevoCarrito = cart.filter((item) => item.product.id !== productId);
    setCart(nuevoCarrito);
  };

  let totalCartItems = 0;
  for (const item of cart) {
    totalCartItems += item.quantity;
  }

  return {
    view,
    setView,
    cart,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveFromCart,
    totalCartItems,
  };
};

