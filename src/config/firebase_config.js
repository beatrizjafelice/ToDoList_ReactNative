import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBkpm2DjSMVm2TDQYcAvNcbahnkZ3jypbQ",
    authDomain: "to-do-list-50afe.firebaseapp.com",
    projectId: "to-do-list-50afe",
    storageBucket: "to-do-list-50afe.appspot.com",
    messagingSenderId: "165802013495",
    appId: "1:165802013495:web:e6ee8a787ee28419f4e0b2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  export default database