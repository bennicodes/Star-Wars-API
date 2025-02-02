import fetchData from "./fetchData.js";

const fetchPlanets = async () => {
  try {
    // Await the response from fetchData and store it in 'data'
    const data = await fetchData("planets");

    // Ensure data.results exists before transforming
    const transformData = (planets) => {
      return planets.slice(0, 6).map((planet) => ({
        name: planet.name,
        population: planet.population,
        diameter: `${planet.diameter} km`,
        climate: planet.climate,
        terrain: planet.terrain,
        orbital_period: `${planet.orbital_period} days`,
      }));
    };

    // Check if data.results exists before transforming
    const planetObjects = data.results ? transformData(data.results) : [];
    console.log("Transformed Planets:", planetObjects);

    return planetObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Planets:", error);
  }
};

export default fetchPlanets;
