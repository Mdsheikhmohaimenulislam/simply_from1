import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnID6HzHsVAO091FBzZFRF7CQHTWw4d8g",
  authDomain: "simply-my-from.firebaseapp.com",
  projectId: "simply-my-from",
  storageBucket: "simply-my-from.firebasestorage.app",
  messagingSenderId: "871972779152",
  appId: "1:871972779152:web:ade5a4505677567aa05415"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);