import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDGP9glve5aN5Ba0gUM43NnmzxFo5CTEJ4",
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

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();