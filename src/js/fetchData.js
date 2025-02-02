const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${SERVER_URL}/${endpoint}`);
    if (!response.ok)
      throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
};

export default fetchData;
