import api from '../index'
import user from './user'

// some api need to be added token or orthers to header, and set up following
const params = {}
const headers = {}

export default {
	userRegister(data) {
		return api.post(user.url + '/register', params, headers, data)
	},
	userLogin(data) {
		return api.post(user.url + '/login', params, headers, data)
	},
	getUser() {
		return api.get(user.url + '/user', params, headers)
	},
	delUser(data) {
		return api.post(user.url + '/delUser', data)
	}
}
