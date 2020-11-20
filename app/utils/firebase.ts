import firebase from 'firebase/app';
import firebaseConfig from '../../configuration/firebase-config.json';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
