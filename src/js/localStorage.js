import setToLocalStorage from './fnSetToLocalStorage.js';
import refs from './refs.js';

function addDataToLocalStorage() {
  refs.lightbox.addEventListener('click', ev => {
    if (event.target.dataset.actionWatched) {
      //event.target.setAttribute('disabled', 'true');
      let movieId = event.target.dataset.movieId;
      setToLocalStorage(movieId, 'watched', '"WATCHED"');
    }
    if (event.target.dataset.actionQueue) {
      let movieId = event.target.dataset.movieId;
      setToLocalStorage(movieId, 'queue', '"QUEUE"');
    }
  });
}

export default addDataToLocalStorage;
