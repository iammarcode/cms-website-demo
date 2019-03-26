import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// vuex component
import intro from './modules/intro'
import user from './modules/user'
import getters from './getters'

const store = new Vuex.Store({
	modules: {
		intro,
		user
	},
	getters,
	mutations: {
		modifyState(state, { path, data }) {
			state[path.split('/').shift()][path.split('/').pop()] = data
		}
	}
})

window.store = store
export default store
