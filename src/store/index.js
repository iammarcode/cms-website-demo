import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// vuex component
import intro from './intro'
import user from './user'

const store = new Vuex.Store({
	modules: {
		intro,
		user
	},
	mutations: {
		modifyState(state, { path, data }) {
			state[path.split('/').shift()][path.split('/').pop()] = data
		}
	}
})
// window.store = store
export default store
