import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import SortDropdown from './SortDropdown';

const ProductsGrid = ({ 
  products, 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  addToCart,
  isHomePage = false,
  showCategoryButtons = true,
  sortBy = 'default',
  setSortBy = () => {},
  showSorting = false
}) => {
  const navigate = useNavigate();
  
  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Sort products based on sortBy value
  const getSortedProducts = (products) => {
    switch (sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'reviews':
        return [...products].sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
      default:
        return products;
    }
  };

  const displayProducts = getSortedProducts(filteredProducts);

  return (
    <>
      {/* Category Filter - Only show if showCategoryButtons is true and we have categories */}
      {showCategoryButtons && categories.length > 0 && (
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
      )}

      {/* Products Grid */}
      <section className="products" id="products">
        <div className="container">
          <h3>{isHomePage ? 'Featured Collection' : 'Our Collection'}</h3>
          
          {/* Sort Dropdown - Only show if showSorting is true and not on home page */}
          {showSorting && !isHomePage && (
            <SortDropdown 
              sortBy={sortBy}
              setSortBy={setSortBy}
              totalProducts={displayProducts.length}
            />
          )}
          
          <div className="products-grid">
            {displayProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          
          {isHomePage && (
            <div className="view-all-products">
              <button 
                className="view-all-btn"
                onClick={() => navigate('/products')}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsGrid; 