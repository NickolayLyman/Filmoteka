import fetchSearchedMovie from './fetchSearchedMovies';
import updateMarkup from './updateMarkup'
import refs from './refs';
import { error } from './notifyFunction';
import { fetchGenres } from './fetchMovies';
import { updateMovieMarkup } from './fetchMovies';
import searchPagesBtn from '../template/searchPagesBtn.hbs'
import searchPagesBtnAboveFive from '../template/searchPagesBtnAboveFive.hbs'

let currentSearchPage = 1;

function markupSearchedMovie() {
  refs.form.addEventListener('submit', event => {
    event.preventDefault();
    let query = event.currentTarget.elements.search.value;
   
    refs.gallery.innerHTML = '';

 fetchSearchedMovie(query,currentSearchPage).then(({ total_pages }) => {
      const pagesArray = [];
  for (let i = 1; i <= total_pages; i += 1) {
   
    pagesArray.push(i);

     
   }
   
   return pagesArray
  
 }).then((pagesArray) => {
    if (pagesArray.length < 5) {
     
     updateMarkupBtnUnderFive(pagesArray)
  
        
      } else {updateMarkupBtnAboveFive(pagesArray)}  
     })
 
    fetchSearchedMovie(query,currentSearchPage).then(({ results }) => {
      // console.log('search', { results })
 
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

// console.log(makeArrayPages());
function updateMarkupBtnUnderFive(movie) {
  let markup = '';
  
    markup = searchPagesBtn(movie);
  

  refs.searchBtns.insertAdjacentHTML('beforeend', markup);
}

function updateMarkupBtnAboveFive(movie) {
  let markup = '';
  
    markup = searchPagesBtnAboveFive(movie);
  

  refs.searchBtns.insertAdjacentHTML('beforeend', markup);
}


  export default markupSearchedMovie;