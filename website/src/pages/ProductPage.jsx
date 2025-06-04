import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const ProductPage = ({ 
  products, 
  addToCart, 
  getTotalItems, 
  setShowCart, 
  scrollToTop, 
  scrollToProducts, 
  scrollToAbout,
  cart,
  getTotalPrice,
  onSearch,
  searchTerm,
  categories = []
}) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.id === parseInt(productId));

  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="product-page-error">
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
        <div className="error-content">
          <h1>Product Not Found</h1>
          <button onClick={() => navigate('/')} className="back-home-btn">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Show success message or navigate to cart
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-page">
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
            <span className="breadcrumb-current">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <main className="product-main">
        <div className="container">
          <div className="product-layout">
            
            {/* Product Images */}
            <div className="product-images-section">
              <div className="main-product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="main-image"
                />
              </div>
              
              {/* Image Thumbnails (placeholder for multiple images) */}
              <div className="image-thumbnails">
                <div className="thumbnail active">
                  <img src={product.image} alt={product.name} />
                </div>
                {/* Add more thumbnails when you have multiple product images */}
              </div>
            </div>

            {/* Product Information */}
            <div className="product-info-section">
              <div className="product-header">
                <h1 className="product-title">{product.name}</h1>
                <div className="product-price-display">
                  <span className="currency">$</span>
                  <span className="price">{product.price}</span>
                </div>
              </div>

              <div className="product-description-section">
                <p className="product-description-text">{product.description}</p>
              </div>

              {/* Product Features */}
              <div className="product-features-section">
                <h3>Product Features</h3>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="purchase-section">
                <div className="quantity-section">
                  <label htmlFor="quantity" className="quantity-label">Quantity</label>
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button 
                  className="add-to-cart-main-btn"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="product-details-section">
                <h3>Product Details</h3>
                <div className="details-grid">
                  <div className="detail-row">
                    <span className="detail-label">Category</span>
                    <span className="detail-value">{product.category}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Material</span>
                    <span className="detail-value">Premium Quality</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Compatibility</span>
                    <span className="detail-value">Universal</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Care Instructions</span>
                    <span className="detail-value">Wipe clean with soft cloth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="container">
            <h2 className="related-title">You May Also Like</h2>
            <div className="related-products-grid">
              {relatedProducts.map(relatedProduct => (
                <div 
                  key={relatedProduct.id} 
                  className="related-product-card"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="related-product-image">
                    <img src={relatedProduct.image} alt={relatedProduct.name} />
                  </div>
                  <div className="related-product-info">
                    <h4 className="related-product-name">{relatedProduct.name}</h4>
                    <div className="related-product-price">${relatedProduct.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer spacer */}
      <div className="page-footer-spacer"></div>
    </div>
  );
};

export default ProductPage; 