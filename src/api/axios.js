/**
 * Create an axios instance
 * @return {AxiosInstance}
 */

import axios from 'axios'
import { Message } from 'element-ui'
import router from '../store/index'

// config of axios instance
let config = {
	// baseURL: process.env.baseURL || process.env.apiUrl || ""
	timeout: 60 * 1000 // Timeout
	// withCredentials: true, // Check cross-site Access-Control
}

// Create axios instance
let instance = axios.create(config)

// Set up post/put default Content-Type
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.put['Content-Type'] = 'application/json'

// Add request interceptor
instance.interceptors.request.use(
	config => {
		// set token
		if (window.localStorage.getItem('token')) {
			config.headers.Authorization = `token ${window.localStorage.getItem(
				'token'
			)}`
		}
		if (config.method === 'post' || config.method === 'put') {
			// Before post、put is sented，transform them(Object) to string, to handle java back-stage parsing issues
			config.data = JSON.stringify(config.data)
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
		let { data } = response
		if (response.code === 401) {
			Message({
				message: response.message,
				duration: 3 * 1000
			})
			router.push('/user/login')
		}

		return data
	},
	error => {
		// console.log(error.response)
		return Promise.reject(error)
	}
)

// How to use?
// functionName() --> return an instance of axios
export default function() {
	return instance
}

// export default instance
