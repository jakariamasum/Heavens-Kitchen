// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj-S2xRf-j-YdA6iLVOebRCdkUJUGnoj8",
  authDomain: "heaven-s-kitchen-client.firebaseapp.com",
  projectId: "heaven-s-kitchen-client",
  storageBucket: "heaven-s-kitchen-client.appspot.com",
  messagingSenderId: "1023689797414",
  appId: "1:1023689797414:web:0b21ab4542337fc90d9be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;