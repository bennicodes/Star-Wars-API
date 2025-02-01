const fetchFilms = async () => {
  try {
    const response = await fetch("http://localhost:3001/films");
    const data = await response.json();

    const transformData = (films) => {
      return films.slice(0, 6).map((film) => ({
        title: film.title,
        Episode: `Episode ${film.episode_id}`,
        release_date: film.release_date,
        director: film.director,
        Producer: film.producer,
      }));
    };

    const filmObjects = transformData(data);
    console.log("Transformed Films:", filmObjects);

    return filmObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Films:", error);
    return [];
  }
};

export default fetchFilms;
