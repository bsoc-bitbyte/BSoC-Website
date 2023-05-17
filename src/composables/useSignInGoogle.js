import firebase from "firebase/compat";
import {ref} from "vue";

const err = ref(null)
const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider).then((result) => {
        const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    }).catch((err) => {
        err.value = err.message
    })
}

const useSignInGoogle = () => {
    return {err, googleLogin}
}

export default useSignInGoogle