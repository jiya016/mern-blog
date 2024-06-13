// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f55bb.firebaseapp.com",
  projectId: "mern-blog-f55bb",
  storageBucket: "mern-blog-f55bb.appspot.com",
  messagingSenderId: "698996795495",
  appId: "1:698996795495:web:052fc01f9134d342d04cc2"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);