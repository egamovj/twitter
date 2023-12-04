import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDQsaz0CgxeDHo_NyUOJ8UdmaCtWrxqqZQ",
  authDomain: "twitter-clone-ej.firebaseapp.com",
  projectId: "twitter-clone-ej",
  storageBucket: "twitter-clone-ej.appspot.com",
  messagingSenderId: "393870941630",
  appId: "1:393870941630:web:371f15a615bc6d43d5edef",
  measurementId: "G-HWMQGXBZMW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;