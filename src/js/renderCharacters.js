import fetchCharacters from "./fetchCharacters";

const renderCharacters = async () => {
  const categoryContainer = document.querySelector(".category-container");
  const charactersContainer = document.querySelector(".characters-container");
  try {
    const characters = await fetchCharacters();
    console.log("Final Character Objects:", characters);

    // Safeguard if no characters are returned
    if (characters.length === 0) {
      const noCharactersParagraph = document.createElement("p");
      noCharactersParagraph.textContent = "No characters found.";
      noCharactersParagraph.classList.add("characters__paragraph");
      charactersContainer.append(noCharactersParagraph);

      return;
    }

    // Clear previous content and display the characters
    categoryContainer.innerHTML = "";
    charactersContainer.style.display = "flex";

    // Create HTML elements
    characters.forEach((character) => {
      const characterContainer = document.createElement("div");
      const characterImageContainer = document.createElement("div");
      const characterImage = document.createElement("img");
      const characterName = document.createElement("h2");
      const characterDataContainer = document.createElement("div");
      const characterData = document.createElement("ul");

      // Add classes
      characterContainer.classList.add("character-container");
      characterImageContainer.classList.add("character__image-container");
      characterImage.classList.add("character__image");
      characterName.classList.add("character__name");
      characterDataContainer.classList.add("character__data-container");
      characterData.classList.add("character__data");

      Object.entries(character).forEach(([key, value]) => {
        if (key !== "name" && key !== "image") {
          const dataItem = document.createElement("li");
          dataItem.textContent = `${key}: ${value}`;
          characterData.append(dataItem);
        }
      });

      characterImage.src = ` ../assets/img/${character.name}`;
      characterImage.alt = `${character.name} image`;
      characterName.textContent = character.name;

      // Append the data to container
      characterContainer.append(characterImageContainer);
      characterImageContainer.append(characterImage);
      characterImageContainer.append(characterName);
      characterContainer.append(characterDataContainer);
      characterDataContainer.append(characterData);

      // Append the full character to main container
      charactersContainer.append(characterContainer);
    });
    return;
  } catch (error) {
    console.log("Error while rendering characters:");
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Failed to load characters. Please try again later.";
    charactersContainer.append(errorMessage);
    errorMessage.classList.add("error-message");
  }
};

export default renderCharacters;

// TODO: Remove id from render
