<template>
  <nav class="navbar navbar-expand-lg text-white">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Navbar</a>
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          <a class="nav-link text-white" href="#">Features</a>
          <a class="nav-link text-white" href="#">Pricing</a>
        </div>
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
  width: 100vw;
  background-color: #176885;
  z-index: 10;
}
</style>