import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDritXniYzFR01q0sG4Sfup4lGGuoovu5U',
  authDomain: 'project-react-native-fafe7.firebaseapp.com',
  projectId: 'project-react-native-fafe7',
  storageBucket: 'project-react-native-fafe7.appspot.com',
  messagingSenderId: '93090932163',
  appId: '1:93090932163:web:afa675c4ef2adf4fb3c976',
  measurementId: 'G-T3D5LS0C3L',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage };
