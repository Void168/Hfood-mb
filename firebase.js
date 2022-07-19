import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyA4SqVliJGdhjPFZeNIJ7hvhd1TzmA1aTI",
  authDomain: "hfood-mobile.firebaseapp.com",
  projectId: "hfood-mobile",
  storageBucket: "hfood-mobile.appspot.com",
  messagingSenderId: "173774743349",
  appId: "1:173774743349:web:d1f9760c868c5893df0e7c",
  measurementId: "G-PQYG2WXPPH"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;