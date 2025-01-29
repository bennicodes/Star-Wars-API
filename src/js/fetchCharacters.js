const fetchCharacters = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const data = await response.json();

    const transformData = (charactersContainer) => {
      const firstEightCharacters = charactersContainer.slice(0, 6); // Limit to the first 6 characters
      return firstEightCharacters.map((character, index) => ({
        id: index + 1, // Assign a unique ID
        name: character.name,
        height: character.height,
        gender: character.gender,
        hairColor: character.hair_color,
        skinColor: character.skin_color,
        image: `../assets/img/${character.name.toLowerCase()}.jpg`, // Create a valid file path
      }));
    };

    // Process and transform the data
    const characterObjects = transformData(data.results);
    console.log("Transformed Characters:", characterObjects);

    // Return the transformed characters
    return characterObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars characters:");
    return [];
  }
};

export default fetchCharacters;
