import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const CartPage = ({ 
  cart, 
  updateQuantity, 
  removeFromCart, 
  getTotalPrice,
  getTotalItems,
  setShowCart,
  scrollToTop,
  scrollToProducts,
  scrollToAbout,
  onSearch,
  searchTerm,
  categories = []
}) => {
  const navigate = useNavigate();

  const subtotal = parseFloat(getTotalPrice());
  const shipping = cart.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <Header 
        getTotalItems={getTotalItems}
        setShowCart={setShowCart}
        scrollToTop={scrollToTop}
        scrollToProducts={scrollToProducts}
        scrollToAbout={scrollToAbout}
        cart={cart}
        getTotalPrice={getTotalPrice}
        onSearch={onSearch}
        categories={categories}
      />
      
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="container">
          <nav className="breadcrumb">
            <button onClick={() => navigate('/')} className="breadcrumb-link">
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Shopping Cart</span>
          </nav>
        </div>
      </div>

      <main className="cart-main">
        <div className="container">
          <div className="cart-header-section">
            <h1 className="cart-page-title">Shopping Cart</h1>
            <p className="cart-item-count">
              {cart.length === 0 ? 'Your cart is empty' : `${getTotalItems()} item${getTotalItems() !== 1 ? 's' : ''} in your cart`}
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart-section">
              <div className="empty-cart-content">
                <div className="empty-cart-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <button 
                  className="continue-shopping-btn"
                  onClick={() => navigate('/')}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="cart-content-layout">
              {/* Cart Items Section */}
              <div className="cart-items-section">
                <div className="cart-items-list">
                  {cart.map(item => (
                    <div key={item.id} className="cart-page-item">
                      <div className="cart-page-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      
                      <div className="cart-page-item-details">
                        <div className="cart-page-item-info">
                          <h3 className="cart-page-item-name">{item.name}</h3>
                          <div className="cart-page-item-price">${item.price}</div>
                        </div>
                        
                        <div className="cart-page-item-controls">
                          <div className="cart-page-quantity-control">
                            <label className="quantity-label">Quantity:</label>
                            <div className="quantity-control">
                              <button 
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                −
                              </button>
                              <span className="quantity-value">{item.quantity}</span>
                              <button 
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          
                          <div className="cart-page-item-total">
                            <span className="item-total-label">Total:</span>
                            <span className="item-total-price">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                          
                          <button 
                            className="remove-item-btn"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="cart-actions">
                  <button 
                    className="continue-shopping-btn"
                    onClick={() => navigate('/')}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="order-summary-section">
                <div className="order-summary">
                  <h3 className="order-summary-title">Order Summary</h3>
                  
                  <div className="order-summary-details">
                    <div className="summary-row">
                      <span className="summary-label">Subtotal ({getTotalItems()} items)</span>
                      <span className="summary-value">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="summary-row">
                      <span className="summary-label">Shipping</span>
                      <span className="summary-value">
                        {cart.length > 0 ? `$${shipping.toFixed(2)}` : '$0.00'}
                      </span>
                    </div>
                    
                    <div className="summary-row">
                      <span className="summary-label">Tax</span>
                      <span className="summary-value">${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="summary-row summary-total">
                      <span className="summary-label">Total</span>
                      <span className="summary-value">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="checkout-section">
                    <button className="checkout-btn-main">
                      Proceed to Checkout
                    </button>
                    
                    <div className="payment-options">
                      <p className="payment-security">🔒 Secure Checkout</p>
                      <div className="payment-methods">
                        <span>We accept:</span>
                        <div className="payment-icons">
                          💳 🏧 💰
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer spacer */}
      <div className="page-footer-spacer"></div>
    </div>
  );
};

export default CartPage; 