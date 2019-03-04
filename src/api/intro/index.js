import api from '../index'
import intro from './intro'

// some api need to be added token or orthers to header, and set up following
const header = {}

export default {
	matches(url, params) {
		// return a promise
		return api.get(intro.intro + url, params, header)
	}
}
