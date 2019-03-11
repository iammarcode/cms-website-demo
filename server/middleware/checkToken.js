const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
	// if (req.headers['authorization']) {
	let token = req.headers['authorization'].split(' ')[1]
	// jwt.verify(token, secretOrPublicKey, [options, callback])
	jwt.verify(token, 'secret', (err, decoded) => {
		if (err) {
			res.json({
				code: 4001,
				message: 'token过期',
				expiredAt: err.expiredAt
			})
		} else {
			console.log('token success:' + decoded)
			next()
		}
	})
	// }
}
