// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth , GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
const provider = new GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLLeIWTHpmW_P0F3VAfhpjuOIj_BCGiZA",
  authDomain: "next-gen-39371.firebaseapp.com",
  projectId: "next-gen-39371",
  storageBucket: "next-gen-39371.appspot.com",
  messagingSenderId: "232178756610",
  appId: "1:232178756610:web:41faa262aae382533ccb1b",
  measurementId: "G-ZB5PP15YN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{
    app,
    auth,
    provider,
}