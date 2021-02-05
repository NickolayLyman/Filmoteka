import fetchSearchedMovie from './fetchSearchedMovies';
import updateMarkup from './updateMarkup'
import refs from './refs';
import { error } from './notifyFunction';
import { fetchGenres } from './fetchMovies';
import { updateMovieMarkup } from './fetchMovies';


let query = '';

function markupSearchedMovie() {
  refs.form.addEventListener('submit', event => {
    event.preventDefault();
    query = event.currentTarget.elements.search.value;
    console.log(query);
    refs.gallery.innerHTML = '';

    fetchSearchedMovie(query).then(({ results }) => {
      console.log('search', { results })

      if (results.length === 0) {
        error();

        return

      }

      fetchGenres().then(({ genres }) => {
        updateMovieMarkup(results, genres);

      });
    }
    )
  })
}

export default markupSearchedMovie;

export { query };
