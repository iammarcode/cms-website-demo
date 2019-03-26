const user = {
	namespaced: true,
	state: {
		token: null,
		userData: {}
	},
	mutations: {
		usertoken: (state, data) => {
			localStorage.setItem('token', data)
			state.token = data
		},
		userData: (state, data) => {
			localStorage.setItem('userData', JSON.stringify(data))
			state.userData = data
		},
		logout: state => {
			localStorage.removeItem('token')
			localStorage.removeItem('userData')
			state.token = null
			state.userData = {}
		}
	},
	actions: {
		userToken({ commit }, data) {
			commit('usertoken', data)
		},
		userLogout({ commit }) {
			commit('logout')
			window.router.go(0)
		},
		userData({ commit }, data) {
			commit('userData', data)
		}
	}
}

export default user
