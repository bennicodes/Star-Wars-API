const fetchVehicles = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/vehicles/");
    const data = await response.json();

    const transformData = (vehiclesContainer) => {
      const firstSixVehicles = vehiclesContainer.slice(0, 6); // Limit to the first 6 vehicles
      return firstSixVehicles.map((vehicle) => ({
        name: vehicle.name,
        model: vehicle.model,
        manufacturer: vehicle.manufacturer,
        price: `${vehicle.cost_in_credits} credits`,
        length: `${vehicle.length} meters`,
        vehicle_class: vehicle.vehicle_class,
      }));
    };

    // Process and transform the data
    const vehicleObjects = transformData(data.results);
    console.log("Transformed Vehicles:", vehicleObjects);

    // Return the transformed Vehicles
    return vehicleObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Vehicles:", error);
    return;
  }
};

export default fetchVehicles;
