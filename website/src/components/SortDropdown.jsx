import React, { useState } from 'react';

const SortDropdown = ({ sortBy, setSortBy, totalProducts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'default', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'reviews', label: 'Most Reviews' }
  ];

  const selectedOption = sortOptions.find(option => option.value === sortBy);

  const handleSortChange = (value) => {
    setSortBy(value);
    setIsOpen(false);
  };

  return (
    <div className="sort-dropdown-container">
      <div className="sort-info">
        <span className="products-count">{totalProducts} Products</span>
      </div>
      
      <div className="sort-dropdown">
        <button 
          className="sort-trigger"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        >
          <span className="sort-label">Sort by: {selectedOption?.label}</span>
          <span className={`sort-arrow ${isOpen ? 'open' : ''}`}>▼</span>
        </button>
        
        {isOpen && (
          <div className="sort-options">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`sort-option ${sortBy === option.value ? 'active' : ''}`}
                onClick={() => handleSortChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortDropdown; 