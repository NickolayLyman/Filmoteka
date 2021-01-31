import refs from './refs.js';
import getMoviesFromLocalStorage from './fnGetDataFromLocStorage.js';

function fnReloadPage() {
  //refs.gallery.innerHTML = '';
  getMoviesFromLocalStorage('watched');
  if (refs.homeBtn.classList.contains('activ-link-style')) {
    refs.homeBtn.classList.remove('activ-link-style');
    refs.libraryButton.classList.add('activ-link-style');
  }
}

export default fnReloadPage;
