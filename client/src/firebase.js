// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kr-realestate.firebaseapp.com",
  projectId: "kr-realestate",
  storageBucket: "kr-realestate.firebasestorage.app",
  messagingSenderId: "970469352668",
  appId: "1:970469352668:web:0922fe5646048a9cbbc019"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);