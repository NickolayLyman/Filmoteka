//import updateMarkup from './updateMarkup.js';
import addEmptyStylePage from './fnAddEmptyStylePage.js'
import refs from './refs.js';
import libraryListOfMovieTml from '../template/libraryListOfMovieTml.hbs';
import deleteMovie from "./fnDelMovie.js"

function updateMarkup(movie) {
  let markup = '';
  if (movie.status !== '404') {
    markup = libraryListOfMovieTml(movie);
  }
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

async function getMoviesFromLocalStorage(key) {
  if (localStorage.getItem(key)) {
    refs.galleryList.classList.remove('empty-page-style');
    refs.galleryList.classList.add('gallery');
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

    movieObjects.map(({ id, name, poster_path, title, release_date, genres, vote_average }) => {
      const releaseDate = release_date.split('-')[0];
      const movieGenres = genres.map(({ name }) => name).join(", ")
      // console.log(genres)
      const movie = [{ id, name, poster_path, title, releaseDate, movieGenres, vote_average }];
      updateMarkup(movie);
    });

  }

  addEmptyStylePage();

  refs.gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("delMovieBtn")) {
      const movieData = event.target;
      deleteMovie(movieData);
    }
  });
}

export default getMoviesFromLocalStorage;
