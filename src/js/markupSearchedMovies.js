import fetchSearchedMovie from './fetchSearchedMovies';
import refs from './refs';
import { error, empty } from './notifyFunction';
import { fetchGenres } from './fetchMovies';
import { updateMovieMarkup } from './fetchMovies';

 
let query = '';
let page = 1;
const allQuery = [];
 
 
function markupSearchedMovie() {
 refs.form.addEventListener('submit', event => {
   event.preventDefault();
 
   query = event.currentTarget.elements.search.value;
   // console.log('query>', query);
  
   allQuery.push(query)
   // console.log(allQuery);
   if (allQuery[0] !== query) {
     refs.gallery.innerHTML = '';
     page = 1;
   }
   allQuery.reverse()
 
   if (query.length > 0) {
     refs.pagination.hidden = true
     refs.btnMore.style.display = 'block';
   } else {
     refs.pagination.hidden = false
    }
  
   console.log('page>', page);
 
   if (page === 1) {
     refs.gallery.innerHTML = '';
    }
 
   if (refs.input.value === ''){
     empty();
     refs.gallery.innerHTML = '';
     refs.pagination.hidden = true
     refs.btnMore.style.display = 'none';
     return;
   }
   fetchSearchedMovie(query, page).then(({ results }) => {
     console.log('search', { results })
 
     if (results.length === 0) {
       error();
       refs.btnMore.style.display = 'none';
       return
 
     }
     fetchGenres().then(({ genres }) => {
       updateMovieMarkup(results, genres);
 
     });
    
   }
   )
 })
}
 
refs.btnMore.addEventListener('click', fetchMoreMovie);
 
function fetchMoreMovie() {
 page = page + 1;
 refs.searchBtn.click()
}
 
export default markupSearchedMovie;
 
export { query };
  
 
