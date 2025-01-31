import fetchCharacters from "./fetchCharacters.js";
import fetchFilms from "./fetchFilms.js";
import hideAllCategories from "./hideCategory.js";
import toggleMenu from "./navbar.js";
import renderCharacters from "./renderCharacters.js";
import renderFilms from "./renderFilms.js";

// Event listeners for buttons
const homeButton = document.querySelector(".home");
const filmsButtons = document.querySelectorAll(".films");
const charactersButtons = document.querySelectorAll(".characters");
const planetsButtons = document.querySelectorAll(".planets");
const vehiclesButtons = document.querySelectorAll(".vehicles");
const categoriesContainer = document.querySelector(".categories-container");
const categoryContainer = document.querySelectorAll(".category-container");

homeButton.addEventListener("click", () => {
  hideAllCategories();
  categoryContainer.innerHTML = "";
  window.location.href = "index.html";
  console.log("Home button clicked");
});

filmsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllCategories();
    categoryContainer.innerHTML = "";
    fetchFilms();
    renderFilms();
    console.log("Films button clicked");
  });
});

charactersButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllCategories();
    categoryContainer.innerHTML = "";
    fetchCharacters();
    renderCharacters();
  });
});

planetsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryContainer.innerHTML = "";
    fetchPlanets();
    console.log("Planets button clicked");
  });
});

vehiclesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryContainer.innerHTML = "";
    fetchVehicles();
    console.log("Vehicles button clicked");
  });
});
