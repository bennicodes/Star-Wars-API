import fetchData from "./fetchData.js";

const fetchFilms = async () => {
  try {
    const data = await fetchData("films");

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
    console.error("Failed to fetch Star Wars Films:", error);
  }
};

export default fetchFilms;
