import { Spinner } from 'spin.js';
import opts from './spinner';

const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";

function fetchOneMovie(movie_id) {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?${apiKey}`;
    var target = document.querySelector('.lightbox__content');
    var spinner = new Spinner(opts).spin(target);
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error)).finally(() => {
            spinner.stop();
        });
}

export default fetchOneMovie;