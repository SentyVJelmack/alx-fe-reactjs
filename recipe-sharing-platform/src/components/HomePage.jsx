import { Link } from "react-router-dom";

function HomePage() {
  const recipes = [
    { id: 1, title: "Spaghetti Bolognese" },
    { id: 2, title: "Chicken Curry" }
  ];

  return (
    <div className="p-10 grid gap-4">
      {recipes.map((r) => (
        <Link key={r.id} to={`/recipe/${r.id}`} className="text-blue-600 hover:underline">
          {r.title}
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
