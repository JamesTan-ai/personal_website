import { useState, useMemo } from 'react'

export const useProductFilter = (products) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term) => {
    setSearchTerm(term)
    setSelectedCategory('all') // Reset category when searching
  }

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by search term first
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Then filter by category if not 'all'
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    return filtered
  }, [products, searchTerm, selectedCategory])

  return {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    handleSearch,
    filteredProducts
  }
} 