import fetchSearchedMovie from './fetchSearchedMovies';
import updateMarkup from './updateMarkup'
import refs from './refs';
import { error, empty } from './notifyFunction';
import { fetchGenres } from './fetchMovies';
import { updateMovieMarkup } from './fetchMovies';
import { Spinner } from 'spin.js';
import opts from './spinner'

let query = '';




function markupSearchedMovie() {
  refs.form.addEventListener('submit', event => {
    event.preventDefault();
   
    query = event.currentTarget.elements.search.value;
    console.log(query);
    refs.gallery.innerHTML = '';
    if (refs.input.value === ''){
      refs.pagination.classList.add('visually-hidden')
      empty();
      refs.gallery.innerHTML = '';
      return;
    }

     var target = document.getElementById('gallery');
    var spinner = new Spinner(opts).spin(target);
    
    fetchSearchedMovie(query).then(({ results }) => {
      console.log('search', { results })

      if (results.length === 0) {
        error();
        refs.pagination.classList.add('visually-hidden')
        spinner.stop();
        return

      }
      refs.pagination.classList.remove('visually-hidden')
      fetchGenres().then(({ genres }) => {
        updateMovieMarkup(results, genres);

      }).finally(() => {
        spinner.stop();
      });
      
    }
    )
  })
}

export default markupSearchedMovie;

export { query };
