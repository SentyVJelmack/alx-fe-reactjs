import axios from "axios";

// Advanced user search
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  const users = response.data.items;

  // Fetch additional info for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return detailedUsers;
};
