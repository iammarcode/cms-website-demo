import Vue from 'vue'
import App from './App.vue'
// import api from './api' //TODO: solve cros access
import api from 'axios'

// router
import router from './router'

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

// Echarts
// import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack
// Vue.component('Chart', ECharts)
// import 'echarts-gl'
// import ECharts modules manually to reduce bundle size
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// If you want to use ECharts extensions, just import the extension package and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows
// import 'echarts-gl'
// register component to use
// Vue.component('v-chart', ECharts)

// axios
Vue.prototype.$api = api
//

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
