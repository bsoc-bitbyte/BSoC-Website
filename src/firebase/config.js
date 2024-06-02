import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAiUtpvEBN8VYRWCEgmrNwMNkjW5p3IghU",
  authDomain: "bsoc-23f7d.firebaseapp.com",
  projectId: "bsoc-23f7d",
  storageBucket: "bsoc-23f7d.appspot.com",
  messagingSenderId: "342829170628",
  appId: "1:342829170628:web:1c0dec609e854b169e2e91",
  measurementId: "G-8FE62JB6CT"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }