// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgDDGvQVvv71WRaOY5Ls7wXo5oxr0JfIQ",
  authDomain: "blogproject-96baa.firebaseapp.com",
  projectId: "blogproject-96baa",
  storageBucket: "blogproject-96baa.appspot.com",
  messagingSenderId: "518146150005",
  appId: "1:518146150005:web:fa7a309792eeaf20a1723c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 