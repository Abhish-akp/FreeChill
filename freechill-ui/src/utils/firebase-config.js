import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz-SrrlVe5UGmOiBtR3KyLLjNiaN2jntI",
  authDomain: "react-freechill-clone.firebaseapp.com",
  projectId: "react-freechill-clone",
  storageBucket: "react-freechill-clone.firebasestorage.app",
  messagingSenderId: "76707639834",
  appId: "1:76707639834:web:a9ad5498ed980e21b817a3",
  measurementId: "G-1ERFPE1FQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);