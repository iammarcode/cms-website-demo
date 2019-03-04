const jwt = require('jsonwebtoken')
// jwt.decode(token [, options])

module.exports = function(req, res, next) {
	// jwt.verify(token, 'secret', { complete: true }, (err, decoded) => {
	// 	console.log(decoded)
	// })

	let token = req.headers['auth'].split('')[1]
	// jwt.verify(token, secretOrPublicKey, [options, callback])
	try {
		jwt.verify(token, 'secret')
		res.json({
			code: 200,
			message: 'token is valid'
		})
	} catch (error) {
		// console.log(error)
		res.json({
			code: 401, //TODO: restful standrad
			message: error.message,
			expireAt: error.expireAt
		})
	}
	next()
}
