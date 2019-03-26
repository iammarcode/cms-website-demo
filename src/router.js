import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout.vue'

Vue.use(Router)

export const constantRouterMap = [
	{
		path: '/',
		component: layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'Home',
				component: () => import('@/views/home')
			}
		]
	},
	{
		path: '/about',
		name: 'About',
		component: layout,
		children: [
			{
				path: '/introduction',
				name: 'Introduction',
				component: () => import('@/views/about/introduction')
			},
			{
				path: '/category',
				name: 'Category',
				component: () => import('@/views/about/category')
			},
			{
				path: '/history',
				name: 'History',
				component: () => import('@/views/about/history')
			}
		]
	},
	{
		path: '/trends',
		name: 'Trends',
		component: layout,
		children: [
			{
				path: 'article',
				name: 'Article',
				component: () => import('@/views/trends/article')
			},
			{
				path: 'news/:id',
				name: 'News',
				component: () => import('@/views/trends/news')
			}
		]
	},
	{
		path: '/stock',
		name: 'Stock',
		component: layout,
		children: [
			{
				path: 'chart',
				name: 'Chart',
				component: () => import('@/views/stock/chart')
			}
		]
	},
	{
		path: '/join-us',
		name: 'Join-Us',
		component: layout,
		children: [
			{
				path: '/web-developer',
				name: 'Web-Developer',
				component: () => import('@/views/join-us/web-developer')
			},
			{
				path: '/market',
				name: 'Market',
				component: () => import('@/views/join-us/market')
			},
			{
				path: '/accountant',
				name: 'Accountant',
				component: () => import('@/views/join-us/accountant')
			},
			{
				path: '/analyst',
				name: 'Analyst',
				component: () => import('@/views/join-us/analyst')
			}
		]
	},
	{
		path: '/user',
		name: 'User',
		component: layout,
		children: [
			{
				path: 'login',
				name: 'Login',
				component: () => import('@/views/user/login.vue')
			},
			{
				path: 'sign-up',
				name: 'Sign-Up',
				component: () => import('@/views/user/sign-up')
			},
			{
				path: 'hello',
				name: 'Hello',
				meta: { requireAuth: true },
				component: () => import('@/views/user/hello.vue')
			}
		]
	}
]

let router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: constantRouterMap,
	scrollBehavior: () => ({ y: 0 })
})

export const asyncRouterMap = []

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

window.router = router
export default router
