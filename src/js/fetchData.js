const BASE_URL = "https://swapi.py4e.com/api";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok)
      throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
};

export default fetchData;
