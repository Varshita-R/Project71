import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyAFcQOS1PTxn-du76Qy8iT02kj3R2WqC6M",
    authDomain: "project71-9f43a.firebaseapp.com",
    projectId: "project71-9f43a",
    storageBucket: "project71-9f43a.appspot.com",
    messagingSenderId: "744342232111",
    appId: "1:744342232111:web:63cb87ca17a8d937c7fada"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


