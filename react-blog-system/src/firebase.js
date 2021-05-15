import firebase from "firebase";
require("firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyB_1hMd-QmKyiE7uXsq5UhfdWyfhqYeksI",
    authDomain: "react-blog-fefc8.firebaseapp.com",
    projectId: "react-blog-fefc8",
    storageBucket: "react-blog-fefc8.appspot.com",
    messagingSenderId: "465026219591",
    appId: "1:465026219591:web:caa2c871671e7ff80a7b62",
    measurementId: "G-REBR3KHL96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  export const auth=firebase.auth();
  export const firestore=firebase.firestore;
  export default db