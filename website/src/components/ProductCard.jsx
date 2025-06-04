import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="product-card-vca"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="product-image-wrapper">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image-clean"
        />
        <div className={`product-hover-overlay ${isHovered ? 'visible' : ''}`}>
          <button 
            className="add-to-cart-clean"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-details-clean">
        <h3 className="product-name-clean">{product.name}</h3>
        <div className="product-price-clean">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard; 