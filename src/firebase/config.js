// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

//Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyDnivG4nL1uriJy4gSDY6l9kcmapBROabs",
//   authDomain: "journal-app-7cf81.firebaseapp.com",
//   projectId: "journal-app-7cf81",
//   storageBucket: "journal-app-7cf81.appspot.com",
//   messagingSenderId: "103526837863",
//   appId: "1:103526837863:web:400467d818ea0fffcb6ec2",
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyCX5ly4J4FymC3aEChhqoCB7R0UCprBkeg",
  authDomain: "journal-app-testing-c878b.firebaseapp.com",
  projectId: "journal-app-testing-c878b",
  storageBucket: "journal-app-testing-c878b.appspot.com",
  messagingSenderId: "580326044950",
  appId: "1:580326044950:web:59903c8933bee76f1fcc37"

};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
