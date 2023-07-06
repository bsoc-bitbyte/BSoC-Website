<!-- Jai shree ram -->
<template>
  <div id="ody" :style="{ backgroundColor: bodyBackgroundColor }">
    <nav class="navbar navbar-expand-lg text-white">
      <div class="container-fluid nav-container">
        <div class="logo">
          <router-link to="/" class="text-white" href="#">
            <img src="../assets/logo.png" alt="logo" />
            <h2>BSOC</h2>
          </router-link>
        </div>

        <div id="nav">
          <section class="mb-3" id="hambur">
            <div id="tension">
              <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                  <span></span>
                </label>

                <ul class="menu__box">
                  
                  <li  v-if="isloggedIn"><a class="menu__item" href="/dashboard">Dashboard</a></li>
                  <li><a class="menu__item" href="/home">Home</a></li>
                  <li v-if="isloggedIn"><a class="menu__item" href="/myPR">MYPR</a></li>
                  <li v-if="isloggedIn"><a class="menu__item" href="/submit">Submit PR</a></li>
                  <li><a class="menu__item" href="/projects">Projects</a></li>

                    <div v-if="!isloggedIn" class="navbar-nav auth menu__item" v-on:click="handleLogin" style="cursor: pointer; text-align: center; margin-left: 2em;">Login</div>
                    <Login v-if="$store.state.login" :toggle="handleLogin" />
              
                    <div v-if="!isloggedIn" class="navbar-nav auth menu__item" v-on:click="handleSignup"  style="cursor: pointer; margin-left: 2em;">Signup</div>
                    <Signup v-if="$store.state.signup" :toggle="handleSignup" />

                    <!-- <div v-if="isloggedIn"  class="navbar-nav auth menu__item"> -->
                      <div class="navbar-nav auth menu__item" style="cursor: pointer; margin-left: 2em;" v-on:click="handleLogout()" v-if="isloggedIn && !userPR">
                      LogOut
                      </div>
                     <!-- </div> -->

                </ul>
              </div>
            </div>
          </section>

          <div class="collapse navbar-collapse" id="Yahoo">
            <div class="navbar-nav">
              <div class="d-flex align-item-center" v-if="isloggedIn">
                <router-link class="nav-link text-white px-2" to="/dashboard"
                  style="text-decoration: none; color: inherit" v-if="isHome">Dashboard</router-link>
                <router-link class="nav-link text-white px-4" to="/home" style="text-decoration: none; color: inherit"
                  v-if="!isHome">Home</router-link>
                <router-link class="nav-link text-white px-4" to="/dashboard"
                  style="text-decoration: none; color: inherit">
                  <button class="nav-button" v-on:click="handleMyPR()" v-if="isloggedIn && userPR">
                    Dashboard
                  </button>
                </router-link>
                <router-link class="nav-link text-white px-4" to="/myPR" style="text-decoration: none; color: inherit"
                  v-if="isloggedIn && !userPR">
                  <button class="nav-button" v-on:click="handleMyPR()" v-if="isloggedIn && !userPR">
                    My PR's
                  </button>
                </router-link>
                <router-link class="nav-link text-white px-4" to="/submit" style="text-decoration: none; color: inherit"
                  v-if="isloggedIn">SubmitPR</router-link>
              </div>
              <div v-else>
                <button class="mt-2 nav-button" v-on:click="handleLogin()">
                  Dashboard
                </button>
              </div>
              <router-link class="nav-link text-white px-4" to="/projects">Projects</router-link>
            </div>
          </div>
        </div>
        <div v-if="!isloggedIn" class="navbar-nav auth hambur2">
          <span v-on:click="handleLogin" style="padding-right: 1.3em; cursor: pointer; margin-right: 80px;">Login</span>
          <Login v-if="$store.state.login" :toggle="handleLogin" />
          <span v-on:click="handleSignup" style="cursor: pointer;margin-right: 80px;">Sign Up</span>
          <Signup v-if="$store.state.signup" :toggle="handleSignup" />
        </div>
        <div v-if="isloggedIn" class="navbar-nav auth">
          <button  class="nav-button hambur2" style="margin-right: 80px;" v-on:click="handleLogout()" v-if="isloggedIn && !userPR">
            LogOut
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

import { ref, toDisplayString } from 'vue';
import { projectAuth } from '../firebase/config';
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';
import Login from './Login.vue';
import Signup from './Signup.vue';
export default {

  name: 'Nav',
  data() {
    return {
      login: false,
      signup: false,
      showHamburger: false,
    };
  },

  created() {
    this.checkAuth();
    this.isHonePage();
  },
  components: {
    Login,
    Signup,
    Login,
    Signup,
  },
  methods: {
    handleLogin() {
      this.$store.state.login = !this.$store.state.login;
    },
    handleSignup() {
      this.$store.state.signup = !this.$store.state.signup;
    },
    toggleHamburger() {
      this.showHamburger = !this.showHamburger;
    },
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
    const collapse11 = ref(false);

    const checkAuth = () => {
      projectAuth.onAuthStateChanged(user => {
        if (user) {
          isloggedIn.value = true;
        } else {
          isloggedIn.value = false;
        }
      });
    };

    const isHonePage = () => {
      if (window.location.pathname === '/home') {
        console.log('home');
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
        router.push({ name: 'Home' });
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
      collapse11,
    };

  },
};
</script>

<style scoped>
@media (min-width: 991px) {
  #hambur {
    display: none !important;
  }
}

@media (max-width: 991px) {
  .hambur2 {
    display: none !important;
  }
}

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked~.menu__btn>span {
  transform: rotate(45deg);
}

#menu__toggle:checked~.menu__btn>span::before {
  top: 0;
  transform: rotate(0);
}

#menu__toggle:checked~.menu__btn>span::after {
  top: 0;
  transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
  visibility: visible;
  left: 0;
}

.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 30px;
  /* left: 20px; */
  right :70px;
  margin-left: auto;
  width: 26px;
  height: 26px;
  /* color: white; */

  cursor: pointer;
  z-index: 1;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
  display: block;
  position: absolute;

  width: 100%;
  height: 2px;

  background-color: rgb(245, 235, 235) !important;

  transition-duration: 0.25s;
}

.menu__btn>span::before {
  content: "";
  top: -8px;
}

.menu__btn>span::after {
  content: "";
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;

  width: 100vw;
  height: 100vh;

  margin : 0;
  padding: 150px 0px;

  list-style: none;

  background-color: #19192a;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);

  transition-duration: 0.25s;
}

.menu__item {
  display: flex;
  justify-content: center;
  text-align: center;
  display: block;
  padding: 12px 24px;

  color: white;
  background-color:#19192a;

  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;

  text-decoration: none;

  transition-duration: 0.25s;
}

.menu__item:hover {
  background-color: rgb(141, 141, 178);
}


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