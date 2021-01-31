import refs from './refs';
import updateMarkup from './updateMarkup';
import movieCardsTpl from '../template/movieCards.hbs';

const apiKey = 'api_key=50b81e1c6c3b9e5f74d2015b742ff0b0';

function fetchMovies() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}`; // популярные фильмы за неделю


    return fetch(url)
        .then(response => response.json())
      .then(({ results }) => {
        fetchGenres().then(({ genres }) => {
          updateMovieMarkup(results, genres)
          // .then(data => updateMarkup(data)
        })
      })
      

//   return fetch(url)
//     .then(response => response.json())
//     .then(({ results }) => {
//       fetchGenres().then(({ genres }) => {
//         updateMarkup(results, genres);
//       });
// >>>>>>> develop
//     })
//     .catch(error => console.log(error));
// }

function fetchGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`,
  ).then(response => response.json());
}

          function updateMovieMarkup(films, genres) {

            films.map(({ id, poster_path, title, release_date, genre_ids }) => {
              const filterGenres = genres.filter(genre => genre_ids.includes(genre.id));
              const mapGenres = filterGenres.map(({ name }) => name);
              if (mapGenres.length > 3) {
                mapGenres.splice(3, 0, 'Other')
              }
              const movieGenres = mapGenres.slice(0, 4).join(', ');
              const releaseDate = release_date.split('-')[0];

              const movie = ([{ id, poster_path, title, movieGenres, releaseDate }]);
              updateMarkup(movie)
            })
          }
      
    // const markup = `
    // <li class="movie-card">
    //     <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${poster_path}" 
    //         alt="${title}" data-movie-id="${id}">
    //     <h1 class="movie-title">${title}</h1>
    //     <p class="movie-info">${movieGenres} | ${releaseDate}</p>    
    // </li>
    // `;
    // refs.gallery.insertAdjacentHTML('beforeend', markup);
   
// =======
// function updateMarkup(films, genres) {
//   films.map(({ id, poster_path, title, release_date, genre_ids }) => {
//     const filterGenres = genres.filter(genre => genre_ids.includes(genre.id));
//     const mapGenres = filterGenres.map(({ name }) => name);
//     if (mapGenres.length > 3) {
//       mapGenres.splice(3, 0, 'Other');
//     }
//     const movieGenres = mapGenres.slice(0, 4).join(', ');

//     const markup = `
//     <li class="movie-card">
//         <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${poster_path}" 
//             alt="${title}" data-movie-id="${id}">
//         <h1 class="movie-title">${title}</h1>
//         <p class="movie-info">${movieGenres} | ${
//       release_date.split('-')[0]
//     }</p>    
//     </li>
//     `;
//     refs.gallery.insertAdjacentHTML('beforeend', markup);
// >>>>>>> develop
//   });

}

  
export default fetchMovies()

// export default fetchMovies;
// >>>>>>> develop
