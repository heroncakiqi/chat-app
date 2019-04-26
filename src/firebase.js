import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCQABVDRyJtSQljGeYni27oPzwc-UzPM4w",
  authDomain: "chat-app-62322.firebaseapp.com",
  databaseURL: "https://chat-app-62322.firebaseio.com",
  projectId: "chat-app-62322",
  storageBucket: "chat-app-62322.appspot.com",
  messagingSenderId: "758661151119"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;