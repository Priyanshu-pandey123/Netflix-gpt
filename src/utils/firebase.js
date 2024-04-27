// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxveKTrXdtzRfv_Dd8_AyO_DfaLUUfAJQ",
  authDomain: "netflix-gpt1-ddf7d.firebaseapp.com",
  projectId: "netflix-gpt1-ddf7d",
  storageBucket: "netflix-gpt1-ddf7d.appspot.com",
  messagingSenderId: "390833640502", 
  appId: "1:390833640502:web:308f280b42748f053cb497",
  measurementId: "G-MQ7T1FWZH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();