// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhFURbIpr5b8BGtlHSerIbLXwTGI_uij0",
  authDomain: "todoapp-28256.firebaseapp.com",
  databaseURL: "https://todoapp-28256-default-rtdb.firebaseio.com",
  projectId: "todoapp-28256",
  storageBucket: "todoapp-28256.appspot.com",
  messagingSenderId: "156946304554",
  appId: "1:156946304554:web:cb0665232b7bc33fa5bd53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
