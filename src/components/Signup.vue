<template>
  <div class="content">
    <div class="screen">
      <div style="display: flex; justify-content: space-between; padding: 1em; margin-top: 2em; color: #EBB02D;"><h1 class="heading">Sign Up</h1>
      <span v-on:click="toggle()"  class="x">x</span></div>
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
        </form>
        <span style="padding-left: 11em;">Or</span>
        <div class="social-login">

          <div class="social-icons">
            <div class="social-login__icon" @click="handleGoogleSubmit">
              <img src="../assets/google-icon.png" style="height: 2em; margin-right: 10px;" class="google-icon">
            </div>
          </div>
        </div>
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
  props: ['toggle'],
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


.screen {
  background: rgb(19, 18, 17);
  margin: auto;
  position: absolute;
  top: 10em;
  right: 45em;
  z-index: 2;
  filter: blur(px);
  height: 630px;
  width: 400px;
  box-shadow: 0px 0px 24px black;
  font-family: popins , sans-serif;
  
}
.heading{
  font-weight: bold;
  /* padding-top: 2em; */
}
.x{
  position: relative;
  
  /* top: 2em; */
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: x-large;
  cursor: pointer;
}

.screen__content {
  z-index: 1;
  position: relative;
  margin-top: 2em;
  height: 100%;
}


.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}



.login {
  width: 320px;
  padding: 20px;
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
  width: 100%;
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
  margin: 20px -2px;
  padding: 16px 20px;
  border-radius: 5px;
  border: 1px solid #D4D3E8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 22em;
  color: white;
  box-shadow: 0px 2px 2px #5C5696;
  cursor: pointer;
  transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #EBB02D;
  box-shadow: 0px 2px 2px #EBB02D;
  outline: none;
}

.social-login {
  position: absolute;
  width: 160px;
  text-align: center;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  margin-left: 13.5em;
  margin-top: 2em;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #7875B5;
}
.button__text{
  margin: auto;
}
.social-login__icon:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.route-link {
  color: #d1d1d4a8;
}

.route-link:hover {
  color: white;
}
</style>