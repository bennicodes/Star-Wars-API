// Imports
import fetchCharacters from "./fetchCharacters.js";
import fetchFilms from "./fetchFilms.js";
import fetchPlanets from "./fetchPlanets.js";
import fetchVehicles from "./fetchVehicles.js";
import hideAllCategories from "./hideCategory.js";
import toggleMenu from "./navbar.js";
import renderCharacters from "./renderCharacters.js";
import renderFilms from "./renderFilms.js";
import renderPlanets from "./renderPlanets.js";
import renderVehicles from "./renderVehicles.js";

// Element selection
const homeButton = document.querySelector(".home");
const categoryButtons = document.querySelectorAll(".navbar__button");
const categoryCards = document.querySelectorAll(".category__card");
const categoryContainer = document.querySelector(".categories-container");

toggleMenu();

function setActiveNavbarButton(categoryClass) {
  categoryButtons.forEach((btn) =>
    btn.classList.remove("navbar__button--active")
  );
  const correspondingButton = document.querySelector(
    `.navbar__button.${categoryClass}`
  );
  if (correspondingButton) {
    correspondingButton.classList.add("navbar__button--active");
  }
}

// Function to handle category selection
function handleCategorySelection(categoryClass) {
  setActiveNavbarButton(categoryClass);
  hideAllCategories();
  categoryContainer.innerHTML = "";

  switch (categoryClass) {
    case "films":
      fetchFilms();
      renderFilms();
      break;
    case "characters":
      fetchCharacters();
      renderCharacters();
      break;
    case "planets":
      fetchPlanets();
      renderPlanets();
      break;
    case "vehicles":
      fetchVehicles();
      renderVehicles();
      break;
  }
}

// Event listeners for navbar buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const categoryClass = button.classList[1];
    handleCategorySelection(categoryClass);
  });
});

// Event listeners for category cards
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const categoryClass = card.classList[1];
    handleCategorySelection(categoryClass);
  });
});

// Home button functionality
homeButton.addEventListener("click", () => {
  categoryButtons.forEach((btn) =>
    btn.classList.remove("navbar__button--active")
  );
  homeButton.classList.add("navbar__button--active");
  hideAllCategories();
  categoryContainer.innerHTML = "";
  window.location.href = "index.html";
});
