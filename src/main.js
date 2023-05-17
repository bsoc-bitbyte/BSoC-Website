import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import {projectAuth} from "@/firebase/config";
let app

projectAuth.onAuthStateChanged(() => {
    if(!app) {
        app = createApp(App).use(router).use(store).mount('#app')
    }
})