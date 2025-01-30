import fetchCharacters from "./fetchCharacters.js";
import toggleMenu from "./navbar.js";
import renderCharacters from "./renderCharacters.js";

// Event listeners for buttons
const homeButton = document.querySelector(".home");
const filmsButtons = document.querySelectorAll(".films");
const charactersButtons = document.querySelectorAll(".characters");
const planetsButtons = document.querySelectorAll(".planets");
const vehiclesButtons = document.querySelectorAll(".vehicles");
const categoryContainer = document.querySelector(".category-container");

homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
  console.log("Home button clicked");
});

charactersButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryContainer.innerHTML = "";
    fetchCharacters();
    renderCharacters();
  });
});

filmsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    fetchFilms();
    console.log("Films button clicked");
  });
});

planetsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    fetchPlanets();
    console.log("Planets button clicked");
  });
});

vehiclesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    fetchVehicles();
    console.log("Vehicles button clicked");
  });
});
