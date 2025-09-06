
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCPkPsFOM9kEySs9-54P45iaGE9Vd-3-c",
  authDomain: "psc-indore.firebaseapp.com",
  databaseURL: "https://psc-indore-default-rtdb.firebaseio.com",
  projectId: "psc-indore",
  storageBucket: "psc-indore.firebasestorage.app",
  messagingSenderId: "404268987501",
  appId: "1:404268987501:web:a57682a153ee2aa75cfb64",
  measurementId: "G-21RVVTNDP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
