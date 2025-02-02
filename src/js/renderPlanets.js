import fetchPlanets from "./fetchPlanets.js";
import validateImage from "./validateImage.js";

const renderPlanets = async () => {
  const categoriesContainer = document.querySelector(".categories-container");
  const planetsContainer = document.querySelector(".planets-category");

  try {
    const planets = await fetchPlanets();
    console.log("Final Planet Objects:", planets);

    // Safeguard if no planets are returned
    if (planets.length === 0) {
      const noPlanetsParagraph = document.createElement("p");
      noPlanetsParagraph.textContent = "No planets found.";
      noPlanetsParagraph.classList.add("error-message");
      planetsContainer.append(noPlanetsParagraph);
    }

    categoriesContainer.style.display = "none";
    planetsContainer.style.display = "flex";

    const goBackButton = document.querySelector(".go-back-button");
    goBackButton.style.display = "block";
    goBackButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });

    const getImagePath = async (name) => {
      const imagePath = `./src/assets/img/${name}.png`;
      const imageExists = await validateImage(imagePath);
      return imageExists ? imagePath : "../assets/img/default.png";
    };

    // Create HTML elements
    planets.forEach(async (planet) => {
      const planetContainer = document.createElement("div");
      const planetImageContainer = document.createElement("div");
      const planetImage = document.createElement("img");
      const planetName = document.createElement("h2");
      const planetDataContainer = document.createElement("div");
      const planetDataList = document.createElement("ul");

      // Add classes
      planetContainer.classList.add("data__card-container");
      planetImageContainer.classList.add("data__image-container");
      planetImage.classList.add("data__image");
      planetName.classList.add("data__heading");
      planetDataContainer.classList.add("data-container");
      planetDataList.classList.add("data__list");

      Object.entries(planet).forEach(([key, value]) => {
        if (key !== "name") {
          const formattedKey = key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          const dataItemLabel = document.createElement("span");
          dataItemLabel.textContent = `${formattedKey}: `;
          dataItemLabel.classList.add("data-label");

          const dataItem = document.createElement("li");
          dataItem.classList.add("data");

          const valueNode = document.createTextNode(value);

          dataItem.append(dataItemLabel, valueNode);
          planetDataList.append(dataItem);
        }
      });

      // Set planet name
      planetName.textContent = planet.name;

      // Fetch image path
      getImagePath(planet.name).then((imagePath) => {
        planetImage.src = imagePath;
        planetImage.alt = `Image of ${planet.name}`;
      });

      // Append elements
      planetsContainer.append(planetContainer);
      planetContainer.append(planetImageContainer);
      planetImageContainer.append(planetName);
      planetImageContainer.append(planetImage);
      planetContainer.append(planetDataContainer);
      planetDataContainer.append(planetDataList);
    });
  } catch (error) {
    console.log("Error while rendering planets:", error);
    planetsContainer.style.display = "flex";

    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Failed to load planets. Please try again later.";
    errorMessage.classList.add("error-message");
    planetsContainer.append(errorMessage);
  }
};

export default renderPlanets;
