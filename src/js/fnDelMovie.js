import * as remove from './fnDelMovieFromFirebase.js'

function deleteMovie(data, uid) {
    if (window.location.hash === '#library') {
        remove.removeWatchedList(uid, data.id)
    }
    if (window.location.hash === '#queue') {
        remove.removeQueueList(uid, data.id)
    }
}

export default deleteMovie;