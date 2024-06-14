import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/main.css'

import { projectAuth } from '@/firebase/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let app

projectAuth.onAuthStateChanged(() => {
	if (!app) {
		app = createApp(App).use(router).use(store).mount('#app')
	}
})
