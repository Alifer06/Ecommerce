import { useCart } from './components/Cart/hooks/useCart';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
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
  } = useCart();

  return (
    <div className="page-container">
      <div className="cart-floating-icon" onClick={() => setView(view === 'cart' ? 'products' : 'cart')}>
        <span className="cart-emoji">🛒</span>
        {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
      </div>

      <main className="page-content">
        {view === 'products' ? (
          <ProductsPage onAddToCart={handleAddToCart} />
        ) : (
          <CartPage
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveFromCart}
            onBack={() => setView('products')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
