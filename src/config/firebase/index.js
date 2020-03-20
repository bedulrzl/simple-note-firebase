import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDGUGBzl_4tghlMix1lMLxy8Mv0Tkl-6dE",
    authDomain: "simple-notes-firebase-b12dd.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-b12dd.firebaseio.com",
    projectId: "simple-notes-firebase-b12dd",
    storageBucket: "simple-notes-firebase-b12dd.appspot.com",
    messagingSenderId: "905585731939",
    appId: "1:905585731939:web:95b9187e4ebc48b1d7cb56",
    measurementId: "G-BG1J4B08K0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;