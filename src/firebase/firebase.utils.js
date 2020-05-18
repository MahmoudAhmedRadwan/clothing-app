import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDOvKanKNkkYbGf2heA7DiKACToZzm0tMw",
    authDomain: "cloths-9901f.firebaseapp.com",
    databaseURL: "https://cloths-9901f.firebaseio.com",
    projectId: "cloths-9901f",
    storageBucket: "cloths-9901f.appspot.com",
    messagingSenderId: "120927179150",
    appId: "1:120927179150:web:4c68f20c5c2675cf8d94df",
    measurementId: "G-0JERDGS2WH"
  };

firebase.initializeApp( config );
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

