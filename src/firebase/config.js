// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2F5M0yOD3S0M-FwkI6-o_BeMubb2QhYo",
  authDomain: "tujardininterior2-react.firebaseapp.com",
  projectId: "tujardininterior2-react",
  storageBucket: "tujardininterior2-react.appspot.com",
  messagingSenderId: "581832774405",
  appId: "1:581832774405:web:37e8b464ca2e0d041c1d6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);