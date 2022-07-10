import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChs2ZblHUImaqGQOKqBzIzcLEnX8xYiYw",
  authDomain: "kerasoft-v1.firebaseapp.com",
  projectId: "kerasoft-v1",
  storageBucket: "kerasoft-v1.appspot.com",
  messagingSenderId: "1060055282616",
  appId: "1:1060055282616:web:13c819f8a80f210aa7154d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)