import { useCart } from './components/Cart/hooks/useCart';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

function App() {
  const {
    view,
    setView,
    cart,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveFromCart,
    totalCartItems,
    clearCart,
  } = useCart();

  return (
    <div className="page-container">
      {view !== 'checkout' && (
        <div className="cart-floating-icon" onClick={() => setView(view === 'cart' ? 'products' : 'cart')}>
          <span className="material-symbols-outlined">shopping_cart</span>
          {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
        </div>
      )}

      <main className="page-content">
        {view === 'products' && (
          <ProductsPage onAddToCart={handleAddToCart} />
        )}
        {view === 'cart' && (
          <CartPage
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveFromCart}
            onBack={() => setView('products')}
            onCheckout={() => setView('checkout')}
          />
        )}
        {view === 'checkout' && (
          <CheckoutPage
            cart={cart}
            onBack={() => setView('cart')}
            onPaymentSuccess={() => {
              clearCart();
              setView('products');
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
