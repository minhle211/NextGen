import { checkLoginStatus } from "./checkLoginStatus.js";
import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login-btn");
const handLogin = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.replace('/index.html')
      alert("Dang nhap thanh cong");
    })
    .catch((error) => {
      if (error.code === "auth/invalid-email") {
        alert("Email không hợp lệ");
      } else if (error.code === 'auth/missing-password') {
        alert("Chưa nhập password");
      } else if(error.code==='auth/invalid-email'){
        alert("Email không hợp lệ");
      }
    });
};

login.addEventListener("click", handLogin);
checkLoginStatus()