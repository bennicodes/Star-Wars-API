import fetchData from "./fetchData.js";

const fetchVehicles = async () => {
  try {
    const data = await fetchData("vehicles");
    const transformData = (vehicles) => {
      return vehicles.slice(0, 6).map((vehicle) => ({
        name: vehicle.name,
        model: vehicle.model,
        manufacturer: vehicle.manufacturer,
        price: `${vehicle.cost_in_credits} credits`,
        length: `${vehicle.length} meters`,
        vehicle_class: vehicle.vehicle_class,
      }));
    };

    // Process and transform the data
    const vehicleObjects = transformData(data);
    console.log("Transformed Vehicles:", vehicleObjects);

    return vehicleObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Vehicles:", error);
  }
};

export default fetchVehicles;
