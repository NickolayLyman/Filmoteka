import fetchMovies from './fetchMovies';
import updateMarkup from './updateMarkup';
import * as templ from './modalCards';
import createLibraryPage from './myLibrary.js';
import addDataToLocalStorage from './localStorage.js';
import refs from './refs.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

fetchMovies().then(data => updateMarkup(data));
createLibraryPage();
addDataToLocalStorage();