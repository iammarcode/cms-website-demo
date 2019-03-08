import Vue from 'vue'
import App from './App.vue'

// router
import router from './router'
window.router = router

// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
Vue.use(ElementUI)

// css
import '@/assets/css/reset.css'
import '@/assets/css/base.less'

// icon
import './assets/js/iconfont'

// vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper /* { default global options } */)

// axios
import api from './api/index'
Object.defineProperty(Vue.prototype, '$api', {
	get: function() {
		return api
	}
})

// vuex
import store from './store/index'
window.store = store

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
