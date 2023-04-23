// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCCYSrOgn9bUO0vzXZmPAoD3j_E7WXvrYc",
  authDomain: "broom-a4a02.firebaseapp.com",
  projectId: "broom-a4a02",
  storageBucket: "broom-a4a02.appspot.com",
  messagingSenderId: "696986052248",
  appId: "1:696986052248:web:15cbdc681814353b4d92ed",
  measurementId: "G-WF9Q05NN97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()