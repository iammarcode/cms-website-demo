var mongoose = require('mongoose')

var Header = require('../models/Header')
var Carousel = require('../models/Carousel')
var News = require('../models/News')
var Footer = require('../models/Footer')
var Stock = require('../models/Stock')
var User = require('../models/User')
var Article = require('../models/Article')

// db config
var options = { keepAlive: 120, useNewUrlParser: true, bufferCommands: false }

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/finance_web', options).then(
	() => {
		console.log('MongoDB Connected Successfully')
	},
	err => {
		console.log(err.message)
	}
)

var model = {
	Header,
	Carousel,
	News,
	Footer,
	Stock,
	User,
	Article
}

module.exports = model
