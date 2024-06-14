import { createStore } from 'vuex'

export default createStore({
	state: {
		login: false,
		signup: false,
	},
	mutations: {
		handleLoginComponent(state) {
			state.login = !state.login
		},
	},
	actions: {},
	modules: {},
})
