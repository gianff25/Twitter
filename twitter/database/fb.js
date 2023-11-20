// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFWgGMDuaFnNmY80Xz8veY6ji0FD0qQi0",
  authDomain: "twitter-45fb5.firebaseapp.com",
  projectId: "twitter-45fb5",
  storageBucket: "twitter-45fb5.appspot.com",
  messagingSenderId: "747563389900",
  appId: "1:747563389900:web:8863929e53ea9b259f8369"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;