import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const FavouritesList = () => {
  const favourites = useRecipeStore((state) =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  )

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites.length === 0 && <p>No favourite recipes yet.</p>}
      {favourites.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FavouritesList
