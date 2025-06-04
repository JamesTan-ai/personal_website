import React, { useState } from 'react';

const ProductDetail = ({ product, isOpen, onClose, addToCart }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="product-detail-overlay" onClick={handleBackdropClick}>
      <div className="product-detail-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        
        <div className="product-detail-content">
          <div className="product-detail-images">
            <div className="main-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-detail-main-image"
              />
            </div>
          </div>
          
          <div className="product-detail-info">
            <div className="product-detail-header">
              <h1 className="product-detail-title">{product.name}</h1>
              <div className="product-detail-price">${product.price}</div>
            </div>
            
            <div className="product-detail-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            <div className="product-detail-features">
              <h3>Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="product-detail-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
              
              <button 
                className="add-to-cart-detail-btn"
                onClick={handleAddToCart}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
            
            <div className="product-detail-specs">
              <h3>Product Details</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Category:</span>
                  <span className="spec-value">{product.category}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">Premium materials</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Compatibility:</span>
                  <span className="spec-value">Universal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 