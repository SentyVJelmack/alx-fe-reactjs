import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // renamed from single error

  // validation function
  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please enter at least two ingredients separated by commas";
    if (!steps) newErrors.steps = "Preparation steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      description: "User submitted recipe",
      image: "https://via.placeholder.com/400x300?text=Recipe+Image",
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split("\n").map((s) => s.trim()),
    };

    // save to localStorage for demo
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    localStorage.setItem("recipes", JSON.stringify([...existingRecipes, newRecipe]));

    // reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
