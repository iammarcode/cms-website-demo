import service from '../axios'

export default {
	getHeader() {
		return service({
			url: '/api/intro/header',
			method: 'get',
			params: {}
		})
	},
	getCarousel() {
		return service({
			url: '/api/intro/carousel',
			method: 'get',
			params: {}
		})
	},
	getStock() {
		return service({
			url: '/api/intro/stock',
			method: 'get',
			params: {}
		})
	},
	getNews() {
		return service({
			url: '/api/intro/news',
			method: 'get',
			params: {}
		})
	},
	getFooter() {
		return service({
			url: '/api/intro/footer',
			method: 'get',
			params: {}
		})
	},
	getArticle() {
		return service({
			url: '/api/intro/article',
			method: 'get'
		})
	}
}
