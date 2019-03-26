import service from '../axios'

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
	},
	uploadAvatar(data) {
		return service({
			url: '/api/user/uploadAvatar',
			method: 'post',
			data: data
		})
	}
}
