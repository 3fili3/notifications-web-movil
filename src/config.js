// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHvBX62sWZ60codCVmT54vk1pOXiVPpXU",
  authDomain: "notificaciones-movil-2a273.firebaseapp.com",
  projectId: "notificaciones-movil-2a273",
  storageBucket: "notificaciones-movil-2a273.appspot.com",
  messagingSenderId: "494288727320",
  appId: "1:494288727320:web:2952d1c03f1d11f156826d",
  measurementId: "G-B08FY53MQ3"
};

// Initialize Firebase
export const app = firebase.default.initializeApp(firebaseConfig);