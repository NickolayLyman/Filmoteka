import fetchOneMovie from './fetchOneMovie';
import updateMovieModal from './updateMovieModal';
import refs from './refs'


refs.gallery.addEventListener("click", onImgClick);

function onImgClick(e) {
  if (e.target.nodeName !== "IMG") {
  return;
  }
 
  const activeImg = e.target;
  const imgSrc = activeImg.dataset.src;
  const movieId = activeImg.dataset.movieId;

  openModal(movieId);
  //openImage(imgSrc);
}

function openModal(movieId) {
  window.addEventListener("keydown", onPressEscape);
  refs.modalDiv.classList.add("is-open");
  refs.modalDivContent.innerHTML = '';
  fetchOneMovie(movieId).then(data => updateMovieModal(data));
}

/*function openImage(imgSrc) {
  window.addEventListener("keydown", onPressEscape);
  refs.modalDiv.classList.add("is-open");

  refs.openImg.src = imgSrc;
}*/

refs.overlayDiv.addEventListener("click", closeModal);

function closeModal() {
  window.removeEventListener("keydown", onPressEscape);
  
  refs.modalDiv.classList.remove("is-open");
  refs.openImg.src = "";
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}