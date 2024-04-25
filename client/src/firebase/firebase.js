// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-wheeler.firebaseapp.com",
  projectId: "ai-wheeler",
  storageBucket: "ai-wheeler.appspot.com",
  messagingSenderId: "690579447657",
  appId: "1:690579447657:web:39dc7db531e100d46a27f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);