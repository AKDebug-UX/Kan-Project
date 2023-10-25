// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6yZvVUmmJkdAADvgdzq22H8yj1KhPfKE",
  authDomain: "kan-cinema.firebaseapp.com",
  projectId: "kan-cinema",
  storageBucket: "kan-cinema.appspot.com",
  messagingSenderId: "570362460833",
  appId: "1:570362460833:web:6610b8f3d314459c4b4ee0",
  measurementId: "G-71H1VC3ZY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}