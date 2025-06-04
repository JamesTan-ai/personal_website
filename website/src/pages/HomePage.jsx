import React from 'react';
import Header from '../components/Header';
import ProductsGrid from '../components/ProductsGrid';

const HomePage = ({ 
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  addToCart,
  getTotalItems,
  setShowCart,
  scrollToTop,
  scrollToProducts,
  scrollToAbout,
  cart,
  getTotalPrice,
  onSearch,
  searchTerm
}) => {
  // Limit products to 3 rows (assuming 3 products per row = 9 products)
  const limitedProducts = products.slice(0, 9);

  return (
    <div>
      {/* Header - Now positioned over the video landing */}
      <Header 
        getTotalItems={getTotalItems}
        setShowCart={setShowCart}
        scrollToTop={scrollToTop}
        scrollToProducts={scrollToProducts}
        scrollToAbout={scrollToAbout}
        cart={cart}
        getTotalPrice={getTotalPrice}
        isHomePage={true}
        onSearch={onSearch}
        categories={categories}
      />

      {/* Video Landing Section */}
      <section className="video-landing">
        <div className="video-container">
          <video 
            className="landing-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <div className="video-content">
              <h1 className="video-title">Secure Your World</h1>
              <p className="video-subtitle">
                Handcrafted phone straps that blend security with elegance. 
                Discover our collection of premium accessories designed for the modern lifestyle.
              </p>
              <div className="video-buttons">
                <button 
                  className="video-cta-primary"
                  onClick={scrollToProducts}
                >
                  Discover Collection
                </button>
                <button 
                  className="video-cta-secondary"
                  onClick={scrollToAbout}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="scroll-indicator">
              <div className="scroll-arrow" onClick={scrollToProducts}>
                <span>↓</span>
                <span className="scroll-text">Explore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Website Content */}
      <div className="main-content">
        {/* Full-Width Hero Image Section 1 */}
        <section className="full-width-hero">
          <div className="hero-image-container">
            <div className="hero-image-backdrop" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}>
              <div className="hero-image-overlay">
                <div className="hero-image-content">
                  <h3 className="hero-image-title">Handcrafted Excellence</h3>
                  <p className="hero-image-subtitle">Each piece tells a story of artisanal mastery and timeless elegance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid with Categories - Limited to 3 rows */}
        <ProductsGrid 
          products={limitedProducts}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          addToCart={addToCart}
          isHomePage={true}
          showCategoryButtons={false}
        />

        {/* Full-Width Hero Image Section 2 */}
        <section className="full-width-hero">
          <div className="hero-image-container">
            <div className="hero-image-backdrop" style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}>
              <div className="hero-image-overlay">
                <div className="hero-image-content">
                  <h3 className="hero-image-title">Fashion Meets Function</h3>
                  <p className="hero-image-subtitle">Where style and security converge in perfect harmony</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-content">
              <h3>Why Choose Our Phone Straps?</h3>
              <div className="features-grid">
                <div className="feature">
                  <div className="feature-icon">🎨</div>
                  <h4>Handcrafted Design</h4>
                  <p>Each strap is carefully crafted with attention to detail and quality materials.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">🔒</div>
                  <h4>Secure Attachment</h4>
                  <p>Reliable attachment system keeps your phone safe and accessible.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">📱</div>
                  <h4>Universal Compatibility</h4>
                  <p>Works with all phone cases and devices with a strap attachment point.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">✨</div>
                  <h4>Style Statement</h4>
                  <p>Express your personality with our unique and trendy designs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Hero Image Section 3 */}
        <section className="full-width-hero">
          <div className="hero-image-container">
            <div className="hero-image-split">
              <div className="hero-split-item" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80')`
              }}>
                <div className="hero-image-overlay">
                  <div className="hero-image-content">
                    <h3 className="hero-image-title">Modern Aesthetic</h3>
                    <p className="hero-image-subtitle">Contemporary designs for the modern lifestyle</p>
                  </div>
                </div>
              </div>
              <div className="hero-split-item" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506629905607-45ac5e6a4a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80')`
              }}>
                <div className="hero-image-overlay">
                  <div className="hero-image-content">
                    <h3 className="hero-image-title">Premium Materials</h3>
                    <p className="hero-image-subtitle">Only the finest materials make the cut</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>PhoneStrap Co.</h4>
                <p>Your one-stop shop for beautiful, handcrafted phone straps that combine style and security.</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home" onClick={scrollToTop}>Home</a></li>
                  <li><a href="#products" onClick={scrollToProducts}>Products</a></li>
                  <li><a href="#about" onClick={scrollToAbout}>About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#">Instagram</a>
                  <a href="#">Facebook</a>
                  <a href="#">TikTok</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 PhoneStrap Co. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage; 