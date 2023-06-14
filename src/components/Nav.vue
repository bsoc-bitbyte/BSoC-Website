<template>
  <nav class="navbar navbar-expand-lg text-white">
    <div class="container-fluid nav-container">
      <div class="logo">
        <router-link to="/" class="text-white" href="#">
          <img src="../assets/logo.png" alt="logo">
          <h2>BSOC</h2>
        </router-link>
      </div>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav ">
          <div class="d-flex align-item-center" v-if="isloggedIn">
            <router-link class="nav-link text-white px-2" to="/dashboard" style="text-decoration: none; color: inherit;"
              v-if="isHome">Dashboard</router-link>
            <router-link class="nav-link text-white px-4" to="/home" style="text-decoration: none; color: inherit;"
              v-if="!isHome">Home</router-link>
            <router-link class="nav-link text-white px-4" to="/dashboard" style="text-decoration: none; color: inherit;">
              <button class="nav-button" v-on:click="handleMyPR()" v-if="isloggedIn && userPR">Dashboard</button>
            </router-link>
            <router-link class="nav-link text-white px-4" to="/myPR" style="text-decoration: none; color: inherit;"
              v-if="isloggedIn && !userPR">
              <button class="nav-button" v-on:click="handleMyPR()" v-if="isloggedIn && !userPR">My
                PR's</button>
            </router-link>
            <router-link class="nav-link text-white px-4" to="/submit" style="text-decoration: none; color: inherit;"
              v-if="isloggedIn">SubmitPR</router-link>
          </div>
          <div v-else>
            <button class="mt-2 nav-button" v-on:click="handleLogin()" >Dashboard</button>
          </div>
          <router-link class="nav-link text-white px-4" to="/projects">Projects</router-link>
        </div>
      </div>
      <div v-if="!isloggedIn" class="navbar-nav auth ">
        <span v-on:click="handleLogin" style="padding-right: 1.3em; cursor: pointer;">Login</span>
        <Login v-if="$store.state.login" :toggle="handleLogin" />
        <span v-on:click="handleSignup" style="cursor: pointer;">Signup</span>
        <Signup v-if="$store.state.signup" :toggle="handleSignup" />
      </div>
      <div v-else class="navbar-nav auth ">
        <button class="nav-button" v-on:click="handleLogout()" v-if="isloggedIn && !userPR">
          LogOut</button>
      </div>

    </div>
  </nav>
</template>
<script>
import { ref } from "vue";
import { projectAuth } from "../firebase/config";
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import Login from "./Login.vue";
import Signup from "./Signup.vue";
export default {
  name: "Nav",
  data() {
    return {
      login: false,
      signup: false,
    }
  },

  created() {
    this.checkAuth();
    this.isHonePage();

  },
  components: {
    Login,
    Signup,
  },
  methods: {
    handleLogin() {
      this.$store.state.login = !this.$store.state.login;
    },
    handleSignup() {
      this.$store.state.signup = !this.$store.state.signup;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.isHonePage();
    next();
  },
  setup() {
    const { error, logout } = useLogout();
    let isloggedIn = ref(false);
    let isHome = ref(true);
    const userPR = ref(false);
    const router = useRouter();

    const checkAuth = () => {
      projectAuth.onAuthStateChanged((user) => {
        if (user) {
          isloggedIn.value = true;
        } else {
          isloggedIn.value = false;
        }
      });
    };

    const isHonePage = () => {
      if (window.location.pathname === "/home") {
        console.log("home");
        isHome.value = true;
      } else {
        isHome.value = false;
      }
      if (window.location.pathname === '/myPR') {
        userPR.value = true;
      }
    };

    const handleLogout = () => {
      logout();
      if (!error.value) {
        router.push({ name: "Home" });
      } else {
        console.log(error.value);
      }
    };


    const handleMyPR = () => {
      if (userPR.value) {
        userPR.value = false;
      } else {
        userPR.value = true;
      }
    };

    return {
      handleMyPR,
      userPR,
      isloggedIn,
      checkAuth,
      isHonePage,
      handleLogout,
      isHome,
    }
  }

}
</script>

<style scoped>
.navbar {
  position: fixed;
  height: 8vh;
  width: 100vw;
  z-index: 10;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2em;
}

.logo {
  margin: -10px 0;
}

.logo a {
  display: flex;
  gap: 0.4em;
  text-decoration: none;
}

.logo h2 {
  top: 0.15em;
  position: relative;
}

.logo img {
  position: relative;
  object-fit: contain;
  height: 3em;
  width: 3em;

}

.auth {
  margin-right: 2em;
}

.nav-button {
  background: none;
  border: none;
  color: white;
}
</style>