var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Carrousel = require('../models/Carrousel')

var options = { keepAlive: 120 }
mongoose.connect('mongodb://127.0.0.1:27017/finance_web', options).then(
	() => {
		console.log('DB/carrousel Connected Successfully')
	},
	err => {
		console.error(err.message)
	}
)

/* GET home page. */
router.get('/', function(req, res, next) {
	Carrousel.find({}, (err, carrousel) => {
		if (err) {
			res.json({
				status: 0,
				message: err.message
			})
		} else {
			res.json({
				status: 1,
				message: '',
				data: carrousel[0]
			})
		}
	})
})

module.exports = router
