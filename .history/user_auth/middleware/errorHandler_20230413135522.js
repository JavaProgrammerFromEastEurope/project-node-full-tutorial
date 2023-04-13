const { logEvents } = require('./logEvents')

const errorHandler = (err, req, res, next) => {
	logEvents(`${err.name}: ${err.message}`, 'errLog.txt')
	console.error(err.stack)
	res.sta
}