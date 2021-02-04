import firebase from 'firebase/app';
import 'firebase/auth';
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

            //refs.userInfo.innerHTML = `<img src="${photoURL}" > ${displayName}`;
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
      console.log(user);
      console.log("Success!");

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

  // function onSignIn(googleUser) {
  //     console.log('Google Auth Response', googleUser);
  //     // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  //     var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
  //       unsubscribe();
  //       // Check if we are already signed-in Firebase with the correct user.
  //       if (!isUserEqual(googleUser, firebaseUser)) {
  //         // Build Firebase credential with the Google ID token.
  //         var credential = firebase.auth.GoogleAuthProvider.credential(
  //           googleUser.getAuthResponse().id_token);

  //         // Sign in with credential from the Google user.
  //         firebase.auth().signInWithCredential(credential).catch(function (error) {
  //           // Handle Errors here.
  //           var errorCode = error.code;
  //           var errorMessage = error.message;
  //           // The email of the user's account used.
  //           var email = error.email;
  //           // The firebase.auth.AuthCredential type that was used.
  //           var credential = error.credential;
  //           if (errorCode === 'auth/account-exists-with-different-credential') {
  //             alert('You have already signed up with a different auth provider for that email.');
  //             // If you are using multiple auth providers on your app you should handle linking
  //             // the user's accounts here.
  //           } else {
  //             console.error(error);
  //           }
  //         });
  //       } else {
  //         console.log('User already signed-in Firebase.');
  //       }
  //     });
  //   }

  //   /**
  //    * Check that the given Google user is equals to the given Firebase user.
  //    */
  //   function isUserEqual(googleUser, firebaseUser) {
  //     if (firebaseUser) {
  //       var providerData = firebaseUser.providerData;
  //       for (var i = 0; i < providerData.length; i++) {
  //         if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
  //           providerData[i].uid === googleUser.getBasicProfile().getId()) {
  //           // We don't need to reauth the Firebase connection.
  //           return true;
  //         }
  //       }
  //     }
  //     return false;
  //   }