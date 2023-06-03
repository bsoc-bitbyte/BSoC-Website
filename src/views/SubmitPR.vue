<template>
  <Nav></Nav>
  <div class="content">
    <div class="inner">
      <input
        class="field"
        type="text"
        placeholder="Commit Message"
        v-model="message"
        required
        autofocus


      />
      <input
        class="field"
        type="url"
        placeholder="Link to PR"
        v-model="link"
        required
      />
      <div class="cont"><div class="select-dropdown">
	<select>
		<option value="Option 1">Easy</option>
		<option value="Option 2">Medium</option>
		<option value="Option 3">Hard</option>
	</select>
</div></div>
      <button v-if="!loading" class="hvr-grow" @click="handleClick">
        Submit
      </button>
      <button v-else disabled class="disabled">Submitting</button>
    </div>
  </div>
</template>

<script >
import { ref } from "vue";
import Nav from "@/components/Nav";
import { projectAuth } from "@/firebase/config";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
  name: "SubmitPR",
  components: {Nav},
  setup() {
    const message = ref("");
    const link = ref("");
    const loading = ref(false);

    const { error, addDoc } = useCollection("dashboard-2022");
    const displayName = projectAuth.currentUser.displayName;
    const router = useRouter();

    const handleClick = async () => {
      const doc = {
        message: message.value,
        link: link.value,
        displayName,
        score: 0,
        time: timestamp(),
        uid: projectAuth.currentUser.uid,
      };
      loading.value = true;
      await addDoc(doc);
      loading.value = false;

      await router.push("/dashboard");
    };

    return { message, link, handleClick, loading };
  },
};
</script>

<style scoped>
.select-dropdown,
.select-dropdown * {
	margin: 0;
	padding: 0;
	position: relative;
	box-sizing: border-box;
  box-shadow: 4px 4px 40px 2px #132e72;
  border-radius: 8px;

}
.select-dropdown {
	position: relative;
	background-color: #E6E6E6;
	border-radius: 4px;
  
}

.select-dropdown select {
	font-size: 1rem;
	font-weight: normal;
	width: 36vw;
	padding: 8px 24px 8px 10px;
	border: none;
	background-color: transparent;
		-webkit-appearance: none;
		-moz-appearance: none;
	appearance: none;
}


.select-dropdown select:active, .select-dropdown select:focus {
	outline: none;
	box-shadow: none;
  
}
.select-dropdown:after {
	content: "";
	position: absolute;
	top: 50%;
	right: 8px;
	width: 0;
	height: 0;
	margin-top: -2px;
	border-top: 5px solid #aaa;
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
}

#toggle {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
  height: 40px;
}

h2::before {
  position: absolute;
  right: 0;
  top: 0;
  height: inherit;
  aspect-ratio: 1;
  background: currentColor;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  content: "";
  clip-path: polygon(50% 25%, 20% 80%, 80% 80%);
  transform: rotate(180deg) scale(0.75);
}

#toggle:not(:checked) ~ h2::before {
  transform: rotate(0deg) scale(0.75);
}

#toggle:focus ~ h2 {
  background: mediumorchid;
  transition: background 0.45s;
}

#toggle:checked ~ ul {
  visibility: hidden;
  opacity: 0;
}

#toggle:not(:checked) ~ ul {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

nav ul {
  padding-left: 0;
  padding-top: 1rem;
  margin-top: 0;
  background: #ece5da;
  list-style: none;
  overflow: hidden;
  text-align: right;
  text-align: center;
  transition: all 0.4s ease-out;
  width: 100%;
  position: absolute;
}
nav ul li {
  border-radius: 2px;
  position: relative;
  display: inline-block;
  line-height: 1.5;
  width: 100%;
  margin: 0 0 0.25rem 0;
  background: tomato;
  transition: background 3s;
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.35);
}

nav ul li:hover,
nav ul li a:focus {
  background: mediumorchid;
  transition: background 0.45s;
}

nav ul a {
  display: block;
  color: inherit;
  text-transform: lowercase;
  font-weight: 200;
  text-decoration: none;
}

.container {
  max-width: 55ch;
  margin: auto;
  color: #36454f;
}
.content {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 5em; */

  background: #19192a;
}

.btn {
  margin-right: 25%;
}
.inner {
  width: 40vw;
  min-width: 550px;
  height: 50vh;

  margin: 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: #32325d;
  box-shadow: 4px 4px 40px 2px #132e72;
  border-radius: 8px;
}

.inner input {
  width: 90%;

  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;

  color: #19192a;

  padding: 8px 14px;
}

.inner button {
  width: 90%;

  background: #e8eeff;
  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;

  color: #19192a;

  cursor: pointer;
}

.hvr-grow {
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform; 
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.03);
  box-shadow: 4px 4px 40px 4px #466ed1;
}

@media (max-width: 900px) {
  .inner {
    min-width: 90%;
    width: initial;
  }
}
</style>
