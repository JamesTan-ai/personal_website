import React from 'react';

const CartDropdown = ({ cart, getTotalPrice, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-content">
        {cart.length === 0 ? (
          <div className="cart-dropdown-empty">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-dropdown-items">
              {cart.slice(0, 3).map(item => (
                <div key={item.id} className="cart-dropdown-item">
                  <img src={item.image} alt={item.name} className="cart-dropdown-item-image" />
                  <div className="cart-dropdown-item-info">
                    <div className="cart-dropdown-item-name">{item.name}</div>
                    <div className="cart-dropdown-item-details">
                      <span className="cart-dropdown-quantity">{item.quantity}x</span>
                      <span className="cart-dropdown-price">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
              {cart.length > 3 && (
                <div className="cart-dropdown-more">
                  +{cart.length - 3} more items
                </div>
              )}
            </div>
            <div className="cart-dropdown-footer">
              <div className="cart-dropdown-total">
                <strong>Total: ${getTotalPrice()}</strong>
              </div>
              <div className="cart-dropdown-hint">
                Click to view full cart
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown; 