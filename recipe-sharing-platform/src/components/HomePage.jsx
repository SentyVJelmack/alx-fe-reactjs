import { Link } from "react-router-dom";

function HomePage() {
  const recipes = [
    { id: 1, title: "Spaghetti Bolognese" },
    { id: 2, title: "Chicken Curry" }
  ];

  return (
    <div className="p-10">
      {/* Add Recipe button */}
      <div className="mb-6">
        <Link
          to="/add"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Add Recipe
        </Link>
      </div>

      {/* Recipe list */}
      <div className="grid gap-4">
        {recipes.map((r) => (
          <Link
            key={r.id}
            to={`/recipe/${r.id}`}
            className="text-blue-600 hover:underline block"
          >
            {r.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
