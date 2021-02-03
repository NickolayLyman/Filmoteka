import removeFromLocalStoryge from './fnRemoveFromLocalStorage.js'

function deleteMovie(data) {
    if (window.location.hash === '#library') {
        removeFromLocalStoryge('watched', data.id);

    }
    if (window.location.hash === '#queue') {
        removeFromLocalStoryge('queue', data.id);
    }
}

export default deleteMovie;