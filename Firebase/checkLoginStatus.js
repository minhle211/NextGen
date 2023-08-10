import { auth } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const logout = document.getElementById("auth-btn");
export const checkLoginStatus = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.providerData[0]);
      if(location.pathname==="/login.html" || location.pathname==="/register.html"){
        window.location.replace("index.html")
      }
      else if(location.pathname==="/index.html"){
          const authbtn = document.getElementById("auth-btn");
          authbtn.textContent="Logout";
          const welcomeText=document.getElementById("welcome-text");
          const profile=user.providerData[0];
          welcomeText.textContent="Xin Chào " + profile.email;
      }else{
        if(location.pathname==="/index.html"){
          const authbtn=document.getElementById("auth-btn");
          authbtn.textContent="Login";

        }
      }
    }
  });
};