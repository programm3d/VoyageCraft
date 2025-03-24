import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getAnalytics} from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyCU7njIzGln2lh0Yy2bqjB-A90rnbJdqIw",
  authDomain: "voyagecraft-453e1.firebaseapp.com",
  projectId: "voyagecraft-453e1",
  storageBucket: "voyagecraft-453e1.firebasestorage.app",
  messagingSenderId: "581779774624",
  appId: "1:581779774624:web:1bb11e52697723c688fdc5",
  measurementId: "G-LH3WXTM2QQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
getAnalytics(app);