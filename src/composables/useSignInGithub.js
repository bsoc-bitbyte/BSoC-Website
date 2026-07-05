import firebase from 'firebase/compat/app'
import { ref } from 'vue'

const errr = ref(null)
const githubLogin = async () => {
	errr.value = null
	const provider = new firebase.auth.GithubAuthProvider()
	try {
		const result = await firebase.auth().signInWithPopup(provider)
		console.log('user.displayName:', result.user.displayName)
		console.log(
			'additionalUserInfo.profile:',
			result.additionalUserInfo.profile
		)
		const githubUsername = result.additionalUserInfo?.username || null
		const freshName = result.additionalUserInfo?.profile?.name || null
		console.log('STEP 1 - fresh name from GitHub:', freshName)

		await result.user.updateProfile({ displayName: freshName })
		console.log('STEP 2 - updateProfile succeeded, no error thrown')

		return {
			uid: result.user.uid,
			displayName: freshName || githubUsername,
			email: result.user.email,
			photoURL: result.user.photoURL,
			githubUsername,
		}
	} catch (error) {
		console.log('STEP 3 - ERROR:', error.message)
		errr.value = error.message
	}
}

const useSignInGithub = () => {
	return { errr, githubLogin }
}

export default useSignInGithub
