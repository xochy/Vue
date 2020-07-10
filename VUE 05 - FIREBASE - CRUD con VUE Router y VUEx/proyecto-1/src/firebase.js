//! Firebase App (the core Firebase SDK) is always required and
//! must be listed before other Firebase SDKs
import firebase from "firebase/app"

//! Add the Firebase services that you want to use
import firestore from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB1AEM6EFsMZIRlopRsPems4xDx7S6ASlQ",
    authDomain: "fir-crud-16c12.firebaseapp.com",
    databaseURL: "https://fir-crud-16c12.firebaseio.com",
    projectId: "fir-crud-16c12",
    storageBucket: "fir-crud-16c12.appspot.com",
    messagingSenderId: "63035789719",
    appId: "1:63035789719:web:6ceba833eaaa87c5b9f4d2",
    measurementId: "G-YE6H18S090"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore();

export default firebase.firestore()