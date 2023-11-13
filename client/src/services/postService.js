import { API_URL } from "../constants";

async function fetchAllPosts() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export { fetchAllPosts };