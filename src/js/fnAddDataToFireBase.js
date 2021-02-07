import notify from './notifyFunction.js'
import refs from './refs.js'
import * as auth from './Auth.js'
import firebase from 'firebase/app';
import * as not from './fnNotify.js';


function addDataToFireBaseStorage() {
    refs.lightbox.addEventListener('click', (event) => {

        if (event.target.dataset.actionWatched) {
            const currentUser = firebase.auth().currentUser;

            if (currentUser) {
                let uid = currentUser.uid;
                let movieId = event.target.dataset.movieId;
                const addToWatched = refs.addToWatched(true);
                auth.readUserData(uid).then((data) => (data.val())).then((data) => {
                    let watched = data.watched || [];
                    if (watched.includes(movieId)) {
                        return;
                    }
                    updateWatchetList(uid, [...watched, movieId]);
                    notify("WATCHED")
                })
                if (addToWatched.classList.contains("active-btn-style")) {
                    addToWatched.classList.remove('active-btn-style');
                    addToWatched.classList.add('inactive-btn-style');
                    addToWatched.textContent = "ALREADY IN WATCHED";
                    addToWatched.setAttribute("disabled", 'true');
                }
            } else {
                not.authNotify();
            }
            //event.target.setAttribute('disabled', 'true');



        }
        if (event.target.dataset.actionQueue) {
            const currentUser = firebase.auth().currentUser;
            if (currentUser) {
                let uid = currentUser.uid;
                let movieId = event.target.dataset.movieId;
                const addToQueue = refs.addToQueue(true);
                auth.readUserData(uid).then((data) => (data.val()))
                    .then((data) => {
                        //console.log("movieId", movieId)
                        let queue = data.queue || [];
                        if (queue.includes(movieId)) {
                            return;
                        }
                        updateQueuetList(uid, [...queue, movieId]);
                        notify("QUEUE")
                    })
                if (addToQueue.classList.contains("active-btn-style")) {
                    //console.log("queue")
                    addToQueue.classList.remove('active-btn-style');
                    addToQueue.classList.add('inactive-btn-style');
                    addToQueue.textContent = "ALREADY IN QUEUE";
                    addToQueue.setAttribute("disabled", 'true');
                }
            }
            else {
                not.authNotify();
            }

        };
    })
}

function updateQueuetList(userId, movieId) {
    //console.log('hello', watched, queue)
    firebase.database().ref('users/' + userId).update({
        queue: movieId,
    }, (error) => {
        if (error) {
            console.log('Failed!');
        } else {
            console.log('Data added successfully!');
        }
    });
}

function updateWatchetList(userId, movieId) {
    //console.log('hello', watched, queue)
    firebase.database().ref('users/' + userId).update({
        watched: movieId,
    }, (error) => {
        if (error) {
            console.log('Failed!');
        } else {
            console.log('Data added successfully!');
        }
    });
}

export {
    addDataToFireBaseStorage,
    updateWatchetList,
    updateQueuetList,
}