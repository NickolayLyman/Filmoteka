import refs from './refs';
import fetchMovies from './fetchMovies';
import { query } from './markupSearchedMovies'

function queryMovies() {
    
    refs.gallery.innerHTML = '';
    
    if (query.length > 0) {
        refs.searchBtn.click();
    } else {
        fetchMovies();
    }

    
}

export default queryMovies