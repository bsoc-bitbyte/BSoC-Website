<template>
  <div class="content">
    <div class="screen">
      <div class="screen__content">
        <form class="login">
          <div class="login__field">
            <input class="login__input" type="text" required placeholder="Name" v-model="displayName">
          </div>
          <div class="login__field">
            <input class="login__input" type="email" required placeholder="Email" v-model="email">
          </div>
          <div class="login__field">
            <input class="login__input" type="password" required placeholder="Password" v-model="password">
          </div>
          <button class="button login__submit" v-if="!loading" @click="handleSubmit">
            <span class="button__text">Sign Up Now</span>
          </button>
          <button class="button login__submit" v-else>
            <span class="button__text">Signing Up</span>
          </button>
          <router-link class="route-link" to="/login">Don’t have an account? Sign In instead</router-link>
        </form>
        <div class="social-login">
          <h4>Sign Up via</h4>
          <div class="social-icons">
            <div class="social-login__icon" @click="handleGoogleSubmit">
              <img src="../assets/google-icon.png" style="height: 2em; margin-right: 10px;" class="google-icon">
              <span>Google</span>
            </div>
          </div>
        </div>
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>
    </div>
  </div>
  <!-- <div class="content">
    <div class="login">
      <div class="signInGoogle hvr-grow" @click="handleGoogleSubmit">
        <img src="../assets/google-icon.png" class="google-icon">
        <span>Sign Up with Google</span>
      </div>
      <div class="signUpForm">
        <input class="field" type="text" required placeholder="Name" v-model="displayName">
        <input class="field" type="email" required placeholder="Email" v-model="email">
        <input class="field" type="password" required placeholder="Password" v-model="password">
          <button v-if="!loading" @click="handleSubmit" class="hvr-grow">Sign Up</button>
          <button v-else class="disabled hvr-grow">Signing In</button>
          <p @click="handleClick">Already have an account? Sign in instead</p>
      </div>
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
import useSignInGoogle from "../composables/useSignInGoogle";
import { projectAuth } from "@/firebase/config";
import addUsers from "@/composables/addUsers";

export default {
  name: "Signup",
  setup(props, context) {

    const displayName = ref("")
    const email = ref("")
    const password = ref("")
    const loading = ref(null)

    const { error, signup } = useSignup()
    const { e, addDoc } = addUsers("Users")

    const handleSubmit = async () => {
      loading.value = true
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        loading.value = false
        const user = projectAuth.currentUser
        const data = user.providerData[0]
        await addDoc({ ...data, score: 0 })
        context.emit('login')
      }
    }

    const { err, googleLogin } = useSignInGoogle()

    const handleGoogleSubmit = async () => {
      await googleLogin()
      if (!err.value) {
        const user = projectAuth.currentUser
        const data = user.providerData[0]
        await addDoc({ ...data, score: 0 })
        context.emit('login')
      } else {
        console.log(err.value)
      }
    }

    const handleClick = () => {
      context.emit("toggleAuth")
    }


    return { displayName, email, password, handleSubmit, loading, handleGoogleSubmit, handleClick }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

.content {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6A0785;
  overflow: hidden;
}

.screen {
  background: linear-gradient(90deg, rgb(154, 6, 195), rgb(85, 6, 106));
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px black;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);

}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 600px;
  width: 500px;
  background: black;
  right: 160px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: rgb(63, 2, 80);
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, rgb(154, 6, 195), rgb(63, 2, 80));
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: rgb(63, 2, 80);
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 20px;
  padding-top: 135px;
}

.login__field {
  padding: 15px 0px;
  position: relative;
}


.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4a8;
  background: none;
  padding: 10px;
  font-weight: 700;
  width: 75%;
  color: white;
  transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: white;
}

.login__submit {
  background: black;
  font-size: 14px;
  margin: 15px 0;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #D4D3E8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  box-shadow: 0px 2px 2px #5C5696;
  cursor: pointer;
  transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #6A679E;
  outline: none;
}

.social-login {
  position: absolute;
  height: 110px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 10px 10px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #7875B5;
}

.social-login__icon:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.route-link{
  color: #d1d1d4a8;
}
.route-link:hover{
  color: white;
}

</style>