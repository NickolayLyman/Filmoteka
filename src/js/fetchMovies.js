import refs from './refs';
import updateMarkup from './updateMarkup';
import movieCardsTpl from '../template/movieCards.hbs';

import { Spinner } from 'spin.js';
import opts from './spinner'


const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";
let currentPage = 1;

function setBtnActiveStyle() {
  let btnEvent = event.target;
  let btns = document.querySelectorAll('.btn');
  btns.forEach((el) => el.classList.remove("active"));
  if (btnEvent.classList.contains("btn")) {
    btnEvent.classList.add("active")
  }
}

refs.pagination.addEventListener("click", onBtnClick);

function onBtnClick(event) {

  if (event.target.tagName === 'BUTTON') {

    const activeBtn = event.target.dataset.index;
    console.log('activeBtn', activeBtn);
    currentPage = Number(activeBtn)
    setBtnActiveStyle();

    if (currentPage > 2) {
      refs.btnPage1.dataset.index = `${currentPage - 2}`
      refs.btnPage1.textContent = `${currentPage - 2}`
      refs.btnPage2.dataset.index = `${currentPage - 1}`
      refs.btnPage2.textContent = `${currentPage - 1}`
      refs.btnPage3.dataset.index = `${currentPage}`
      refs.btnPage3.textContent = `${currentPage}`
      refs.btnPage4.dataset.index = `${currentPage + 1}`
      refs.btnPage4.textContent = `${currentPage + 1}`
      refs.btnPage5.dataset.index = `${currentPage + 2}`
      refs.btnPage5.textContent = `${currentPage + 2}`
    }
    if (currentPage < 999) {
      refs.nextTen.dataset.index = `${currentPage + 1}`
      refs.nextTen.dataset.index = `${currentPage + 1}`
    }
    if (currentPage > 1) {
      refs.previousTen.dataset.index = `${currentPage - 1}`
      refs.previousTen.dataset.index = `${currentPage - 1}`
    }

    refs.gallery.innerHTML = '';
    fetchMovies();
  }
}


function fetchMovies() {

  const url = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}&page=${currentPage}`; // популярные фильмы за неделю

  var target = document.getElementById('gallery');
  var spinner = new Spinner(opts).spin(target);



  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      fetchGenres().then(({ genres }) => {
        updateMovieMarkup(results, genres);
        // .then(data => updateMarkup(data)
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



    const movie = [{ id, poster_path, title, movieGenres, releaseDate }];
    updateMarkup(movie);
  });
}
// fetchMovies();

export default fetchMovies;

