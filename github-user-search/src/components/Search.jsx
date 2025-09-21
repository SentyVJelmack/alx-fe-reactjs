import { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchAdvancedUserData({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="max-w-xl mx-auto mt-10 p-4">
    {/* Page title */}
    <h1 className="text-3xl font-bold text-center mt-6">GitHub User Search</h1>

    <form onSubmit={handleSearch} className="space-y-4 mt-4">
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        type="number"
        placeholder="Minimum repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        type="submit"
      >
        Search
      </button>
    </form>

    {/* Results, loading, and error messages will go here */}
  </div>
);
