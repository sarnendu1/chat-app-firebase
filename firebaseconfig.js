// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8UChO1fdUWEXbz-Yk7QGDZq19ab7wMME",
  authDomain: "react-chat-app-a0cce.firebaseapp.com",
  projectId: "react-chat-app-a0cce",
  storageBucket: "react-chat-app-a0cce.appspot.com",
  messagingSenderId: "585083981001",
  appId: "1:585083981001:web:38990c462883c2683ad118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }