import refs from './refs.js'
import * as auth from './Auth.js'
import libraryListOfMovieTml from '../template/libraryListOfMovieTml.hbs';
import addEmptyStylePage from './fnAddEmptyStylePage.js'
import deleteMovie from './fnDelMovie.js'
import firebase from 'firebase/app';


function getMoviesWatched(uid) {
    auth.readUserData(uid).then((data) => (data.val())).then(async (data) => {
        refs.pagination.setAttribute("hidden", "true")
        if (data.watched) {
            let watchedList = data.watched;
            let movieObjects = await Promise.all(
                watchedList.map(async movieId => {
                    let movieObject = await fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&`,
                    );
                    return movieObject.json();
                }),
            )
            refs.gallery.innerHTML = '';
            movieObjects.map(({ id, name, poster_path, title, release_date, genres, vote_average }) => {
                const releaseDate = release_date.split('-')[0];
                const movieGenres = genres.map(({ name }) => name).join(", ");
                let img = poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : emptyJpg;
                const movie = [{ id, name, img, title, releaseDate, movieGenres, vote_average }];
                updateMarkup(movie);
            });
        } else {
            addEmptyStylePage();
        }
    })
}

function getMoviesQueue(uid) {
    auth.readUserData(uid).then((data) => (data.val())).then(async (data) => {
        refs.pagination.setAttribute("hidden", "true")
        if (data.queue) {
            let queueList = data.queue;
            let movieObjects = await Promise.all(
                queueList.map(async movieId => {
                    let movieObject = await fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&`,
                    );

                    return movieObject.json();
                }),
            )
            movieObjects.map(({ id, name, poster_path, title, release_date, genres, vote_average }) => {
                const releaseDate = release_date.split('-')[0];
                const movieGenres = genres.map(({ name }) => name).join(", ");
                let img = poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : emptyJpg;
                const movie = [{ id, name, img, title, releaseDate, movieGenres, vote_average }];
                updateMarkup(movie);
            });
        }
        else {
            addEmptyStylePage();
        }
    })
}

function updateMarkup(movie) {
    let markup = '';
    if (movie.status !== '404') {
        markup = libraryListOfMovieTml(movie);
    }
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}



refs.gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("delMovieBtn")) {
        const movieData = event.target;
        console.log("Hello")
        const uid = firebase.auth().currentUser.uid;
        //console.log(uid)
        deleteMovie(movieData, uid);
    }
});

export { getMoviesQueue, getMoviesWatched, };