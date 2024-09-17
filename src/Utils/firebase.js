// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOZhLrDJuvBvvhV8E0-WONCZ2ZiiMYxA",
  authDomain: "netflixgpt-e7694.firebaseapp.com",
  projectId: "netflixgpt-e7694",
  storageBucket: "netflixgpt-e7694.appspot.com",
  messagingSenderId: "975883358044",
  appId: "1:975883358044:web:4d42acd1af4e2ba35abb99",
  measurementId: "G-0FG24TSVPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();