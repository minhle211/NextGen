// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth , GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsC0VfSnOj0i-MexrnFtqfsdEw01Rvs0k",
  authDomain: "next-2dc7b.firebaseapp.com",
  projectId: "next-2dc7b",
  storageBucket: "next-2dc7b.appspot.com",
  messagingSenderId: "823721079847",
  appId: "1:823721079847:web:02bb809b1c39b5e4704a02",
  measurementId: "G-RE4K8YR4BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{
    app,
    analytics,
    auth,
    provider,
}