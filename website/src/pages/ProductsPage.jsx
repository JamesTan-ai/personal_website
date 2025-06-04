import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductsGrid from '../components/ProductsGrid';

const ProductsPage = ({ 
  products,
  allProducts,
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
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('default');
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle category from URL
  const categoryFromUrl = searchParams.get('category');
  const currentCategory = categoryFromUrl || 'all';
  
  // Filter products based on URL category and search
  const getDisplayProducts = () => {
    let filtered = products;
    
    // If we have a category from URL, filter by that instead
    if (categoryFromUrl && categoryFromUrl !== 'all') {
      filtered = allProducts.filter(product => product.category === categoryFromUrl);
    }
    
    return filtered;
  };

  const displayProducts = getDisplayProducts();
  const categoryName = categories.find(cat => cat.id === currentCategory)?.name || 'All Products';

  return (
    <div className="products-page">
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
            <button onClick={() => window.location.href = '/'} className="breadcrumb-link">
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">
              {searchTerm ? `Search: "${searchTerm}"` : categoryName}
            </span>
          </nav>
        </div>
      </div>

      <main className="products-main">
        <div className="container">
          <div className="products-header-section">
            <h1 className="products-page-title">
              {searchTerm ? `Search Results for "${searchTerm}"` : categoryName}
            </h1>
            <p className="products-description">
              {searchTerm 
                ? `Found ${displayProducts.length} product${displayProducts.length !== 1 ? 's' : ''} matching your search.`
                : categoryFromUrl && categoryFromUrl !== 'all'
                  ? `Explore our ${categoryName.toLowerCase()} collection of handcrafted phone straps.`
                  : 'Discover our complete collection of handcrafted phone straps. Each piece is carefully designed to combine style, security, and quality.'
              }
            </p>
          </div>

          {/* Products Grid with sorting */}
          <ProductsGrid 
            products={displayProducts}
            categories={[]} // Empty categories to hide category selector
            selectedCategory="all"
            setSelectedCategory={() => {}} // Empty function since we don't need it
            addToCart={addToCart}
            isHomePage={false}
            showCategoryButtons={false} // Hide category buttons
            sortBy={sortBy}
            setSortBy={setSortBy}
            showSorting={true} // Enable sorting functionality
          />
        </div>
      </main>

      {/* Footer spacer */}
      <div className="page-footer-spacer"></div>
    </div>
  );
};

export default ProductsPage; 