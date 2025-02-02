import fetchVehicles from "./fetchVehicles.js";
import validateImage from "./validateImage.js";

const renderVehicles = async () => {
  const categoriesContainer = document.querySelector(".categories-container");
  const vehiclesContainer = document.querySelector(".vehicles-category");

  try {
    const vehicles = await fetchVehicles();
    console.log("Final Vehicle Objects:", vehicles);

    // Safeguard if no vehicles are returned
    if (vehicles.length === 0) {
      const noVehiclesParagraph = document.createElement("p");
      noVehiclesParagraph.textContent = "No vehicles found.";
      noVehiclesParagraph.classList.add("error-message");
      vehiclesContainer.append(noVehiclesParagraph);
    }

    // Clear previous content and display the vehicles
    categoriesContainer.innerHTML = "";
    vehiclesContainer.style.display = "flex";

    const getImagePath = async (name, type = "vehicles") => {
      const imagePath = `./src/assets/img/${name}.png`;
      const imageExists = await validateImage(imagePath);
      return imageExists ? imagePath : "../assets/img/default.png";
    };

    // Create HTML elements for each vehicle
    vehicles.forEach(async (vehicle) => {
      const vehicleContainer = document.createElement("div");
      const vehicleImageContainer = document.createElement("div");
      const vehicleImage = document.createElement("img");
      const vehicleName = document.createElement("h2");
      const vehicleDataContainer = document.createElement("div");
      const vehicleDataList = document.createElement("ul");

      // Add classes
      vehicleContainer.classList.add(
        "data__card-container",
        "data__vehicle-card-container"
      );
      vehicleImageContainer.classList.add("data__image-container");
      vehicleImage.classList.add("data__image", "data__image-vehicle");
      vehicleName.classList.add("data__heading");
      vehicleDataContainer.classList.add("data-container");
      vehicleDataList.classList.add("data__list");

      Object.entries(vehicle).forEach(([key, value]) => {
        if (key !== "name") {
          // Format the key
          const formattedKey = key
            .replace(/_/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase());

          // Create label span
          const dataItemLabel = document.createElement("span");
          dataItemLabel.textContent = `${formattedKey}: `;
          dataItemLabel.classList.add("data-label");

          // Create list item
          const dataItem = document.createElement("li");
          dataItem.classList.add("data");

          // Create a text node for value
          const valueNode = document.createTextNode(value);

          // Append label and value separately
          dataItem.append(dataItemLabel, valueNode);
          vehicleDataList.append(dataItem);
        }
      });

      // Set vehicle name
      vehicleName.textContent = vehicle.name;

      // Fetch image path
      getImagePath(vehicle.name).then((imagePath) => {
        vehicleImage.src = imagePath;
        vehicleImage.alt = `Image of ${vehicle.name}`;
      });

      // Append elements
      vehiclesContainer.append(vehicleContainer);
      vehicleContainer.append(vehicleImageContainer);
      vehicleImageContainer.append(vehicleImage);
      vehicleImageContainer.append(vehicleName);
      vehicleContainer.append(vehicleDataContainer);
      vehicleDataContainer.append(vehicleDataList);
    });
  } catch (error) {
    console.log("Error while rendering vehicles:", error);
    vehiclesContainer.style.display = "flex";

    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Failed to load vehicles. Please try again later.";
    errorMessage.classList.add("error-message");
    vehiclesContainer.append(errorMessage);
  }
};

export default renderVehicles;

// TODO: Add images and back button
