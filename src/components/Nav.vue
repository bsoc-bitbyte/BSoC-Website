<template>
  <nav class="navbar navbar-expand-lg text-white">
    <div class="container-fluid nav-container">
      <div class="logo">
        <a class="text-white" href="#">
          <img src="../assets/logo.png" alt="logo">
          <h2>BSOC</h2>
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav ">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          <a class="nav-link text-white" href="#">Features</a>
          <a class="nav-link text-white" href="#">Pricing</a>
        </div>
      </div>
      <div class="navbar-nav auth ">
        <router-link class="nav-link text-white" to="/login" style="text-decoration: none; color: inherit;">Login</router-link>
        <router-link class="nav-link text-white" to="/signUp" style="text-decoration: none; color: inherit;">Sign Up</router-link>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",

}
</script>

<style scoped>
.navbar {
  position: fixed;
  height: 10vh; 
  width: 100vw;
  background-color: transparent;
  z-index: 10;
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

.auth{
  margin-right: 2em;
}

</style>