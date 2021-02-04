import fetchOneMovie from './fetchOneMovie';
import updateMovieModal from './updateMovieModal';
import refs from './refs';

refs.gallery.addEventListener('click', onImgClick)

function onImgClick(e) {
  if (e.target === document.querySelectorAll(".movie-poster-lib")) { console.log(e.target) }

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  if (e.target.dataset.emptyPage) {
    return;
  }

  const activeImg = e.target;
  const imgSrc = activeImg.dataset.src;
  const movieId = activeImg.dataset.movieId;

  openModal(movieId);

}

function openModal(movieId) {
  window.addEventListener('keydown', onPressEscape);
  refs.modalDiv.classList.add('is-open');
  refs.body.classList.add('scroll-hidden');
  refs.upBtn.hidden = true;
  refs.modalDivContent.innerHTML = '';
  fetchOneMovie(movieId)
    .then(data => updateMovieModal(data))
    .then(() => checkMovieInStorage(movieId));
}

refs.gallery.addEventListener('click', (ev) => {

  checkMovieInStorage(ev.movieId)

})


function checkMovieInStorage(movieId) {
  if (localStorage.getItem("watched") || localStorage.getItem("queue")) {
    console.log("we are in!")
    const dataFromWatched = localStorage.getItem("watched");
    const dataFromQueue = localStorage.getItem("queue");
    const addToWatched = refs.addToWatched(true);
    const addToQueue = refs.addToQueue(true);

    if (dataFromWatched.includes(movieId)) {
      if (addToWatched.classList.contains("active-btn-style")) {
        addToWatched.classList.remove('active-btn-style');
        addToWatched.classList.add('inactive-btn-style');
        addToWatched.textContent = "ALREADY IN WATCHED";
        addToWatched.setAttribute("disabled", 'true');
      }
    }
    if (dataFromQueue.includes(movieId)) {
      if (addToQueue.classList.contains("active-btn-style")) {
        addToQueue.classList.remove('active-btn-style');
        addToQueue.classList.add('inactive-btn-style');
        addToQueue.textContent = "ALREADY IN QUEUE";
        addToQueue.setAttribute("disabled", 'true');

      }
    }
  }
}
refs.btnClose.addEventListener("click", closeModal);
refs.overlayDiv.addEventListener('click', closeModal);

function closeModal() {
  window.removeEventListener('keydown', onPressEscape);

  refs.modalDiv.classList.remove('is-open');
  refs.body.classList.remove('scroll-hidden');
  refs.upBtn.hidden = false;
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
