import { auth }
from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const container =
document.querySelector(".container");

const registerBtn =
document.getElementById("register");

const loginBtn =
document.getElementById("login");

if(registerBtn){

  registerBtn.addEventListener(
  "click",
  ()=>{
    container.classList.add("active");
  });

}

if(loginBtn){

  loginBtn.addEventListener(
  "click",
  ()=>{
    container.classList.remove("active");
  });

}

/* =========================
   REGISTER
========================= */

const registerForm =
document.getElementById("registerForm");

if(registerForm){

  registerForm.addEventListener(
  "submit",
  async (e)=>{

    e.preventDefault();

    const email =
    document.getElementById(
    "registerEmail").value;

    const password =
    document.getElementById(
    "registerPassword").value;

    try{

      const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(
        userCredential.user
      );

      alert(
      "Verification email sent!"
      );

    }

    catch(error){

      alert(error.message);

    }

  });

}

/* =========================
   LOGIN
========================= */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener(
  "submit",
  async (e)=>{

    e.preventDefault();

    const email =
    document.getElementById(
    "loginEmail").value;

    const password =
    document.getElementById(
    "loginPassword").value;

    try{

      const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if(
      !userCredential.user.emailVerified
      ){

        alert(
        "Please verify your email."
        );

        return;

      }

      alert("Login successful!");

      window.location.href =
      "dashboard.html";

    }

    catch(error){

      alert(error.message);

    }

  });

}