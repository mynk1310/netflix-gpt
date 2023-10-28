// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2DEITjMfZ3JgPIab1MtrNvy5SN8QuUzI",
  authDomain: "netflixgpt-ddafa.firebaseapp.com",
  projectId: "netflixgpt-ddafa",
  storageBucket: "netflixgpt-ddafa.appspot.com",
  messagingSenderId: "970811120717",
  appId: "1:970811120717:web:4f32d140ef9bd2df469004",
  measurementId: "G-YXJ1KLXYS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();