import fetchOneMovie from './fetchOneMovie';
import updateMovieModal from './updateMovieModal';
import refs from './refs';

refs.gallery.addEventListener('click', onImgClick);

function onImgClick(e) {
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
  fetchOneMovie(movieId).then(data => updateMovieModal(data));
}

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
