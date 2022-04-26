// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX6GowqItEWicTYH7uKPdQdq78L3TdZzU",
  authDomain: "phone-auth-94c72.firebaseapp.com",
  projectId: "phone-auth-94c72",
  storageBucket: "phone-auth-94c72.appspot.com",
  messagingSenderId: "767188643834",
  appId: "1:767188643834:web:350779e8dfdc4a2b74fe43",
  measurementId: "G-Y6W7Q7VZJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);