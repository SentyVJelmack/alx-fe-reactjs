import create from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    favorites: state.favorites.filter(favId => favId !== id)
  })),

  // Update a recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),

  // Add/remove favorite
  addFavorite: (id) => set(state => ({
    favorites: [...state.favorites, id]
  })),
  removeFavorite: (id) => set(state => ({
    favorites: state.favorites.filter(favId => favId !== id)
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(
      recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
    )
    return { recommendations: recommended }
  })
}))
