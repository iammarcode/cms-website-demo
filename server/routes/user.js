var express = require('express')
var router = express.Router()
var model = require('../db/db')
var sha1 = require('sha1')
var moment = require('moment')
var multer = require('multer')
var objectIdToTimestamp = require('objectid-to-timestamp')
var createToken = require('../middleware/createToken')
var checkToken = require('../middleware/checkToken')

// register
const Register = (req, res) => {
	let userRegister = new model.User({
		email: req.body.email,
		password: sha1(req.body.password),
		name: req.body.name,
		birth: req.body.birth,
		recheck: req.body.recheck,
		token: createToken(this.email), // sign
		stock: req.body.stock,
		avatar: req.body.avatar
	})
	userRegister.create_time = moment(
		objectIdToTimestamp(userRegister._id)
	).format('YYYY-MM-DD HH:mm:ss')

	model.User.findOne(
		{
			email: userRegister.email.toLowerCase()
		},
		(err, doc) => {
			if (err) console.log(err)
			if (doc) {
				//TODO:doc === null??
				res.json({
					message: 'Email Has Exited!'
				})
			} else {
				userRegister.save(err => {
					if (err) {
						res.json({
							success: false,
							message: 'Sign Up Failed'
						})
					}
					res.json({
						success: true,
						message: 'Sign Up Success'
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
		if (err) console.log(err) // TODO: for debug
		if (!doc) {
			res.json({
				code: 4004,
				success: false,
				message: '用户不存在'
			})
		} else if (userLogin.password === doc.password) {
			var name = req.body.email
			doc.time = moment(objectIdToTimestamp(doc._id)).format(
				'YYYY-MM-DD HH:mm:ss'
			)
			res.json({
				code: 2000,
				success: true,
				message: '登录成功',
				token: createToken(name),
				data: doc
			})
		} else {
			res.json({
				code: 4008,
				success: false,
				message: '密码错误'
			})
		}
	})
}

// upload avatar
var timepath = moment().format('YYYY-MM-DD')
var destination = '/public/upload/' + timepath
var filename = ''
var storage = multer.diskStorage({
	destination: '.' + destination,
	filename: (req, file, cb) => {
		timestamp = new Date().getTime()
		filename = 'avatar-' + timestamp + '.' + file.originalname.split('.')[1]
		cb(null, filename)
	}
})
var upload = multer({ storage: storage })
var cpUpload = upload.single('avatar')
const uploadAvatar = (req, res) => {
	console.log(req.file)
	res.json({
		code: 2000,
		filename: '/static' + destination.slice(7) + '/' + filename
	})
}

// print all user
const User = (req, res) => {
	model.User.findOne({ email: req.body.email }, (err, doc) => {
		if (err) {
			res.json({
				code: 4004,
				message: '用户不存在'
			})
		}
		res.json({
			code: 2000,
			data: doc,
			message: '欢迎回来'
		})
	})
}

router.post('/register', Register)
router.post('/login', Login)
router.post('/hello', checkToken, User)
router.post('/uploadAvatar', cpUpload, uploadAvatar)

module.exports = router
