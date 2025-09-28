import { create } from "zustand";

// Define the recipe store
const useRecipeStore = create((set) => ({
  recipes: [],

  // Function to set/update recipes
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Optional: function to add a single recipe
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
}));

export default useRecipeStore;
