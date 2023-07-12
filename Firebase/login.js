import { checkLoginStatus } from "./checkLoginStatus.js";
import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login-btn");

const handLogin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.replace('/index.html')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

login.addEventListener("click", handLogin);
checkLoginStatus()