import { get } from '../axiosconfig/axiosConfig'
export default {
	getHeader(params) {
		return get('/header', params)
	}
}
