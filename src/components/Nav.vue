<template>
  <nav class="navbar navbar-expand-lg text-white">
    <div class="container-fluid nav-container">
      <div class="logo">
        <router-link to="/" class="text-white" href="#">
          <img src="../assets/logo.png" alt="logo" />
          <h2>BSOC</h2>
        </router-link>
      </div>

      <!--             MY WORK                 -->

      <div id="nav">
        <nav class="abc">
          <div>
            <button class="navbar-toggler" @click="toggleHamburger">
              <img
                src="https://icon-library.com/images/hamburger-icon-white/hamburger-icon-white-16.jpg"
                alt=""
                class="navbar-toggler-icon"
              />
            </button>
            <div :class="['hamburger-content', {active: showHamburger}]">
              <!-- Hamburger content here -->
              <nav id="navitems">
                <ul>
                  <li><a href="/dashboard">Dashboard</a></li>
                  <li><a href="/home">Home</a></li>
                  <li>
                    <a href="#">My PR's</a>
                  </li>
                  <li><a href="/submit">SubmitPR</a></li>
                  <li><a href="/projects">Projects</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto">
              <router-link
                to="/dashboard"
                class="nav-item nav-link"
                v-if="isHome"
                style="text-decoration: none; color: inherit"
                >Dashboard</router-link
              >

              <router-link
                to="/home"
                class="nav-item nav-link"
                style="text-decoration: none; color: inherit"
                v-if="!isHome"
                >Home</router-link
              >

              <router-link
                to="/dashboard"
                class="nav-item nav-link"
                style="text-decoration: none; color: inherit"
              >
                <button
                  class="nav-button"
                  @click="handleMyPR()"
                  v-if="isloggedIn && userPR"
                >
                  Dashboard
                </button>
                <button
                  class="nav-button"
                  @click="handleMyPR()"
                  v-if="isloggedIn && !userPR"
                >
                  My PR's
                </button>
              </router-link>

              <router-link
                to="/submit"
                class="nav-item nav-link"
                style="text-decoration: none; color: inherit"
                v-if="isloggedIn"
                >SubmitPR</router-link
              >

              <router-link
                class="nav-item nav-link"
                to="/projects"
                style="color: white"
                >Projects</router-link
              >
            </div>
          </div>
        </nav>
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
          id="lost"
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
import {ref} from 'vue';
import {projectAuth} from '../firebase/config';
import useLogout from '@/composables/useLogout';
import {useRouter} from 'vue-router';
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
    const userPR = ref(false);
    let isloggedIn = ref(false);
    let isHome = ref(true);
    const router = useRouter();

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
    };
  },
};
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
  padding: 0px;
  margin: 0;
}

@media (min-width: 991px) {
  #navitems {
    display: none !important;
  }
}

#nav {
  padding: 30px;
  text-align: center;
  /* background-color: blue; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: 0.5rem;
}
.navbar[data-v-65af85a3] {
  position: fixed;
  height: 7vh;
  width: 150vw;
  z-index: 10;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
a.nav-item.nav-link {
  /* background-color: black; */
  width: 60%;
  padding: 20px !important;
}

.hamburger-content {
  display: none;
}

.hamburger-content.active {
  display: block;
}
/* .navbar-toggler-icon {
  background-color: white;
} */
#navitems li {
  list-style-type: none;
  /* color: blueviolet; */
  /* background-color: aliceblue; */
}
#navitems li a {
  color: white;
  text-decoration: none;
  /* margin: 15px; */
}
.navbar-toggler {
  display: flex;
  justify-content: right;
}
#navitems li {
  margin-bottom: 8px;
}
/*  */
/*  */
</style>