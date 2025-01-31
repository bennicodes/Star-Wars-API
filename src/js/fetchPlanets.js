const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/planets/");
    const data = await response.json();

    const transformData = (planetsContainer) => {
      const firstSixPlanets = planetsContainer.slice(0, 6); // Limit to the first 10 planets
      return firstSixPlanets.map((planet) => ({
        name: planet.name,
        population: planet.population,
        diameter: `${planet.diameter} km`,
        climate: planet.climate,
        terrain: planet.terrain,
        orbital_period: `${planet.orbital_period} days`,
      }));
    };

    // Process and transform the data
    const planetObjects = transformData(data.results);
    console.log("Transformed Planets:", planetObjects);

    // Return the transformed Planets
    return planetObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Planets:", error);
    return;
  }
};
fetchPlanets();
export default fetchPlanets;
