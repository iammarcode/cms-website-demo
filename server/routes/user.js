var express = require('express')
var router = express.Router()
var model = require('../db/db')
var sha1 = require('sha1')
var moment = require('moment')
var objectIdToTimestamp = require('objectid-to-timestamp')
var createToken = require('../middleware/createToken')
var checkToken = require('../middleware/checkToken')

// register
const Register = (req, res) => {
	let userRegister = new model.User({
		email: req.body.email,
		password: sha1(req.body.password),
		recheck: req.body.recheck,
		token: createToken(this.email) // sign
	})
	userRegister.create_time = moment(
		objectIdToTimestamp(userRegister._id)
	).format('YYYY-MM-DD HH:mm:ss')
	model.User.findOne(
		{
			email: userRegister.email.toLowerCase()
		},
		(err, doc) => {
			if (err) console.log(err) //TODO:
			if (doc) {
				//TODO:doc === null??
				res.json({
					message: 'user has exited!Do not register again!'
				})
			} else {
				userRegister.save(err => {
					if (err) {
						res.json({
							success: false,
							message: 'register failed'
						})
					}
					res.json({
						success: true,
						message: 'register success'
					})
				})
			}
		}
	)
}

// login
const Login = (req, res) => {
	let userLogin = new model.User({
		email: req.body.email,
		password: sha1(req.body.password),
		token: createToken(this.email)
	})
	model.User.findOne({ email: userLogin.email }, (err, doc) => {
		if (err) console.log(err) // TODO:
		if (!doc) {
			res.json({
				message: 'user dont exit',
				info: false
			})
		} else if (userLogin.password === doc.password) {
			console.log('login in success')
			var name = req.body.email
			res.json({
				success: true,
				email: doc.email,
				time: moment(objectIdToTimestamp(doc._id)).format(
					'YYYY-MM-DD HH:mm:ss'
				),
				token: createToken(name)
			})
		} else {
			console.log('password wrong')
			res.json({
				message: 'password wrong',
				success: false
			})
		}
	})
}

// print all user
const User = (req, res) => {
	model.User.find({}, (err, doc) => {
		if (err) console.log(err)
		res.send(doc)
	})
}

// delete user
const delUser = (req, res) => {
	model.User.findOneAndRemove({ _id: req.body.id }, err => {
		if (err) console.log(err)
		console.log('remove user success')
		res.json({
			message: 'remove user success'
		})
	})
}

router.post('/register', Register)
router.post('/login', Login)
router.get('/user', checkToken, User)
router.get('/delUser', checkToken, delUser)

module.exports = router
