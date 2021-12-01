// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg3UlMbctBdMrT-Z8AxlFK6wViHfCvlqM",
  authDomain: "zapatillas-god-castillo.firebaseapp.com",
  projectId: "zapatillas-god-castillo",
  storageBucket: "zapatillas-god-castillo.appspot.com",
  messagingSenderId: "510231974929",
  appId: "1:510231974929:web:43d6e89bf6ec5a531e8db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;