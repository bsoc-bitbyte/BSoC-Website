<template>
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"/>
    <div class="spinner horizontal"/>
    <div class="spinner diagonal part-2"/>
  </label>
  <div id="sidebarMenu">
    <ul class="sidebarMenuInner">
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
.mainInner div{
  display:table-cell;
  vertical-align: middle;
  font-size: 3em;
  font-weight: bold;
}
#sidebarMenu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  z-index: 2;
  left: 0;
  width: max(30vw, 300px);
  transform: translateX(min(-30vw, -300px));
  transition: transform 300ms ease-in-out;
  background: #3770ff;
}
.sidebarMenuInner{
  margin-bottom: 15vh;
  padding:0;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li{
  list-style: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li span{
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.50);
}
.sidebarMenuInner li a{
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
  transform: translateX(0);
}

input[type=checkbox] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}
.sidebarIconToggle {
  position: fixed;
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 2vh;
  margin-left: 2vw;
  z-index: 99;
  top: 22px;
  left: 15px;
  height: 22px;
  width: 22px;
}
.spinner {
  transition: all 0.3s;
  box-sizing: border-box;
  position: fixed;
  height: 3px;
  width: 100%;
  background-color: #fff;
}
.horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
.diagonal.part-1 {
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
}
.diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  opacity: 0;
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(135deg);
  margin-top: 8px;
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(-135deg);
  margin-top: -9px;
}
</style>