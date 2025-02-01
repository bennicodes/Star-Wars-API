const fetchFilms = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/films/");
    const data = await response.json();
    console.log(data.results);

    const transformData = (FilmsContainer) => {
      const firstSixFilms = FilmsContainer.slice(0, 6); // Limit to the first 6 Films
      return firstSixFilms.map((film, index) => ({
        title: film.title,
        release_date: film.release_date,
        director: film.director,
        Episode: `Episode ${film.episode_id}`,
        Producer: film.producer,
      }));
    };

    // Process and transform the data
    const filmObjects = transformData(data.results);
    console.log("Transformed Films:", filmObjects);

    // Return the transformed Films
    return filmObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Films:");
    return;
  }
};

export default fetchFilms;
