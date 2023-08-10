import { auth } from "./config.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const logout = document.getElementById("auth-btn");

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      alert("logout");
      window.location.replace("/login.html");
    })
    .catch((error) => {
      alert(error.code);
    });
};

logout.addEventListener("click", handleLogout);
