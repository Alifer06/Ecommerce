import React from 'react';
import ProductsContainer from '../components/Products';
import type { Product } from '../interfaces/IProduct';

interface ProductsPageProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart }) => {
  return <ProductsContainer onAddToCart={onAddToCart} />;
};

export default ProductsPage;

