import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDritXniYzFR01q0sG4Sfup4lGGuoovu5U",
    authDomain: "project-react-native-fafe7.firebaseapp.com",
    projectId: "project-react-native-fafe7",
    storageBucket: "project-react-native-fafe7.appspot.com",
    messagingSenderId: "93090932163",
    appId: "1:93090932163:web:afa675c4ef2adf4fb3c976",
    measurementId: "G-T3D5LS0C3L"
};

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

const app = initializeApp(firebaseConfig);
const db = getFirestore();