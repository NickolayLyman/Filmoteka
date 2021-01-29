import updateMarkup from './updateMarkup.js';

async function getMoviesFromLocalStorage(key) {
  let dataFromLocalStorage = localStorage.getItem(key);
  let watchedFilmId = dataFromLocalStorage.split(',');
  let movieObjects = await Promise.all(
    watchedFilmId.map(async movieId => {
      let movieObject = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&`,
      );
      return movieObject.json();
    }),
  );
  updateMarkup(movieObjects);
}

export default getMoviesFromLocalStorage;
