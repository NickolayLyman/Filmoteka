const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";
 
function fetchSearchedMovie(searchMovie, page) {
   const url = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&page=${page}&include_adult=false&query=${searchMovie}`;
  
   return fetch(url)
       .then(response => response.json())
       .catch(error => console.log(error));
  
  
}
 
export default fetchSearchedMovie;