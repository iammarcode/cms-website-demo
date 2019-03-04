var express = require('express')
var router = express.Router()
var model = require('../db/db')

router.get('/', function(req, res) {
	model.Carousel.find({}, (err, carousel) => {
		if (err) {
			res.json({
				status: 0,
				message: err.message
			})
		} else {
			res.json({
				status: 1,
				message: '',
				data: carousel[0]
			})
		}
	})
})

module.exports = router
