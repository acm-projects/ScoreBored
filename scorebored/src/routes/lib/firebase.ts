import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "check slack",
    authDomain: "scorebored-83730.firebaseapp.com",
    projectId: "scorebored-83730",
    storageBucket: "scorebored-83730.appspot.com",
    messagingSenderId: "691079362871",
    appId: "1:691079362871:web:787a09d302eeff5bce42b2",
    measurementId: "G-6MBV1TNP8R"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
