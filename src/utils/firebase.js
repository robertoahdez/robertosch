import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCKhYdscIPJ5rwe8nO1hQXkUKlUFbe0HPc",
  authDomain: "roberto-4e0e7.firebaseapp.com",
  databaseURL: "https://roberto-4e0e7.firebaseio.com",
  projectId: "roberto-4e0e7",
  storageBucket: "roberto-4e0e7.appspot.com",
  messagingSenderId: "649790628857"
};

var base = firebase.initializeApp(config);

export default base;
