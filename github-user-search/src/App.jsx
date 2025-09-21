import { useState } from "react";
import api from "./services/githubAPI";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await api.get("/users/octocat");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>GitHub User Search</h1>
      <button onClick={fetchUser}>Fetch Octocat</button>
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
