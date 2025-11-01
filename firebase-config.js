import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "q9URQkkKLVGfufHYobqfOpNs6cU0GM",
//   authDomain: "twofactor-login.firebaseapp.com",
//   projectId: "tomi-ridwan",
//   storageBucket: "tomi-ridwan.firebasestorage.app",
//   messagingSenderId: "357855000035",
//   appId: "1:357855000035:web:83d1fac1be04103a435cd6",
// };

const firebaseConfig = {
    apiKey: "AIzaSyACsKLxsQdDl7qS1fmfIRVM0clxF9GyJP4",
    authDomain: "tomi-7bf22.firebaseapp.com",
    projectId: "tomi-7bf22",
    storageBucket: "tomi-7bf22.firebasestorage.app",
    messagingSenderId: "507599600523",
    appId: "1:507599600523:web:535e43fb44ab4a6f5e4d8e",
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);