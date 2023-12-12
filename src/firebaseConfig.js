// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiJThU-HQM9WjinIHlH1rovcnevTCm-iY",
  authDomain: "writing-now.firebaseapp.com",
  projectId: "writing-now",
  storageBucket: "writing-now.appspot.com",
  messagingSenderId: "702684146206",
  appId: "1:702684146206:web:338c208daea9401f585c0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);