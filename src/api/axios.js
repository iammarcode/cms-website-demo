/**
 * Create an axios instance
 * @return {AxiosInstance}
 */

import axios from 'axios'

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
		return data
	},
	error => {
		// console.log(error.response)
		let info = {}
		// { status, statusText, data } = error.response

		// TODO: Is the following process of handle error suitable??? ----> https://github.com/axios/axios#axiosgeturl-config
		if (!error.response) {
			info = {
				code: 5000,
				msg: 'Network Error'
			}
		} else {
			info = {
				code: 404
				// data: data,
				// msg: statusText
			}
		}
		return info
	}
)

// How to use?
// functionName() --> return an instance of axios
export default function() {
	return instance
}
