import refs from './refs.js';
import fnAddEmptyStylePage from './fnAddEmptyStylePage.js'
import * as library from './myLibrary.js';
import * as get from './fnGetDataFromFireBase.js';
import firebase from 'firebase/app';


function fnReloadPage() {
  if (refs.homeBtn.classList.contains('activ-link-style')) {
    refs.homeBtn.classList.remove('activ-link-style');
    refs.libraryButton.classList.add('activ-link-style');
  }
  if (window.location.hash === '#library') {
    refs.pagination.setAttribute("hidden", "true");
    refs.gallery.innerHTML = '';
    //fnAddEmptyStylePage();
    get.getMoviesWatched(firebase.auth().currentUser.uid);
  }
  if (window.location.hash === '#queue') {
    refs.pagination.setAttribute("hidden", "true");
    refs.gallery.innerHTML = '';
    //get.getMoviesQueue(firebase.auth().currentUser.uid)
    library.queueSetStyles();
  }
}

export default fnReloadPage;
