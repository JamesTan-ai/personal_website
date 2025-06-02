import { useState } from 'react'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  // Sample phone strap products - All 53 images
  const products = [
    // Beaded Phone Straps
    {
      id: 1,
      name: "Beaded Phone Strap - Cherry Bliss",
      price: 14.99,
      category: "beaded",
      image: "/images/1.jpg",
      description: "Beautiful cherry-themed beaded phone strap with pink and white pearls",
      features: ["Handcrafted beads", "Secure attachment", "Compatible with all phones"]
    },
    {
      id: 2,
      name: "Beaded Phone Strap - Ocean Pearls",
      price: 15.99,
      category: "beaded",
      image: "/images/2.jpg",
      description: "Ocean-inspired beaded strap with blue and white pearls",
      features: ["Natural pearl-like beads", "Ocean color palette", "Water-resistant"]
    },
    {
      id: 3,
      name: "Beaded Phone Strap - Sunset Glow",
      price: 16.49,
      category: "beaded",
      image: "/images/3.jpg",
      description: "Warm sunset colors with golden beads and coral accents",
      features: ["Hand-selected beads", "Sunset color palette", "Lightweight design"]
    },
    {
      id: 4,
      name: "Beaded Phone Strap - Midnight Sky",
      price: 17.49,
      category: "beaded",
      image: "/images/4.jpg",
      description: "Deep blue and silver beads reminiscent of a starry night",
      features: ["Midnight blue beads", "Silver accents", "Celestial theme"]
    },
    {
      id: 5,
      name: "Beaded Phone Strap - Rose Garden",
      price: 15.49,
      category: "beaded",
      image: "/images/5.jpg",
      description: "Delicate rose-colored beads with floral charm",
      features: ["Rose-tinted beads", "Floral design", "Romantic appeal"]
    },
    {
      id: 6,
      name: "Beaded Phone Strap - Forest Dreams",
      price: 16.99,
      category: "beaded",
      image: "/images/6.jpg",
      description: "Earthy green beads inspired by forest tranquility",
      features: ["Natural green tones", "Earth-friendly materials", "Zen aesthetics"]
    },
    {
      id: 7,
      name: "Beaded Phone Strap - Lavender Fields",
      price: 14.49,
      category: "beaded",
      image: "/images/7.jpg",
      description: "Soothing purple beads with lavender scent",
      features: ["Lavender purple", "Calming properties", "Aromatherapy benefits"]
    },
    {
      id: 8,
      name: "Beaded Phone Strap - Golden Hour",
      price: 18.99,
      category: "beaded",
      image: "/images/8.jpg",
      description: "Warm golden beads capturing the magic of golden hour",
      features: ["24k gold-plated beads", "Luxury finish", "Premium quality"]
    },
    {
      id: 9,
      name: "Beaded Phone Strap - Arctic Ice",
      price: 15.99,
      category: "beaded",
      image: "/images/9.jpg",
      description: "Cool white and silver beads with icy elegance",
      features: ["Frosted finish", "Winter theme", "Cool color palette"]
    },
    {
      id: 10,
      name: "Beaded Phone Strap - Tropical Breeze",
      price: 16.49,
      category: "beaded",
      image: "/images/10.jpg",
      description: "Vibrant tropical colors with coconut and palm motifs",
      features: ["Tropical colors", "Summer vibes", "Beach-inspired"]
    },
    {
      id: 11,
      name: "Beaded Phone Strap - Vintage Charm",
      price: 17.99,
      category: "beaded",
      image: "/images/11.jpg",
      description: "Antique-style beads with vintage brass accents",
      features: ["Vintage design", "Brass accents", "Timeless appeal"]
    },
    {
      id: 12,
      name: "Beaded Phone Strap - Rainbow Dreams",
      price: 16.99,
      category: "beaded",
      image: "/images/12.jpg",
      description: "Colorful rainbow beads bringing joy and positivity",
      features: ["Rainbow colors", "Cheerful design", "Mood-lifting"]
    },
    {
      id: 13,
      name: "Beaded Phone Strap - Cosmic Wonder",
      price: 18.49,
      category: "beaded",
      image: "/images/13.jpg",
      description: "Galaxy-inspired beads with cosmic shimmer",
      features: ["Galaxy colors", "Shimmer effect", "Space-themed"]
    },
    {
      id: 14,
      name: "Beaded Phone Strap - Sakura Blossom",
      price: 17.49,
      category: "beaded",
      image: "/images/14.jpg",
      description: "Delicate pink beads inspired by Japanese cherry blossoms",
      features: ["Sakura pink", "Japanese inspired", "Spring theme"]
    },
    {
      id: 15,
      name: "Beaded Phone Strap - Desert Sand",
      price: 15.99,
      category: "beaded",
      image: "/images/15.jpg",
      description: "Warm sand-colored beads with desert inspiration",
      features: ["Sand tones", "Desert theme", "Warm colors"]
    },
    {
      id: 16,
      name: "Beaded Phone Strap - Coral Reef",
      price: 16.99,
      category: "beaded",
      image: "/images/16.jpg",
      description: "Vibrant coral and turquoise beads from ocean depths",
      features: ["Coral colors", "Ocean inspired", "Vibrant tones"]
    },
    {
      id: 17,
      name: "Beaded Phone Strap - Mystic Moon",
      price: 18.99,
      category: "beaded",
      image: "/images/17.jpg",
      description: "Mystical silver and blue beads with moon phases",
      features: ["Moon phases", "Mystical design", "Silver accents"]
    },
    {
      id: 18,
      name: "Beaded Phone Strap - Autumn Leaves",
      price: 16.49,
      category: "beaded",
      image: "/images/18.jpg",
      description: "Rich autumn colors with amber and bronze beads",
      features: ["Autumn colors", "Seasonal design", "Warm tones"]
    },

    // Chain Phone Straps
    {
      id: 19,
      name: "Chain Phone Strap - Gold Link",
      price: 16.99,
      category: "chain",
      image: "/images/19.jpg",
      description: "Elegant gold chain phone strap with modern minimalist design",
      features: ["Premium gold plating", "Durable metal links", "Adjustable length"]
    },
    {
      id: 20,
      name: "Chain Phone Strap - Rose Gold",
      price: 17.99,
      category: "chain",
      image: "/images/20.jpg",
      description: "Sophisticated rose gold chain perfect for any occasion",
      features: ["Rose gold finish", "Hypoallergenic", "Luxury design"]
    },
    {
      id: 21,
      name: "Chain Phone Strap - Silver Classic",
      price: 15.99,
      category: "chain",
      image: "/images/21.jpg",
      description: "Timeless silver chain with polished finish",
      features: ["Sterling silver plated", "Classic design", "Tarnish resistant"]
    },
    {
      id: 22,
      name: "Chain Phone Strap - Vintage Brass",
      price: 18.99,
      category: "chain",
      image: "/images/22.jpg",
      description: "Antique brass finish with vintage charm",
      features: ["Vintage brass finish", "Antique style", "Aged patina"]
    },
    {
      id: 23,
      name: "Chain Phone Strap - Black Steel",
      price: 19.99,
      category: "chain",
      image: "/images/23.jpg",
      description: "Bold black steel chain for edgy style",
      features: ["Black steel finish", "Bold design", "Scratch resistant"]
    },
    {
      id: 24,
      name: "Chain Phone Strap - Copper Glow",
      price: 17.49,
      category: "chain",
      image: "/images/24.jpg",
      description: "Warm copper chain with rustic appeal",
      features: ["Copper finish", "Rustic charm", "Unique patina"]
    },
    {
      id: 25,
      name: "Chain Phone Strap - Pearl Link",
      price: 21.99,
      category: "chain",
      image: "/images/25.jpg",
      description: "Elegant chain interwoven with pearl accents",
      features: ["Pearl accents", "Elegant design", "Luxury materials"]
    },
    {
      id: 26,
      name: "Chain Phone Strap - Gothic Black",
      price: 18.49,
      category: "chain",
      image: "/images/26.jpg",
      description: "Dark gothic chain with mysterious allure",
      features: ["Gothic design", "Dark finish", "Mysterious style"]
    },
    {
      id: 27,
      name: "Chain Phone Strap - Delicate Silver",
      price: 16.49,
      category: "chain",
      image: "/images/27.jpg",
      description: "Fine delicate silver chain for subtle elegance",
      features: ["Delicate links", "Subtle elegance", "Lightweight"]
    },
    {
      id: 28,
      name: "Chain Phone Strap - Industrial Steel",
      price: 20.99,
      category: "chain",
      image: "/images/28.jpg",
      description: "Heavy-duty steel chain with industrial aesthetic",
      features: ["Industrial design", "Heavy-duty", "Ultra durable"]
    },
    {
      id: 29,
      name: "Chain Phone Strap - Twisted Gold",
      price: 19.49,
      category: "chain",
      image: "/images/29.jpg",
      description: "Twisted gold chain pattern for unique texture",
      features: ["Twisted pattern", "Gold finish", "Unique texture"]
    },
    {
      id: 30,
      name: "Chain Phone Strap - Art Deco",
      price: 22.99,
      category: "chain",
      image: "/images/30.jpg",
      description: "Art deco inspired chain with geometric patterns",
      features: ["Art deco style", "Geometric design", "Vintage inspired"]
    },
    {
      id: 31,
      name: "Chain Phone Strap - Minimalist Wire",
      price: 14.99,
      category: "chain",
      image: "/images/31.jpg",
      description: "Ultra-minimalist wire chain for modern aesthetics",
      features: ["Minimalist design", "Modern style", "Ultra-thin"]
    },
    {
      id: 32,
      name: "Chain Phone Strap - Vintage Gold",
      price: 18.99,
      category: "chain",
      image: "/images/32.jpg",
      description: "Vintage-style gold chain with ornate details",
      features: ["Vintage gold", "Ornate details", "Classic beauty"]
    },
    {
      id: 33,
      name: "Chain Phone Strap - Multi-Metal",
      price: 21.49,
      category: "chain",
      image: "/images/33.jpg",
      description: "Mixed metal chain combining gold, silver, and copper",
      features: ["Multi-metal", "Mixed finishes", "Unique combination"]
    },
    {
      id: 34,
      name: "Chain Phone Strap - Link & Leather",
      price: 23.99,
      category: "chain",
      image: "/images/34.jpg",
      description: "Chain and leather hybrid for rugged elegance",
      features: ["Chain and leather", "Rugged style", "Hybrid design"]
    },
    {
      id: 35,
      name: "Chain Phone Strap - Figaro Style",
      price: 17.99,
      category: "chain",
      image: "/images/35.jpg",
      description: "Classic figaro chain pattern in premium metal",
      features: ["Figaro pattern", "Classic style", "Premium metal"]
    },

    // Crystal Phone Straps
    {
      id: 36,
      name: "Crystal Phone Strap - Rainbow Dreams",
      price: 18.99,
      category: "crystal",
      image: "/images/36.jpg",
      description: "Sparkling rainbow crystal phone strap that catches the light beautifully",
      features: ["Genuine crystals", "Prismatic colors", "Light-catching design"]
    },
    {
      id: 37,
      name: "Crystal Phone Strap - Amethyst",
      price: 19.99,
      category: "crystal",
      image: "/images/37.jpg",
      description: "Luxurious amethyst crystal phone strap for a touch of elegance",
      features: ["Genuine amethyst", "Calming properties", "Premium quality"]
    },
    {
      id: 38,
      name: "Crystal Phone Strap - Emerald Shine",
      price: 21.99,
      category: "crystal",
      image: "/images/38.jpg",
      description: "Stunning emerald-colored crystals with brilliant sparkle",
      features: ["Premium crystals", "Emerald green", "Brilliant cut"]
    },
    {
      id: 39,
      name: "Crystal Phone Strap - Diamond Clear",
      price: 22.99,
      category: "crystal",
      image: "/images/39.jpg",
      description: "Clear crystal design that catches light from every angle",
      features: ["Clear crystals", "Multi-faceted", "Light reflection"]
    },
    {
      id: 40,
      name: "Crystal Phone Strap - Sapphire Blue",
      price: 24.99,
      category: "crystal",
      image: "/images/40.jpg",
      description: "Deep sapphire blue crystals with royal elegance",
      features: ["Sapphire blue", "Royal elegance", "Deep color"]
    },
    {
      id: 41,
      name: "Crystal Phone Strap - Ruby Red",
      price: 23.99,
      category: "crystal",
      image: "/images/41.jpg",
      description: "Passionate ruby red crystals with fiery brilliance",
      features: ["Ruby red", "Fiery brilliance", "Passionate color"]
    },
    {
      id: 42,
      name: "Crystal Phone Strap - Topaz Gold",
      price: 21.49,
      category: "crystal",
      image: "/images/42.jpg",
      description: "Golden topaz crystals with warm luminosity",
      features: ["Golden topaz", "Warm glow", "Luxury feel"]
    },
    {
      id: 43,
      name: "Crystal Phone Strap - Rose Quartz",
      price: 20.99,
      category: "crystal",
      image: "/images/43.jpg",
      description: "Gentle rose quartz crystals promoting love and harmony",
      features: ["Rose quartz", "Love energy", "Healing properties"]
    },
    {
      id: 44,
      name: "Crystal Phone Strap - Citrine Sunshine",
      price: 19.49,
      category: "crystal",
      image: "/images/44.jpg",
      description: "Bright citrine crystals bringing sunshine and joy",
      features: ["Citrine crystals", "Sunshine energy", "Joyful vibes"]
    },
    {
      id: 45,
      name: "Crystal Phone Strap - Aquamarine",
      price: 22.49,
      category: "crystal",
      image: "/images/45.jpg",
      description: "Serene aquamarine crystals like tropical waters",
      features: ["Aquamarine blue", "Serene energy", "Ocean vibes"]
    },
    {
      id: 46,
      name: "Crystal Phone Strap - Moonstone Magic",
      price: 25.99,
      category: "crystal",
      image: "/images/46.jpg",
      description: "Mystical moonstone with ethereal glow",
      features: ["Moonstone", "Ethereal glow", "Mystical properties"]
    },
    {
      id: 47,
      name: "Crystal Phone Strap - Peridot Green",
      price: 20.49,
      category: "crystal",
      image: "/images/47.jpg",
      description: "Fresh peridot green crystals with natural vitality",
      features: ["Peridot green", "Natural vitality", "Fresh energy"]
    },
    {
      id: 48,
      name: "Crystal Phone Strap - Garnet Deep",
      price: 21.99,
      category: "crystal",
      image: "/images/48.jpg",
      description: "Deep garnet crystals with rich burgundy tones",
      features: ["Deep garnet", "Burgundy tones", "Rich color"]
    },
    {
      id: 49,
      name: "Crystal Phone Strap - Turquoise Sky",
      price: 19.99,
      category: "crystal",
      image: "/images/49.jpg",
      description: "Vibrant turquoise crystals like clear summer skies",
      features: ["Turquoise blue", "Sky inspiration", "Vibrant color"]
    },
    {
      id: 50,
      name: "Crystal Phone Strap - Opal Fire",
      price: 27.99,
      category: "crystal",
      image: "/images/50.jpg",
      description: "Mesmerizing fire opal with dancing color play",
      features: ["Fire opal", "Color play", "Mesmerizing beauty"]
    },
    {
      id: 51,
      name: "Crystal Phone Strap - Labradorite",
      price: 26.49,
      category: "crystal",
      image: "/images/51.jpg",
      description: "Mystical labradorite with aurora-like flashes",
      features: ["Labradorite", "Aurora flashes", "Mystical stone"]
    },
    {
      id: 52,
      name: "Crystal Phone Strap - Black Onyx",
      price: 18.99,
      category: "crystal",
      image: "/images/52.jpg",
      description: "Sleek black onyx crystals with protective energy",
      features: ["Black onyx", "Protective energy", "Sleek design"]
    },
    {
      id: 53,
      name: "Crystal Phone Strap - Multi-Crystal",
      price: 29.99,
      category: "crystal",
      image: "/images/53.jpg",
      description: "Combination of multiple crystals for ultimate energy",
      features: ["Multiple crystals", "Combined energy", "Ultimate power"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Straps', icon: '✨' },
    { id: 'beaded', name: 'Beaded', icon: '🔮' },
    { id: 'chain', name: 'Chain', icon: '⛓️' },
    { id: 'crystal', name: 'Crystal', icon: '💎' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
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
        {/* Header */}
        <header className="header">
          <div className="container">
            <h1 className="logo">PhoneStrap Co.</h1>
            <nav className="nav">
              <a href="#home" onClick={scrollToTop}>Home</a>
              <a href="#products" onClick={scrollToProducts}>Products</a>
              <a href="#about" onClick={scrollToAbout}>About</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="cart-icon" onClick={() => setShowCart(true)}>
              🛒 <span className="cart-count">{getTotalItems()}</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Beautiful Phone Straps</h2>
            <p className="hero-subtitle">Secure your phone in style with our handcrafted collection</p>
            <button className="cta-button" onClick={scrollToProducts}>
              Shop Now
            </button>
          </div>
        </section>

        {/* Category Filter */}
        <section className="categories">
          <div className="container">
            <h3>Shop by Category</h3>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products" id="products">
          <div className="container">
            <h3>Our Collection</h3>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-description">{product.description}</p>
                    <ul className="product-features">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="product-price">${product.price}</div>
                  </div>
                </div>
              ))}
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

      {/* Cart Modal */}
      {showCart && (
        <div className="cart-modal-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>Shopping Cart</h3>
              <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            </div>
            <div className="cart-content">
              {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                <>
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <div className="cart-item-controls">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>
                      <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  ))}
                  <div className="cart-total">
                    <strong>Total: ${getTotalPrice()}</strong>
                  </div>
                  <button className="checkout-btn">Proceed to Checkout</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
