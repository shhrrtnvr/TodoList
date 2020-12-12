// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7R1tEwPVH0OE1QerqIluJkcVIEa6KreU",
    authDomain: "todooftanvir.firebaseapp.com",
    projectId: "todooftanvir",
    storageBucket: "todooftanvir.appspot.com",
    messagingSenderId: "235936132566",
    appId: "1:235936132566:web:1814ae90ea615ddd754877",
    measurementId: "G-T7Q82Q26RD"
});

const db = firebase.firestore();

export default db;