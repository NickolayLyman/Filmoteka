import refs from './refs.js'
import * as auth from './Auth.js'
import firebase from 'firebase/app';
import * as add from './fnAddDataToFireBase.js'
import * as get from './fnGetDataFromFireBase'

function removeWatchedList(uid, dataId) {
    auth.readUserData(uid)
        .then((data) => (data.val())).then((data) => {
            if (data.watched) {
                let watched = data.watched || [];
                if (watched.includes(dataId)) {
                    let movieIndx = watched.indexOf(dataId);
                    watched.splice(movieIndx, 1)
                    console.log('new watched', watched)
                }
                add.updateWatchetList(uid, [...watched]);
                refs.gallery.innerHTML = "";
                get.getMoviesWatched(uid);
            }
        })

};

// if (addToWatched.classList.contains("active-btn-style")) {
//     addToWatched.classList.remove('active-btn-style');
//     addToWatched.classList.add('inactive-btn-style');
//     addToWatched.textContent = "ALREADY IN WATCHED";
//     addToWatched.setAttribute("disabled", 'true');
// }

function removeQueueList(uid, dataId) {
    auth.readUserData(uid)
        .then((data) => (data.val())).then((data) => {
            if (data.queue) {
                let queue = data.queue || [];
                if (queue.includes(dataId)) {
                    let queueIndx = queue.indexOf(dataId);
                    queue.splice(queueIndx, 1)
                    console.log(queueIndx)
                    console.log('new queue', queue)
                }
                add.updateQueuetList(uid, [...queue]);
                refs.gallery.innerHTML = "";
                get.getMoviesQueue(uid);
            }
        })

};

// if (addToQueue.classList.contains("active-btn-style")) {
//     //console.log("queue")
//     addToQueue.classList.remove('active-btn-style');
//     addToQueue.classList.add('inactive-btn-style');
//     addToQueue.textContent = "ALREADY IN QUEUE";
//     addToQueue.setAttribute("disabled", 'true');
// }

export {
    removeWatchedList,
    removeQueueList,
};

// function deleteDataToFireBaseStorage() {
//     refs.lightbox.addEventListener('click', (event) => {

//         if (event.target.dataset.actionWatched) {
//             const uid = firebase.auth().currentUser.uid;

//             //event.target.setAttribute('disabled', 'true');
//             let movieId = event.target.dataset.movieId;
//             const addToWatched = refs.addToWatched(true);
//             auth.readUserData(uid).then((data) => (data.val())).then((data) => {
//                 let watched = data.watched || [];
//                 if (watched.includes(movieId)) {
//                     return;
//                 }
//                 updateWatchetList(uid, [...watched, movieId]);
//                 notify("WATCHED")
//             })

// //             if (addToWatched.classList.contains("active-btn-style")) {
//                 addToWatched.classList.remove('active-btn-style');
//                 addToWatched.classList.add('inactive-btn-style');
//                 addToWatched.textContent = "ALREADY IN WATCHED";
//                 addToWatched.setAttribute("disabled", 'true');
//             }

//         }
//         if (event.target.dataset.actionQueue) {
//             let movieId = event.target.dataset.movieId;
//             const addToQueue = refs.addToQueue(true);
//             const uid = firebase.auth().currentUser.uid;
//             auth.readUserData(uid).then((data) => (data.val())).then((data) => {
//                 //console.log("movieId", movieId)
//                 let queue = data.queue || [];
//                 if (queue.includes(movieId)) {
//                     return;
//                 }
//                 updateQueuetList(uid, [...queue, movieId]);
//                 notify("QUEUE")
//             })
//             if (addToQueue.classList.contains("active-btn-style")) {
//                 //console.log("queue")
//                 addToQueue.classList.remove('active-btn-style');
//                 addToQueue.classList.add('inactive-btn-style');
//                 addToQueue.textContent = "ALREADY IN QUEUE";
//                 addToQueue.setAttribute("disabled", 'true');
//             }

//         };
//     })
// }

// function updateQueuetList(userId, movieId) {
//     //console.log('hello', watched, queue)
//     database.ref('users/' + userId).update({
//         queue: movieId,
//     }, (error) => {
//         if (error) {
//             console.log('Failed!');
//         } else {
//             console.log('Data added successfully!');
//         }
//     });
// }

// function updateWatchetList(userId, movieId) {
//     //console.log('hello', watched, queue)
//     database.ref('users/' + userId).update({
//         watched: movieId,
//     }, (error) => {
//         if (error) {
//             console.log('Failed!');
//         } else {
//             console.log('Data added successfully!');
//         }
//     });
// }