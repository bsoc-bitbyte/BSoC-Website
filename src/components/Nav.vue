<!-- Jai shree ram -->
<template>
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
          <MDBNavbar dark bg="info" container>
            <button
              @click="collapse11 = !collapse11"
              class="navbar-toggler third-button"
              :aria-expanded="collapse11"
              aria-label="Toggle navigation"
              aria-controls="navbarToggleExternalContent11"
            >
              <div class="animated-icon3" :class="[!collapse11 && 'open']">
                <span></span><span></span><span></span>
              </div>
            </button>
          </MDBNavbar>
          <MDBCollapse v-model="collapse11" id="navbarToggleExternalContent9">
            <div
              :class="`bg-dark shadow-3 p-4 ${
                collapse11 ? 'd-none' : 'd-flex flex-column'
              } position-absolute`"
              style="top: 50px"
            >
              <MDBBtn color="link" block class="border-none ms-0 px-3">
                <ul class="list-unstyled">
                  <li>
                    <a href="/dashboard" target="_blank" class="custom-link"
                      >Dashboard</a
                    >
                  </li>
                </ul>
              </MDBBtn>
              <MDBBtn color="link" block class="border-none ms-0 px-3">
                <ul class="list-unstyled">
                  <li>
                    <a href="/home" target="_blank" class="custom-link">Home</a>
                  </li>
                </ul>
              </MDBBtn>
              <MDBBtn color="link" block class="border-none ms-0 px-3">
                <ul class="list-unstyled">
                  <li>
                    <a href="/myPR" target="_blank" class="custom-link"
                      >My PR's</a
                    >
                  </li>
                </ul>
              </MDBBtn>
              <MDBBtn color="link" block class="border-none ms-0 px-3">
                <ul class="list-unstyled">
                  <li>
                    <a href="/submit" target="_blank" class="custom-link"
                      >SubmitPR</a
                    >
                  </li>
                </ul>
              </MDBBtn>
              <MDBBtn color="link" block class="border-none ms-0 px-3">
                <ul class="list-unstyled">
                  <li>
                    <a href="/projects" target="_blank" class="custom-link"
                      >Projects</a
                    >
                  </li>
                </ul>
              </MDBBtn>
            </div>
          </MDBCollapse>
        </section>

        <div class="collapse navbar-collapse" id="Yahoo">
          <div class="navbar-nav">
            <div class="d-flex align-item-center" v-if="isloggedIn">
              <router-link
                class="nav-link text-white px-2"
                to="/dashboard"
                style="text-decoration: none; color: inherit"
                v-if="isHome"
                >Dashboard</router-link
              >
              <router-link
                class="nav-link text-white px-4"
                to="/home"
                style="text-decoration: none; color: inherit"
                v-if="!isHome"
                >Home</router-link
              >
              <router-link
                class="nav-link text-white px-4"
                to="/dashboard"
                style="text-decoration: none; color: inherit"
              >
                <button
                  class="nav-button"
                  v-on:click="handleMyPR()"
                  v-if="isloggedIn && userPR"
                >
                  Dashboard
                </button>
              </router-link>
              <router-link
                class="nav-link text-white px-4"
                to="/myPR"
                style="text-decoration: none; color: inherit"
                v-if="isloggedIn && !userPR"
              >
                <button
                  class="nav-button"
                  v-on:click="handleMyPR()"
                  v-if="isloggedIn && !userPR"
                >
                  My PR's
                </button>
              </router-link>
              <router-link
                class="nav-link text-white px-4"
                to="/submit"
                style="text-decoration: none; color: inherit"
                v-if="isloggedIn"
                >SubmitPR</router-link
              >
            </div>
            <div v-else>
              <button class="mt-2 nav-button" v-on:click="handleLogin()">
                Dashboard
              </button>
            </div>
            <router-link class="nav-link text-white px-4" to="/projects"
              >Projects</router-link
            >
          </div>
        </div>
      </div>
      <div v-if="!isloggedIn" class="navbar-nav auth">
        <span
          v-on:click="handleLogin"
          style="padding-right: 1.3em; cursor: pointer"
          >Login</span
        >
        <Login v-if="$store.state.login" :toggle="handleLogin" />
        <span v-on:click="handleSignup" style="cursor: pointer">Signup</span>
        <Signup v-if="$store.state.signup" :toggle="handleSignup" />
      </div>
      <div v-else class="navbar-nav auth">
        <button
          class="nav-button"
          v-on:click="handleLogout()"
          v-if="isloggedIn && !userPR"
        >
          LogOut
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
// my work
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
} from 'mdb-vue-ui-kit';
// end
import {ref, toDisplayString} from 'vue';
import {projectAuth} from '../firebase/config';
import useLogout from '@/composables/useLogout';
import {useRouter} from 'vue-router';
import Login from './Login.vue';
import Signup from './Signup.vue';
export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
  },

  // setup() {
  // const collapse9 = ref(false);
  // const collapse10 = ref(false);
  // const collapse11 = ref(false);
  // showHamburger = false;

  // return {
  // collapse9,
  // collapse10,
  // collapse11,
  // this.showHamburger = !this.showHamburger;
  //   };
  // },

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
    const {error, logout} = useLogout();
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
        router.push({name: 'Home'});
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

.custom-link {
  color: #87ceeb; /* Replace #ff0000 with the desired color value */
  text-decoration: none;
  font-weight: bold;
}
.animated-icon3 {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.animated-icon3 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}


.animated-icon3 span {
  background: #f3e5f5;
}


/* Icon 4 */

.animated-icon3 span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon3 span:nth-child(2) {
  top: 10px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon3 span:nth-child(3) {
  top: 20px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon3.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0px;
  left: 8px;
}

.animated-icon3.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.animated-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 21px;
  left: 8px;
}
/*  */
/*  */

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