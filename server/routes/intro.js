var express = require('express')
var router = express.Router()
var model = require('../db/db')

router.get('/header', function(req, res) {
	model.Header.find({}, (err, header) => {
		if (err) {
			res.json({
				status: 0,
				message: err.message
			})
		} else {
			res.json({
				status: 1,
				message: '',
				data: header[0]
			})
		}
	})
})

router.get('/footer', function(req, res) {
	model.Footer.find({}, (err, footer) => {
		if (err) {
			res.json({
				status: 0,
				message: err.message
			})
		} else {
			res.json({
				status: 1,
				message: '',
				data: footer[0]
			})
		}
	})
})

router.get('/carousel', function(req, res) {
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

router.get('/news', function(req, res) {
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

router.get('/stock', function(req, res) {
	model.Stock.find({}, (err, stock) => {
		if (err) {
			res.json({
				status: 0,
				message: err.message
			})
		} else {
			res.json({
				status: 1,
				message: '',
				data: stock[0]
			})
		}
	})
})

router.get('/article', function(req, res) {
	model.Article.find({}, (err, doc) => {
		if (err) {
			res.json({
				status: 0,
				message: err.message
			})
		} else {
			res.json({
				status: 1,
				message: '',
				data: doc
			})
		}
	})
})

module.exports = router
