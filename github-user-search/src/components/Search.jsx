import React, { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!username) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter GitHub username"
          className="flex-1 p-2 rounded border border-gray-600 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {userData && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold text-center mt-2">{userData.login}</h2>
          {userData.name && <p className="text-center">{userData.name}</p>}
          {userData.bio && <p className="text-center mt-1">{userData.bio}</p>}
          <p className="text-center mt-1">
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
