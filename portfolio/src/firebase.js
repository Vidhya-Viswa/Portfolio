import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-wen5l02vy_oVtCGs3cqoIFRyjXpUsiQ",
  authDomain: "portfolio-32d83.firebaseapp.com",
  projectId: "portfolio-32d83",
  storageBucket: "portfolio-32d83.firebasestorage.app",
  messagingSenderId: "51457574104",
  appId: "1:51457574104:web:409412833ff3a0572783ad",
  measurementId: "G-D2QCTB4DEJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);