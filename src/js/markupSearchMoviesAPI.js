// import fetchSearchedMovie from './fetchSearchedMovies';
import API from './API'
import updateMarkup from './updateMarkup'
import refs from './refs';
import { error, empty } from './notifyFunction';
import { fetchGenres } from './fetchMovies';
import { updateMovieMarkup } from './fetchMovies';
import { Spinner } from 'spin.js';
import opts from './spinner'

function markupSearchedMovieAPI(){
refs.form.addEventListener('submit', event => {
    event.preventDefault();

    API.searchQuery = event.currentTarget.elements.search.value;
     refs.pagination.classList.add('visually-hidden')
refs.gallery.innerHTML = '';
    if (refs.input.value === ''){
empty();
    return;
    }

    event.currentTarget.reset();

    API.resetCurrentPage();


    fetchAPI();
   
    // refs.loadMoreBtn.classList.add('is-hidden');
    // API.fetchImg().then(hits => {
    //     renderImg(hits);
    //     refs.loadMoreBtn.classList.remove('is-hidden')
        
    // });
   
});}

refs.loadMoreBtn.addEventListener('click', fetchAPI);

//     () => {
//         API.fetchImg().then(hits => {
//         renderImg(hits);
        
//     });
// });
    
function fetchAPI() {
    
    refs.loadMoreBtn.classList.add('is-hidden');

    var target = document.getElementById('gallery');
    var spinner = new Spinner(opts).spin(target);

    API.fetchSearchedMovie().then(results => {
        if (results.length === 0) {
        error();
spinner.stop();
        return

      }
            
        
        
        fetchGenres().then(({ genres }) => {
        updateMovieMarkup(results, genres);

      }).finally(() => {
        spinner.stop();
      });
        // if (!renderImg(hits)) { 
        //     error({
        //     delay: 1000,
        //     text: 'Img not found!',
        //     })
            
        // }
        refs.loadMoreBtn.classList.remove('is-hidden');
        // window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //         behavior: 'smooth',
        // });
        }
                       
        
    );
    
}

export default markupSearchedMovieAPI;