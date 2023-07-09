<template>
  <div class="content">
    <div class="screen">
      <div class="card bg-dark text-white" style="border-radius: 1rem;  ">
        <span v-on:click="toggle()"  class="x" style="position: relative; margin-left: 15em; padding-top: 1em;">x</span>
        <div class="row d-flex justify-content-center align-items-center h-100" style="margin-top: -1em; ">
      <div class="card-body p-5 text-center" >
            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
              <p class="text-white-50 mb-5">Please enter email and password!</p>
              <div class="form-outline form-white mb-4">
                <input type="name" id="typeEmailX" class="form-control form-control-lg" placeholder="Name" v-model="displayName"/>
              </div>
              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Email" v-model="email"/>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg " placeholder="Password" v-model="password" />
              </div>


              <button class="btn btn-outline-light tn-lg px-5" type="submit" @click="handleSubmit">Sign Up</button>
              <div class="d-flex flex-column mt-4 pt-1">
                <span>or</span>
              <div class="d-flex justify-content-center text-center mt-4 pt-1" @click="handleGoogleSubmit">
                <a href="#!" class="text-white"><img src="../assets/google-icon.png" style="height: 1.5em;"/></a>
              </div></div>

            </div></div></div></div>
    </div>
  </div>
 
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 5%);
  z-index: 2;
  filter: blur(px);
  height: 640px;
  width: 400px;
  box-shadow: 0px 0px 24px black;
  font-family: popins , sans-serif;
  
}
.x{
  position: relative;
  
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: x-large;
  cursor: pointer;
}

</style>