

// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdnhMQgx2mlhlHAoou4ml6MgkUm-bka1w",
    authDomain: "billcraftr.firebaseapp.com",
    projectId: "billcraftr",
    storageBucket: "billcraftr.firebasestorage.app",
    messagingSenderId: "888450246173",
    appId: "1:888450246173:web:b2bce749c136a5873a88f4",
    measurementId: "G-1MR6C28VQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
