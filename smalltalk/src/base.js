import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBQvGGUNms1soPIS3eIklh-gYTd7FvYU_U",
    authDomain: "smalltalk-2938e.firebaseapp.com",
    databaseURL: "https://smalltalk-2938e.firebaseio.com"
  });
  export const rebase = Rebase.createClass(app.database());
  
  // //add the authProvides your app needs: google, facebook, twitter, github,
  export const googleProvider = new firebase.auth.GoogleAuthProvider();