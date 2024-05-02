// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCl3o8FApOT56FMX8OrQhyOPWxjYatzZM",
  authDomain: "pinterset-7a867.firebaseapp.com",
  projectId: "pinterset-7a867",
  storageBucket: "pinterset-7a867.appspot.com",
  messagingSenderId: "9676379758",
  appId: "1:9676379758:web:3d18b256427d94fcfeb87f",
  measurementId: "G-RK9V2KK461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;