import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAN1AZrKBVrSuinVgdPiTs8eSRZd7JnMXc",
  authDomain: "labfinal-8bb22.firebaseapp.com",
  projectId: "labfinal-8bb22",
  storageBucket: "labfinal-8bb22.appspot.com",
  messagingSenderId: "771444963237",
  appId: "1:771444963237:web:0d1a613ec4a32843f71a4c",
  measurementId: "G-KGRPLRVVZL"
};

  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  