import { createApp } from "vue";

import "./assets/main.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import App from "./App.vue";
import router from "./router";
import store from "./store";

import {projectAuth} from "@/firebase/config";
let app

projectAuth.onAuthStateChanged(() => {
    if(!app) {
        app = createApp(App).use(router).use(store).mount('#app')
    }
})