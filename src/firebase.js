import firebase from './firebase';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGc7DOCEF6ECSM7UgUdBJtQ0VJILj2aH0",
  authDomain: "devpodservices.firebaseapp.com",
  projectId: "devpodservices",
  storageBucket: "devpodservices.appspot.com",
  messagingSenderId: "614874320912",
  appId: "1:614874320912:web:85290e6335a9b4db3bfa95",
  measurementId: "G-J0RZFBQ3BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;