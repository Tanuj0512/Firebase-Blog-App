// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoZJFxH1mFxhAu2_SVMVchvleqnzRIH60",
  authDomain: "blog-app-4d88a.firebaseapp.com",
  projectId: "blog-app-4d88a",
  storageBucket: "blog-app-4d88a.appspot.com",
  messagingSenderId: "1058991747808",
  appId: "1:1058991747808:web:285308c0d5a98193a75685",
  measurementId: "G-3HQVLE9BWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);