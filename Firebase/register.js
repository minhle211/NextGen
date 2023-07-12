import {auth} from "./config.js"
import {  createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
const email = document.getElementById('email');
const password = document.getElementById('password');
const register = document.getElementById('register-btn');
const errorMessage = document.getElementById('error-message');

const handRegister = () =>{
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location.replace("/login.html")
  })
  .catch((error) => {
    if(error.code==='auth/invalid-email'){
        errorMessage.textContent = "email khong hop le";
    }else if(error.code==="auth/missing-password") {
        errorMessage.textContent="Chua nhap mat khau"
    }

  });
};

register.addEventListener('click',handRegister)