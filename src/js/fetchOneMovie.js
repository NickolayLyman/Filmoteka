const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";

function fetchOneMovie(movie_id) {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?${apiKey}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export default fetchOneMovie;