const user = {
	namespaced: true,
	state: {
		token: null,
		activeName: 'first',
		username: '',
		userstock: '',
		useremail: '',
		userbirth: ''
	},
	mutations: {
		usertoken: (state, data) => {
			localStorage.setItem('token', data)
			state.token = data
		},
		username: (state, data) => {
			localStorage.setItem('username', data)
			state.username = data
		},
		userbirth: (state, data) => {
			localStorage.setItem('userbirth', data)
			state.userbirth = data
		},
		userstock: (state, data) => {
			localStorage.setItem('userstock', data)
			state.userstock = data
		},
		useremail: (state, data) => {
			localStorage.setItem('useremail', data)
			state.useremail = data
		},
		logout: state => {
			localStorage.removeItem('token')
			localStorage.removeItem('username')
			localStorage.removeItem('userstock')
			localStorage.removeItem('useremail')
			localStorage.removeItem('userbirth')
			state.token = null
			state.username = ''
			state.userstock = ''
			state.useremail = ''
			state.userbirth = ''
		}
	},
	actions: {
		userToken({ commit }, data) {
			commit('usertoken', data)
		},
		userLogout({ commit }) {
			commit('logout')
		},
		userName({ commit }, data) {
			commit('username', data)
		},
		userBirth({ commit }, data) {
			commit('userbirth', data)
		},
		userStock({ commit }, data) {
			commit('userstock', data)
		},
		userEmail({ commit }, data) {
			commit('useremail', data)
		}
	}
}

export default user
