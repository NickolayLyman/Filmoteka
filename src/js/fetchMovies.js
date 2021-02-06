import refs from './refs';
import updateMarkup from './updateMarkup';
import movieCardsTpl from '../template/movieCards.hbs';
import { currentPage } from './pagination'

import { Spinner } from 'spin.js';
import opts from './spinner'
import emptyJpg from '../img/empty-img.jpg'

const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";

function fetchMovies() {

  const url = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}&page=${currentPage}`; // популярные фильмы за неделю

  var target = document.getElementById('gallery');
  var spinner = new Spinner(opts).spin(target);

  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      fetchGenres().then(({ genres }) => {
        updateMovieMarkup(results, genres);
      }).finally(() => {
        spinner.stop();
      });
    });
}

function fetchGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`,
  ).then(response => response.json());
}


function updateMovieMarkup(films, genres) {
  films.map(({ id, poster_path, title, release_date, genre_ids }) => {
    const filterGenres = genres.filter(genre => genre_ids.includes(genre.id));
    const mapGenres = filterGenres.map(({ name }) => name);
    if (mapGenres.length > 3) {
      mapGenres.splice(3, 0, 'Other');
    }
    const movieGenres = mapGenres.slice(0, 4).join(', ');
    const releaseDate = release_date.split('-')[0];


    let img = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : emptyJpg;


    const movie = [{ id, img, title, movieGenres, releaseDate }];
    updateMarkup(movie);
  });
}

export default fetchMovies;

export { fetchGenres as fetchGenres, updateMovieMarkup as updateMovieMarkup };


