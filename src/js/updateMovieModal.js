import refs from './refs';
import movieModalTpl from '../template/movieModal.hbs';

function updateMovieModal(movie) {

    let markup = '';

    if (movie.status !== '404') {
        movie.popularity = Math.round(movie.popularity);
        markup = movieModalTpl(movie);
    }
    refs.modalDivContent.insertAdjacentHTML('beforeend', markup);
}

export default updateMovieModal;