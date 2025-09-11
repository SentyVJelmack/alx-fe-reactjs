import React from 'react'
import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
  const filterRecipes = useRecipeStore((state) => state.filterRecipes)

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    filterRecipes()
  }

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
    />
  )
}

export default SearchBar
