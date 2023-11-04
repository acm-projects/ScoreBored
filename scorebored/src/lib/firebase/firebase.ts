// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "lhih",
  authDomain: "scorebored2-e7ffd.firebaseapp.com",
  databaseURL: "https://scorebored2-e7ffd-default-rtdb.firebaseio.com",
  projectId: "scorebored2-e7ffd",
  storageBucket: "scorebored2-e7ffd.appspot.com",
  messagingSenderId: "53674957527",
  appId: "1:53674957527:web:116c465cf243842f22ae92",
  measurementId: "G-NF5DM6517F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
