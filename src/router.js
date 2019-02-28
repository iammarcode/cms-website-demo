import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,

	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/tonghai/intro',
			component: Home,
			children: [
				{
					path: '/tonghai/intro',
					name: 'intro',
					component: () => import('./views/tonghai/Intro.vue')
				},
				{
					path: '/tonghai/newsDetail/:id',
					name: 'newsDetail',
					component: () => import('./views/tonghai/NewsDetail.vue')
				},
				{
					path: '/investment/stock',
					name: 'stock',
					component: () => import('./views/investment/Stock.vue')
				},
				{
					path: '/tonghai/login',
					name: 'login',
					component: () => import('./views/tonghai/Login.vue')
				}
			]
		}
	]
})
