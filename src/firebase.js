import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYJzsFuHf-oCUfzCHpM619tjhG4pxg18g",
    authDomain: "clockwork-bookstore-15fa5.firebaseapp.com",
    databaseURL: "https://clockwork-bookstore-15fa5.firebaseio.com",
    projectId: "clockwork-bookstore-15fa5",
    storageBucket: "clockwork-bookstore-15fa5.appspot.com",
    messagingSenderId: "1069611819557"
});

//class which is gonna help in working with Firebase

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };