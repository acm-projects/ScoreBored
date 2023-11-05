import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, derived } from 'svelte/store';

// Your web app's Firebase configuration (Replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyDGP9glve5aN5Ba0gUM43NnmzxFo5CTEJ4",
    authDomain: "scorebored2-e7ffd.firebaseapp.com",
    databaseURL: "https://scorebored2-e7ffd-default-rtdb.firebaseio.com",
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

// Function to create a user store
function userStore() {
  const { subscribe, set } = writable<User | null>(null);

  let unsubscribe: () => void;
  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    return { subscribe };
  }

  unsubscribe = onAuthStateChanged(auth, (user) => {
    set(user);
  });

  return {
    subscribe,
    unsubscribe: () => unsubscribe && unsubscribe()
  };
}

export const user = userStore();

// Function to create a document store
export function docStore<T>(path: string) {
  const { subscribe, set } = writable<T | null>(null);

  const docRef = doc(db, path);
  let unsubscribe: () => void = onSnapshot(docRef, (snapshot) => {
    set({ id: snapshot.id, ...snapshot.data() } as T);
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
    unsubscribe
  };
}

// User data interface
interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  links: any[];
}

// Derived store to handle user data
export const userData = derived(user, ($user, set) => {
  let unsubscribe: () => void;
  if ($user) {
    const store = docStore<UserData>(`users/${$user.uid}`);
    unsubscribe = store.subscribe(set);
    return () => unsubscribe && unsubscribe();
  } else {
    set(null);
  }
});
