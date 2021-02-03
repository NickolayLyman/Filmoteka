import refs from './refs.js';
import getMoviesFromLocalStorage from './fnGetDataFromLocStorage.js';

refs.homeBtn.addEventListener('click', () => {
  if (refs.libraryButton.classList.contains('activ-link-style')) {
    refs.homeBtn.classList.add('activ-link-style');
    refs.libraryButton.classList.remove('activ-link-style');
  }
});


function createLibraryPage() {
  refs.libraryButton.addEventListener('click', () => {
    refs.pagination.setAttribute("hidden", "true")
    refs.gallery.innerHTML = '';
    getMoviesFromLocalStorage('watched');
    if (refs.homeBtn.classList.contains('activ-link-style')) {
      refs.homeBtn.classList.remove('activ-link-style');
      refs.libraryButton.classList.add('activ-link-style');
    }

    if (refs.queueBtn().classList.contains('btn-active-style')) {
      console.log('hello');
      toggleClass(refs.queueBtn());
      toggleClass(refs.watchedBtn());
      refs.queueBtn().toggleAttribute('disabled');
      refs.watchedBtn().toggleAttribute('disabled');
    }
  });

  refs.header.addEventListener('click', () => {
    if (event.target.dataset.queueFilmBtn) {
      queueSetStyles();
    }
    if (event.target.dataset.watchedFilmBtn) {
      watchedSetStyle();
    }
  });
}

function queueSetStyles() {
  window.location.hash = '#queue'
  refs.gallery.innerHTML = '';
  getMoviesFromLocalStorage('queue');
  toggleClass(refs.queueBtn());
  toggleClass(refs.watchedBtn());
  refs.queueBtn().setAttribute('disabled', true);
  refs.watchedBtn().removeAttribute('disabled');
}

function watchedSetStyle() {
  window.location.hash = '#library'
  refs.gallery.innerHTML = '';
  getMoviesFromLocalStorage('watched');
  toggleClass(refs.watchedBtn());
  toggleClass(refs.queueBtn());
  refs.queueBtn().removeAttribute('disabled');
  refs.watchedBtn().setAttribute('disabled', true);
}

function toggleClass(selector) {
  ['btn-nonactive-style', 'btn-active-style'].map(cls =>
    selector.classList.toggle(cls),
  );
}


export {
  createLibraryPage,
  watchedSetStyle,
  queueSetStyles,
}