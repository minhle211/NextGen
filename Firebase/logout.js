import { auth } from "./config.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const logout = document.getElementById("logout-btn");

signOut(auth).then(() => {
    alert("log out");
    window.location.replace("/login.html");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

login.addEventListener("click", handLogin);
