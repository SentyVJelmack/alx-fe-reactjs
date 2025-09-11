import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations)

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map(recipe => (
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

export default RecommendationList
