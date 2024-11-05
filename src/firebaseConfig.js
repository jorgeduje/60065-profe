import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsQlAK27FyHU2npqZHK0hS7pvYoLffd3E",
  authDomain: "backend-profe.firebaseapp.com",
  projectId: "backend-profe",
  storageBucket: "backend-profe.firebasestorage.app",
  messagingSenderId: "424276806756",
  appId: "1:424276806756:web:2ea0b13c83705c075aa371",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
