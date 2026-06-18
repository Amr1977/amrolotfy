import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVSL-ePw8l39fxVJ4Bo6Io7lBfGmaUEbY",
  authDomain: "amrlotfy-77.firebaseapp.com",
  projectId: "amrlotfy-77",
  storageBucket: "amrlotfy-77.firebasestorage.app",
  messagingSenderId: "130283265842",
  appId: "1:130283265842:web:d2f296ae2fa62e8d60812b",
  measurementId: "G-XG5S1K02HL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
