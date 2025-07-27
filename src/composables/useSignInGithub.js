import firebase from 'firebase/compat/app'
import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const errr = ref(null)
const githubLogin = async () => {
	errr.value = null
	const provider = new firebase.auth.GithubAuthProvider()
	try {
		const result = await firebase.auth().signInWithPopup(provider)
		const user = result.user
		const githubUsername = result.additionalUserInfo.username

		return { user, githubUsername }
	} catch (error) {
		errr.value = error.message
	}
}

const useSignInGithub = () => {
	return { errr, githubLogin }
}

export default useSignInGithub
