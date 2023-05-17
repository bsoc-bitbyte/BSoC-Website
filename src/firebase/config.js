import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDEq2tylwwCdLJgK2q8_yiDtUmMDEuWgo8",
    authDomain: "aperta-fons-bf53f.firebaseapp.com",
    projectId: "aperta-fons-bf53f",
    storageBucket: "aperta-fons-bf53f.appspot.com",
    messagingSenderId: "41948206133",
    appId: "1:41948206133:web:4165b8287fa4de746e4d7c"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }