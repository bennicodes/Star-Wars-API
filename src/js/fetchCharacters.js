const fetchCharacters = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Couldn't fetch data:", error);
    return [];
  }
};

export default fetchCharacters;
