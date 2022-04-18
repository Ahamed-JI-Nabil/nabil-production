// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgXxoR3Jc-X1DN3D3SzjYIZ8SaMLV35eQ",
  authDomain: "nabil-production.firebaseapp.com",
  projectId: "nabil-production",
  storageBucket: "nabil-production.appspot.com",
  messagingSenderId: "473007004266",
  appId: "1:473007004266:web:0a8820fa6122be4b274813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;