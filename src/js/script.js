import * as templ from './modalCards';
import * as library from './myLibrary.js';
import addDataToLocalStorage from './localStorage.js';
import refs from './refs.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import renderingContent from './renderingContent.js';
// import markUpSearchMovie from './markupSearchedMovies'
import markupSearchedMovieAPI from './markupSearchMoviesAPI'

renderingContent();
markupSearchedMovieAPI();
library.createLibraryPage();
addDataToLocalStorage();


