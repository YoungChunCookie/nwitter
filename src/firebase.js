// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnt7mEts0dLU4lHWuudCXi5OZTcX02gsI",
  authDomain: "nwitter-7d280.firebaseapp.com",
  projectId: "nwitter-7d280",
  storageBucket: "nwitter-7d280.appspot.com",
  messagingSenderId: "422537210880",
  appId: "1:422537210880:web:786622436df29d8e35fce5"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);