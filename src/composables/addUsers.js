import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const addUsers = (collection) => {
	const error = ref(null)

	const addDoc = async (user) => {
		error.value = null

		try {
			await projectFirestore.collection(collection).doc(user.uid).set(user)
		} catch (err) {
			console.log(err.message)
			error.value = 'Could not send message!!'
		}
	}

	return { error, addDoc }
}

export default addUsers
