// Подгрузка разметки

import refs from './refs';
import movieModalTpl from '../template/movieModal.hbs';
import movieCardsTpl from '../template/movieCards.hbs';

function updateMarkup(movie) {
    let markup = '';
    if (movie.status !== '404') {
        //markup = movieModalTpl(movie);
        markup = movieCardsTpl(movie);
    } 
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;