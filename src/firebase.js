
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB9JzeeCjTf2UysvL1UCsqa_l0XHv1JU6A",
  authDomain: "portfolio-website-85854.firebaseapp.com",
  projectId: "portfolio-website-85854",
  storageBucket: "portfolio-website-85854.appspot.com",
  messagingSenderId: "413357778522",
  appId: "1:413357778522:web:754c6f98d6e187a22d1a63"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);