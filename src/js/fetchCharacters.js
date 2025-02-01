const fetchCharacters = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const data = await response.json();
    console.log(data.results);

    const transformData = (charactersContainer) => {
      const firstSixCharacters = charactersContainer.slice(0, 6); // Limit to the first 6 characters
      return firstSixCharacters.map((character, index) => ({
        name: character.name,
        height: `${character.height} cm`,
        mass: `${character.mass} kg`,
        gender: character.gender,
        hair_color: character.hair_color,
        skin_color: character.skin_color,
      }));
    };

    // Process and transform the data
    const characterObjects = transformData(data.results);
    console.log("Transformed Characters:", characterObjects);

    // Return the transformed characters
    return characterObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars characters:");
    return;
  }
};

export default fetchCharacters;
