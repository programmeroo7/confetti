// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOZmt2o7uBKMLQiX4nwUd2ew99Kfk6OC8",
  authDomain: "newyear-1c47d.firebaseapp.com",
  projectId: "newyear-1c47d",
  storageBucket: "newyear-1c47d.appspot.com",
  messagingSenderId: "1006038638114",
  appId: "1:1006038638114:web:7c8ea986808f2c194e747b",
  measurementId: "G-ZKZMWK7Y9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);