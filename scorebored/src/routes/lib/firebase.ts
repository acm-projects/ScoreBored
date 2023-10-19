import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "am gonna use .env tomorrow check slack or discord for a while",
    authDomain: "scorebored2-e7ffd.firebaseapp.com",
    projectId: "scorebored2-e7ffd",
    storageBucket: "scorebored2-e7ffd.appspot.com",
    messagingSenderId: "53674957527",
    appId: "1:53674957527:web:116c465cf243842f22ae92",
    measurementId: "G-NF5DM6517F"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
