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
function initApp(callback) {
  // Auth state changes.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      const uid = user.uid;

      refs.signOut.hidden = false;
      refs.signIn.hidden = true;

      //refs.userInfo.innerHTML = `<img src="${photoURL}"> ${displayName}`;
      console.log(`Current user: ${displayName}`, `userId: ${uid}`);
      readUserData(uid)  // загружает данные из БД

    } else {
      // User is signed out.
      refs.signOut.hidden = true;
      refs.signIn.hidden = false;

      // refs.userInfo.innerHTML = '';
    }
    callback();
  });
}

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
          readUserData(userId);  // загружает данные из БД
        }
        else {
          console.log('User NOT exist in database');
          writeUserData(userId, name, email, imageUrl);
        }
      });

      //Тут нужно вытянуть данные из localstorage и подставить в функцию
      //Нужно Решить на каком этапе данные из LS будут заливаться в БД (при SignOut?)

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

function googleSignOut() {
  firebase.auth().signOut().then(() => {
    console.log('Sign-out successful.');
    window.location.href = 'index.html';
    renderingContent();
    //refs.userInfo.innerHTML = '';
  }).catch((error) => {
    console.log('An error happened');
  });
}

const database = firebase.database();

// Получает данные пользователя с текущим uid из БД
function checkUserID() {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value');
}

// Записывает в БД основную инфу о пользователе, только при первом SignIn(при регистрации)
function writeUserData(userId, name, email, imageUrl) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  }, (error) => {
    if (error) {
      console.log('Failed!');
    } else {
      console.log('User data saved successfully!');
    }
  });
}

//Считывает данные из БД firebase
function readUserData(userId) {
  return firebase.database().ref('/users/' + userId).once('value');
}

export { initApp, readUserData, checkUserID };