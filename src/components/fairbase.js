// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4DSYzbs9r_2UrW0flAYRYlZ7rZV9b4Q8",
  authDomain: "login-auth-e5f18.firebaseapp.com",
  projectId: "login-auth-e5f18",
  storageBucket: "login-auth-e5f18.firebasestorage.app",
  messagingSenderId: "837207446263",
  appId: "1:837207446263:web:01abd08272adc7c93db9f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;