const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";

function fetchMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}`; // популярные фильмы за неделю

    return fetch(url)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => console.log(error));
}

export default fetchMovies;