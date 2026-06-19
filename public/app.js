import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVSL-ePw8l39fxVJ4Bo6Io7lBfGmaUEbY",
  authDomain: "amrlotfy-77.firebaseapp.com",
  projectId: "amrlotfy-77",
  storageBucket: "amrlotfy-77.firebasestorage.app",
  messagingSenderId: "130283265842",
  appId: "1:130283265842:web:d2f296ae2fa62e8d60812b",
  measurementId: "G-XG5S1K02HL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const status = document.getElementById("status");

onAuthStateChanged(auth, (user) => {
  if (user) {
    status.textContent = `Signed in as ${user.email}`;
  } else {
    status.textContent = "Not signed in";
  }
});

export { app, auth, db };
