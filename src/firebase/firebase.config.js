// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgz8h0RtSO39tiOtmGMu3UcLiMYN5fCA4",
  authDomain: "practice-project-7470e.firebaseapp.com",
  projectId: "practice-project-7470e",
  storageBucket: "practice-project-7470e.firebasestorage.app",
  messagingSenderId: "827287329439",
  appId: "1:827287329439:web:6aa90f46dfb91787ea20aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);