import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error fetching recipe data:", err));
  }, [id]);

  if (!recipe) return <div className="text-center mt-10 text-gray-500">Loading recipe...</div>;

  return (
<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    src={recipe.image}
    alt={recipe.title}
    className="w-full h-64 object-cover"
  />
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
    <p className="text-gray-600 mb-6">{recipe.description}</p>

    <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
    <ul className="list-disc list-inside mb-6">
      {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
    </ul>

    <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
    <ol className="list-decimal list-inside space-y-2">
      {recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}
    </ol>
  </div>
</div>
)
}

export default RecipeDetail;
