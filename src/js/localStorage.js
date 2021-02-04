import setToLocalStorage from './fnSetToLocalStorage.js';
import refs from './refs.js';

function addDataToLocalStorage() {
  refs.lightbox.addEventListener('click', ev => {
    if (event.target.dataset.actionWatched) {
      //event.target.setAttribute('disabled', 'true');
      let movieId = event.target.dataset.movieId;
      const addToWatched = refs.addToWatched(true);
      setToLocalStorage(movieId, 'watched', '"WATCHED"');
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
