const processCharacters = (characters) => {
  const limitedCharacters = characters.slice(0, 8);
  // Create new objects for each character
  const processedCharacters = limitedCharacters.map((character, index) => {
    return {
      id: index + 1, // Assign ID to each character
      name: character.name,
      height: character.height,
      gender: character.gender,
      hairColor: character.hair_color,
      skinColor: character.skin_color,
    };
  });

  return processedCharacters;
};

export default processCharacters;
