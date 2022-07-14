import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuzvcx3MeoT8DUOdyAaeGk9O4-0zEsLb4",
    authDomain: "olx-demo-e14de.firebaseapp.com",
    projectId: "olx-demo-e14de",
    storageBucket: "olx-demo-e14de.appspot.com",
    messagingSenderId: "850338173954",
    appId: "1:850338173954:web:11bf72794da0d5507d031b",
    measurementId: "G-XP93Y6NEB1"
  };
  
 export default firebase.initializeApp(firebaseConfig)