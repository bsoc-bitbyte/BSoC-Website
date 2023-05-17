<template>
  <div class="content">
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
  </div>
</template>

<script>
import {ref} from "vue";
import useLogin from "@/composables/useLogin";
import useSignInGoogle from "../composables/useSignInGoogle";

export default {
  name: "Login",
  setup(props, context) {
    const {error, login} = useLogin()

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

    const {err, googleLogin} = useSignInGoogle()
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

    return {email, password, loading, handleSubmit, handleGoogleSubmit, handleClick}
  }
}
</script>

<style scoped>
.content {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #3770FF;
}

.signInGoogle {
  width: 40vw;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  background: #E8EEFF;
  box-shadow: 4px 4px 64px 8px #466ED1;
  border-radius: 8px;

  cursor: pointer;
}

.signInGoogle img {
  height: 35px;
  margin-left: 100px;
}

.signInGoogle span {
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-right: 100px;

  display: flex;
  align-items: center;

  color: #000000;
}

.signInForm {
  width: 40vw;
  height: 38vh;

  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: #5384FF;
  box-shadow: 4px 4px 40px 2px #466ED1;
  border-radius: 8px;
}

.signInForm input {
  width: 90%;
  height: 18%;

  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;

  color: #808AA3;

  padding: 8px 14px;
}

.signInForm button {
  width: 90%;
  height: 18%;

  background: #E8EEFF;
  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;

  color: #04325E;

  cursor: pointer;
}

.hvr-grow {
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.03);
  box-shadow: 4px 4px 40px 4px #466ED1;;
}

.signInForm p {
  width: 90%;
  margin: 0;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  text-decoration: underline;
  color: #E8EEFF;

  cursor: pointer;
}

@media (max-width:900px) {
  .signInGoogle{
    width: initial;
  }
  .hvr-grow{
    padding:0.4rem;
  }
  .signInGoogle img{
    margin-left: 0px;
  }
  .signInGoogle span{
    font-size:initial;
    line-height: initial;
    margin-right: initial;
  }
  .signInForm{
    width: initial;
  }
}

</style>