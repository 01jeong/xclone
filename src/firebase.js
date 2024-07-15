// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-clone-6b342.firebaseapp.com",
  projectId: "x-clone-6b342",
  storageBucket: "x-clone-6b342.appspot.com",
  messagingSenderId: "154150354163",
  appId: "1:154150354163:web:e58ef958e77173b74ecb86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);