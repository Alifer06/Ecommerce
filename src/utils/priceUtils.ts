import type { Product } from '../interfaces/IProduct';

export const getDiscountedPrice = (product: Product): number => {
  if (!product.discountPercentage || product.discountPercentage <= 0) {
    return product.price;
  }
  return product.price * (1 - product.discountPercentage / 100);
};

export const getItemSubtotal = (product: Product, quantity: number): number => {
  return getDiscountedPrice(product) * quantity;
};

export const getUnitSavings = (product: Product): number => {
  if (!product.discountPercentage || product.discountPercentage <= 0) {
    return 0;
  }
  return product.price - getDiscountedPrice(product);
};