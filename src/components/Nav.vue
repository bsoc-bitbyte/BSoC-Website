<template>
  <div id="NavMenu">
    <ul class="Nav">
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><a href="#home">Home</a></li>
      <li><a href="#prize">Prizes</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#faq">FAQs</a></li>
    </ul>
  </div>
  </template>

<script>
export default {
  name: "Nav",

}
</script>

<style scoped>
html, body {
  overflow-x: hidden;
  height: 100%;
}
body {
  background: #fff;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
</style>