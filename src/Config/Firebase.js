// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV1gvZTR7Kuzerv5w2ZkByMqwTv8OwObg",
  authDomain: "breastcancer-63c04.firebaseapp.com",
  projectId: "breastcancer-63c04",
  storageBucket: "breastcancer-63c04.appspot.com",
  messagingSenderId: "953240665938",
  appId: "1:953240665938:web:eb4ef710561b61a556848b",
  measurementId: "G-NYWNH1MJRD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
