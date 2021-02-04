import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';
import refs from './refs';
import renderingContent from './renderingContent';

firebase.initializeApp(firebaseConfig);

refs.signIn.addEventListener('click', googleSignIn);
 refs.signOut.addEventListener('click', googleSignOut);
/**
    * initApp handles setting up UI event listeners and registering Firebase auth listeners:
    *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
    *    out, and that is where we update the UI.
    */
function initApp() {
// Auth state changes.
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            const displayName = user.displayName;
            const email = user.email;
            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const isAnonymous = user.isAnonymous;
            const uid = user.uid;
            const providerData = user.providerData;
            
            refs.signOut.hidden = false;
            refs.signIn.hidden = true;

            //refs.userInfo.innerHTML = `<img src="${photoURL}"> ${displayName}`;
          console.log(`Current user: ${displayName}`);
        } else {
            // User is signed out.
            refs.signOut.hidden = true;
            refs.signIn.hidden = false;
          
           // refs.userInfo.innerHTML = '';
        }
    });
}
      
window.onload = function () {
    initApp();
};

function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const userId = user.uid;
      const name = user.displayName;
      const email = user.email;
      const imageUrl = user.photoURL;

      console.log(user);
      console.log("Success!");

      //Проверяет существует ли пользователь в БД, если нет - добавляет в БД
      checkUserID().then((data) => {
        if (data.exists()) {
          console.log('User exist in database');
        }
        else {
          console.log('User NOT exist in database');
          writeUserData(userId, name, email, imageUrl);
        }
      });

  }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorMessage);
      console.log("Failed!");
  });
}

function googleSignOut(){
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      window.location.href = 'index.html';
      renderingContent();
        //refs.userInfo.innerHTML = '';
    }).catch((error) => {
      // An error happened.
        console.log('An error happened');
    });
  // [END auth_sign_out]
  }

const database = firebase.database();

function checkUserID() {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value');
}

function writeUserData(userId, name, email, imageUrl) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  }, (error) => {
      if (error) {
        console.log('Failed!');
      } else {
        console.log('Data saved successfully!');
      }
    });
}

function readUserData(userId, ) {
  return firebase.database().ref('/users/' + userId).once('value').then((data) => data.val().name);
}



//Записывает данные из local storage в базу данных
function addToLibrary(userID, watched, queue){
  database.ref('users/' + userId).set({
    wathched: watched,
    queue: watched,
  }, (error) => {
      if (error) {
        console.log('Failed!');
      } else {
        console.log('Data saved successfully!');
      }
    });
}

function removeFromLibrary(userID, watched, queue) {
  
}