import axios from '../axios'
let service = axios()

export default {
	getLogin(data) {
		return service({
			url: '/api/user/login',
			method: 'post',
			data: data
		})
	},
	getRegister(data) {
		return service({
			url: '/api/user/register',
			method: 'post',
			data: data
		})
	},
	getHello(data) {
		return service({
			url: '/api/user/hello',
			method: 'post',
			data: data
		})
	}
}
