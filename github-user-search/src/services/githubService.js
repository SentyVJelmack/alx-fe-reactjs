import api from "./githubAPI";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");
  
  const response = await api.get(`/users/${username}`);
  return response.data;
};
