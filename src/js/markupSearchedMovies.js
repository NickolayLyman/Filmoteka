import fetchSearchedMovie from './fetchSearchedMovies';
import updateMarkup from './updateMarkup'
import refs from './refs';
import {error} from './notifyFunction'


const apiKey = 'api_key=50b81e1c6c3b9e5f74d2015b742ff0b0';

function fetchGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`,
  ).then(response => response.json());
}



function markupSearchedMovie() {
    refs.form.addEventListener('submit', event => {
        event.preventDefault();
     let query = event.currentTarget.elements.search.value;
        console.log(query);
         refs.gallery.innerHTML = '';
        

        fetchSearchedMovie(query).then(({results}) => {
        //    const queryUp = query.toUpperCase();
        //  fetchGenres().then(({name})=>forEach()
            // if (!data.results.title.value.toUpperCase().includes(query)) {
            //     return
            if (results.length===0) {
                error();
                             
                return
               } 
                 
            // }
            // if (results.length === 0) {
            //     error();
            //     return
            // }
            updateMarkup(results);
        }
        )
    })
}

export default markupSearchedMovie;