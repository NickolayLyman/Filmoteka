import fetchSearchedMovie from './fetchSearchedMovies';
import updateMarkup from './updateMarkup'
import refs from './refs';

function markupSearchedMovie() {
    refs.form.addEventListener('submit', event => {
        event.preventDefault();
     let query = event.currentTarget.elements.search.value;
        console.log(query);
         refs.gallery.innerHTML = '';
        

        fetchSearchedMovie(query).then(({results}) => {
        //    const queryUp = query.toUpperCase();
        
            // if (!data.results.title.value.toUpperCase().includes(query)) {
            //     return
                
                 
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