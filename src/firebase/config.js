import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyCWl9sbMrykcl_yUTTQZQWTgXblZ6iUA8Y',
	authDomain: 'bsoc-2025.firebaseapp.com',
	projectId: 'bsoc-2025',
	storageBucket: 'bsoc-2025.firebasestorage.app',
	messagingSenderId: '27004164042',
	appId: '1:27004164042:web:9285f98fb78ef653fce133',
	measurementId: 'G-Y2S84X8CDP',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
