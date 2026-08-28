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
    <div className="app-root">
      {view !== 'checkout' && (
        <header className="app-header">
          <div className="header-container">
            <h1 className="header-title">Smartphones</h1>
            <button
              className="cart-header-btn"
              onClick={() => setView(view === 'cart' ? 'products' : 'cart')}
              title="Ver Carrito"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
            </button>
          </div>
        </header>
      )}

      <div className="page-container">
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
    </div>
  );
}

export default App;
