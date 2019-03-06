import api from '../index'
import user from './user'

// some api need to be added token or orthers to header, and set up following
const params = {}
const headers = {}

// add token to headers
let tokenHeaders = {}
if (window.localStorage.getItem('token')) {
	tokenHeaders['Authorization'] = `token ${window.localStorage.getItem(
		'token'
	)}`
}

export default {
	userRegister(data) {
		return api.post(user.url + '/register', params, headers, data)
	},
	userLogin(data) {
		return api.post(user.url + '/login', params, headers, data)
	},
	getUser(data) {
		return api.post(user.url + '/user', params, tokenHeaders, data)
	}
}
