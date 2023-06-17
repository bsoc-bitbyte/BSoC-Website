<template>
  <div class="screen">
    <div class="card bg-dark text-white">
      <span v-on:click="toggle()" class="x" style="position: relative;
    margin-left: 84%;
    padding-top: 1em;">x</span>
      <div class="row d-flex justify-content-center align-items-center h-100" style="margin-top: 1em">
        <div class="card-body px-5 text-center">
          <div class="">
            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
            <p class="text-white-50 mb-5">
              Please enter your login and password!
            </p>

            <div class="form-outline form-white mb-4">
              <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Email"
                v-model="email" />
            </div>

            <div class="form-outline form-white mb-4">
              <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Password"
                v-model="password" />
            </div>

            <button class="btn btn-outline-light tn-lg px-5" type="submit" @click="handleSubmit">
              Login
            </button>
            <div class="d-flex flex-column mt-4 pt-1">
              <span>or</span>
              <div class="d-flex justify-content-center text-center mt-4 pt-1" @click="handleGoogleSubmit">
                <a href="#!" class="text-white"><img src="../assets/google-icon.png" style="height: 1.5em" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";
import useSignInGoogle from "../composables/useSignInGoogle";

export default {
  name: "Login",
  props: ["toggle"],
  setup(props, context) {
    const { error, login } = useLogin();

    const email = ref("");
    const password = ref("");
    const loading = ref(false);

    const handleSubmit = async () => {
      loading.value = true;
      await login(email.value, password.value);
      loading.value = false;
      if (!error.value) {
        context.emit("login");
      }
    };

    const { err, googleLogin } = useSignInGoogle();
    const handleGoogleSubmit = async () => {
      await googleLogin();
      if (!err.value) {
        console.log("Auth Complete");
        context.emit("login");
      } else {
        console.log(err.value);
      }
    };

    const handleClick = () => {
      context.emit("toggleAuth");
    };

    return {
      email,
      password,
      loading,
      handleSubmit,
      handleGoogleSubmit,
      handleClick,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

.screen {
  background: rgb(19, 18, 17);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 4%);
  transition: all 0.3s ease;
  filter: blur(px);
  height: 84vh;
  width: 28vw;
  box-shadow: 0px 0px 24px black;
  font-family: popins, sans-serif;
}

.card {
  height: 84vh;
  width: 28vw;
  margin-left: auto;
  margin-right: auto;
  background-color: blue;
  border-radius: 1rem;
}

.x {
  position: relative;

  /* top: 2em; */
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: x-large;
  cursor: pointer;
}

@media (max-width: 1325px) {
  .x {
    width: 400px;
  }

  .card {
    height: 84vh;
    width: 400px;
    margin-right: 300px;
    background-color: blue;
    border-radius: 1rem;
  }

  .screen {
    width: 400px;
    margin-right: 300px;
  }
}

@media (max-width: 768px) {
  .x {
    width: 200px;
  }

  .card {
    height: 84vh;
    width: 300px;
    margin-right: 300px;
    background-color: blue;
    border-radius: 1rem;
  }

  .screen {
    width: 300px;
    margin-right: 300px;
  }
}
</style>