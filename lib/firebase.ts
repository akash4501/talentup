import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzZVrBA9l8T7dF6Lfwyc_Qa9jg6OJRs1o",
  authDomain: "talentup-dec36.firebaseapp.com",
  projectId: "talentup-dec36",
  storageBucket: "talentup-dec36.firebasestorage.app",
  messagingSenderId: "610798955923",
  appId: "1:610798955923:web:a36525230f02906b39cc66",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});