import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

const router = new Router({
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
					path: '/user/register',
					name: 'register',
					component: () => import('./views/user/Register.vue')
				},
				{
					path: '/user/login',
					name: 'login',
					component: () => import('./views/user/Login.vue')
				},
				{
					path: '/user/hello',
					name: 'hello',
					meta: {
						requireAuth: true
					},
					component: () => import('./views/user/Hello.vue')
				}
			]
		}
	]
})

router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('token')
	if (to.meta.requireAuth) {
		if (token) {
			next()
		} else {
			next({
				path: '/user/login',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		next()
	}
})

export default router
