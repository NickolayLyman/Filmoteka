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
    refs.gallery.innerHTML = '';
    getMoviesFromLocalStorage('watched');
    if (refs.homeBtn.classList.contains('activ-link-style')) {
      refs.homeBtn.classList.remove('activ-link-style');
      refs.libraryButton.classList.add('activ-link-style');
    }
    refs.libraryButton.addEventListener('click', () => {
      let watchedBtn = document.querySelector('#watched-film-btn');
      let queueBtn = document.querySelector('#watched-queue-btn');
      queueBtn.toggleAttribute('disabled');
      watchedBtn.toggleAttribute('disabled');
      if (queueBtn.classList.contains('btn-active-style')) {
        toggleClass(queueBtn);
        toggleClass(watchedBtn);
      }
    });
  });

  refs.header.addEventListener('click', () => {
    let watchedBtn = document.querySelector('#watched-film-btn');
    let queueBtn = document.querySelector('#watched-queue-btn');
    if (event.target.dataset.queueFilmBtn) {
      refs.gallery.innerHTML = '';
      getMoviesFromLocalStorage('queue');
      toggleClass(queueBtn);
      toggleClass(watchedBtn);
      queueBtn.setAttribute('disabled', true);
      watchedBtn.removeAttribute('disabled');
    }
    if (event.target.dataset.watchedFilmBtn) {
      refs.gallery.innerHTML = '';
      getMoviesFromLocalStorage('watched');
      toggleClass(watchedBtn);
      toggleClass(queueBtn);
      queueBtn.removeAttribute('disabled');
      watchedBtn.setAttribute('disabled', true);
    }
  });
}

function toggleClass(selector) {
  ['btn-nonactive-style', 'btn-active-style'].map(cls =>
    selector.classList.toggle(cls),
  );
}

export default createLibraryPage;
