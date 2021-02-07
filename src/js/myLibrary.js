import refs from './refs.js';
import * as get from './fnGetDataFromFireBase.js';
import firebase from 'firebase/app';
import * as not from './fnNotify.js';
import { registerDecorator } from 'handlebars';



refs.homeBtn.addEventListener('click', () => {
  if (refs.libraryButton.classList.contains('activ-link-style')) {
    refs.homeBtn.classList.add('activ-link-style');
    refs.libraryButton.classList.remove('activ-link-style');
  }
});


function createLibraryPage() {
  refs.libraryButton.addEventListener('click', () => {

    refs.btnMore.style.display = 'none';
    refs.pagination.setAttribute("hidden", "true")
    refs.gallery.innerHTML = '';
    if (firebase.auth().currentUser) {
      get.getMoviesWatched(firebase.auth().currentUser.uid);
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
    } else {
      not.authNotify();
    }

  });

  refs.header.addEventListener('click', (event) => {
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
  if (firebase.auth().currentUser.uid) {
    if (refs.gallery.classList.contains('empty-page-style')) {
      refs.gallery.classList.remove("empty-page-style");
      refs.gallery.classList.add("gallery");

    }
    get.getMoviesQueue(firebase.auth().currentUser.uid)
    toggleClass(refs.queueBtn());
    toggleClass(refs.watchedBtn());
    refs.queueBtn().setAttribute('disabled', true);
    refs.watchedBtn().removeAttribute('disabled');
  }


}

function watchedSetStyle() {
  window.location.hash = '#library'
  refs.gallery.innerHTML = '';
  if (firebase.auth().currentUser) {
    get.getMoviesWatched(firebase.auth().currentUser.uid);
  } else {
    not.authNotify();
  } toggleClass(refs.watchedBtn());
  toggleClass(refs.queueBtn());
  refs.queueBtn().removeAttribute('disabled');
  refs.watchedBtn().setAttribute('disabled', true);
}

function toggleClass(selector) {
  ['btn-nonactive-style', 'btn-active-style'].map(cls =>
    selector.classList.toggle(cls),
  );
}

/** Example of usage: toggleClasses(myButton, 'btn-red', 'btn-green'); */
const toggleClasses = (element, ...classes) => {
  classes.map(cls => element.classList.toggle(cls));
};


export {
  createLibraryPage,
  watchedSetStyle,
  queueSetStyles,
}