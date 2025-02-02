import fetchData from "./fetchData.js";

const fetchCharacters = async () => {
  try {
    const data = await fetchData("characters");

    const transformData = (characters) => {
      return characters.slice(0, 6).map((character) => ({
        name: character.name,
        height: `${character.height} cm`,
        mass: `${character.mass} kg`,
        birth_year: character.birth_year,
        gender: character.gender,
      }));
    };

    const characterObjects = transformData(data);
    console.log("Transformed Characters:", characterObjects);

    return characterObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Characters:", error);
  }
};

export default fetchCharacters;
