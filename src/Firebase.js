// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQplrfenOsO3wXSv0NqX2u1Eu31Z9vCLU",
  authDomain: "dataentryproject-3b581.firebaseapp.com",
  projectId: "dataentryproject-3b581",
  storageBucket: "dataentryproject-3b581.appspot.com",
  messagingSenderId: "276997966704",
  appId: "1:276997966704:web:f256fbed44296bd5b71db5",
  measurementId: "G-9XD9E0Y0EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);