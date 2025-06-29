// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "shortsmate-d9b76.firebaseapp.com",
  projectId: "shortsmate-d9b76",
  storageBucket: "shortsmate-d9b76.firebasestorage.app",
  messagingSenderId: "957192885742",
  appId: "1:957192885742:web:3d2ebbbcb72d05140eaaff",
  measurementId: "G-ZM1S71W0F1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
