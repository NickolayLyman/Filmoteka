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
  // if (!refs.galleryList.hasChildNodes()) {
  //   //console.log('hello');
  //   refs.gallery.innerHTML = '';
  //   refs.galleryList.classList.add('empty-page-style');
  //   refs.galleryList.classList.remove('gallery');
  //   refs.gallery.innerHTML =
  //     '<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/08/How-to-Give-Your-E-Commerce-No-Results-Page-the-Power-to-Sell.png?fit=1000%2C600&ssl=1" alt="empty page pic"></li>';
  // }

  refs.gallery.addEventListener("click", () => {
    if (event.target.classList.contains("delMovieBtn")) {
      const movieData = event.target;
      deleteMovie(movieData)
    }
  })
}

export default getMoviesFromLocalStorage;
