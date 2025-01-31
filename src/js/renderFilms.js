import fetchFilms from "./fetchFilms.js";
import validateImage from "./validateImage.js";

const renderFilms = async () => {
  const categoriesContainer = document.querySelector(".categories-container");
  const categoryContainer = document.querySelectorAll(".category-container");
  const filmsContainer = document.querySelector(".films-category");

  try {
    const films = await fetchFilms();
    console.log("Final film Objects:", films);

    // Safeguard if no films are returned
    if (films.length === 0) {
      const noFilmsParagraph = document.createElement("p");
      noFilmsParagraph.textContent = "No films found.";
      noFilmsParagraph.classList.add("error-message");
      filmsContainer.append(noFilmsParagraph);

      return;
    }

    // Clear previous content and display the films
    categoriesContainer.innerHTML = "";
    filmsContainer.style.display = "flex";

    const getImagePath = async (title, type = "films") => {
      const imagePath = `./src/assets/img/${title}.png`;
      const imageExists = await validateImage(imagePath);

      return imageExists ? imagePath : "../assets/img/default.png";
    };

    // Create HTML elements
    films.forEach(async (film) => {
      const filmContainer = document.createElement("div");
      const filmImageContainer = document.createElement("div");
      const filmImage = document.createElement("img");
      const filmTitle = document.createElement("h2");
      const filmDataContainer = document.createElement("div");
      const filmData = document.createElement("ul");

      // Add classes
      filmContainer.classList.add("data__card-container");
      filmImageContainer.classList.add("data__image-container");
      filmImage.classList.add("data__image");
      filmTitle.classList.add("data__heading");
      filmDataContainer.classList.add("data__list-container");
      filmData.classList.add("data__list");

      Object.entries(film).forEach(([key, value]) => {
        if (key !== "title") {
          // Replace underscores with spaces and capitalize the first letter
          const formattedKey = key
            .replace(/_/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase());

          const dataItem = document.createElement("li");
          dataItem.textContent = `${formattedKey}: ${value}`;
          filmData.append(dataItem);
        }
      });

      // Set film title
      filmTitle.textContent = film.title;

      // Fetch image path
      getImagePath(film.title).then((imagePath) => {
        filmImage.src = imagePath;
        filmImage.alt = `Image of ${film.title} cover`;
      });

      // Append elements
      filmsContainer.append(filmContainer);
      filmContainer.append(filmImageContainer);
      filmImageContainer.append(filmTitle);
      filmImageContainer.append(filmImage);
      filmContainer.append(filmDataContainer);
      filmDataContainer.append(filmData);
    });
  } catch (error) {
    console.log("Error while rendering films:");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to load films. Please try again later.";
    errorMessage.classList.add("error-message");
    filmsContainer.append(errorMessage);
  }
};

export default renderFilms;
