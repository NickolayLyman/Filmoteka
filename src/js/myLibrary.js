import refs from './refs.js';
import getMoviesFromLocalStorage from './fnGetDataFromLocStorage.js';

function createLibraryPage() {
  refs.libraryButton.addEventListener('click', () => {
    refs.gallery.innerHTML = '';
    getMoviesFromLocalStorage('watched');
  });

  refs.header.addEventListener('click', () => {
    console.dir('target', EventTarget);
    if (event.target.dataset.queueFilmBtn) {
      console.log('target', EventTarget);
      refs.gallery.innerHTML = '';
      getMoviesFromLocalStorage('queue');
    }
    if (event.target.dataset.watchedFilmBtn) {
      refs.gallery.innerHTML = '';
      getMoviesFromLocalStorage('watched');
    }
  });
}

export default createLibraryPage;
