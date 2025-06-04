import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import styles
import './styles/index.css'

// Import pages
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'

// Import components
import CartModal from './components/CartModal'

// Import hooks
import { useCart } from './hooks/useCart'
import { useProductFilter } from './hooks/useProductFilter'
import { useNavigation } from './hooks/useNavigation'

// Import data
import { products, categories } from './data/products'

function App() {
  const [showCart, setShowCart] = useState(false)

  // Custom hooks
  const cart = useCart()
  const productFilter = useProductFilter(products)
  const navigation = useNavigation()

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                products={products}
                categories={categories}
                selectedCategory={productFilter.selectedCategory}
                setSelectedCategory={productFilter.setSelectedCategory}
                addToCart={cart.addToCart}
                getTotalItems={cart.getTotalItems}
                setShowCart={setShowCart}
                scrollToTop={navigation.scrollToTop}
                scrollToProducts={navigation.scrollToProducts}
                scrollToAbout={navigation.scrollToAbout}
                cart={cart.cart}
                getTotalPrice={cart.getTotalPrice}
                onSearch={productFilter.handleSearch}
                searchTerm={productFilter.searchTerm}
              />
            } 
          />
          <Route 
            path="/product/:productId" 
            element={
              <ProductPage 
                products={products}
                addToCart={cart.addToCart}
                getTotalItems={cart.getTotalItems}
                setShowCart={setShowCart}
                scrollToTop={navigation.scrollToTop}
                scrollToProducts={navigation.scrollToProducts}
                scrollToAbout={navigation.scrollToAbout}
                cart={cart.cart}
                getTotalPrice={cart.getTotalPrice}
                onSearch={productFilter.handleSearch}
                searchTerm={productFilter.searchTerm}
                categories={categories}
              />
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                products={productFilter.filteredProducts}
                allProducts={products}
                categories={categories}
                selectedCategory={productFilter.selectedCategory}
                setSelectedCategory={productFilter.setSelectedCategory}
                addToCart={cart.addToCart}
                getTotalItems={cart.getTotalItems}
                setShowCart={setShowCart}
                scrollToTop={navigation.scrollToTop}
                scrollToProducts={navigation.scrollToProducts}
                scrollToAbout={navigation.scrollToAbout}
                cart={cart.cart}
                getTotalPrice={cart.getTotalPrice}
                onSearch={productFilter.handleSearch}
                searchTerm={productFilter.searchTerm}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cart={cart.cart}
                updateQuantity={cart.updateQuantity}
                removeFromCart={cart.removeFromCart}
                getTotalPrice={cart.getTotalPrice}
                getTotalItems={cart.getTotalItems}
                setShowCart={setShowCart}
                scrollToTop={navigation.scrollToTop}
                scrollToProducts={navigation.scrollToProducts}
                scrollToAbout={navigation.scrollToAbout}
                onSearch={productFilter.handleSearch}
                searchTerm={productFilter.searchTerm}
                categories={categories}
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <ContactPage 
                getTotalItems={cart.getTotalItems}
                setShowCart={setShowCart}
                scrollToTop={navigation.scrollToTop}
                scrollToProducts={navigation.scrollToProducts}
                scrollToAbout={navigation.scrollToAbout}
                cart={cart.cart}
                getTotalPrice={cart.getTotalPrice}
                onSearch={productFilter.handleSearch}
                searchTerm={productFilter.searchTerm}
                categories={categories}
              />
            } 
          />
        </Routes>

        {/* Cart Modal - Available on all pages */}
        <CartModal 
          showCart={showCart}
          setShowCart={setShowCart}
          cart={cart.cart}
          updateQuantity={cart.updateQuantity}
          removeFromCart={cart.removeFromCart}
          getTotalPrice={cart.getTotalPrice}
        />
      </div>
    </Router>
  )
}

export default App
