import fetchSearchedMovie from './fetchSearchedMovies';
import updateMarkup from './updateMarkup'
import refs from './refs';
import {error} from './notifyFunction'

function markupSearchedMovie() {
    refs.form.addEventListener('submit', event => {
        event.preventDefault();
     let query = event.currentTarget.elements.search.value;
        console.log(query);
         refs.gallery.innerHTML = '';
        

        fetchSearchedMovie(query).then(({results}) => {
        //    const queryUp = query.toUpperCase();
        results.map
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