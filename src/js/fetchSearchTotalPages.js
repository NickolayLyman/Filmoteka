import fetchSearchedMovie from './fetchSearchedMovies';

fetchSearchedMovie(query,currentSearchPage).then(({ total_pages }) => {
      const pagesArray = [];
  for (let i = 1; i <= total_pages; i += 1) {
   
    pagesArray.push(i);

    return pagesArray
      }
      
    })