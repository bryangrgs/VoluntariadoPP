// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6ATUZhGpAhWB7oUxTX5Q5vxUUeX-IRwM",
  authDomain: "reactpp-6ddef.firebaseapp.com",
  projectId: "reactpp-6ddef",
  storageBucket: "reactpp-6ddef.appspot.com",
  messagingSenderId: "405953978940",
  appId: "1:405953978940:web:462bc06778bb75a2161939"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app);
 export const db= getFirestore(app)