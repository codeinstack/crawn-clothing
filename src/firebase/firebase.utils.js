import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDujcuEU6yx7u9sOpxgBAzYf-jtTXxUlms",
  authDomain: "crawn-clothing-db-73bb8.firebaseapp.com",
  databaseURL: "https://crawn-clothing-db-73bb8.firebaseio.com",
  projectId: "crawn-clothing-db-73bb8",
  storageBucket: "crawn-clothing-db-73bb8.appspot.com",
  messagingSenderId: "539559422862",
  appId: "1:539559422862:web:20582a14d0f316ed8552df",
  measurementId: "G-442MHHFMSR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
