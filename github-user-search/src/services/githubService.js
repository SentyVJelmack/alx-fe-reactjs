import axios from "axios";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");

  // Use the full GitHub API URL directly
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
