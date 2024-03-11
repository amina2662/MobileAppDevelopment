import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-FeIVxwuuSZCmpIWASjyVMHSxj6AV00Y",
  authDomain: "bookstoreapp-f0242.firebaseapp.com",
  projectId: "bookstoreapp-f0242",
  storageBucket: "bookstoreapp-f0242.appspot.com",
  messagingSenderId: "476180009558",
  appId: "1:476180009558:web:d4a4ad0e533d5cb25821f7",
  measurementId: "G-WGJRFEMKPN"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};