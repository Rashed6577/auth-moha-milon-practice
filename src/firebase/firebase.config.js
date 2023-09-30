// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTP8aSl_p9LUvEDLthNr_sQwD_y_q39q8",
  authDomain: "auth-moha-milon-prectice.firebaseapp.com",
  projectId: "auth-moha-milon-prectice",
  storageBucket: "auth-moha-milon-prectice.appspot.com",
  messagingSenderId: "392349976921",
  appId: "1:392349976921:web:a2c0a1a8ad29ffc081e448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;