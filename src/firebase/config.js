import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAPzaHx3y5U9QoFncsROFbjmL3WPV7rcgw',
	authDomain: 'bsoc-test-2feda.firebaseapp.com',
	projectId: 'bsoc-test-2feda',
	storageBucket: 'bsoc-test-2feda.firebasestorage.app',
	messagingSenderId: '677503016218',
	appId: '1:677503016218:web:858c5a2eeaf7532448e0a3',
	measurementId: 'G-P27G0HV2Z0',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
