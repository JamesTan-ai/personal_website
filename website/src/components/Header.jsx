import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartDropdown from './CartDropdown';

const Header = ({ 
  getTotalItems, 
  setShowCart, 
  scrollToTop, 
  scrollToProducts, 
  scrollToAbout,
  cart,
  getTotalPrice,
  isHomePage = false,
  onSearch,
  categories = []
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartHoverTimeout, setCartHoverTimeout] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (cartHoverTimeout) {
        clearTimeout(cartHoverTimeout);
      }
    };
  }, [cartHoverTimeout]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (section) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    if (section === 'products') {
      // Always navigate to products page
      navigate('/products');
      return;
    }
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        if (section === 'about') {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (section === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, use the existing scroll functions
      if (section === 'about') {
        scrollToAbout();
      } else if (section === 'top') {
        scrollToTop();
      }
    }
  };

  const handleCartHover = () => {
    if (cartHoverTimeout) {
      clearTimeout(cartHoverTimeout);
    }
    setIsCartHovered(true);
  };

  const handleCartLeave = () => {
    const timeout = setTimeout(() => {
      setIsCartHovered(false);
    }, 150); // Small delay to prevent glitch when moving to dropdown
    setCartHoverTimeout(timeout);
  };

  const handleCartClick = () => {
    setIsCartHovered(false); // Hide dropdown when clicking
    setIsMobileMenuOpen(false); // Close mobile menu
    navigate('/cart');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen && searchTerm) {
      setSearchTerm('');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && onSearch) {
      onSearch(searchTerm.trim());
      navigate('/products');
      setIsSearchOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductsDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsProductsDropdownOpen(true);
  };

  const handleProductsDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleCategoryClick = (categoryId) => {
    setIsProductsDropdownOpen(false);
    if (categoryId === 'all') {
      navigate('/products');
    } else {
      navigate(`/products?category=${categoryId}`);
    }
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/contact');
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <h1 className="logo" onClick={handleLogoClick}>
            PhoneStrap Co.
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="nav">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('top'); }}>
              Home
            </a>
            <div 
              className="nav-dropdown-container"
              onMouseEnter={handleProductsDropdownEnter}
              onMouseLeave={handleProductsDropdownLeave}
            >
              <a href="#products" onClick={(e) => { e.preventDefault(); handleNavigation('products'); }}>
                Products
              </a>
              <div className={`nav-dropdown ${isProductsDropdownOpen ? 'active' : ''}`}>
                <div className="dropdown-content">
                  <button 
                    onClick={() => handleCategoryClick('all')} 
                    className="dropdown-item"
                  >
                    <span className="dropdown-icon">🌟</span>
                    All Products
                  </button>
                  {categories.filter(cat => cat.id !== 'all').map(category => (
                    <button 
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)} 
                      className="dropdown-item"
                    >
                      <span className="dropdown-icon">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>
              About
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleContactClick(); }}>
              Contact
            </a>
          </nav>
          
          {/* Search and Cart Container */}
          <div className="header-actions">
            {/* Search */}
            <div className="search-container">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className={`search-input ${isSearchOpen ? 'active' : ''}`}
                />
                <button
                  type="button"
                  onClick={handleSearchToggle}
                  className="search-icon"
                  title="Search"
                >
                  {isSearchOpen ? '✕' : '🔍'}
                </button>
              </form>
            </div>

            {/* Desktop Cart */}
            <div 
              className="cart-container"
              onMouseEnter={handleCartHover}
              onMouseLeave={handleCartLeave}
            >
              <div 
                className="cart-icon" 
                onClick={handleCartClick}
                title="Shopping Cart"
              >
                <span className="cart-count">{getTotalItems()}</span>
              </div>
              <CartDropdown 
                cart={cart}
                getTotalPrice={getTotalPrice}
                isVisible={isCartHovered}
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('top'); }}>
            Home
          </a>
          <a href="#products" onClick={(e) => { e.preventDefault(); handleNavigation('products'); }}>
            Products
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>
            About
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleContactClick(); }}>
            Contact
          </a>
          <div className="mobile-cart-icon" onClick={handleCartClick}>
            <span className="vca-cart-icon"></span>
            <span className="cart-count">{getTotalItems()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 