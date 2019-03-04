const user = {
	namespaced: true,
	state: {
		token: null,
		activeName: 'first',
		username: ''
	},
	mutations: {
		login: (state, data) => {
			localStorage.setItem('token', data)
			state.token = data
		},
		logout: state => {
			localStorage.removeItem('token')
			state.token = null
		},
		username: (state, data) => {
			localStorage.setItem('username', data)
			state.username = data
		}
	},
	actions: {
		userLogin({ commit }, data) {
			commit('login', data)
		},
		userLogout({ commit }) {
			commit('logout')
		},
		userName({ commit }, data) {
			commit('username', data)
		}
	}
}

export default user
