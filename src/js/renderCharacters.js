import fetchCharacters from "./fetchCharacters.js";
import validateImage from "./validateImage.js";

const renderCharacters = async () => {
  const categoriesContainer = document.querySelector(".categories-container");
  const charactersContainer = document.querySelector(".characters-category");

  try {
    const characters = await fetchCharacters();
    console.log("Final Character Objects:", characters);

    // Safeguard if no characters are returned
    if (characters.length === 0) {
      const noCharactersParagraph = document.createElement("p");
      noCharactersParagraph.textContent = "No characters found.";
      noCharactersParagraph.classList.add("error-message");
      charactersContainer.append(noCharactersParagraph);
    }

    categoriesContainer.style.display = "none";
    charactersContainer.style.display = "flex";

    const goBackButton = document.querySelector(".go-back-button");
    goBackButton.style.display = "block";
    goBackButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });

    const getImagePath = async (name) => {
      const imagePath = `./assets/img/${name}.png`;
      const imageExists = await validateImage(imagePath);
      return imageExists ? imagePath : "../assets/img/default.png";
    };

    // Create HTML elements
    characters.forEach(async (character) => {
      const characterContainer = document.createElement("div");
      const characterImageContainer = document.createElement("div");
      const characterImage = document.createElement("img");
      const characterName = document.createElement("h2");
      const characterDataContainer = document.createElement("div");
      const characterDataList = document.createElement("ul");

      // Add classes
      characterContainer.classList.add("data__card-container");
      characterImageContainer.classList.add("data__image-container");
      characterImage.classList.add("data__image");
      characterName.classList.add("data__heading");
      characterDataContainer.classList.add("data-container");
      characterDataList.classList.add("data__list", "data__list-characters");

      Object.entries(character).forEach(([key, value]) => {
        if (key !== "name") {
          // Replace underscores with spaces and capitalize the first letter
          const formattedKey = key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          // Create a span for the object key
          const dataItemLabel = document.createElement("span");
          dataItemLabel.textContent = `${formattedKey}: `;
          dataItemLabel.classList.add("data-label");

          // Create the list item
          const dataItem = document.createElement("li");
          dataItem.classList.add("data");

          // Create a text node for the value
          const valueNode = document.createTextNode(value);

          // Append label and value
          dataItem.append(dataItemLabel, valueNode);
          characterDataList.append(dataItem);
        }
      });

      characterName.textContent = character.name;

      // Fetch image path
      getImagePath(character.name).then((imagePath) => {
        characterImage.src = imagePath;
        characterImage.alt = `Image of ${character.name}`;
      });

      // Append elements
      charactersContainer.append(characterContainer);
      characterContainer.append(characterImageContainer);
      characterImageContainer.append(characterImage);
      characterImageContainer.append(characterName);
      characterContainer.append(characterDataContainer);
      characterDataContainer.append(characterDataList);
    });
  } catch (error) {
    console.log("Error while rendering characters:", error);
    charactersContainer.style.display = "flex";
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Failed to load characters. Please try again later.";
    errorMessage.classList.add("error-message");
    charactersContainer.append(errorMessage);
  }
};

export default renderCharacters;
