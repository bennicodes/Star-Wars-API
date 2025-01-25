import fetchCharacters from "./fetchCharacters.js";
import processCharacters from "./processCharacters.js";

const initializeApp = async () => {
  const characters = await fetchCharacters(); // Fetch raw data

  const processedCharacters = processCharacters(characters); // Process data

  // Example: Access each processed character dynamically
  processedCharacters.forEach((character) => {
    console.log(`Character ID ${character.id}:`, character);
  });
};

initializeApp();
