import { checkLoginStatus } from "./checkLoginStatus.js";
import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const registernav = document.getElementById("register-nav");
const RegNav = () =>{
    window.location.replace('/register.html');
}
  
registernav.addEventListener("click",RegNav);