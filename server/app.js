var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
// var mongoose = require('mongoose')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var headerRouter = require('./routes/header')
var carouselRouter = require('./routes/carousel')
var stockRouter = require('./routes/stock')
var newsRouter = require('./routes/new')
var footerRouter = require('./routes/footer')

var app = express()

// mongoose global setup
// mongoose.set('bufferCommands', false)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// routes path
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/header', headerRouter)
app.use('/carousel', carouselRouter)
app.use('/stock', stockRouter)
app.use('/new', newsRouter)
app.use('/footer', footerRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app
