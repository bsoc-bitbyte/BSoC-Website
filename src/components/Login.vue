<template>
      <div class="screen"> 
      <div style="display: flex; justify-content: space-between; padding: 1em; margin-top: 2em; color: #EBB02D;"><h1 class="heading">LOGIN</h1>
      
      <span v-on:click="toggle()"  class="x">x</span></div>
      <div class="screen__content" >
        <form class="login">
          <div class="login__field">
            <input class="login__input" type="email" required placeholder="Email" v-model="email">
          </div>
          <div class="login__field">
            <input class="login__input" type="password" required placeholder="Password" v-model="password">
          </div>
          <button class="button login__submit" v-if="!loading" @click="handleSubmit">
            <span class="button__text" >Sign In Now</span>
          </button>
          <button class="button login__submit" v-else>
            <span class="button__text">Signing In</span>
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
  <!-- <div class="content">
    <div class="login">
      <div class="signInGoogle hvr-grow" @click="handleGoogleSubmit">
        <img src="../assets/google-icon.png" class="google-icon">
        <span>Sign in with Google</span>
      </div>
      <div class="signInForm">
        <input class="field" type="email" required placeholder="Email" v-model="email">
        <input class="field" type="password" required placeholder="Password" v-model="password">
        <button v-if="!loading" @click="handleSubmit" class="hvr-grow">Sign In</button>
        <button v-else class="disabled hvr-grow">Signing In</button>
        <p @click="handleClick">Don’t have an account? Sign up instead</p>
      </div>
    </div>
  </div> --></div>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";
import useSignInGoogle from "../composables/useSignInGoogle";

export default {
  name: "Login",
  props: ['toggle'], 
  setup(props, context) {
    const { error, login } = useLogin()

    const email = ref("")
    const password = ref("")
    const loading = ref(false)

    const handleSubmit = async () => {
      loading.value = true
      await login(email.value, password.value)
      loading.value = false
      if (!error.value) {
        context.emit("login")
      }
    }
    

    const { err, googleLogin } = useSignInGoogle()
    const handleGoogleSubmit = async () => {
      await googleLogin()
      if (!err.value) {
        console.log("Auth Complete")
        context.emit("login")
      } else {
        console.log(err.value)
      }
    }

    const handleClick = () => {
      context.emit("toggleAuth")
    }

    return { email, password, loading, handleSubmit, handleGoogleSubmit, handleClick }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');


.screen {
  background: rgb(19, 18, 17);
  position: absolute;
	top: calc(100%);
	left: calc(42%);
  z-index: 2;
  filter: blur(px);
  height: 580px;
  width: 400px;
  box-shadow: 0px 0px 24px black;
  font-family: popins , sans-serif;
  
}
 
  
.container{
  position: relative;
  

  
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
@media (max-width:768px){

  .screen{
    margin-top: 0%;
    left: 0%;

  }
  .x{
    left: -4em;
  }
}
.screen__content {
  z-index: 1;
  position: relative;
  margin-top: 3em;
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
.button__text{
  margin: auto;
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
  position: relative;
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