import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDvYEro-Mrmmd4hnaXyXlJDGIC93yFd16A",
  authDomain: "spare-cart16.firebaseapp.com",
  projectId: "spare-cart16",
  storageBucket: "spare-cart16.appspot.com",
  messagingSenderId: "8364424979",
  appId: "1:8364424979:web:2525c892239a8d0071a4e6",
  measurementId: "G-Y12TLHM2B0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
