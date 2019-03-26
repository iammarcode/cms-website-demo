/**
 * Create an axios instance
 * @return {AxiosInstance}
 */

import axios from 'axios'
import { Message } from 'element-ui'

// config of axios instance
let config = {
	// baseURL: process.env.baseURL || process.env.apiUrl || ""
	timeout: 60 * 1000 // Timeout
	// withCredentials: true, // Check cross-site Access-Control
}

// Create axios instance
let instance = axios.create(config)

// Set up post/put default Content-Type

// Add request interceptor
instance.interceptors.request.use(
	config => {
		// set token
		if (window.localStorage.getItem('token')) {
			config.headers.Authorization = `token ${window.localStorage.getItem(
				'token'
			)}`
		}
		// The request is processed before it is sent
		return config
	},
	error => {
		// The error is processed before it is sent
		return Promise.reject(error)
	}
)

// Add response interceptor
instance.interceptors.response.use(
	response => {
		if (response.data.code === 4001) {
			window.store.dispatch('user/userLogout')
			window.router.push('/user/login')
			Message({
				type: 'error',
				message: response.data.message,
				duration: 2 * 1000
			})
		}

		return response.data
	},
	error => {
		return Promise.reject(error)
	}
)

export default instance
