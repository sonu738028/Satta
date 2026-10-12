
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzbbDq388GcoGyFVE-EmZk3flKgT13tZw",
  authDomain: "satta-result-4a7a5.firebaseapp.com",
  projectId: "satta-result-4a7a5",
  storageBucket: "satta-result-4a7a5.firebasestorage.app",
  messagingSenderId: "264282820868",
  appId: "1:264282820868:web:c39a794e65c5be0e7c0051"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
