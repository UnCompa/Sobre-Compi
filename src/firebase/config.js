// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOFZ2joqNT094pOMx21xqqK86qpFCm6Jw",
  authDomain: "sobrecompis.firebaseapp.com",
  projectId: "sobrecompis",
  storageBucket: "sobrecompis.appspot.com",
  messagingSenderId: "547306461151",
  appId: "1:547306461151:web:895bce1aeade8955cb966a",
  measurementId: "G-8MF25305L1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);