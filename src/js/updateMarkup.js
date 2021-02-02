// Подгрузка разметки

import refs from './refs';
import movieCardsTpl from '../template/movieCards.hbs';

function updateMarkup(movie) {
  let markup = '';
  if (movie.status !== '404') {
    markup = movieCardsTpl(movie);
  }

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
