var express = require('express')
var router = express.Router()
var model = require('../db/db')

router.get('/', function(req, res) {
	model.News.find({}, (err, news) => {
		if (err) {
			res.json({
				status: 0,
				message: err.message
			})
		} else {
			res.json({
				status: 1,
				message: '',
				data: news[0]
			})
		}
	})
})

module.exports = router
