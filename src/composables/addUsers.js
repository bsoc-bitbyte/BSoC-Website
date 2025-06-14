import { projectFirestore } from '@/firebase/config'
import { ref } from 'vue'

const addUsers = (collection) => {
	const error = ref(null)

	const addDoc = async (user) => {
		try {
			if (!user || !user.uid) {
				throw new Error('Invalid user object: missing uid')
			}
			const safeUser = {
				uid: user.uid,
				displayName: user.displayName || '',
				email: user.email || '',
				photoURL: user.photoURL || '',
				score: user.score || 0,
			}

			await projectFirestore
				.collection(collection)
				.doc(safeUser.uid)
				.set(safeUser)
		} catch (err) {
			console.log('Firestore error', err.message)
			error.value = 'could not save user!'
		}
	}

	return { error, addDoc }
}

export default addUsers
