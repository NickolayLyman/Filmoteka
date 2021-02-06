import fetchMovies from './fetchMovies';
import reloadPage from './library-header.js';
import firebase from 'firebase/app';
import * as not from './fnNotify.js';


// TODO: implement real function and import here:
// Also check auth on "my library click";

function renderingContent() {
  if (!location.hash) {
    fetchMovies();
    return;
  }

  if (firebase.auth().currentUser) {
    reloadPage();
  } else {
    not.authNotify();
  }

}
export default renderingContent;
