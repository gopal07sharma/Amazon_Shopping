// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsum9rN4fZtaOkZ_rOiueHOsCeAmVvS5s",
  authDomain: "fir-d85b9.firebaseapp.com",
  projectId: "fir-d85b9",
  storageBucket: "fir-d85b9.appspot.com",
  messagingSenderId: "637942860615",
  appId: "1:637942860615:web:4d096b1a095b39a4aa5a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)