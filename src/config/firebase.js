import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBYKVnPWa1ddBu0dL3C1ch3LjPPPuks5BM",
  authDomain: "reactjs-photo-album-app.firebaseapp.com",
  projectId: "reactjs-photo-album-app",
  storageBucket: "reactjs-photo-album-app.appspot.com",
  messagingSenderId: "148193497096",
  appId: "1:148193497096:web:b6c88833b29ad1154801bd",
  measurementId: "G-734DW5J55K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
