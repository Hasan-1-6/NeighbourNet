// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYshaj0BvnTmo_EK3FeqfJ1k-HgxjoEVc",
  authDomain: "fir-auth-95489.firebaseapp.com",
  projectId: "fir-auth-95489",
  storageBucket: "fir-auth-95489.appspot.com",
  messagingSenderId: "972356111317",
  appId: "1:972356111317:web:f5c412bc6fd478a80ccb5c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };