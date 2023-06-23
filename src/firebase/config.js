// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDnivG4nL1uriJy4gSDY6l9kcmapBROabs",
  authDomain: "journal-app-7cf81.firebaseapp.com",
  projectId: "journal-app-7cf81",
  storageBucket: "journal-app-7cf81.appspot.com",
  messagingSenderId: "103526837863",
  appId: "1:103526837863:web:400467d818ea0fffcb6ec2",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)
