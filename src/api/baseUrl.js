let baseUrl = '/api'

switch (process.env.NODE_ENV) {
	case 'dev':
		baseUrl = 'http://127.0.0.1:3002'
		break
	case 'pre':
		baseUrl = 'http://localhost:3002' // TODO:
		break
	case 'production':
		baseUrl = 'http://localhost:3002' // TODO:
		break
}

export default baseUrl
