import setToLocalStorage from './fnSetToLocalStorage.js';
import refs from './refs.js';
import * as get from './fnGetDataFromFireBase.js';
import firebase from 'firebase/app';
import * as auth from './Auth.js';

function addDataToLocalStorage() {
  refs.lightbox.addEventListener('click', (event) => {
    if (event.target.dataset.actionWatched) {
      let movieId = event.target.dataset.movieId;
      const addToWatched = refs.addToWatched(true);

      get.getMoviesWatched(firebase.auth().currentUser.uid);

      if (addToWatched.classList.contains("active-btn-style")) {
        addToWatched.classList.remove('active-btn-style');
        addToWatched.classList.add('inactive-btn-style');
        addToWatched.textContent = "ALREADY IN WATCHED";
        addToWatched.setAttribute("disabled", 'true');
      }

    }
    if (event.target.dataset.actionQueue) {
      let movieId = event.target.dataset.movieId;
      const addToQueue = refs.addToQueue(true);
      setToLocalStorage(movieId, 'queue', '"QUEUE"');
      if (addToQueue.classList.contains("active-btn-style")) {
        console.log("queue")
        addToQueue.classList.remove('active-btn-style');
        addToQueue.classList.add('inactive-btn-style');
        addToQueue.textContent = "ALREADY IN QUEUE";
        addToQueue.setAttribute("disabled", 'true');

      }

    }
  });
}

export default addDataToLocalStorage;
