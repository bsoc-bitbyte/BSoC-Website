import firebase from 'firebase/compat/app'
import { ref } from 'vue'

const errr = ref(null)
const githubLogin = async () => {
	errr.value = null
	const provider = new firebase.auth.GithubAuthProvider()
	try {
		const result = await firebase.auth().signInWithPopup(provider)
		const githubUsername = result.additionalUserInfo?.username || null
		result.user.githubUsername = githubUsername
		return result.user
	} catch (error) {
		errr.value = error.message
	}
}

const useSignInGithub = () => {
	return { errr, githubLogin }
}

export default useSignInGithub
