import { createStore } from 'vuex'

export default createStore({
	state: {
		login: false,
		signup: false,
	},
	mutations: {
		handleLoginComponent(state) {
			console.log('asdf')
			state.login = !state.login
		},
	},
	actions: {},
	modules: {},
})
