import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// vuex component
import header from './header'
import footer from './footer'
import news from './news'
import carousel from './carousel'
import stock from './stock'
import user from './user'

const store = new Vuex.Store({
	modules: {
		header,
		footer,
		news,
		carousel,
		stock,
		user
	},
	mutations: {
		modifyState(state, { path, data }) {
			state[path.split('/').shift()][path.split('/').pop()] = data
		}
	}
})
window.store = store
export default store
